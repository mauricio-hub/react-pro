import React, { Children } from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'


const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}


const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopingpages</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>

          <ProductCard.Image />
          <ProductCard.Title title='Coffe mug 2' />
          <ProductCard.Buttons />
        </ProductCard> 


        <ProductCard product={product}>

          <ProductImage />
          <ProductTitle title='' />
          <ProductButtons />
        </ProductCard>



      </div>
    </div>
  )
}

export default ShoppingPage
