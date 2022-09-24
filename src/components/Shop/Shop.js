import React from "react";
import Cartproducts from "../Cartporducts/Cartproducts";
import { useState, useEffect } from "react";

const Shop = () => {
    const[products , setP]=useState([]);
    const[cart , setCart]=useState(0);
    useEffect(()=>{
      fetch('data.json').then(res=>res.json()).then(data=>setP(data))
    },[])
    const cartedFunct = (id)=>{
      setCart(cart+1);
      // let productInfo = {};
      const info = localStorage.getItem(id);
      if(info){
        const newQunatity = +info +1;
        localStorage.setItem(id,newQunatity)
      }
      else{
        localStorage.setItem(id, 1);
      }
    }
  return (
    <div>
      <h1>Cosmetics Shop</h1>
      <h4>Carted Products : {cart}</h4>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
        {products.map(product=><Cartproducts product = {product} cartFunc = {cartedFunct} key={product.id}> </Cartproducts>)}
      </div>
    </div>
  );
};

export default Shop;
