import '../styles/global.css';
function Prompt({prompt , setPrompt,handleSubmit}) {

  return (
    <div className="fixed bottom-0 lg:left-[30%] md:left-[33%] z-30 header xl:left-[35%]">
    <div className="w-[95%] m-auto">
    <div className="relative w-full  filter drop-shadow-2xl">
        <textarea rows={1} type="text" id="prompt" name="prompt" value={prompt} onChange={(e)=> setPrompt(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " placeholder="Send a Message" />

        <button onClick={handleSubmit} disabled={!prompt} className={` ${prompt ? 'bg-blue-700 border-blue-700  cursor-pointer': 'bg-gray-400 cursor-default'}   absolute top-0 right-0 p-2.5 text-sm font-medium text-white  rounded-r-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300`}>
        <svg className="w-5 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        </button>
    </div>
     
        <label htmlFor="prompt" className=" text-center block mb-2 text-xs font-medium text-gray-900 dark:text-white mt-1">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version</label>
    </div>
    </div>
  )
}

export default Prompt