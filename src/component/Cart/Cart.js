import React from 'react';


const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for(let price of cart) {
        total=total+price.price
        shipping = shipping + price.shipping
        tax = parseFloat((total * 0.1).toFixed(2))
        grandTotal = total + shipping + tax;
    }
    return (
        <div>
            <h2 className='fixed font-extrabold pl-8 pt-8 text-xl uppercase text-gray-800'>order temple</h2>
                <h2 className='fixed pt-16 pl-8 text-slate-50 text-xl'>Order items: {cart.length}</h2>
                <h2 className='fixed pt-24 pl-8 text-slate-50 text-xl'>total: ${total}</h2>
                <h2 className='fixed pt-32 pl-8 text-slate-50 text-xl'>Shipping: ${shipping}</h2>
                <h2 className='fixed pt-40 pl-8 text-slate-50 text-xl'>Tax: ${tax}</h2>
                <h2 className='fixed font-bold pt-48 pl-8 text-gray-800 text-[1.1rem]'>Grand Total: ${grandTotal}</h2>
        </div>
    );
};

export default Cart;