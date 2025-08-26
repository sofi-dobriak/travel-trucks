import s from './EmptyBlock.module.css';

interface EmptyBlockProps {
  children: React.ReactNode;
}

const EmptyBlock = ({ children }: EmptyBlockProps) => {
  return <div className={s.emptyBlock}>{children}</div>;
};

export default EmptyBlock;
