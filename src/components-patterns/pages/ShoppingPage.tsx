import React, { Children } from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces'

const product1 = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug white',
  img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

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

        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className='bg-dark text-white'
            >
              <ProductImage classNane='custom-image' />
              <ProductTitle className='text-bold' activeClass='active' />
              <ProductButtons className='custom-button' />
            </ProductCard>
          ))
        }



      </div>

      <div className='shopping-cart'>
        <ProductCard

          product={product2}
          className='bg-dark text-white'
          style={{
            width: '200px',
            height: '200px',
            margin: '10px'
          }}
        >
          <ProductImage classNane='custom-image' />
          <ProductButtons className='custom-button' />
        </ProductCard>
        <ProductCard

          product={product1}
          className='bg-dark text-white'
          style={{
            width: '200px',
            height: '200px',
            margin: '10px'
          }}
        >
          <ProductImage classNane='custom-image' />
          <ProductButtons className='custom-button' />
        </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage
