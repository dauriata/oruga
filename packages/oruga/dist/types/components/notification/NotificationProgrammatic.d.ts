import type { NotifcationNoticeProps, NotifcationProps } from "./types";
import type { OrugaOptions, ProgrammaticExpose } from '../../types';
declare module "../../index" {
    interface OrugaProgrammatic {
        notification: typeof NotificationProgrammatic;
    }
}
type NotifcationProgrammaticProps = Readonly<string | (NotifcationNoticeProps & NotifcationProps & OrugaOptions["notification"] & Record<string, unknown>)>;
declare const NotificationProgrammatic: {
    open(params: NotifcationProgrammaticProps): ProgrammaticExpose;
    closeAll(...args: any[]): void;
};
export default NotificationProgrammatic;
