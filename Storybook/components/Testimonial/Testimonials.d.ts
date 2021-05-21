import './Testimonials.scss';
import { FC, ReactNode } from "react";
export declare type TestimonialsProps = {
    id?: string;
    testimonialsChildren?: ReactNode | string;
};
declare const Testimonials: FC<TestimonialsProps>;
export default Testimonials;
