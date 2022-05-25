import {ProductCard as ProudctCardHOC} from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export * from './ProductTitle';
export * from './ProductImage';
export * from './ProductButtons';


export const ProductCard: ProductCardHOCProps = Object.assign(ProudctCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;