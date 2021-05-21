import { ReactNode } from 'react';
import './ResourceFeatureCard.scss';
export declare type ResourceFeatureCardProps = {
    id?: string;
    imgSrc?: string;
    imgSrcDesktop?: string;
    imgAlt?: string;
    imgTitle?: string;
    meta?: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode;
    variations: '1' | '2';
    position: 'top' | 'left' | 'right';
};
export declare type ResourceInfoProps = {
    id?: string;
    meta?: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode;
};
declare const ResourceFeatureCard: {
    (props: ResourceFeatureCardProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgSrcDesktop: string;
        imgAlt: string;
        imgTitle: string;
        title: string;
        paragraph: string;
        variations: string;
        position: string;
    };
};
declare const ResourceInfo: {
    (props: ResourceInfoProps): JSX.Element;
    defaultProps: {
        title: string;
        paragraph: string;
    };
};
export { ResourceFeatureCard, ResourceInfo };
export default ResourceFeatureCard;
