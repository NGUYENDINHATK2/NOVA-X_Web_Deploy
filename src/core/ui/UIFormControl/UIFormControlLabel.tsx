
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const UIFormControlLabel = ({ children }: any) => {
    return <span className="font-bold">
        {children}
    </span>
};

export { UIFormControlLabel };
