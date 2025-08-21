import clsx from 'clsx';

export const addActiveClass = (className: string, activeClassName: string) => {
  return ({ isActive }: { isActive: boolean }) => clsx(className, isActive && activeClassName);
};
