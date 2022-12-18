import React,{useState} from 'react'
const Modal = (setOpenModal) => {
  const [selectedTag,setSelectedTag]=useState(1);
  const handleSelect=(index)=>{
    setSelectedTag(index)
  }
  return (
    <>
    <div class="max-w-2xl mx-auto px-8 sm:px-0">
      <div class="sm:w-7/12 sm:mx-auto">
        <div 
          role="tablist"
          aria-label="tabs"
          class="relative w-max mx-auto  grid grid-cols-2 items-center bg-white-900/20 border-[2px] font-bold border-amber-500 overflow-hidden"
        >
          <div class="absolute indicator my-auto top-0 bottom-0 left-0 bg-white shadow-md"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            class={selectedTag === 1 ?"relative block h-10 px-6 tab bg-amber-500 text-white":"relative block h-10 px-6 tab bg-white"}
            onClick={()=>handleSelect(1)}
          >
            <span class={selectedTag===1?"text-white":"text-black"}>Details</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            class={selectedTag === 2 ? "relative block h-10 px-6 tab bg-amber-500 text-white":"relative block h-10 px-6 tab bg-white"}
            onClick={()=>handleSelect(2)}
          >
            <span class={selectedTag===2?"text-white":"text-black"}>Nutritions</span>
          </button>
       
        </div>
        <div class="my-6 relative">
          <div
            role="tabpanel"
            id="panel-1"
            class={selectedTag ===1 ? "tab-panel text-center":"absolute top-0 invisible opacity-0 text-center"}
          >
            <p class="">Details BBQ managed pull fork served.</p>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            class={selectedTag ===2 ? "tab-panel text-center":"absolute top-0 invisible opacity-0 tab-panel text-center"}
         >
            <p class="">Nutrician BBQ managed pull fork served.</p>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default Modal