import { useParams } from "react-router-dom";
import books from "../Utils/data";
import Category from "./Category";
import BookList from "./BookList";

function BrowseBook() {
  const { category } = useParams();

  const filteredBooks =
    !category || category === "all"
      ? books
      : books.filter((book) => book.category === category);
  return (
    <div className="mt-24">
      <Category />
      <BookList books={filteredBooks} />
    </div>
  );
}
export default BrowseBook;
