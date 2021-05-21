import './Testimonials.scss';
import { ReactNode, FC } from "react";
export declare type TestamentProps = {
    id?: string;
    logoSrc: string;
    logoAlt: string;
    logoTitle: string;
    photoSrc?: string;
    photoAlt?: string;
    photoTitle?: string;
    quote?: string;
    name?: string;
    position?: string;
    company?: string;
    cta?: ReactNode;
};
declare const Testament: FC<TestamentProps>;
export default Testament;
