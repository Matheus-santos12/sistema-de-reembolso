import { BrowserRouter } from "react-router";
import { Loading } from "../components/Loading";
import { AuthRoutes } from "./AuthRoutes";

const isLoading = false;

export function Routes() {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
