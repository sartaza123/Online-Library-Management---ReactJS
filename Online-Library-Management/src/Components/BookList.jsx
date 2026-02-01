import BookCard from "./BookCard";

function BookList({ books = [] }) {
  return (
    <div className="flex flex-wrap px-15">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}
export default BookList;
