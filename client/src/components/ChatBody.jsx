import  { useState } from 'react'
import Chat from './Chat'
import Prompt from './Prompt'
import { sendPrompt } from '../utils/api'
import { nanoid } from 'nanoid'

function ChatBody() {
  
    const [prompt , setPrompt ] = useState("")
    const [chatList, setChatList] = useState([])
    const handleSubmit = async ()=> {
         const data = await sendPrompt(prompt)
         const newChat = {
           key : nanoid() ,
           question : prompt ,
           response : data
         }
       
         setChatList(prevChatList => [...prevChatList, newChat]) // Add the new chat message to the chatList state
         setPrompt("") // Clear the prompt after submitting
     
    }
  return (
    <div>
        <Chat chatList={chatList} setPrompt = {setPrompt} />
	      <Prompt prompt={prompt} setPrompt = {setPrompt} handleSubmit={handleSubmit} />
    </div>
  )
}

export default ChatBody