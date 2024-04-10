import { type App } from "vue";
import type { OrugaOptions } from '../types';
declare module "../index" {
    interface OrugaProgrammatic {
        config: typeof ConfigProgrammatic;
    }
}
export declare const setOptions: (options: OrugaOptions) => void;
export declare const getOptions: () => OrugaOptions;
export declare const getOption: <T>(path: string, defaultValue?: T) => T;
export declare const setOption: <T>(path: string, defaultValue: T) => void;
export declare const ConfigProgrammatic: {
    getOption: <T>(path: string, defaultValue?: T) => T;
    getOptions: () => OrugaOptions;
    setOption: <T_1>(path: string, defaultValue: T_1) => void;
    setOptions(options: OrugaOptions): void;
};
export declare const OrugaConfig: {
    install(app: App, options?: OrugaOptions): void;
};
