import { type MaybeRefOrGetter, type Component } from "vue";
type EventTarget = Element | Document | Window | Component;
type EventListenerOptions = AddEventListenerOptions & {
    /** Register event listener immediate or on mounted hook. */
    immediate?: boolean;
};
/**
 * Register DOM events using addEventListener on mounted, and removeEventListener automatically on unmounted.
 * Adaption of {@link  https://vueuse.org/core/useEventListener}
 *
 * @param event event name
 * @param listener event listener function
 * @param el default docuemnt
 * @return stop function
 */
export declare function useEventListener(event: string, listener: (evt?: any) => any, el?: MaybeRefOrGetter<EventTarget>, options?: EventListenerOptions): () => void;
export {};
