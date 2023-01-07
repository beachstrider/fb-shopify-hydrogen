import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export function EditOrder({subid,date}) {

  const [productlist, setProductlist] = useState([])
  

  useEffect(()=>{
    const subOrders = async ()=>{
      var subData = await axios.get(
        `/api/bundleAuth/subscriptions/${subid}/orders`,
      );
      var bundleItem = await axios.get(
        `/api/bundleAuth/bundles/${subData.data[0].subscription.bundle_id}`
      )
      const content = await axios.get(
        `/api/bundleAuth/bundles/${subData.data[0].subscription.bundle_id}/configurations/${bundleItem.data.configurations[0].id}/contents?is_enabled=1&deliver_after=${date}`
      );
      const product_ids = [];
      content.data[0].products.map((pro)=>{
        product_ids.push(pro.platform_product_id)
      })

      const {data: products} = await axios.post(
        `/api/products/multiple`,
        {
          product_ids,
        },
      );
      
      
      for(var i = 0; i < products.length; i ++){
        for(var j = 0; j < products[i].variants.nodes.length; j++){
          products[i].variants.nodes[j].id = products[i].variants.nodes[j].id.replace("gid://shopify/ProductVariant/","")
        }
      }
      setProductlist(products)
      console.log(products)
      // console.log(products)
      // console.log("SubData", subData)
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
          {productlist.map((item, key)=>(
            item.variants.nodes.map((variant,v_index)=>(
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
                  <div className="px-4 mb-4 xl:mb-0 text-center">
                    <button
                      className=" text-center text-white font-bold font-heading uppercase transition "
                      href="#"
                      style={{
                        backgroundColor: '#DB9707',
                        color: '#FFFFFF',
                        width: 80,
                        padding: '3px 21px',
                      }}
                    >
                      Add+
                    </button>
                  </div>
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
