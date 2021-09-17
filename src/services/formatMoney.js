export const formatMoney = (value) =>
    `R$ ${value.toFixed(2).replace('.', ',')}`