import { useContext } from 'react';
import { ProductContext } from './ProductCard';


import noimage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);
  
    let img_show: string;
    if (img) {
      img_show = img;
    } else if (product.img) {
      img_show = product.img;
    } else {
      img_show = noimage;
    }
  
    return <img src={img_show} alt='product' className={styles.productImg} />;
  };