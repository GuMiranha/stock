import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { CostumerRoutes } from './costumer.routes';
import { SaleRoutes } from './sale.routes';
import { USER_ROLE } from '../utils/roles';

export function Routes() {
  const { user } = useAuth();

   function AcessRoute(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>
        case USER_ROLE.COSTUMER:
          return <CostumerRoutes/>
          case USER_ROLE.SALE:
            return <SaleRoutes/>
            default:
              return <CostumerRoutes/>
    }
   }

  return (
    <BrowserRouter>
      {user ? <AcessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}