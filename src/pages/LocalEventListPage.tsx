import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { fakeFetchEvents } from "../mocks/fakeFetchEvents";
import type { CommunityEvent } from "../types/CommunityEvent";


const LocalEventListPage: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const [events, setEvents] = useState<CommunityEvent[]>([]);
//const [isLoading, setIsLoading] = useState<boolean>(false);
//const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (!regionId) {
        console.error("regionId が undefined");
        // setError("message")
        // 何らかの理由で regionId が undefined の場合。
        // モックデータでは発生しない。
        return;
      }

      try {
        const eventsData = await fakeFetchEvents(regionId);
        setEvents(eventsData);
      } catch (err) {
        console.error(`イベント一覧の取得に失敗: ${err}`);
        // setError("message");
        // 今回の mock はエラーを返さないので省略
      }
    })();
  }, [regionId]);

  // if (error) {...}

  if (events.length === 0) {
    // events が空であった場合の処理。
    // エラーでは無く、純粋に「この地域に開催予定のイベントが無い」状態なので、
    // そのメッセージを含んだ JSX を返すべきだが、今回は省略。
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow">
        {/* コンポーネント追加予定 */}
      </main>

      <Footer />
    </div>
  );
}


export default LocalEventListPage;
