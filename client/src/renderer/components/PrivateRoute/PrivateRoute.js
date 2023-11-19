import { Outlet, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function isLogin() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return true;
  } else {
    return false;
  }
}

const PrivateRoutes = () => {
  let auth = isLogin();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
