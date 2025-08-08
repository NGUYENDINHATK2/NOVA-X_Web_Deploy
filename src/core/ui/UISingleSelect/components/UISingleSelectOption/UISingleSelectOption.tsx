import { useMemo } from "react";
import { IUISingleSelectOptionProps } from "./UISingleSelectOption.type";
import { ESize } from "@/core/ui/Helpers/UIsize.enum";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { UIIcon } from "@/core/ui/UIIcon";

const UISingleSelectOption = <T,>(props: IUISingleSelectOptionProps<T>) => {
    const {
        option,
        bindLabel = "label" as keyof T,
        bindValue = "value" as keyof T,
        isSelected,
        onClick,
        className,
        isDisabled = false,
        isHighlighted = false,
        size = ESize.M,
    } = props;

    const handleClick = () => {
        if (onClick && !isDisabled) {
            onClick(option);
        }
    };

    const optionSingleSelectStyleWrapper = useMemo(() =>
        twMerge(
            clsx(
                "flex items-center justify-between hover:bg-bgPrimaryTonalHover cursor-pointer",
                {
                    [ESize.XS]: "px-[4px] py-[4px]",
                    [ESize.S]: "px-[18px] py-[8px]",
                    [ESize.M]: "px-[10px] py-[9.5px]",
                    [ESize.L]: "px-[10px] py-[12px]",
                    [ESize.XL]: "px-[12px] py-[12px]",
                }[size],
                className,
                isHighlighted && "bg-bgNeutralTonalHover",
                isSelected && "bg-bgPrimarySolidFocus hover:bg-bgPrimarySolidFocus text-fgBase",
                isDisabled && "cursor-not-allowed bg-bgNeutralTonalHover hover:bg-bgNeutralTonalHover",
            )
        ), [className, size, isHighlighted, isSelected, isDisabled]
    );


    return (
        <div
            className={optionSingleSelectStyleWrapper}
            onClick={handleClick}
            // biome-ignore lint/a11y/useSemanticElements: <explanation>
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
        >
            <span>
                {option && (option[bindLabel as keyof T] as string)}
            </span>
            {/* {
                isSelected && (
                    <UIIcon
                        name="CheckMarkSolid"
                        className="text-fgBase"
                        width={24}
                        height={24}
                    />
                )
            } */}
        </div>
    );
}


export { UISingleSelectOption };