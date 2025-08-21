import s from './Container.module.css';

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={s.container}>{children}</div>;
}
