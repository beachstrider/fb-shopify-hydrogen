import React,{useState} from 'react'
const Tabs = ({metafields}) => {
  const [selectedTag,setSelectedTag]=useState(1);
  const handleSelect=(index)=>{
    setSelectedTag(index)
  }

  return (
    <>
    <div className="max-w-2xl mx-auto px-8 sm:px-0">
      <div className="sm:w-12/12 sm:mx-auto">
        <div 
          role="tablist"
          aria-label="tabs"
          className="relative w-max mx-auto  grid grid-cols-2 items-center font-bold overflow-hidden"
        >
          <div className="absolute indicator my-auto top-0 bottom-0 left-0 shadow-md"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabIndex="0"
            className={selectedTag === 1 ?"relative block h-10 px-2 tab  text-[#DB9707]":"relative block h-10 px-2 tab"}
            onClick={()=>handleSelect(1)}
          >
            <span className={selectedTag===1?"text-[#DB9707] ":"text-black text-tab-underline"}>Details</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabIndex="-1"
            className={selectedTag === 2 ? "relative block h-10 px-2 tab text-[#DB9707]":"relative block h-10 px-2 tab"}
            onClick={()=>handleSelect(2)}
          >
            <span className={selectedTag===2?"text-[#DB9707]":"text-black text-tab-underline"}>Nutritions</span>
          </button>
       
        </div>
        <div className="my-6 relative text-black">
          <div
            role="tabpanel"
            id="panel-1"
            className={selectedTag ===1 ? "tab-panel text-center":"absolute top-0 invisible opacity-0 text-left"}
          >
                 <div className="text-left text-black">
                  <p>{ metafields.find(x => x.key === "description").value }</p>
              <h3 className="font-bold text-lg">What's in the box</h3>
              <div>
                <p className="font-bold text-sm">Main courses</p>
                <span className="text-sm">{ metafields.find(x => x.key === "main_course").value }</span>
              </div>
              <div className="py-2">
                <p className="font-bold text-sm">Side Dishes</p>
                <span className="text-sm">{ metafields.find(x => x.key === "side_dishes").value }</span>
              </div>
              <div>
                <p className="font-bold text-sm">Sauce</p>
                <span className="text-sm">{ metafields.find(x => x.key === "sauce").value }</span>
              </div>
            </div>
            <div className="text-left text-black">
              <h3 className="font-bold text-lg">Allergens</h3>
              <span className="text-sm">{ metafields.find(x => x.key === "allergens").value }</span>
            </div>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            className={selectedTag ===2 ? "tab-panel text-center":"absolute top-0 invisible opacity-0 tab-panel text-center"}
         >
            <p className="">Insert nutrition label just like in menu.</p>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default Tabs