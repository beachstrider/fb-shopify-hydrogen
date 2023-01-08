import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export function EditOrder({subid,date}) {

  const [productlist, setProductlist] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  const handleUpdateQuantity = (id, sub) => {
    console.log(id, sub)
  }
  useEffect(() => {
    const subOrders = async () => {
      var subData = await axios.get(
        `/api/bundleAuth/subscriptions/${subid}/orders`,
      );
      var bundleItem = await axios.get(
        `/api/bundleAuth/bundles/${subData.data[0].subscription.bundle_id}`
      );
      const content = await axios.get(
        `/api/bundleAuth/bundles/${subData.data[0].subscription.bundle_id}/configurations/${bundleItem.data.configurations[0].id}/contents?is_enabled=1&deliver_after=${date}`
      );
      const product_ids = [];
      content.data[0].products.map((pro) => {
        product_ids.push(pro.platform_product_id)
      });

      const {data: products} = await axios.post(`/api/products/multiple`, 
        {
          product_ids,
        },
      );
      
      
      for(var i = 0; i < products.length; i ++){
        for(var j = 0; j < products[i].variants.nodes.length; j ++){
          for(var t = 0; t < subData.data[0].items.length; t ++){
            products[i].variants.nodes[j].id = products[i].variants.nodes[j].id.replace("gid://shopify/ProductVariant/","")
            if(products[i].variants.nodes[j].id == subData.data[0].items[t].platform_product_variant_id){
              products[i].variants.nodes[j].quantity = subData.data[0].items[t].quantity
            }else{
              products[i].variants.nodes[j].quantity = 0
            }
          }
          
        }
      }
      setProductlist(products)
      console.log(products)
      
      setSelectedItems(subData.data[0].items);
      console.log("SubData", subData.data[0].items)
      // console.log("BundleItem", bundleItem)
      // console.log("CONTENT", content)
    } 
    subOrders()
  },[])
  return (
    <section className="">
      <div className="">
        <div className="banner-section">
          <h1 className="font-opensans text-[65px] leading-[70px] md:text-7xl lg:text-[65px] text-center font-extrabold">
            Edit Order
          </h1>
          <div className="text-xl  font-medium mt-[19px] lg:ml-[451px]">
            0 Meals Left{' '}
            {/* <button className="bg-[#DB9707] px-3 py-1 rounded-sm text-white">
              Clear Selections
            </button> */}
          </div>
        </div>
      </div>
      <div className="product-section mt-5">
        <hr></hr>
        <h1 className="lg:text-[50px] text-center font-bold ">Meals</h1>

        <div className="flex flex-wrap -mx-2 -mb-2">
          {/*--1----*/}
          {productlist.map((item)=>(
            item.variants.nodes.map((variant, v_index)=>(
              <div className="w-1/3 lg:w-1/6 sm:w-1/3 md:w-1/3 p-2 border m-[5px]" key={v_index}>
                <div className="text-center">
                  <button
                    className=" text-center font-bold font-heading"
                    href="#"
                  >
                    <img
                      className="mx-auto object-contain"
                      src={variant.image.url}
                      alt="img"
                    />
                    <h3 className="font-bold font-heading text-sm text-center">
                      BBQ FEASTbox
                    </h3>
                    <div className="text-center text-sm mb-2 ">Serves: 5</div>
                  </button>
                  {variant.quantity == 0 ? (
                    <div className="px-4 mb-4 xl:mb-0 text-center">
                      <button
                        className="bg-[#DB9707] text-center w-[80px] px-[21px] py-[3px] text-white font-bold font-heading uppercase transition "
                      >
                        ADD+
                      </button>
                    </div>
                  ) :(
                    <div className="flex mt-2 lg:justify-center font-semibold font-heading px-4">
                      <button
                        className="removeMeal hover:text-gray-700 text-center bg-[#DB9707] text-white"
                        onClick={() =>
                          handleUpdateQuantity(variant.id, -1)
                        }
                      >
                        <svg
                          width={24}
                          height={2}
                          viewBox="0 0 12 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.35">
                            <rect
                              x={12}
                              width={2}
                              height={12}
                              transform="rotate(90 12 0)"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                      <div className="grow w-8 m-0 px-2 py-[2px] text-center border-0 focus:ring-transparent focus:outline-none bg-white text-gray-500">
                        {
                        variant.quantity
                        }
                      </div>
                      <button
                        className="addMeal hover:text-gray-700 text-center bg-[#DB9707] text-white disabled:bg-[#bdac89]"
                        onClick={() =>
                          handleUpdateQuantity(variant.id, 1)
                        }
                      >
                        <svg
                          width={24}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.35">
                            <rect
                              x={5}
                              width={2}
                              height={12}
                              fill="currentColor"
                            />
                            <rect
                              x={12}
                              y={5}
                              width={2}
                              height={12}
                              transform="rotate(90 12 5)"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                    )}
                  
                  
                </div>
              </div>
            ))
            
          ))}
          
        </div>
      </div>
      <div className="m-auto mt-[100px] bg-white py-6 px-12 w-[100%] md:w-[100%] lg:w-[68.5%] flex justify-between">
        <button className="border-2 border-red-500 px-7 py-4 rounded-full hover:bg-red-500 font-semibold text-xl hover:text-white">
          Cancel
        </button>
        <button className="border-2 border-[#DB9707] px-7 py-4 rounded-full hover:bg-[#DB9707] font-semibold text-xl hover:text-white">
          Save
        </button>
      </div>
    </section>
  );
}
