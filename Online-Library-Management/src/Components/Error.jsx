import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white border border-green-900 rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-2">Oops!</h1>

        <p className="text-gray-600 mb-6">Something went wrong.</p>

        {/* ERROR DETAILS */}
        <div className="text-left text-sm text-gray-700 bg-gray-100 p-4 rounded-md mb-6 space-y-2">
          {error?.status && (
            <p>
              <span className="font-semibold">Status:</span> {error.status}
            </p>
          )}

          {error?.statusText && (
            <p>
              <span className="font-semibold">Status Text:</span>{" "}
              {error.statusText}
            </p>
          )}

          {error?.data && (
            <p>
              <span className="font-semibold">Data:</span>{" "}
              {typeof error.data === "string"
                ? error.data
                : JSON.stringify(error.data)}
            </p>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
          >
            ← Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="border border-green-900 text-green-900 px-4 py-2 rounded-md hover:bg-green-50 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
