import { JSX, useEffect, useMemo, useRef, useState } from "react";
import { ESize } from "../Helpers/UIsize.enum";
import { IUISingleSelectProps } from "./UISingleSelect.type";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { UISingleSelectSelected, UISingleSelectOption } from "./components";

type UISingleSelectComponent = (<T, >(props: IUISingleSelectProps<T>) => JSX.Element) & {
    Selected: typeof UISingleSelectSelected;
    Option: typeof UISingleSelectOption;
};

const UISingleSelect: UISingleSelectComponent = <T,>(props: IUISingleSelectProps<T>) => {
    const {
        options,
        placeholder,
        selected,
        onChange,
        renderOption,
        renderSelected,
        size = ESize.M,
        className,
        disabled = false,
        bindLabel = "label" as keyof T,
        bindValue = "value" as keyof T,
        isInvalid = false,
        classNameState
    } = props;
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const resolveStateFactory = useMemo(() => ({
        default: clsx("bg-white border-[1px] border-bgNeutralTonalDisable", classNameState?.default),
        active: clsx("bg-white border-[1px] border-bgPrimarySolidFocus", classNameState?.active),
        error: clsx("bg-white border-[1px] border-bgDangerSolidFocus", classNameState?.error),
        disabled: clsx("bg-white border-none border-transparent", classNameState?.disabled),
    }), [classNameState]);


    const singleSelectStyleWrapper = useMemo(() =>
        twMerge(
            clsx(
                "w-full gap-2 flex items-center justify-center relative rounded-[4px]",
                {
                    [ESize.XS]: "px-[4px] py-[4px]",
                    [ESize.S]: "px-[18px] py-[8px]",
                    [ESize.M]: "px-[10px] py-[9.5px]",
                    [ESize.L]: "px-[10px] py-[12px]",
                    [ESize.XL]: "px-[12px] py-[12px]",
                }[size],
                className,
                resolveStateFactory.default,
                isCollapsed && resolveStateFactory.active,
                isInvalid && resolveStateFactory.error,
                disabled && resolveStateFactory.disabled,
                disabled && "cursor-not-allowed",
            )
        ), [className, size, isCollapsed]
    );


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsCollapsed(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])



    return (
        <div
            ref={dropdownRef}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={singleSelectStyleWrapper}>
            <div className="flex items-center justify-between w-full cursor-pointer">
                {renderSelected({ selected, bindLabel, bindValue, placeholder, isCollapsed })}
            </div>
            <div
                className={clsx(
                    "absolute w-full bg-white rounded-[4px] top-full mt-2 shadow-card z-10 transition-all max-h-[400px] overflow-y-auto duration-200 ease-in-out overflow-hidden",
                    isCollapsed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none bottom-full mb-2",

                )}
                onClick={(e) => e.stopPropagation()}
            >
                {options.map((option, index) => {
                    const isSelected = selected && (selected[bindValue as keyof T] === option[bindValue as keyof T]);
                    const isHighlighted = isCollapsed && (selected && (selected[bindValue as keyof T] === option[bindValue as keyof T]));
                    const disabledOption = (option as any).disabled || false;
                    return (
                        <div key={index} onClick={() => {
                            if (!disabledOption) {
                                onChange(option);
                                setIsCollapsed(false);
                            }
                        }}>
                            {renderOption({
                                option,
                                bindLabel,
                                bindValue,
                                isSelected,
                                isHighlighted,
                                isDisabled: disabledOption,
                                size,
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

UISingleSelect.Selected = UISingleSelectSelected;
UISingleSelect.Option = UISingleSelectOption;

export { UISingleSelect };