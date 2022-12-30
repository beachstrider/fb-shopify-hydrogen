import React, {useState, useEffect} from 'react';
import {loadScript} from '@shopify/hydrogen';
const Tabs = ({metafields}) => {
  const embedLink = `https://www.recipal.com/recipes/${
    metafields?.find((x) => x?.key === 'recipal_embed')?.value
  }/embed.js?label_format=new_fda&ingredients=1&allergens=1`;
  const [selectedTag, setSelectedTag] = useState(1);

  const handleSelect = (index) => {
    setSelectedTag(index);
  };

  // console.log('url', embedLink);
  // console.log('meta', metafields);

  useEffect(() => {
    loadScript(embedLink);
  }, []);

  return (
    <>
      <div className="max-w-2xl mx-auto sm:px-0">
        <div className="sm:w-12/12 sm:mx-auto">
          <div
            role="tablist"
            aria-label="tabs"
            className="relative flex flex-row gap-6 items-center font-bold overflow-hidden"
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
                  : 'relative block h-10 tab'
              }
              onClick={() => handleSelect(1)}
            >
              <span
                className={
                  selectedTag === 1
                    ? 'text-[#DB9707]  border-b-2 border-b-[#DB9707]'
                    : 'text-black'
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
                  ? 'relative block h-10 tab text-[#DB9707]'
                  : 'relative block h-10 tab'
              }
              onClick={() => handleSelect(2)}
            >
              <span
                className={
                  selectedTag === 2
                    ? 'text-[#DB9707] border-b-2 border-b-[#DB9707]'
                    : 'text-black'
                }
              >
                Nutrition
              </span>
            </button>
          </div>
          <div className="my-2 relative text-black">
            {selectedTag === 1 && (
              <div
                role="tablist"
                aria-label="tabs"
                className="relative mx-auto font-bold overflow-hidden"
              >
                <div className="text-left text-black">
                  <p className='text-[15px] font-normal'>
                    {metafields?.find((x) => x?.key === 'description')?.value}
                  </p>
                  <h3 className="font-bold text-2xl font-bold pt-2">What&apos;s in the box?</h3>
                  <div className='py-2'>
                    <p className="font-bold text-sm">Main courses</p>
                    <span className="text-[14px] font-normal">
                      {metafields?.find((x) => x?.key === 'main_course')?.value}
                    </span>
                  </div>
                  <div className="py-2">
                    <p className="font-bold text-sm">Side Dishes</p>
                    <span className="text-[14px] font-normal">
                      {metafields?.find((x) => x?.key === 'side_dishes')?.value}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Sauce</p>
                    <span className="text-[14px] font-normal">
                      {metafields?.find((x) => x?.key === 'sauce')?.value}
                    </span>
                  </div>
                  <h3 className="font-bold text-2xl font-bold pt-2">Allergens</h3>
                  <span className="text-[14px] font-normal">
                    {metafields?.find((x) => x?.key === 'allergens')?.value}
                  </span>
                </div>
              </div>
            )}
            <div
              role="tabpanel"
              id="panel-2"
              className={
                selectedTag === 2
                  ? 'tab-panel text-center'
                  : 'absolute top-0 invisible opacity-0 tab-panel text-center'
              }
            >
              <iframe
                title="Nutritions"
                allowFullScreen
                srcDoc={`
                    <script src="${embedLink}"></script>
                `}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '348px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
