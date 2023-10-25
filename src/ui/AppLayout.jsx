import { HiOutlineUser } from 'react-icons/hi2';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="h-[100vh] bg-sky-950">
      <div className="flex items-center justify-end text-yellow-400">
        <HiOutlineUser />
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
