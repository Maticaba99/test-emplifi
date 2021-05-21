import './Footer.scss';
import { ReactNode, FC } from "react";
export declare type FooterProps = {
    id?: string;
    className?: string;
    children?: ReactNode;
    img?: ReactNode[] | any[];
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    copyright?: ReactNode | string;
    withoutForm?: boolean;
};
declare const AltFooter: FC<FooterProps>;
export { AltFooter };
export default AltFooter;
