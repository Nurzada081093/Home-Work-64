const DateFormat = (date: string) => {
  const d: Date = new Date(date);

  const addZero = (number: number): string => {
    return number < 10 ? "0" + number : "" + number;
  };

  const data: string = [
    addZero(d.getDate()),
    addZero(d.getMonth() + 1),
    d.getFullYear(),
  ].join(".");

  const time: string = [
    addZero(d.getHours()),
    addZero(d.getMinutes()),
    addZero(d.getSeconds()),
  ].join(":");

  return { data, time };
};

export default DateFormat;
