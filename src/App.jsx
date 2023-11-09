// src/App.js

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CardsLayout from "./layout/CardsLayout";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<CardsLayout />}></Route>
          {/* <Route path="/card" element={<RecipeReviewCard />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
