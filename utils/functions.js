export const numWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatMoney = num => {
  return Math.round(num * 100) / 100;
};

export const changePercent = (current, prev) => {
  return Math.round(((current - prev) / prev) * 10000) / 100;
};

export const shouldInvert = (should, original) => {
  if (should) {
    return !original;
  }
  return original;
};
