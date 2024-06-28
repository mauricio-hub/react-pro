import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import style from '../styles/styles.module.css'

import noImage from '../assets/no-image.jpg'

export interface Props {
  img?: string
  classNane?: string
}


export const ProductImage = ({ img,classNane}:Props) => {

    const { product } = useContext(ProductContext);
  
    let imgToShow : string;
    if(img){
      imgToShow = img
    }else if (product.img){
      imgToShow = product.img
    }
    else{
      imgToShow = noImage
    }


    
  
  
    return (
      <img className={`${style.productImg} ${classNane}`} src={imgToShow} alt="Product" />
    )
  
  }