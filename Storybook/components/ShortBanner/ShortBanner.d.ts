import { ReactNode } from 'react';
import './ShortBanner.scss';
export declare type ShortBannerProps = {
    id?: string;
    type?: 'Resource' | 'Executive' | 'Articles';
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode | string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
};
declare const ShortBanner: (props: ShortBannerProps) => JSX.Element;
export { ShortBanner };
export default ShortBanner;
