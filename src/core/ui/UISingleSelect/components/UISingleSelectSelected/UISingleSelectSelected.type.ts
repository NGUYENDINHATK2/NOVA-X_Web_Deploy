
export interface IUISingleSelectSelectedProps<T> {
    selected?: T;
    bindLabel?: keyof T;
    bindValue?: keyof T;
    placeholder?: string;
    className?: React.ComponentProps<"div">["className"];
    isCollapsed?: boolean;
}