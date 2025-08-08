import React from 'react';
import type { UIFromControlProps } from './UIFormControl.type';
import { FormControlContext, useFormControlProvider } from './useFormControl';

const UIFormControlBase = (props: UIFromControlProps) => {
  const context = useFormControlProvider<UIFromControlProps>(props);
  const { children } = props;
  return (
    <FormControlContext.Provider value={context}>
      <div className='flex w-full gap-1 flex-col'>{children}</div>
    </FormControlContext.Provider>
  );
};

export { UIFormControlBase };
