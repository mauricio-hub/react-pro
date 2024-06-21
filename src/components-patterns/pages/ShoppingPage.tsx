import React, { Children } from 'react'
import { ProductCard,ProductButtons, ProductImage, ProductTitle } from '../components/ProductCard'

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
        {/* <ProductCard product={product}>

          <ProductImage />
          <ProductTitle title={'kkk kafe+'}/>
           <ProductButtons />  
        </ProductCard> */}

        <ProductCard product={product}>

          <ProductCard.Image />
          <ProductCard.Title title={'kkk kafe+'} />
          {/* <ProductButtons /> */}
        </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage
