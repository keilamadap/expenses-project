import * as C from "./styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};

const ResumeItem = ({ title, value }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={value < 0 ? "red" : "green"}>R${value.toFixed(2)}</C.Info>
    </C.Container>
  );
};

export default ResumeItem;
