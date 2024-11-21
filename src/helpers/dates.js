export const getMonthString = (date = new Date()) => {
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
};
