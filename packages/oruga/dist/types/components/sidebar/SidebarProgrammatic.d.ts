import type { SidebarProps } from "./types";
import type { OrugaOptions, ProgrammaticExpose } from '../../types';
declare module "../../index" {
    interface OrugaProgrammatic {
        sidebar: typeof SidebarProgrammatic;
    }
}
type SidebarProgrammaticProps = Readonly<SidebarProps & OrugaOptions["sidebar"]>;
declare const SidebarProgrammatic: {
    open(params: SidebarProgrammaticProps): ProgrammaticExpose;
    closeAll(...args: any[]): void;
};
export default SidebarProgrammatic;
