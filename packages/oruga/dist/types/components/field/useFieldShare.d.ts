import { type ComputedRef } from "vue";
import Field from "./Field.vue";
export type FieldProps = InstanceType<typeof Field>["$props"];
type FieldData = {
    $el: Element;
    props: FieldProps;
    hasInnerField: boolean;
    hasMessage: boolean;
    fieldVariant: string;
    fieldMessage: string;
    setFocus: (value: boolean) => void;
    setFilled: (value: boolean) => void;
    setVariant: (value: string) => void;
    setMessage: (value: string) => void;
};
/** provide/inject type */
type ProvidedField = ComputedRef<FieldData>;
/**
 * Provide field component data via dependency injection.
 * Provided data is a computed ref to enjure reactivity.
 */
export declare function provideField(data: ProvidedField): void;
/** Inject parent field component if used inside one. **/
export declare function injectField(): {
    parentField: ProvidedField;
    statusVariant: ComputedRef<string>;
    statusVariantIcon: ComputedRef<string>;
    statusMessage: ComputedRef<string | boolean>;
};
export {};
