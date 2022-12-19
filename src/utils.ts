export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();

  return `${month}/${day}/${year} ${hour}:${min}:${seconds}`;
};
