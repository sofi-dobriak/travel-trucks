import clsx from 'clsx';
import s from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  variant?: ButtonVariant;
}

const Button = ({ children, className, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(className, s.button, {
        [s.buttonPrimary]: variant === 'primary',
        [s.buttonSecondary]: variant === 'secondary',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
