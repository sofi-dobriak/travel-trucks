import clsx from 'clsx';
import s from './InfoMessage.module.css';

interface InfoMessageProps {
  children: React.ReactNode;
  className?: string;
}

const InfoMessage = ({ children, className }: InfoMessageProps) => {
  return <p className={clsx(s.info, className)}>{children}</p>;
};

export default InfoMessage;
