interface IProps {
  day: IDay;
}

export const Day: React.FC<IProps> = ({ day }) => {
  return <li> {day.date}</li>;
};
