import React, { ReactElement } from 'react'
import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'


interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
}


interface Product {
  id: string,
  title: string,
  img?: string,

}


export const ProductImage = ({ img = '' }) => {
  return (
    <img className={style.productImg} src={img ? img : noImage} alt="Product" />
  )

}


export const ProductTitle = ({ title }: { title: string }) => {
  return (
    <span className={style.productDescription}>{title}</span>
  )


}

interface ProductButtonsProps {
  count: number,
  increaseBy: (value: number) => void
}

export const ProductButtons = ({ count, increaseBy }: ProductButtonsProps) => {

  return (
    <div className={style.buttonsContainer}>
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

export const ProductCard = ({ product,children }: Props) => {
 
  const { count, increaseBy } = useProduct()

  return (
    <div className={style.productCard}>
      {children}
      {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons count={count} increaseBy={increaseBy}/> */}

    </div>
  )
}




ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons