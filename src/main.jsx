import { createRoot } from "react-dom/client";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainLayout from "./layout/MainLayout.jsx";
import { Provider } from "react-redux";
import { store } from "./ToolkitStore/index";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
);
