import React, {useState, useEffect} from 'react';
import {loadScript} from '@shopify/hydrogen';
const Tabs = ({metafields}) => {
  const [selectedTag, setSelectedTag] = useState(1);
  const [url, setUrl] = useState(null);
  const handleSelect = (index) => {
    setSelectedTag(index);
    setUrl(
      `https://www.recipal.com/recipes/${
        metafields?.find((x) => x?.key === 'recipal_embed')?.value
      }/embed.js?label_format=new_fda&ingredients=1&allergens=1`,
    );
  };

  useEffect(() => {
    loadScript(url).catch(() => {});
  }, [url]);

  return (
    <>
      <div className="max-w-2xl mx-auto sm:px-0">
        <div className="sm:w-12/12 sm:mx-auto">
          <div
            role="tablist"
            aria-label="tabs"
            className="relative w-max   grid grid-cols-2 items-center font-bold overflow-hidden"
          >
            <div className="absolute indicator my-auto top-0 bottom-0 left-0 shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
              className={
                selectedTag === 1
                  ? 'relative block h-10 text-left tab  text-[#DB9707]'
                  : 'relative block h-10 px-2 tab'
              }
              onClick={() => handleSelect(1)}
            >
              <span
                className={
                  selectedTag === 1
                    ? 'text-[#DB9707] '
                    : 'text-black text-tab-underline'
                }
              >
                Details
              </span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
              className={
                selectedTag === 2
                  ? 'relative block h-10 px-2 tab text-[#DB9707]'
                  : 'relative block h-10 px-2 tab'
              }
              onClick={() => handleSelect(2)}
            >
              <span
                className={
                  selectedTag === 2
                    ? 'text-[#DB9707]'
                    : 'text-black text-tab-underline'
                }
              >
                Nutritions
              </span>
            </button>
          </div>
          <div className="my-2 relative text-black">
            <div
              role="tablist"
              aria-label="tabs"
              className="relative w-max mx-auto  grid grid-cols-2 items-center font-bold overflow-hidden"
            >
              <div className="text-left text-black">
                <p>
                  {metafields?.find((x) => x?.key === 'description')?.value}
                </p>
                <h3 className="font-bold text-lg">What's in the box</h3>
                <div>
                  <p className="font-bold text-sm">Main courses</p>
                  <span className="text-sm">
                    {metafields?.find((x) => x?.key === 'main_course')?.value}
                  </span>
                </div>
                <div className="py-2">
                  <p className="font-bold text-sm">Side Dishes</p>
                  <span className="text-sm">
                    {metafields?.find((x) => x?.key === 'side_dishes')?.value}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">Sauce</p>
                  <span className="text-sm">
                    {metafields?.find((x) => x?.key === 'sauce')?.value}
                  </span>
                </div>
              </div>
              <div className="text-left text-black">
                <h3 className="font-bold text-lg">Allergens</h3>
                <span className="text-sm">
                  {metafields?.find((x) => x?.key === 'allergens')?.value}
                </span>
              </div>
            </div>
            <div
              role="tabpanel"
              id="panel-2"
              className={
                selectedTag === 2
                  ? 'tab-panel text-center'
                  : 'absolute top-0 invisible opacity-0 tab-panel text-center'
              }
            >
              {/*<div>{loadScript(`https://www.recipal.com/recipes/${metafields?.find(x => x?.key === 'recipal_embed')?.value}/embed.js?label_format=new_fda&ingredients=1&allergens=1`)}</div>*/}
              {/*<script src={`https://www.recipal.com/recipes/${metafields?.find(x => x?.key === 'recipal_embed')?.value}/embed.js?label_format=new_fda&ingredients=1&allergens=1`}> </script>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
