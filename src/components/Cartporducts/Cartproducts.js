import React from 'react';

const Cartproducts = (props) => {
    const {id, name, price} = props.product;
    const {cartFunc}= props;
    return (
        <div style={{padding:"10px", margin: "10px", backgroundColor:"gray" , borderRadius:"20px"}}>
            <h6>product_id: {id}</h6>
            <h1>Name : {name}</h1>
            <h3>Price : {price}</h3>
            <button style={{padding:"4px", width:"80px"}} onClick={()=>cartFunc(id)} >Cart</button>
        </div>
    );
};

export default Cartproducts;