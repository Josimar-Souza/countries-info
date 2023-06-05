const numberFormatter = (number, locale = 'pt-BR', style = 'decimal', currency = 'BRL') => {
  const formatter = Intl.NumberFormat(locale, {
    style,
    currency,
  });

  return formatter.format(number);
};

export default numberFormatter;
