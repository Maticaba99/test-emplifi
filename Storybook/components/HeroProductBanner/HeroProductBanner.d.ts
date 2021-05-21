import React, { FC, ReactNode } from "react";
import "./HeroProductBanner.scss";
export declare type HeroProductBannerProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    title?: string;
    body?: string;
    imgSrc?: string;
    alt?: string;
    imgTitle?: string;
    isRight?: boolean;
    buttonChildren?: ReactNode;
};
declare const HeroProductBanner: FC<HeroProductBannerProps>;
export default HeroProductBanner;
