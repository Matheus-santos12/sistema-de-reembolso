import { Route, Routes } from "react-router";
import { NotFound } from "./NotFound";
import { Refund } from "./Refund";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Refund />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
