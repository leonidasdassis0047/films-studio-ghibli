import { Outlet } from "@remix-run/react";

export default function Parent() {
  return (
    <div className="p-4 px-12 bg-slate-700">
      <Outlet />
    </div>
  );
}
