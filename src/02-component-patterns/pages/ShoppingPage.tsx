import React from 'react';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => (
  <div>
    <h1>ShoppingPage</h1>
    <hr />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title={''} />
        <ProductButtons />
      </ProductCard>

      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  </div>
);
