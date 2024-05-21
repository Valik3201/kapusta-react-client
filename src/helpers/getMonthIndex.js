export const getMonthIndex = (monthName) => {
  const monthsRu = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const indexRu = monthsRu.indexOf(monthName);
  const indexEn = monthsEn.indexOf(monthName);

  if (indexRu !== -1) {
    return indexRu + 1;
  } else if (indexEn !== -1) {
    return indexEn + 1;
  } else {
    return -1;
  }
};
