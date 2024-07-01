import React, { ReactElement, createContext, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const {Provider } = ProductContext;

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: React.CSSProperties

}



export const ProductCard = ({ product,children,className,style }: Props) => {
 
  const { count, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        count,
        increaseBy
      }}
    >
    <div className={`${styles.productCard} ${className}`}
    style={style}
    >
      {children}
    </div>
    </Provider>
  )
}
