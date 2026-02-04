import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

function RecentlyAdded() {
  const { category } = useParams(); // <-- URL category
  const cardsData = useSelector((state) => state.card.cards);

  if (!cardsData || cardsData.length === 0) return null;

  const filteredBooks = cardsData.filter((book) => {
    if (!category || category === "all") return true;
    return book.category === category;
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
