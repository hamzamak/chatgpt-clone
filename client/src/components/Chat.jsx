import Card from "./Card";
import { FaRobot } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Typewriter from "../hooks/Typewriter";
import { Capabilities, Limitations, Exemples } from "../constant";
import { BsSun } from "react-icons/bs";
import {TiFlashOutline} from 'react-icons/ti'
import { AiOutlineWarning } from "react-icons/ai";
function Chat({ chatList,setPrompt}) {
  return (
    <div className="p-0.5 md:ml-[255px] mb-52">
      {chatList.length === 0 ? (
        <div className="p-20">
          <h1 className="mb-16 text-center text-4xl font-bold ">ChatGPT</h1>
          <div className="flex lg:flex-row flex-col xl:space-x-6 space-x-2 mx-auto lg:w-[90%] xl:w-[70%] w-full justify-center max-lg:space-y-2" >
            <Card pressable={true} titre="Exemples" setPrompt={setPrompt} list={Exemples} icon={<BsSun size={24}/>} />
            <Card titre="Capabilities" list={Capabilities} icon={<TiFlashOutline size={24}/>} />
            <Card titre="Limitations" list={Limitations}  icon={<AiOutlineWarning size={24}/>}/>
          </div>
        </div>
      ) : (
        <div>
          {chatList.map(({ id, question, response },index) => {
             const isLast = index === chatList.length - 1;
            return (
              <div key={id} className="overflow-auto">
                <div className=" bg-white ">
                  <div className="lg:w-[70%] mx-auto p-4 space-x-12">
                    <div className="float-left bg-green-900 rounded-md p-2">
                      <BsFillPersonFill color="white" />
                    </div>
                    <p>{question} </p>
                  </div>
                </div>

                <div className=" bg-gray-100">
                  <div className="lg:w-[70%] mx-auto p-4  space-x-12">
                    <div className="float-left bg-green-500 rounded-md p-2">
                      <FaRobot color="white" />
                    </div>
                    {
                      isLast ?
                      <Typewriter text={response}/>
                      :
                      <p className=" text-justify">{response} </p>
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Chat;
