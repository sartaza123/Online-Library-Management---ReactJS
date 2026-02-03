import { NavLink } from "react-router-dom";
import books from "../Utils/data";

function Category({ searchText, setSearchText }) {
  const categories = ["all", ...new Set(books.map((book) => book.category))];
  return (
    <div className="flex justify-between m-5">
      <ul className="flex gap-4 flex-wrap">
        <h2 className="text-xl font-bold mr-8">Category : </h2>
        {categories.map((cate) => {
          return (
            <li
              key={cate}
              className="mr-4 capitalize text-xl hover:text-green-800 hover:scale-105 transition-all"
            >
              <NavLink
                to={cate === "all" ? "/browse" : `/browse/${cate}`}
                end={cate === "all"}
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? "text-green-800 underline" : ""}`
                }
              >
                {cate}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 mr-5">
        <input
          type="text"
          name="search"
          placeholder="Search: Book or Author"
          className="border rounded-md px-3 w-60 h-8"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Category;
