import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <div className="h-[100vh] bg-sky-950">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
