import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./Components/Error.jsx";
import BrowseBook from "./Components/BrowseBook.jsx";
import AddBook from "./Components/AddBooks.jsx";
import Home from "./Components/Home.jsx";
import BookDetails from "./Components/BookDetails.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <BrowseBook />,
      },
      {
        path: "/browse/:category",
        element: <BrowseBook />,
      },
      {
        path: "/add",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: <BookDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
