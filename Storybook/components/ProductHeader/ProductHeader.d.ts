import { ReactNode, MouseEvent } from 'react';
import './ProductHeader.scss';
export declare type ProductHeaderProps = {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    isMenuOpen?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
};
export declare type ProductHeaderMenuProps = {
    id?: string;
    children?: ReactNode;
};
export declare type ProductHeaderMenuItemProps = {
    id?: string;
    text: string;
};
declare const ProductHeader: {
    (props: ProductHeaderProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
        isMenuOpen: boolean;
    };
};
declare const ProductHeaderMenu: {
    (props: ProductHeaderMenuProps): JSX.Element;
    defaultProps: {};
};
declare const ProductHeaderMenuItem: {
    (props: ProductHeaderMenuItemProps): JSX.Element;
    defaultProps: {
        text: string;
        link: string;
    };
};
export { ProductHeader, ProductHeaderMenu, ProductHeaderMenuItem };
export default ProductHeader;
