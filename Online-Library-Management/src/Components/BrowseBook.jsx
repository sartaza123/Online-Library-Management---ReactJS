import { useParams } from "react-router-dom";
import books from "../Utils/data";
import Category from "./Category";
import BookList from "./BookList";
import { useState } from "react";

function BrowseBook() {
  const { category } = useParams();
  const [searchText, setSearchText] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      !category || category === "all" || book.category === category;

    const matchSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });
  return (
    <div className="mt-24">
      <Category searchText={searchText} setSearchText={setSearchText} />
      <BookList books={filteredBooks} />
    </div>
  );
}
export default BrowseBook;
