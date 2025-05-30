import React from "react";
import { RegionSelectorSection } from "../components/RegionSelectorSection";

const RegionSelectorTopPage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>街の輪</h1>
      </header>

      <main>
        <section className="m-1 p-6 bg-red-50 rounded-md shadow-sm">
          <h2 className="text-xl font-bold text-center mb-4">注目行事表示セクション (全国)</h2>
          <p> ここには全国各地の注目イベント等が表示されることを期待する。</p>
          <p> カルーセルなどでイベント画像など。</p>
        </section>

        <RegionSelectorSection />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 街の輪</p>
        <p>このページは、トップページのサンプルです。</p>
      </footer>
    </div>
  );
};

export default RegionSelectorTopPage;
