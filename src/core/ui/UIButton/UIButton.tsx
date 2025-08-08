import type { IUIButtonProps } from "./UIButton.type";
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ESize } from "../Helpers/UIsize.enum";

const UIButton: React.FC<IUIButtonProps> = (props) => {
    const {
        children,
        isDisabled,
        className,
        isLoading,
        size = ESize.M,
        ...rest
    } = props;

    const sizeButtonClass = {
        [ESize.S]: 'px-[8px] py-[4px]',
        [ESize.M]: 'px-[12px] py-[8px]',
        [ESize.L]: 'px-[6px] py-[8px]',
        [ESize.XL]: 'px-[16px] py-[12px]',
    }[size];

    const buttonClass = twMerge(
        clsx(
            "flex justify-center items-center rounded-[10px] focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-primary border-transparent hover:border-transparent active:border-transparent",
            sizeButtonClass,
            'bg-bgPrimarySolidFocus !text-white',
            'focus:border-transparent',
            className,
            {
                'bg-bgPrimarySolidDefault': isDisabled,
                'bg-bgPrimarySolidFocus': !isDisabled,
            },
            {
                'hover:bg-bgPrimarySolidHover': !isDisabled,
                'focus:ring-primary': !isDisabled,
            }
        )
    );
    

    return (
        <button
            disabled={isDisabled || isLoading}
            {...rest}
            className={
                buttonClass
            }
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
}
export { UIButton };