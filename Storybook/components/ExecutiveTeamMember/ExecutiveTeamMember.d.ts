import { ReactNode } from 'react';
import './ExecutiveTeamMember.scss';
export declare type ExecutiveTeamMemberProps = {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    name?: string;
    role?: string;
    socialMediaChildren?: ReactNode;
    text?: string;
};
export declare type ExecutiveTeamMemberSocialIconProps = {
    id?: string;
    anchor?: boolean;
    href?: string;
    target?: string;
    iconChildren?: ReactNode | string;
};
export declare type ExecutiveTeamMemberGroupProps = {
    id?: string;
    membersChildren: ReactNode;
};
declare const ExecutiveTeamMember: {
    (props: ExecutiveTeamMemberProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
        name: string;
        role: string;
        text: string;
    };
};
declare const ExecutiveTeamMemberSocialIcon: {
    (props: ExecutiveTeamMemberSocialIconProps): JSX.Element;
    defaultProps: {
        anchor: boolean;
    };
};
declare const ExecutiveTeamMemberGroup: (props: ExecutiveTeamMemberGroupProps) => JSX.Element;
export { ExecutiveTeamMember, ExecutiveTeamMemberGroup, ExecutiveTeamMemberSocialIcon };
export default ExecutiveTeamMember;
