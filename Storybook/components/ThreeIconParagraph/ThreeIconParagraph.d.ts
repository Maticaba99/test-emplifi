import React, { FC, ReactNode } from "react";
import "./ThreeIconParagraph.scss";
export declare type ThreeIconParagraphProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    title?: string;
    iconOneTitle?: string;
    iconThreeTitle?: string;
    body?: string;
    className?: string;
    children?: ReactNode;
};
declare const ThreeIconParagraph: FC<ThreeIconParagraphProps>;
export default ThreeIconParagraph;
