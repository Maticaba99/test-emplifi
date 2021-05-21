import { FC, ReactNode } from "react";
import "./ArticleBanner.scss";
export declare type ArticleBannerProps = {
    id?: string;
    className?: string;
    quoteText?: string;
    subTextMedium?: string;
    subTextRegular?: string;
    isRight?: boolean;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    imgSrcMobile?: string;
    imgSrcDesktop?: string;
    socialMediaChildren?: ReactNode;
};
export declare type ArticleBannerIconProps = {
    anchor?: boolean;
    href?: string;
    target?: string;
    iconChildren?: ReactNode | string;
};
declare const ArticleBanner: FC<ArticleBannerProps>;
declare const ArticleBannerSocialIcon: FC<ArticleBannerIconProps>;
export { ArticleBanner, ArticleBannerSocialIcon };
export default ArticleBanner;
