import { ReactElement } from 'react'
import ProductCard from '../components/index';
import { Props as ProducCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';




  export interface Product {
    id: string,
    title: string,
    img?: string,
  
  }
  
  export interface ProductContextProps {
    product: Product,
    count: number,
    increaseBy: (value: number) => void
  }


 export interface ProductCardHOCProps {
  ({ product, children }:ProducCardProps): JSX.Element,
  Title: (Props:ProductTitleProps) => JSX.Element,
  Image: (Props :ProductImageProps) => JSX.Element,
  Buttons: (Props:ProductButtonsProps) => JSX.Element
 } 