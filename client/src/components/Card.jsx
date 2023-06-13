
function Card({ titre, setPrompt, icon, list ,pressable=false }) {
  return (
    <div className="flex flex-col space-y-3">
      <div className="items-center flex flex-col space-y-1">
        {icon}
        <span>{titre}</span>
      </div>
     
     {
      list.map((item,index)=> {
        return (
          <div key={`${item}-${index}`} className="bg-[#F7F7F8] p-2 px-4 rounded-lg">
            {
              pressable ? 
                <p className="text-sm text-center cursor-pointer" onClick={()=> setPrompt(item)}>{item} <span className="font-bold">{"->"}</span></p>
                :      
                <p className="text-sm text-center">{item}</p>
      
            }
        </div>
        )
      })
     }
    </div>
  );
}

export default Card;
