import type { LoadingProps } from "./types";
import type { OrugaOptions, ProgrammaticExpose } from '../../types';
declare module "../../index" {
    interface OrugaProgrammatic {
        loading: typeof LoadingProgrammatic;
    }
}
type LoadingProgrammaticProps = Readonly<string | (LoadingProps & OrugaOptions["loading"])>;
declare const LoadingProgrammatic: {
    open(params: LoadingProgrammaticProps): ProgrammaticExpose;
    closeAll(...args: any[]): void;
};
export default LoadingProgrammatic;
