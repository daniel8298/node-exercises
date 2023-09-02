import Title from "./Title";

interface bookProps {
  title: string;
  imgSrc: string;
  text: string;
}

const Book = ({ title, imgSrc, text }: bookProps) => {
  return (
    <div style={{ border: "2px solid green" }}>
      <Title text={title} />
      <img src={imgSrc} width="150px" />
      <p>{text}</p>
    </div>
  );
};
export default Book;
