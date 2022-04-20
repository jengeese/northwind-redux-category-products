import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  useEffect(()=>{
      if(categories.length===0){
          getCategories();
      }
      setProduct({...props.product})
  })
}
