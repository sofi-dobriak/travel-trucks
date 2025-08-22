import clsx from 'clsx';
import s from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: string;
  className?: string;
  variant?: ButtonVariant;
  type?: ButtonType;
}

const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={clsx(className, s.button, {
        [s.buttonPrimary]: variant === 'primary',
        [s.buttonSecondary]: variant === 'secondary',
        [s.disabled]: rest.disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
