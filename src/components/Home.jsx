import React from 'react'
import Sidebar from './pagecomponents/Sidebar';
import Chat from './pagecomponents/Chat'
import './Styles/Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}