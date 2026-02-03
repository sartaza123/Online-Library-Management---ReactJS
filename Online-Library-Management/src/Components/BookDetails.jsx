import { useParams, useNavigate } from "react-router-dom";
import books from "../Utils/data";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ID = Number(id);

  const book = books.find((b) => b.id === ID);

  if (!book) {
    return (
      <div className="h-screen flex items-center justify-center text-green-900">
        Book not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto h-screen px-6 py-6 overflow-y-hidden text-gray-900">
      {/* BACK BUTTON */}
      <div className="bg-green-900 -ml-18 text-white px-4 py-2 w-10 h-10 absolute rounded-full hover:bg-green-800 transition">
        <button
          className="-ml-[3px] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      </div>
      {/* TITLE */}
      <h1 className="text-3xl font-bold border-b border-green-900 pb-2">
        {book.title}
      </h1>
      <p className="text-sm text-gray-600 mt-1 mb-4">
        From Wikipedia, the free encyclopedia
      </p>

      <div className="flex gap-8 h-[calc(100vh-140px)]">
        {/* LEFT CONTENT (DETAILS) */}
        <div className="flex-1 overflow-y-auto pr-3 text-[16px] leading-7">
          <p className="mb-4">
            <strong>{book.title}</strong> is a notable book written by{" "}
            <strong>{book.author}</strong>.
          </p>

          {/* DETAILS SECTION */}
          <h2 className="text-xl font-semibold border-b border-green-900 mb-2">
            Details
          </h2>
          <ul className="mb-6 list-disc pl-5">
            <li>
              <strong>Category:</strong> {book.category}
            </li>
            <li>
              <strong>Published:</strong> {book.launchDate}
            </li>
            <li>
              <strong>Pages:</strong> {book.pages}
            </li>
            <li>
              <strong>Rating:</strong> ⭐ {book.rating} / 5
            </li>
          </ul>

          <h2 className="text-xl font-semibold border-b border-green-900 mb-2">
            Overview
          </h2>
          <p className="mb-4">{book.description}</p>

          <h2 className="text-xl font-semibold border-b border-green-900 mb-2">
            Background
          </h2>
          <p className="mb-4">
            {book.author}’s work reflects the historical and social context of
            its era and continues to be referenced in literary studies.
          </p>

          <h2 className="text-xl font-semibold border-b border-green-900 mb-2">
            Legacy
          </h2>
          <p>
            Over the years, this book has inspired adaptations, critiques, and
            scholarly discussions, securing a lasting place in literature.
          </p>
        </div>

        {/* RIGHT IMAGE CARD (SIMPLIFIED) */}
        <div className="w-60 shrink-0 border border-green-900 bg-green-900 text-white p-1 rounded-md h-fit">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-72 object-cover mb-3 rounded-sm"
          />

          <div className="text-sm space-y-1 px-1">
            <p>
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {book.rating} /
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
