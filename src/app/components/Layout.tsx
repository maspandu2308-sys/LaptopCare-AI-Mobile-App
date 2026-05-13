import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl rounded-3xl overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
