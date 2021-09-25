export const getStatusLabel = (status) => {
  const map = {
    pending: 'Pendente',
  };
  return map[status] || status;
};

export const getTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours + ':' + minutes;
};
