import { ReactNode, MouseEvent } from 'react';
import './Header.scss';
export declare type HeaderProps = {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    isMenuOpen?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    menuChildren?: ReactNode;
    miscMenuChildren?: ReactNode;
};
export declare type HeaderMenuContainerProps = {
    id?: string;
    isMenuOpen?: boolean;
    children?: ReactNode;
};
export declare type HeaderMenuItemProps = {
    id?: string;
    text: string;
    isSubMenuOpen?: boolean;
    subMenuLinksChildren?: ReactNode;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};
export declare type HeaderSubMenuContainerProps = {
    id?: string;
    children?: ReactNode;
};
export declare type HeaderSubMenuItemProps = {
    id?: string;
    isActive?: boolean;
    text: string;
};
export declare type HeaderOtherMenuItemProps = {
    id?: string;
    text: string;
    link: string;
};
export declare type HeaderOtherMenusContainerProps = {
    id?: string;
    isMenuOpen?: boolean;
    topRow?: ReactNode;
    bottomRow?: ReactNode;
};
declare const Header: {
    (props: HeaderProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        title: string;
        isMenuOpen: boolean;
    };
};
declare const HeaderMenuContainer: {
    (props: HeaderMenuContainerProps): JSX.Element;
    defaultProps: {
        isMenuOpen: boolean;
    };
};
declare const HeaderMenuItem: {
    (props: HeaderMenuItemProps): JSX.Element;
    defaultProps: {
        text: string;
        isSubMenuOpen: boolean;
    };
};
declare const HeaderSubMenuContainer: (props: HeaderSubMenuContainerProps) => JSX.Element;
declare const HeaderSubMenuItem: (props: HeaderSubMenuItemProps) => JSX.Element;
declare const HeaderOtherMenusContainer: {
    (props: HeaderOtherMenusContainerProps): JSX.Element;
    defaultProps: {
        isMenuOpen: boolean;
    };
};
declare const HeaderOtherMenuItem: (props: HeaderOtherMenuItemProps) => JSX.Element;
export { Header, HeaderMenuContainer, HeaderMenuItem, HeaderSubMenuContainer, HeaderSubMenuItem, HeaderOtherMenusContainer, HeaderOtherMenuItem };
export default Header;
