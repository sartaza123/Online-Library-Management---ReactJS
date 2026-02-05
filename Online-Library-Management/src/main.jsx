import { StrictMode, Suspense } from "react";
import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
const App = lazy(() => import("./App.jsx"));
const Error = lazy(() => import("./Components/Error.jsx"));
const BrowseBook = lazy(() => import("./Components/BrowseBook.jsx"));
const AddBook = lazy(() => import("./Components/AddBook.jsx"));
const Home = lazy(() => import("./Components/Home.jsx"));
const BookDetails = lazy(() => import("./Components/BookDetails.jsx"));
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/browse",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BrowseBook />
          </Suspense>
        ),
      },
      {
        path: "/browse/:category",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BrowseBook />
          </Suspense>
        ),
      },
      {
        path: "/add",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AddBook />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BookDetails />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>,
);
