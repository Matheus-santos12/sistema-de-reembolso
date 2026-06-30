import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col justify-center items-center text-gray-100">
      <main className="bg-gray-500 p-8 rounded-2xl flex items-center flex-col md:min-w-[462px]">
        <img src={logoSvg} alt="Logo" />
        <Outlet />
      </main>
    </div>
  );
}
