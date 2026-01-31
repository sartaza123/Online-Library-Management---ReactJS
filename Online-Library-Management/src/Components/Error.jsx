import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Oops</h1>
      <p>Something went wrong</p>
    </>
  );
}
export default Error;
