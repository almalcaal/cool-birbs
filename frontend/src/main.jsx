import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeScreen from "./screens/common/Home.screen.jsx";
import FullPostScreen from "./screens/common/FullPost.screen.jsx";
import LoginScreen from "./screens/common/Login.screen.jsx";
import RegisterScreen from "./screens/common/Register.screen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/posts/:id" element={<FullPostScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
