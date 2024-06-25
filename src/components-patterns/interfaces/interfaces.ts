import { ReactElement } from 'react'
import ProductCard from '../components/index';
import { Props as ProducCardProps } from '../components/ProductCard';



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
  Title: ({ title }: { title: string }) => JSX.Element,
  Image: ({ img }: { img: string }) => JSX.Element,
  Buttons: () => JSX.Element
 } 