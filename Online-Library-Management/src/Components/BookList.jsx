import BookCard from "./BookCard";
import books from "../Utils/data";

function BookList() {
  return (
    <>
      <div className="flex flex-wrap px-15">
        {books.map((book) => {
          return (
            <>
              <BookCard data={book} />
            </>
          );
        })}
      </div>
    </>
  );
}
export default BookList;
