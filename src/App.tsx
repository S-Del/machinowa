import { Route, Routes } from "react-router-dom";

import RegionSelectorTopPage from "./pages/RegionSelectorTopPage";
import LocalEventListPage from "./pages/LocalEventListPage";
import EventDetailPage from "./pages/EventDatailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegionSelectorTopPage />} />

      <Route path="/events/:regionId" element={<LocalEventListPage />} />
      <Route path="/events/:regionId/opportunities" element={<div>お手伝い募集一覧ページ (仮)</div>} />
      <Route path="/events/:regionId/new" element={<div>イベント開催ページ (仮)</div>} />
      <Route path="/events/filter" element={<div>イベント絞り込みページ (仮)</div>} />

      <Route path="/event/:eventId" element={<EventDetailPage />} />
    </Routes>
  );
};

export default App;
