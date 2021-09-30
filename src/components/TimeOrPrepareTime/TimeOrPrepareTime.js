import { getInterval, getTime } from '../time/getTime';

export const TimeOrPrepareTime = ({ order }) => {
  if (order.processedAt) {
    return (
      <>
        <label className="orderLabel">Tempo de preparo:</label>{' '}
        <p> {getInterval(order.createdAt, order.processedAt)} </p>
      </>
    );
  }

  return (
    <>
      <label className="orderLabel">Horário:</label>{' '}
      <p> {getTime(order.createdAt)} </p>
    </>
  );
};
