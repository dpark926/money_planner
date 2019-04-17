export const numWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatMoney = num => {
  return Math.round(num * 100) / 100;
};
