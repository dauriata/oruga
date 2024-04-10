import type { Plugin } from "vue";
import { ConfigProgrammatic, OrugaConfig } from "./utils/config";
export * from "./types";
export * from "./components/types";
export * from "./components";
export * from "./components/plugins";
export { OrugaConfig, 
/** @deprecated use `OrugaConfig` instead - will be removed with 0.9 */
OrugaConfig as ConfigPlugin, // todo: remove export later - beaking change
ConfigProgrammatic, };
export { useOruga } from "./utils/programmatic";
declare const plugin: Plugin;
export { plugin as Oruga };
export default plugin;
