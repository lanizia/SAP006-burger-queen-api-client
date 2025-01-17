import { differenceInMinutes } from 'date-fns';

export const getStatusLabel = (status) => {
  const map = {
    pending: 'Pendente',
    ready: "Pronto",
    delivered: "Pedido Entregue"
  };
  return map[status] || status;
};



export const getTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return hours + ':' + minutes;
};

export const getInterval = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const TotalDate = differenceInMinutes(endDate, startDate);
  return TotalDate + ' min';
};
