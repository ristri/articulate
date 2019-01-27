# Articulate
``` In this hectic and fast  world no one has the time or interest in reading through a chunk of text which has very less contextual meaning.
Coming up with a solution which reduces the boredom of reading and creating a newer way of consumption of textual knowledge. 
```
## Proposed Solution
```Now what if that boring text can be converted into a captivating media.
Extracting the text from academic and other articles.
Summarising the whole text and coming up with important points with the help of Natural Language Processing.
Converting those important points into a video using relevant images and audio clippings.
The big boring text has been converted to an engaging video.

```
## Implementation
* A react based front end which takes input in the form of URL of article.
* Post that URL to API (flask framework) and then fetch text from that URL.
* Summarizing that text using jusText library and other self implemented algorithms.
* Generating important points and finding relevant images to these points from web.
* Generating audio files from those points by using TEXT-TO-SPEECH by Google.
* Generating video from the images and integrating audio files according to the images. 
