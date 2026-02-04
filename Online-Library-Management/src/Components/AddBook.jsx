import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../Utils/cardsSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    pages: "",
    launchDate: "",
    coverImage: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.rating ||
      !formData.pages ||
      !formData.launchDate ||
      !formData.coverImage ||
      !formData.description
    ) {
      setError("All fields are mandatory");
      return;
    }
    if (formData.rating > 5 || formData.rating < 0) {
      setError("Ratings Should between 1-5");
      return;
    }

    setError("");
    dispatch(
      addCard({
        ...formData,
        id: Date.now(),
      }),
    );
    navigate("/browse");
  }

  return (
    <div className="mb-10 mt-24 px-4">
      <div className="w-full max-w-5xl mx-auto bg-white border border-green-900 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-green-900 mb-6 text-center">
          Add New Book
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
          {/* Title */}
          <div className="w-full md:w-[48%]">
            <label className="block mb-1 font-medium">Book Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Author */}
          <div className="w-full md:w-[48%]">
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Category */}
          <div className="w-full md:w-[48%]">
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select category</option>
              <option value="philosophical">Philosophical</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="history">History</option>
              <option value="poetry">Poetry</option>
            </select>
          </div>

          {/* Rating */}
          <div className="w-full md:w-[48%]">
            <label className="block mb-1 font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="1-5"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Launch Date */}
          <div className="w-full md:w-[48%]">
            <label className="block mb-1 font-medium">Launch Date</label>
            <input
              type="date"
              name="launchDate"
              value={formData.launchDate}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Pages */}
          <div className="w-full md:w-[48%]">
            <label className="block mb-1 font-medium">Pages</label>
            <input
              type="number"
              name="pages"
              placeholder="No. of Pages"
              value={formData.pages}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Cover Image */}
          <div className="w-full">
            <label className="block mb-1 font-medium">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              placeholder="https://coverImage.com"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Description */}
          <div className="w-full">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              rows="4"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          {/* ERROR MESSAGE */}
          {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}

          {/* Button */}
          <div className="w-full text-right">
            <button
              type="submit"
              className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition cursor-pointer"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
