import React from 'react'
import '../Styles/Chat.css'
import Message from './Message'

export default function Chat() {
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>vishanth</span>
            <div className='chatIcons'>
                <img src='./phone.png' alt='' style={{height:"30px"}}/>
                <img src='./zoom.png' alt='' style={{height:"30px"}}/>
                <img src='./dots.png' alt='' style={{height:"30px"}}/>
            </div>
        </div>
        <Message/>
    </div>
  )
}