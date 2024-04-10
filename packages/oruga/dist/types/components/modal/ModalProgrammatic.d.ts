import type { ModalProps } from "./types";
import type { OrugaOptions, ProgrammaticExpose } from '../../types';
declare module "../../index" {
    interface OrugaProgrammatic {
        modal: typeof ModalProgrammatic;
    }
}
type ModalProgrammaticProps = Readonly<string | (ModalProps & OrugaOptions["modal"])>;
declare const ModalProgrammatic: {
    open(params: ModalProgrammaticProps): ProgrammaticExpose;
    closeAll(...args: any[]): void;
};
export default ModalProgrammatic;
