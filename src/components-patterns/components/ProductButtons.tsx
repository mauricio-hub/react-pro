import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import { ProductContextProps, Product } from '../interfaces/interfaces';
import style from '../styles/styles.module.css'

export interface Props{
  className?: string
}

export const ProductButtons = ({className}:Props) => {

    const { count, increaseBy } = useContext(ProductContext) as ProductContextProps
  
    return (
      <div className={`${style.buttonsContainer} ${className}`}>
        <button className={style.buttonMinus}
          onClick={() => increaseBy(-1)}
        >-</button>
        <div className={style.countLabel}>{count}</div>
        <button className={style.buttonAdd}
          onClick={() => increaseBy(1)}
        >+</button>
  
      </div>
    )
  
  }