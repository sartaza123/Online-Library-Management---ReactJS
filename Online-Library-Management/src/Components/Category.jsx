import { NavLink } from "react-router-dom";
import books from "../Utils/data";

function Category() {
  const categories = ["all", ...new Set(books.map((book) => book.category))];
  return (
    <>
      <ul className="flex gap-4 flex-wrap m-5">
        <h2 className="text-xl font-bold mr-8">Category : </h2>
        {categories.map((cate) => {
          return (
            <li
              key={cate}
              className="mr-10 capitalize text-xl hover:text-green-800"
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
    </>
  );
}
export default Category;
