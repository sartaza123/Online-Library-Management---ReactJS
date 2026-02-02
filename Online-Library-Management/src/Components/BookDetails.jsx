import { useParams } from "react-router-dom";
import books from "../Utils/data";

function BookDetails() {
  const { id } = useParams();
  const ID = Number(id);

  const book = books.find((b) => b.id === ID);

  if (!book) {
    return (
      <div className="max-w-6xl mx-auto mt-10 text-center text-green-900">
        Book not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-900">
      {/* TITLE */}
      <h1 className="text-3xl font-bold border-b border-green-900 pb-2">
        {book.title}
      </h1>
      <p className="text-sm text-gray-600 mt-1 mb-8">
        From Wikipedia, the free encyclopedia
      </p>

      <div className="flex gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-[16px] leading-7">
          <p className="mb-4">
            <strong>{book.title}</strong> is a notable book written by{" "}
            <strong>{book.author}</strong>. It belongs to the{" "}
            <strong>{book.category}</strong> genre and was published on{" "}
            <strong>{book.launchDate}</strong>, consisting of approximately{" "}
            <strong>{book.pages}</strong> pages.
          </p>

          <h2 className="text-xl font-semibold border-b border-green-900 mt-6 mb-2">
            Overview
          </h2>
          <p className="mb-4">
            {book.description} The book is widely regarded for its narrative
            depth, thematic complexity, and cultural influence.
          </p>

          <h2 className="text-xl font-semibold border-b border-green-900 mt-6 mb-2">
            Background
          </h2>
          <p className="mb-4">
            {book.author}’s work reflects the historical and social context of
            its era and continues to be referenced in literary studies.
          </p>

          <h2 className="text-xl font-semibold border-b border-green-900 mt-6 mb-2">
            Legacy
          </h2>
          <p>
            Over the years, this book has inspired adaptations, critiques, and
            scholarly discussions, securing a lasting place in literature.
          </p>
        </div>

        {/* RIGHT IMAGE CARD (FIXED SIZE) */}
        <div className="w-60 shrink-0 border border-green-900 bg-green-900 text-white p-2 rounded-md">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-[300px] object-cover mb-3 rounded-sm"
          />

          <div className="text-sm space-y-1">
            <p>
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {book.category}
            </p>
            <p>
              <span className="font-semibold">Published:</span>{" "}
              {book.launchDate}
            </p>
            <p>
              <span className="font-semibold">Pages:</span> {book.pages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
