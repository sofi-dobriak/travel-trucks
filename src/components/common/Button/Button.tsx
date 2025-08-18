import clsx from 'clsx';
import s from './Button.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button type='button' {...rest} className={clsx(className, s.button)}>
      {children}
    </button>
  );
};

export default Button;
