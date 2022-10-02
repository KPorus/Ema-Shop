import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../../layout/Main';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb,removeFromDb,deleteShoppingCart } from "../utilities/fakedb";
const Shop = () => {
    const [data, setdata] = useState([]);
    const [cart, setcart] = useState([]);
    let productClick = (data)=>{        
        let newCart = [...cart,data]
        setcart(newCart);
        // addToDb(data.id);
        addTo(data);
    }
// one point sucsse
    let addTo =(cart)=>
    {
           let prev = localStorage.getItem("Shoping");
           let old =JSON.parse(prev);
           console.log(typeof old)
           if(old)
           {
                localStorage.setItem("Shoping",JSON.stringify([...old,cart]))
           }
           else{
            localStorage.setItem("Shoping", JSON.stringify([cart]));
           }
    //     let old =[] 
    //     let prev = localStorage.getItem('Shoping');
        
    // // eslint-disable-next-line no-lone-blocks
    //     {
    //         old ===null && localStorage.setItem("Shopping", JSON.stringify(info))
    //     }

        
       
    //     if(old === !false){
    //         old = JSON.parse(prev);
    //         localStorage.setItem("Shopping",JSON.stringify(...info,...old))
    //     }
        
        
    }
   
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setdata(data))
    }, [data]);
    return (
        
       <div>
        <Main></Main>
         <div className='grid sm:grid-cols-[5fr,1fr] grid-cols-[1fr,1fr] ml-4 '>
            <div className='grid sm:grid-cols-3 gap-6 mr-6 mt-6'>
                {
                    data.map(product =><Product key={product.id} product ={product} productClick ={()=>{productClick(product)}}></Product> )
                }
            </div>

            <div className="w-full text-slate-200 bg-orange-500">
                <Cart cart={cart}></Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;