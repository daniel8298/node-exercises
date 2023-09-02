import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main, booksData } from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const printAllBooks = () => {
    booksData.forEach((book) => {
      console.log(`${book.title}, ${book.imgSrc}, ${book.text}`);
    });
  };

  const printFirstBook = () => {
    const firstBook = booksData[0];
    console.log(` ${firstBook.title}, ${firstBook.imgSrc}, ${firstBook.text}`);
  };

  return (
    <>
      <Header title="my website" />
      <Main />
      <Footer />
      <SideBar onPrintAll={printAllBooks} onPrintFirst={printFirstBook} />
    </>
  );
}

export default App;
