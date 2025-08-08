export type UIFromControlProps = {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    children?: any;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
  };
  
  export type UIFormControlLabelProps = UIFromControlProps & {};
  export type UIFormControlErrorMessageProps = UIFromControlProps & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
  
  export type UIFormControlComponent = ((
    props: UIFromControlProps,
  ) => React.ReactNode) & {
    Label: (props: UIFormControlLabelProps) => React.ReactNode;
    ErrorMessage: (
      props: UIFormControlErrorMessageProps,
    ) => React.ReactNode | null;
  };
  
  export type FormControlState = {
    /**
     * If true, this prop is passed to its children.
     */
    isInvalid?: boolean;
    /**
     * If true, this prop is passed to its children.
     */
    isRequired?: boolean;
    /**
     * If true, this prop is passed to its children.
     */
    isDisabled?: boolean;
    /**
     * If true, this prop is passed to its children.
     */
    isReadOnly?: boolean;
  };
  