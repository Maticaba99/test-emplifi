import React, { ReactNode } from 'react';
import './QuoteBlock.scss';
export declare type QuoteBlockProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    quote?: string;
    companyName?: string;
    by?: string;
    imagesChildren?: ReactNode;
    className?: string;
    buttonChildren?: ReactNode;
};
export declare type QuoteBlockImageProps = React.HTMLAttributes<HTMLImageElement> & {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    className?: string;
};
declare const QuoteBlock: {
    (props: QuoteBlockProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
        quote: string;
        companyName: string;
        by: string;
    };
};
declare const QuoteBlockImage: {
    (props: QuoteBlockImageProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
    };
};
export { QuoteBlock, QuoteBlockImage };
export default QuoteBlock;
