import Book from "./Book";

export const booksData = [
  {
    title: "His Dark Materials",
    imgSrc:
      "https://lamaskill.com/wp-content/uploads/2022/10/%D7%94%D7%9E%D7%A6%D7%A4%D7%9F-%D7%94%D7%96%D7%94%D7%95%D7%91.webp",
    text: "his dark materials",
  },
  {
    title: "Harry Potter",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/he/3/3c/%D7%94%D7%90%D7%A8%D7%99_%D7%A4%D7%95%D7%98%D7%A8_%D7%95%D7%90%D7%91%D7%9F_%D7%94%D7%97%D7%9B%D7%9E%D7%99%D7%9D_%D7%A1%D7%A4%D7%A8.jpeg",
    text: "harry potter",
  },
  {
    title: "The Lord Of The Rings",
    imgSrc:
      "https://harpercollins.co.uk/cdn/shop/products/x500_49b12b49-ccab-4adc-90dd-4fdb17c03f67_1200x1200.jpg?v=1690820777",
    text: "the lord of the rings",
  },
  {
    title: "The Da Vinci Code",
    imgSrc:
      "https://danbrown.com/wp-content/themes/danbrown/images/db/books.02.jpg",
    text: "the da vinci code",
  },
];

export const Main = () => {
  return (
    <main style={{ display: "flex", justifyContent: "space-around" }}>
      {booksData.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          imgSrc={book.imgSrc}
          text={book.text}
        />
      ))}
    </main>
  );
};
