import React from "react";
import { RegionSelectorSection } from "../components/RegionSelectorSection";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const RegionSelectorTopPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />

      <main className="grow">
        <section className="m-1 p-6 bg-white rounded-md shadow-sm">
          <h2 className="text-xl font-bold text-center mb-4">注目行事表示セクション (全国)</h2>
          <p> ここには全国各地の注目イベント等が表示されることを想定。</p>
          <p> イベント画像をカルーセルで表示する等。</p>
        </section>

        <RegionSelectorSection />
      </main>

      <Footer />
    </div>
  );
};

export default RegionSelectorTopPage;
