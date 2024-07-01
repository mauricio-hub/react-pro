import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

import noImage from '../assets/no-image.jpg'

export interface Props {
  img?: string,
  classNane?: string,
  style?: React.CSSProperties
}


export const ProductImage = ({ img,classNane,style}:Props) => {

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
      <img className={`${styles.productImg} ${classNane}`} src={imgToShow} alt="Product" style={style}/>
    )
  
  }