/// <reference types="react" />
import './ArticleArea.scss';
export declare type ArticleAreaProps = {
    id?: string;
    type: 'Area' | 'Editorial';
    imgSrc?: string;
    imgSrcDesktop?: string;
    imgAlt?: string;
    imgTitle?: string;
    meta?: string;
    title?: string;
    subTitle?: string;
    paragraph?: string;
};
declare const ArticleArea: (props: ArticleAreaProps) => JSX.Element;
export { ArticleArea };
export default ArticleArea;
