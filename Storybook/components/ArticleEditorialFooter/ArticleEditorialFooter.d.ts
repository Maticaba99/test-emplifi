import { ReactNode } from 'react';
import { IconsType } from '../../assets/icons';
import './ArticleEditorialFooter.scss';
export declare type ArticleEditorialFooterProps = {
    id?: string;
    by?: string;
    articlePublished?: string;
    socialChildrens?: ReactNode;
};
export declare type ArticleEditorialSocialIconProps = {
    id?: string;
    anchor?: boolean;
    iconName: IconsType;
    iconSize: number;
    iconColour: string;
    href?: string;
    target?: string;
};
declare const ArticleEditorialFooter: (props: ArticleEditorialFooterProps) => JSX.Element;
declare const ArticleEditorialSocialIcon: (props: ArticleEditorialSocialIconProps) => JSX.Element;
export { ArticleEditorialFooter, ArticleEditorialSocialIcon };
export default ArticleEditorialFooter;
