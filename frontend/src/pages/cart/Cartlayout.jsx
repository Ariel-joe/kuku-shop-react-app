import { Outlet } from "react-router";

const Cartlayout = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full">this is another space</div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { Cartlayout };
