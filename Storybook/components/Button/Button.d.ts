import React, { FC, MouseEvent } from 'react';
import './Button.scss';
export declare type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    id?: string;
    type: 'Primary' | 'Secondary' | 'PassiveAlt' | 'ProductPrimary' | 'ProductSecondary' | 'ProductPassiveAlt' | 'HeaderPrimary' | 'LoadMore' | 'ResourceCardButton';
    text?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: FC<ButtonProps>;
export default Button;
