import { UIIcon } from "@/core/ui/UIIcon";
import { IUISingleSelectSelectedProps } from "./UISingleSelectSelected.type";

const UISingleSelectSelected = <T,>(props: IUISingleSelectSelectedProps<T>) => {
    const {
        selected,
        bindLabel = "label" as keyof T,
        bindValue = "value" as keyof T,
        placeholder,
        isCollapsed,
    } = props;
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-1">
                <span>
                    {selected ? (selected[bindLabel as keyof NonNullable<T>] as string) : <span className="text-black/50">{placeholder}</span>}
                </span>
            </div>
            <div
                className={`flex items-center transition-transform duration-100 ${isCollapsed ? "rotate-180" : ""}`}
            >
                {/* <UIIcon
                    name="ChervonDowSolid"
                    width={13}
                    height={9}
                    className="text-[#333]"
                /> */}
            </div>
        </div>
    )
}

export { UISingleSelectSelected };