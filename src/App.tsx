import { Route, Routes } from "react-router-dom";
import RegionSelectorTopPage from "./pages/RegionSelectorTopPage";
import LocalEventListPage from "./pages/LocalEventListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegionSelectorTopPage />} />
      <Route path="/events/:regionId" element={<LocalEventListPage />} />
    </Routes>
  );
};

export default App;
