import React,{useState,useEffect} from "react";
export default function API(){
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    fetch("https://flipkart-backend-1-pjtm.onrender.com/products")
      .then((res)=> res.json())
      .then((data)=>{
        let allProducts=[];
        if(Array.isArray(data)&&data.length>0 && data[0].product){
            data.forEach((doc)=>{
               if(Array.isArray(doc.products)){
                allProducts=allProducts.concat(doc.products);
               }
            });
        }
        else if(Array.isArray(data)){
            allProducts=data;

        }
        setProduct(allProducts);
      })
  },[]);


  console.log(product);

}