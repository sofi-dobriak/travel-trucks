export const getFeatIcons = (key: string, className: string) => {
  return ['microwave', 'gas', 'water'].includes(key) ? className : '';
};
