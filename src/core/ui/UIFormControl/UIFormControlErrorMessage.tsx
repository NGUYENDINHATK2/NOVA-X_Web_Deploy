// import { AlertSolid } from "@/assets/svgs";
import { UIIcon } from "../UIIcon";
import type { UIFormControlErrorMessageProps } from "./UIFormControl.type";


const DefaultLeftIcon = () => {
    return (
        <div className="flex items-start">
            <UIIcon
                name="AlertSolid"
                className="xl:w-[18px] xl:h-[18px] lg:w-[18px] lg:h-[18px] w-[14px] h-[14px] text-bgDangerSolidDefault"
            />
        </div>
    );
};

const UIFormControlErrorMessage = (
    props: UIFormControlErrorMessageProps,
) => {
    const { children, leftIcon, rightIcon } = props;

    return children ? (
        <div className="flex items-center gap-1">
            {leftIcon ?? <DefaultLeftIcon/>}
            <span className="text-fgDanger flex-shrink font-semibold">{children}</span>
            {rightIcon && rightIcon}
        </div>
    ) : null;
};

export { UIFormControlErrorMessage };
