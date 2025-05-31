import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fakeFetchRegions } from "../mocks/fakeFetchRegions";
import type { RegionInfo } from "../types/RegionInfo";

export const RegionSelectorSection: React.FC = () => {
  const [regions, setRegions] = useState<RegionInfo[]>([]);
//const [isLoading, setIsLoading] = useState<boolean>(false];
//const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // setIsLoading(true) などのロード中の状態にする。
      // 今回の mock はロード時間が短いため省略。

      try {
        const regionsData = await fakeFetchRegions();
        setRegions(regionsData);
      } catch {
        // setError("message");
        // 今回の mock はエラーを返さないので省略
      } finally {
        // setIsLoading(false); としてロード中状態を終了。
      }
    })();
  }, []);

  // if (isLoading) {...} ロード中の表示処理を記述。
  // 今回はロード中状態にならないので省略。

  if (regions.length === 0) {
    // regions が空であった場合の処理。
    // 何らかの理由で地域一覧が表示されない旨を表示する。
    // 今回の mock データには必ず要素が存在するので処理は省略。
  }

  return (
    <section className="m-1 p-6 bg-cyan-50 rounded-md shadow-sm">
      <h2 className="text-xl font-bold text-center mb-4">地域選択セクション</h2>
      <p>
        API サーバなどから地域データを取得して表示し、<wbr />
        ユーザーは地図形式の図の中から選択したり、表の中から選択できる想定。<br />
        現在は 1 件だけの地域モックデータを使用中。<br />
      </p>
      <div className="text-xs">
        <p>詳細は以下のソースコードを参照してください。 </p>
        <ul className="list-disc list-inside">
          <li>components/RegionSelectorSection.tsx</li>
          <li>mocks/fakeFetchRegions.ts</li>
        </ul>
      </div>

      <hr className="my-6"/>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <Link to={`/region/${region.id}`}
                  className="underline text-blue-700 hover:text-blue-900"
            >
              {region.displayName} のイベント一覧を見る
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
