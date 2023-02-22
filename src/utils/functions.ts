import dayjs from "dayjs";

export const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

export const daysGenerator = (month: number, year: number): IDay[] => {
  const result = [];
  const amountOfDaysinMonth = daysInMonth(month, year);

  for (let i = 1; i <= amountOfDaysinMonth; i++) {
    result.push({
      id: `${i}`,
      date: dayjs().date(i).format("D MMMM YYYY"),
      todos: [],
    });
  }

  return result;
};
