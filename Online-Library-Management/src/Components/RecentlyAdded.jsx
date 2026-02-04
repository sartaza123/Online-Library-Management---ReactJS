import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

function RecentlyAdded({ searchText = "" }) {
  const { category } = useParams();
  const cardsData = useSelector((state) => state.card.cards);

  if (!cardsData || cardsData.length === 0) return null;

  const filteredBooks = cardsData.filter((book) => {
    const matchCategory =
      !category || category === "all" || book.category === category;

    const matchSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (filteredBooks.length === 0) return null;

  return (
    <div className="mx-16 border-b mb-8">
      <h2 className="ml-10 text-xl font-bold text-green-900 mb-4">
        Recently Added Books
      </h2>

      <div className="flex flex-wrap gap-4 ml-10">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default RecentlyAdded;
