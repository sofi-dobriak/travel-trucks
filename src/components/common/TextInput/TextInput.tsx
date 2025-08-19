import clsx from 'clsx';
import s from './TextInput.module.css';

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  inputName: string;
  containerClassName?: string;
  inputClassName?: string;
  placeholder: string;
}

export default function TextInput({
  children,
  inputName,
  placeholder,
  containerClassName,
  inputClassName,
  ...rest
}: TextInputProps) {
  return (
    <div className={clsx(containerClassName)}>
      <input
        type='text'
        name={inputName}
        placeholder={placeholder}
        {...rest}
        className={clsx(inputClassName, s.input)}
      />
      {children}
    </div>
  );
}
