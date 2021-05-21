import React, { FC, ReactNode } from "react";
import "./HeroBanner.scss";
export declare type HeroBannerProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    title?: string;
    subTitle?: string;
    body?: string;
    imgSrc?: string;
    imgTitle?: string;
    alt?: string;
    isRight?: boolean;
    className?: string;
    buttonChildren?: ReactNode;
};
declare const HeroBanner: FC<HeroBannerProps>;
export default HeroBanner;
