import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export interface Props{
  className?: string
  style?: React.CSSProperties
}

export const ProductButtons = ({className,style}:Props) => {

    const { count, increaseBy } = useContext(ProductContext) as ProductContextProps
  
    return (
      <div className={`${styles.buttonsContainer} ${className}`}
        style={style}
      >
        <button className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >-</button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd}
          onClick={() => increaseBy(1)}
        >+</button>
  
      </div>
    )
  
  }