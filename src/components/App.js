import  React  from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { OrderSummary } from "./OrderSummary";
import { NoMatch } from "./NoMatch";
import { Products } from "./Products";
import { Features } from "./Features";
import { NewProducts } from "./NewProducts";
import { User } from "./User";
import { UserDetails } from "./UserDetails";
import { Profile } from './Profile';
import { AuthProvider } from './auth';
import { Login } from './login';
import { RequireAuth } from './RequireAuth';
const LazyAbout = React.lazy(() => import('./About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<React.Suspense fallback='Loading....'><LazyAbout /></React.Suspense>}></Route>
          <Route path="/orderSummary" element={<OrderSummary />}></Route>
          <Route path="/products" element={<Products />}>
            <Route index element={<Features />} />
            <Route path="features" element={<Features />}></Route>
            <Route path="new" element={<NewProducts />}></Route>
          </Route>
          <Route path="/user" element={< User/>}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
