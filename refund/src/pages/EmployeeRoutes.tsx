import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { NotFound } from "./NotFound";
import { Refund } from "./Refund";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />}></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
