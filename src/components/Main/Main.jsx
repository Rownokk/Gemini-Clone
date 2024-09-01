import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [isRecording, setIsRecording] = useState(false);

    const handleCardClick = (prompt) => {
        setInput(prompt);
        onSent();
    };

    const handleGalleryClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Handle the selected image file
            console.log('Selected file:', file);
            // You can display the selected image or perform other actions with it
        }
    };

    const handleMicClick = () => {
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    };

    const startRecording = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            setInput(transcript);
        };

        recognition.start();
        setIsRecording(true);

        recognition.onend = () => {
            setIsRecording(false);
        };
    };

    const stopRecording = () => {
        // Logic to stop recording
        setIsRecording(false);
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src='https://i.pinimg.com/564x/85/cc/6f/85cc6f5b64aed0e13ebe2e090a2d0f9c.jpg' alt="" />  
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Mowmita.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick('Suggest beautiful places to see on an upcoming road trip')}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>  
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick('Briefly summarize: urban planning')}>
                                <p>Briefly summarize: urban planning</p>  
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick('How to improve coding skills')}>
                                <p>How to improve coding skills</p>  
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick('Brainstorm team bonding activities for our work retreat')}>
                                <p>Brainstorm team bonding activities for our work retreat</p>  
                                <img src={assets.message_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src='https://i.pinimg.com/564x/85/cc/6f/85cc6f5b64aed0e13ebe2e090a2d0f9c.jpg' alt="" />  
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                  </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" onClick={handleGalleryClick} />
                            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                            <img src={assets.mic_icon} alt="" onClick={handleMicClick} />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini Apps Activity is on by default if you are 18 or older. Users under 18 can choose to turn it on.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
