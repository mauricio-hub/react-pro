import React from 'react'
import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
const ProductCard = () => {
    // <img className={style.productImg} src={noImage}/>
    
    const [count, setCount] = React.useState(0)

    const increaseBy = (value:number) => {
        setCount(prev => Math.max(prev + value,0))
    }

  return (
    <div className={style.productCard}>
     <img className={style.productImg} src='./coffee-mug.png'/>

        <span className={style.productDescription}>Coffee Mug</span>

        <div className={style.buttonsContainer}>
            <button  className={style.buttonMinus} 
            onClick={()=>increaseBy(-1)}
            >-</button>
            <div className={style.countLabel}>{count}</div>
            <button className={style.buttonAdd} 
             onClick={()=>increaseBy(1)}   
            >+</button>

        </div>

    </div>
  )
}

export default ProductCard
