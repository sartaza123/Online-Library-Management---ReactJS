import { NavLink } from "react-router-dom";

function BookCard({ book }) {
  //   console.log(book[1]);
  return (
    <>
      <div className="w-50 rounded-md m-10 shadow-2xl hover:scale-105 p-1 hover:bg-green-900 hover:text-white transition-all">
        <div className="image object-cover">
          <img
            src={book.coverImage}
            alt="Image not available"
            className="w-full h-56 rounded-sm bg-white"
          />
        </div>
        <div className="p-2">
          <h3 className="font-bold">{book.title}</h3>
          <p className="text-sm">
            <strong>Author </strong>: {book.author}
          </p>
          <p className="text-sm">Category : {book.category}</p>
          <p className="text-sm">Launch Date : {book.launchDate}</p>
          <NavLink to={`/details/${book.id}`}>
            <p className="underline">More Details → </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default BookCard;
