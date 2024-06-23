import React, { ReactElement, createContext, useContext } from 'react'
import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const {Provider } = ProductContext;

export const ProductCard = ({ product,children }: ProductCardProps) => {
 
  const { count, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        count,
        increaseBy
      }}
    >
    <div className={style.productCard}>
      {children}
    </div>
    </Provider>
  )
}
