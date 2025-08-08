import { ESize } from "../Helpers/UIsize.enum";
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { IUITextFieldProps } from "./UITextField.type";
import React from "react";
import { mergeRefs } from "@/common/utils/ref";

const UITextField: React.FC<IUITextFieldProps> = (props) => {
    const {
        ref,
        type = 'text',
        textFieldSize = ESize.M,
        placeholder,
        leftIcon,
        rightIcon,
        clearable = true,
        isFocused: isFocusedProp,
        value,
        isInvalid = false,
        disabled: isDisabled,
        className,
        ...rest
    } = props;
    const _ref = React.useRef<HTMLInputElement>(null);
    const mergedRef = mergeRefs([_ref, ref as React.LegacyRef<HTMLInputElement>]);
    const [isFocused, setIsFocused] = React.useState(isFocusedProp);
    const [typeInput, setTypeInput] = React.useState(type);
    const textFieldSizeClass = {
        [ESize.XS]: 'px-[4px] py-[4px]',
        [ESize.S]: 'px-[12px] py-[8px]',
        [ESize.M]: 'px-[12px] py-[12px]',
        [ESize.L]: 'px-[10px] py-[12px]',
        [ESize.XL]: 'px-[12px] py-[12px]',
    }[textFieldSize];


    const resolveStateFactory = {
        default: 'bg-white border-[1px] border-bgNeutralTonalDisable',
        active: 'bg-white border-[2px]  border-bgPrimarySolidFocus',
        error: 'bg-white border-[2px] border-bgDangerSolidFocus',
        disabled: 'bg-white border-none border-transparent',
    }

    const inputStyleWrapper = twMerge(
        clsx(
            'w-full gap-2 flex item-center  justify-center  focus:outline-none focus:ring-1 rounded-[10px]',
            textFieldSizeClass,
            resolveStateFactory.default,
            className,
            isFocused && resolveStateFactory.active,
            isInvalid && resolveStateFactory.error,
            isDisabled && resolveStateFactory.disabled
        )
    );

    const inputStyle = twMerge(
        clsx(
            'w-full bg-transparent focus:outline-none text-fgNeutralEmphasis font-medium',
            {
                'text-fgNeutralSubtle': isDisabled,
            }
        )
    );

    const handleClear = () => {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        _ref.current!.value = '';
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        props.onChange?.({ target: { value: '' } } as any);
        setIsFocused(true);
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        _ref.current!.focus();
    };

    const shouldDisplayClearButton = Boolean(
        ['text', 'email'].includes(type) &&
        value?.toString()?.length &&
        clearable &&
        !isDisabled
    );

    const isShowButtonHide = Boolean(
        ['password'].includes(type) &&
        value?.toString()?.length &&
        !isDisabled
    );

    const handleToggleHide = () => {
        setTypeInput(typeInput === 'password' ? 'text' : 'password');
    };

    const handleFocus = (
        isFocus: boolean,
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        event: any,
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        callBack?: (event: any) => void,
    ) => {
        setIsFocused(isFocus);
        typeof callBack === 'function' && callBack(event);
    };


    return (
        <div className={inputStyleWrapper}>
            <button>
                {leftIcon && <>{leftIcon}</>}
            </button>
            <input
                ref={mergedRef}
                type={typeInput}
                placeholder={placeholder}
                disabled={isDisabled}
                className={inputStyle}
                onFocus={(e) => handleFocus(true, e, rest.onFocus)}
                onBlur={(e) => {
                    handleFocus(false, e, rest.onBlur);
                    setIsFocused(false);
                }}
                value={value}
                onChange={props.onChange}
                {...rest}
            />
            {
                shouldDisplayClearButton ? (
                    <button onClick={handleClear}>
                        {/* <ButtonClearOutline className="cursor-pointer" /> */}
                    </button>
                ) : null
            }
            {
                isShowButtonHide ? (
                    <button onClick={handleToggleHide}>
                        {/* <EyeOutline className="cursor-pointer" /> */}
                    </button>
                ) : null
            }
            {rightIcon && <>{rightIcon}</>}
        </div>
    )
};

export { UITextField };