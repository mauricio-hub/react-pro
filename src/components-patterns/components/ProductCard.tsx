import React, { ReactElement, createContext, useContext } from 'react'
import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const {Provider } = ProductContext;

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string
}



export const ProductCard = ({ product,children,className }: Props) => {
 
  const { count, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        count,
        increaseBy
      }}
    >
    <div className={`${style.productCard} ${className}`}>
      {children}
    </div>
    </Provider>
  )
}
