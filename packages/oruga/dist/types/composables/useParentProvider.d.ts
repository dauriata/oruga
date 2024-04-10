import { type Component, type ComputedRef, type Ref } from "vue";
export type ProviderItem<T = unknown> = {
    index: number;
    data: ComputedRef<T>;
    identifier: string;
};
type ProviderParentOptions<T = unknown> = {
    /**
     * Override the provide/inject key.
     * Default is the component configField attribute
     */
    key?: string;
    /**
     * Additional data provided for the child to the item
     */
    data?: ComputedRef<T>;
};
/**
 * Provide functionalities and data to child components
 * @param rootRef Root element of the provider component
 * @param data Additional data to provide
 * @param options additional options
 */
export declare function useProviderParent<ItemData = unknown, ParentData = unknown>(rootRef?: Ref<HTMLElement | Component>, options?: ProviderParentOptions<ParentData>): {
    childItems: Ref<ProviderItem<ItemData>[]>;
    sortedItems: Ref<ProviderItem<ItemData>[]>;
};
type ProviderChildOptions<T = unknown> = {
    /**
     * Override the provide/inject key.
     * Default is the component configField attribute
     */
    key?: string;
    /**
     * Does the child need the be below the parent?
     * @default true
     */
    needParent?: boolean;
    /**
     * Additional data appended to the item
     */
    data?: ComputedRef<T>;
    /**
     * Register child on parent
     * @default true
     */
    register?: boolean;
};
/**
 * Inject functionalities and data from parent components
 * @param options additional options
 */
export declare function useProviderChild<ParentData, ItemData = unknown>(options?: ProviderChildOptions<ItemData>): {
    parent: ComputedRef<ParentData>;
    item: Ref<ProviderItem<ItemData>>;
};
export {};
