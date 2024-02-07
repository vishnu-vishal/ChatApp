import React from 'react'
import '../Styles/Chat.css'

function Chats() {
  return (
      
      <div className='chats'>
        <div className="userChat">
            <img src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg" alt="" />
            <div className="userChatInfo">
                <span>Joe</span>
                <p>at work</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://tse2.mm.bing.net/th?id=OIP.evA9TCltFSDey2eOtjIeXwHaLH&pid=Api&P=0&h=180" alt="" />
            <div className="userChatInfo">
                <span>Ram</span>
                <p>Busy</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0&h=180" alt="" />
            <div className="userChatInfo">
                <span>Varun</span>
                <p>While using app</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://tse4.mm.bing.net/th?id=OIP.eKTBlb4IZ5UuFavcpylTNgHaE7&pid=Api&P=0&h=180" alt="" />
            <div className="userChatInfo">
                <span>Arun</span>
                <p>Home</p>
            </div>
        </div>
    </div>
        )
      }

      export default Chats;