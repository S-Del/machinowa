import { Route, Routes } from "react-router-dom";
import RegionSelectorTopPage from "./pages/RegionSelectorTopPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegionSelectorTopPage />} />
      <Route
        path="/region/:regionId"
        element={<div>地域ページに置き換え予定</div>}
      />
    </Routes>
  );
};

export default App;
