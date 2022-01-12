import { IHost } from "@nexweave/types";

export interface ITypography {
    align?: string;
    fontFamily?: string;
    color?: string;
    fontSize?: number;
    direction?: string;
    lineHeight?: number;
    fontWeight?: number;
    fontStyle?: string;
    letterSpacing?: number;
    textDecoration?: string;
}

export interface IInteractionTools<T> {
    action: T;
}

export interface IWidgetProps<T> {
    isVisible: boolean;
    interaction: T;
    clientHeight: number;
    clientWidth: number;
    playerId: string;
    isAnimatable: boolean;
    mode: "editor" | "player";
    experienceId?: string;
    host?: IHost;
}

export interface IWidgetMetaProps {
    id: string;
    component: "WID0001" | "WID0002" | "WID0003" | "WID0004" | "WID0005" | "WID0006" | "WID0007";
    isVisible: boolean;
    label: string;
    type: string;
    keepAspectRatio?: boolean,
}

export interface IWidgetInteractionProps<T> {
    meta: IWidgetMetaProps;
    data: T;
    schema: Record<any, any>
}