type TitleProps = {
  text: string;
  size?: "small" | "medium" | "large";
};

const Title = ({ text, size = "medium" }: TitleProps) => {
  const sizes = {
    small: "14px",
    medium: "18px",
    large: "24px",
  };
  const fontSize = sizes[size];
  return <h2 style={{ fontSize }}>{text}</h2>;
};

export default Title;
