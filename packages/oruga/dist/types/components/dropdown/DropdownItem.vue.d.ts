import { type PropType } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
declare const _default: <T>(__VLS_props: {
    label?: string;
    value?: [{
        type: PropType<T>;
        default: any;
    }] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? import("@vue/shared").IfAny<V, V, D> : V : {
        type: PropType<T>;
        default: any;
    };
    onClick?: (value: T, event: Event) => any;
    disabled?: boolean;
    itemClass?: ComponentClass;
    tabindex?: string | number;
    ariaRole?: string;
    clickable?: boolean;
    tag?: DynamicComponent;
    itemActiveClass?: ComponentClass;
    itemClickableClass?: ComponentClass;
    itemDisabledClass?: ComponentClass;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    slots: {
        default?(_: {}): any;
    };
    attrs: any;
    emit: (e: "click", value: T, event: Event) => void;
}, __VLS_expose?: (exposed: import('vue').ShallowUnwrapRef<{}>) => void, __VLS_setup?: Promise<{
    props: {
        label?: string;
        value?: [{
            type: PropType<T>;
            default: any;
        }] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? import("@vue/shared").IfAny<V, V, D> : V : {
            type: PropType<T>;
            default: any;
        };
        onClick?: (value: T, event: Event) => any;
        disabled?: boolean;
        itemClass?: ComponentClass;
        tabindex?: string | number;
        ariaRole?: string;
        clickable?: boolean;
        tag?: DynamicComponent;
        itemActiveClass?: ComponentClass;
        itemClickableClass?: ComponentClass;
        itemDisabledClass?: ComponentClass;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: (e: "click", value: T, event: Event) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            label?: string;
            value?: [{
                type: PropType<T>;
                default: any;
            }] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? import("@vue/shared").IfAny<V, V, D> : V : {
                type: PropType<T>;
                default: any;
            };
            onClick?: (value: T, event: Event) => any;
            disabled?: boolean;
            itemClass?: ComponentClass;
            tabindex?: string | number;
            ariaRole?: string;
            clickable?: boolean;
            tag?: DynamicComponent;
            itemActiveClass?: ComponentClass;
            itemClickableClass?: ComponentClass;
            itemDisabledClass?: ComponentClass;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {}): any;
        };
        emit: (e: "click", value: T, event: Event) => void;
    };
};
export default _default;
