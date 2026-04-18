import { Outlet, useLocation } from 'react-router-dom';
import { ComponentGrid } from '../Pages/Component';

export const ComponentLayout = () => {
  const location = useLocation();

  const isBasePath = location.pathname === '/components';

  return (
    <div>
      {isBasePath && <ComponentGrid />}
      <Outlet />
    </div>
  );
};
