import React from 'react';
import { IoIosCart } from "react-icons/io";
const Product = (props) => {
    let {id,name,price,img,seller,ratings} = props.product;
    return (
        <div className='border rounded relative'>
            <img className='w-full p-2 rounded' src={img} alt=""></img>
            <div>
                <h2 className="p-2 font-['Lato'] text-[#0E161A] text-[1.2rem]">{name}</h2>
                <h2 className="p-2 font-['Lato'] text-[#0E161A] text-[1.1rem]">Price: ${price}</h2>
                <h2 className="p-2 font-['Lato'] text-[#0E161A] text-[1rem]">Manufacturer: {seller}</h2>
                <h2 className="p-2 font-['Lato'] text-[#0E161A] text-[1rem]">Rating: {ratings} star</h2>
            </div>
            <button className='bg-orange-400 hover:bg-orange-600 w-full flex items-center justify-center absolute bottom-0' onClick={props.productClick}>
            <h2 className="p-2 font-['Lato'] text-[#0E161A] text-[0.9rem]">Add to Cart</h2>
            <IoIosCart/>
            </button>
        </div>
    );
};

export default Product;