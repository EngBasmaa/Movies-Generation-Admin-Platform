import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingHomePage,
  MoviesPage,
  MoviesDashboardPage,
  NotFound,
  MovieDetails,
  MovieForm,
  Counter
} from "../pages";
import { SharedLayout } from "./SharedLayout";

function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingHomePage />} />
          <Route path="dashboard" element={<MoviesDashboardPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="movies/:id/edit" element={<MovieForm />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainLayout;
