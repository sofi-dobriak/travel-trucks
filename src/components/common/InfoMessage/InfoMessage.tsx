import s from './InfoMessage.module.css';

interface InfoMessageProps {
  children: React.ReactNode;
}

const InfoMessage = ({ children }: InfoMessageProps) => {
  return <p className={s.info}>{children}</p>;
};

export default InfoMessage;
