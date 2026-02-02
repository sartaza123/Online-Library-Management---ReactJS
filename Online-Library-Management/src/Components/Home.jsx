import BookList from "./BookList";
import books from "../Utils/data";

function Home() {
  return (
    <>
      <div className="m-5 mt-24">
        <h1 className="text-2xl font-bold">Hello Readers.</h1>
        <p>
          Welcome to your digital Library. Browse books by category, explore
          details, and manage your collection with ease.
        </p>
      </div>
      <BookList books={books} />
    </>
  );
}
export default Home;
