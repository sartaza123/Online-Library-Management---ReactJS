import books from "../Utils/data";

function Category() {
  return (
    <>
      <div className="w-full">
        <ul className="flex mt-2 mx-10 ">
          <h2 className="text-xl font-bold mr-10">Category : </h2>
          <li className="mr-10 p-1 underline rounded-2xl hover:text-green-800">
            All
          </li>
          <li className="mr-10 p-1 underline rounded-2xl hover:text-green-800">
            Fiction
          </li>
          <li className="mr-10 p-1 underline rounded-2xl hover:text-green-800">
            Sci-Fi
          </li>
          <li className="mr-10 p-1 underline rounded-2xl hover:text-green-800">
            Poetry
          </li>
          <li className="mr-10 p-1 underline rounded-2xl hover:text-green-800">
            Philosopy
          </li>
        </ul>
      </div>
    </>
  );
}
export default Category;
