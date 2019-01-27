import React, { Component } from 'react';
import Axios from 'axios'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoReady: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        Axios.post('http://localhost:8080/url', {
            url: this.props.url
        }, { responseType: 'blob' })
            .then(response => {
                let blob = new Blob([response.data], { type: 'video/mp4' });
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    let base64data = reader.result;
                    const link = document.createElement('a');
                    link.href = base64data
                    link.setAttribute('download', 'output.mp4');
                    document.body.appendChild(link);
                    link.click();
                    this.setState({ videoReady: true})
                }

            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        const content = <div className="modal-background">
            <div className="modal-content">
                <button onClick={this.handleClick}>Generate</button>
                {this.state.videoReady ?  "": <img src="https://media.giphy.com/media/IYjiXRV622OBO/giphy.gif"></img>}
            </div>
            <button onClick={this.props.changeStatus} className="modal-close is-large" aria-label="close"></button>
        </div >
        return (
            <div>
                {this.props.status ? <div className="modal is-active">{content}</div> : <div className="modal">{content}</div>}
            </div>
        );
    }
}

export default Modal;