from summa.summarizer import summarize
import requests
import justext
from gtts import gTTS
from google_images_download import google_images_download  
import os
from mutagen.mp3 import MP3
import ffmpeg
import pathlib
import datetime
import time
from flask import Flask, request, jsonify, send_from_directory, send_file
from flask_restful import Resource, Api
from flask_cors import CORS
from io import BytesIO
import shutil
import multiprocessing
from pathlib import Path

res = google_images_download.googleimagesdownload() 

app = Flask(__name__)
api = Api(app)
CORS(app)

manager = multiprocessing.Manager()
duration_list = manager.list()

def get_audio(summaryList):
    del duration_list[0:]
    if not os.path.exists('sound'):
        os.makedirs("sound")
    for i in range(len(summaryList)):
        summaryList[i] = summaryList[i].replace(","," ")
        tts = gTTS(summaryList[i])
        tts.save("sound/"+"{0:0=2d}".format(i)+".mp3")
        audio = MP3("sound/"+"{0:0=2d}".format(i)+".mp3")
        duration_list.append(audio.info.length)

def get_images(summaryList):
    images_list = []
    for i in range(len(summaryList)):
        summaryList[i] = summaryList[i].replace(","," ")
        res.download({"keywords":summaryList[i],"limit":1,"no_directory":True,"prefix":"{0:0=2d}".format(i)})

    path = '/home/rishabh/Documents/articulate/downloads'
    files = os.listdir(path)
    for file in files:
        temp = file[0:2]
        fileFormat=pathlib.Path((os.path.join(path, file))).suffix
        os.rename(os.path.join(path, file),os.path.join(path,"image"+temp+fileFormat))
    images_list = [f for f in os.listdir(path)]
    return sorted(images_list)

def generate_srt(duration_list,summaryList):
    date_time_str = '00:00:00.0000'
    obj = datetime.datetime.strptime(date_time_str, '%H:%M:%S.%f')
    f = open("srtfile.srt",'w+')
    i=1
    for j in duration_list:
        if i==1:
           f.write(str(i)+"\n"+"00:00:00,000"+" --> "+str((obj+datetime.timedelta(seconds=j)).time())[:-3].replace(".",",")+"\n"+summaryList[i-1]+"\n"+"\n")
        else: 
            f.write(str(i)+"\n"+str(obj.time())[:-3].replace(".",",")+" --> "+str((obj+datetime.timedelta(seconds=j)).time())[:-3].replace(".",",")+"\n"+summaryList[i-1]+"\n"+"\n")
        obj = obj+datetime.timedelta(seconds=j)
        i = i+1
    return True

def generate_video(img_list,audio_list):
    print(audio_list)
    path='/home/rishabh/Documents/articulate/'
    if Path(path+'out.mp4').exists():
        os.remove(path+'out.mp4')
    f = open("demofile.ffconcat","w+")
    f.write("ffconcat version 1.0")
    for i in range(len(audio_list)):
        f = open("demofile.ffconcat","a")
        f.write("\n"+"file "+"downloads/"+img_list[i]+'\n'+'duration '+str(audio_list[i]))

    os.system("mp3wrap sound/output.mp3 sound/*.mp3")
    os.system('ffmpeg -i  "/home/rishabh/Documents/articulate/demofile.ffconcat" -i sound/output_MP3WRAP.mp3 -c:a copy  -vcodec mpeg4 -y out.mp4')
    os.system("MP4Box -add srtfile.srt out.mp4")
    if os.path.exists(path+'downloads'):
        shutil.rmtree(path+'downloads')
    if os.path.exists(path+'sound'):
        shutil.rmtree(path+'sound')
    demofile_path = Path(path+'demofile.ffconcat')
    if demofile_path.exists():
        os.remove(path+'demofile.ffconcat')
    srt_path = Path(path+'srtfile.srt')
    if srt_path.exists():
        os.remove(path+'srtfile.srt')
    return True

class ArticulateUrl(Resource):
    def post(self):

        json_data = request.get_json(force=True)
        url = json_data['url']
        response = requests.get(url)
        print(response)
        result = ""
        paragraphs = justext.justext(response.content, justext.get_stoplist("English"))
        for paragraph in paragraphs:
            if not paragraph.is_boilerplate:
                result= result+paragraph.text+'\n'
        summary = summarize(result,words=200)
        summaryList = summary.split("\n")
        p1 = multiprocessing.Process(target = get_audio, args=(summaryList,))
        p1.start()
        images_list = get_images(summaryList)
        p1.join()
        print(duration_list)
        generate_srt(duration_list,summaryList)
        generate_video(images_list,duration_list)
        path='/home/rishabh/Documents/articulate'
        return send_from_directory(path,'out.mp4')

class ArticulateContent(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        if(json_data['content']):
            content = json_data['content']
            summary = summarize(content,words=200)
            summaryList = summary.split("\n")
            p1 = multiprocessing.Process(target = get_audio, args=(summaryList,))
            p1.start()
            images_list = get_images(summaryList)
            p1.join()
            generate_srt(duration_list,summaryList)
            generate_video(images_list,duration_list)
            path='/home/rishabh/Documents/articulate'
            return send_from_directory(path,'out.mp4')



        

api.add_resource(ArticulateUrl, '/url')
api.add_resource(ArticulateContent,'/content')

if __name__ == "__main__":
    app.run(host='0.0.0.0',port='8080')
    app.run(debug=True)