import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { fakeFetchEvents } from "../mocks/fakeFetchEvents";
import type { CommunityEvent } from "../types/CommunityEvent";
import { FeaturedEventsCarousel } from "../components/FeaturedEventsCarousel";
import { EventCardsSection } from "../components/EventCardsSection";
import { HostEventPrompt } from "../components/prompt/HostEventPrompt";
import { HelpEventPrompt } from "../components/prompt/HelpEventPrompt";

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

  /* events を元に featuredEvents を計算 (取得)。
   * featuredEvents をメモ化しておくことで、再レンダーが生じた際に再計算 (再取得) しなくて済む。
   * 再レンダーは以下のタイミングで発生する。
   * 1. state が更新された時
   * 2. props が更新された時
   * 3. 親コンポーネント (このコンポーネントから見ると App.tsx) が更新された時。
   *
   * このページは、
   * - state はページが読み込まれたときに fetch する events のみ。（途中で更新されない）
   * - props は受け取らない。
   * - 親コンポーネント (App.tsx) も status や props を持たない。
   * また、現状クエリパラメータを必要とするページが無いため、
   * - クエリパラメータ由来の BrowserRouter の location オブジェクト変更が起こらない。
   * という状況のため、この useMemo によるメモ化が活用されるケースは少ないかほぼ起こらないが、
   * 将来的な変更への対応と、自身の学習のために使用している。
   */
  const featuredEvents = useMemo(() => {
    return events.filter(event => event.isFeatured)
  }, [events])

  if (events.length === 0) {
    // events が空であった場合の処理。
    // エラーでは無く、純粋に「この地域に開催予定のイベントが無い」状態なので、
    // そのメッセージを含んだ JSX を返すべきだが、今回は省略。
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="grow">
        <FeaturedEventsCarousel events={featuredEvents} />
        <EventCardsSection title="イベント一覧" events={events} />

        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <HostEventPrompt />
          <HelpEventPrompt />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocalEventListPage;
