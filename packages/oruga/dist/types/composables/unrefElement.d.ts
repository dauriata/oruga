import { type ComponentPublicInstance, type MaybeRefOrGetter, type MaybeRef, type Component } from "vue";
export type MaybeElement = Element | Document | Window | HTMLElement | SVGElement | Component | ComponentPublicInstance | undefined | null;
export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends ComponentPublicInstance ? Exclude<MaybeElement, ComponentPublicInstance> : T extends Component ? HTMLElement : T | undefined;
/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export declare function unrefElement<T extends MaybeElement>(elRef: MaybeRefOrGetter<T> | MaybeRef<T>): UnRefElementReturn<T>;
