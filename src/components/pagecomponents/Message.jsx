// import React from 'react'
import React, { useState } from 'react';
import '../Styles/Chat.css'

function Message() {

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
  
    const sendMessage = () => {
      if (messageInput.trim() !== '') {
        setMessages([...messages, { text: messageInput, user: 'You' }]);
        setMessageInput('');
      }
    };
  
  return (
    
      <div>
        <div className="message" style={{height:"440px"}}>
            {messages.map((msg, index) => (
                <div key={index}>
                <strong>{msg.user}:</strong> {msg.text}
                </div>
            )
            )
            }
        </div>
<div className='input'>
<input type="text"
    placeholder="Type your message...."
    value={messageInput}
    onChange={(e) => setMessageInput(e.target.value)}
    className="input"/>
<div className="send" >
    <img src="./photo.png" alt="" style={{height:"25px",cursor:"pointer"}}/>
    <input type="file" style={{display:"none"}} id='file'/>
    <label htmlFor="file">
        <img src="./attachment.png" alt="" style={{height:"30px",cursor:"pointer"}}/>
    </label>
    <button onClick={sendMessage}>Send</button>
</div>
</div>
</div>
)
}

export default Message