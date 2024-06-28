import React, { Children } from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}


const ShoppingPage = () => {
  return (
    <div
  
    >
      <h1>Shopingpages</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}
        className='bg-dark text-white'
        >

          <ProductCard.Image classNane='custom-image'/>
          <ProductCard.Title  className='text-bold' activeClass='active'/>
          <ProductCard.Buttons className='custom-button' />
        </ProductCard> 


        <ProductCard product={product}
        className='bg-dark text-white'
        >

          <ProductImage  classNane='custom-image'/>
          <ProductTitle title='hola' className='text-bold' activeClass='active'/>
          <ProductButtons className='custom-button'/>
        </ProductCard>



      </div>
    </div>
  )
}

export default ShoppingPage
