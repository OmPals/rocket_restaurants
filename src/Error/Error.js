import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log("err:: ", err);
  return <h1 className="error">Error is::: {err.error.message}</h1>;
};

export default Error;
