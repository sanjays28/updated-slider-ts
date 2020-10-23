import 'rsuite/dist/styles/rsuite-default.css';
import { ReactNode } from 'react';
export declare type PanelGroupVProps = {
    accordion?: boolean;
    activeKey?: any;
    defaultActiveKey?: any;
    onSelect?(eventKey: any, event: any): void;
    classPrefix?: string;
    children?: any;
    style?: any;
};
export declare type PanelVProps = {
    bodyFill?: boolean;
    bordered?: boolean;
    shaded?: boolean;
    classPrefix?: string;
    collapsible?: boolean;
    defaultExpanded?: boolean;
    eventKey?: any;
    expanded?: boolean;
    header?: ReactNode;
    id?: string | number;
    children?: any;
    style?: any;
};
export declare const PanelV: (props: PanelVProps) => JSX.Element;
export declare const PanelGroupV: (props: PanelGroupVProps) => JSX.Element;
