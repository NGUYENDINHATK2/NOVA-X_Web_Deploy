import { UIFormControlComponent } from './UIFormControl.type';
import { UIFormControlBase } from './UIFormControlBase';
import { UIFormControlErrorMessage } from './UIFormControlErrorMessage';
import { UIFormControlLabel } from './UIFormControlLabel';

const FormControl = UIFormControlBase as UIFormControlComponent;
FormControl.Label = UIFormControlLabel;
FormControl.ErrorMessage = UIFormControlErrorMessage;

const UIFormControl = FormControl;

export { UIFormControl };
