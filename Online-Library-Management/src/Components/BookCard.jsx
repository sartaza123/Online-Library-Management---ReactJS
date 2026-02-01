function BookCard({ book }) {
  //   console.log(book[1]);
  return (
    <>
      <div className="w-50 rounded-md m-10 shadow-2xl">
        <div className="image object-cover">
          <img
            src={book.coverImage}
            alt="Image not available"
            className="w-full h-56 rounded-sm"
          />
        </div>
        <div className="p-2">
          <h3 className="font-bold">{book.title}</h3>
          <p className="text-sm">Category : {book.category}</p>
          <p className="text-sm">Launch Date : {book.launchDate}</p>
          <p className="text-sm">Pages : {book.pages}</p>
        </div>
      </div>
    </>
  );
}
export default BookCard;
