import { BrowserRouter } from "react-router";
import { EmployeeRoutes } from "../pages/EmployeeRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
