import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import type { CommunityEvent } from "../types/CommunityEvent";
import { fakeFetchEventById } from "../mocks/fakeFetchEvents";

const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<CommunityEvent | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!eventId) {
      console.error("Event ID is undefined");
      setEvent(null);
      setIsLoading(false);
      return;
    }

    const loadEvent = async () => {
      setIsLoading(true);
      try {
        const fetchedEvent = await fakeFetchEventById(eventId);
        setEvent(fetchedEvent || null);
      } catch (error) {
        console.error("Failed to fetch event details:", error);
        setEvent(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvent();
  }, [eventId]);

  // ローディング中の表示
  if (isLoading || event === undefined) {
    // eventがundefinedの間もローディングとみなす
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow container mx-auto px-4 py-8 text-center">
          <p className="text-xl text-gray-600">イベント情報を読み込んでいます...</p>
        </main>
        <Footer />
      </div>
    );
  }

  // イベントが見つからない場合の表示
  if (!event) {
    // event が null の場合
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">イベントが見つかりません</h1>
          <p className="text-gray-700 mb-6">
            お探しのイベントは存在しないか、URL が間違っている可能性があります。
          </p>
          <Link to="/" className="text-blue-600 hover:underline">
            &larr; トップページに戻る
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header /> {/* 1. ヘッダー */}
      <main className="grow container mx-auto px-4 py-8">
        {/* 2. イベント画像（あれば） */}
        {event.imageUrls && event.imageUrls.length > 0 && (
          <div className="mb-6 max-h-[70vh] overflow-hidden shadow-xl">
            {" "}
            {/* 高さを少し大きく */}
            <img
              src={event.imageUrls[0]}
              alt={`イベント「${event.title}」のメイン画像`}
              className="w-full h-full object-cover"
            />
            {/* もし複数の画像があれば、ここに小さなギャラリーやスライダーを配置することも考えられる */}
          </div>
        )}

        {/* 3. 詳細 */}
        <article className="bg-white p-6 sm:p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>

          {/* ここ以降にイベントの各種詳細情報を表示していく */}
          <section className="mb-6">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {event.description}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">開催日時</h2>
            <p className="text-gray-700">
              {new Date(event.schedule.startDateTime).toLocaleString("ja-JP", {
                dateStyle: "long",
                timeStyle: "short",
              })}{" "}
              {event.schedule.endDateTime &&
                ` ～ ${new Date(event.schedule.endDateTime).toLocaleString("ja-JP", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}`}{" "}
            </p>
            {event.schedule.notes && (
              <p className="text-sm text-gray-500 mt-1">{event.schedule.notes}</p>
            )}
          </section>

          {event.location && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">開催場所</h2>
              {event.location.venueName && (
                <p className="text-lg font-medium text-gray-700">{event.location.venueName}</p>
              )}
              <p className="text-gray-700">{event.location.address}</p>
              {event.location.accessNotes && (
                <p className="text-sm text-gray-500 mt-1">{event.location.accessNotes}</p>
              )}
              <a
                href={`https://maps.google.com/?q=埼玉県春日部市中央１丁目?q=${encodeURIComponent(event.location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm inline-block mt-1"
              >
                地図で見る (Google Maps)
              </a>
            </section>
          )}

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">参加料金</h2>
            <p className="text-gray-800 text-lg">{event.fee.description}</p>
            {event.fee.isFreeToJoin && (
              <span
                className={[
                  "inline-block",
                  "bg-green-100",
                  "text-green-700",
                  "text-xs",
                  "font-semibold",
                  "mt-1",
                  "px-2",
                  "py-0.5",
                  "rounded",
                ].join(" ")}
              >
                一部または全て無料
              </span>
            )}
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">
              予約について
            </h2>
            <p className="text-gray-800 text-lg">
              {event.requiresReservation ? "要予約" : "予約不要"}
            </p>
          </section>

          {event.capacity !== undefined && ( // capacity が 0 の場合も表示されるように undefined でチェック
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">定員</h2>
              <p className="text-gray-800 text-lg">{event.capacity} 名</p>
            </section>
          )}

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">その他情報</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>カテゴリ:</strong> {event.type.mainCategory}
              </p>
              {event.type.tags.length > 0 && (
                <p>
                  <strong>タグ:</strong> {event.type.tags.join("、 ")}
                </p>
              )}
              <p>
                <strong>開催形式:</strong> {event.type.format}
                {event.type.format !== "オンライン" &&
                  event.type.physicalSetting &&
                  ` (${event.type.physicalSetting})`}
              </p>
            </div>
            {event.type.format !== "オフライン" && event.type.onlineUrl && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">オンライン参加</h2>
                <a
                  href={event.type.onlineUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  {event.type.onlineUrl.label || "参加用リンク"}
                </a>
              </section>
            )}
          </section>

          <section className="mb-6 pt-6 border-t mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">主催者情報</h2>

            {/*
              以下はコンポーネント化（カード化）も可能。
              現状は再利用の予定が無いのでこのまま。
            */}
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="text-xl font-semibold text-slate-700">{event.organizer.name}</h3>
              {event.organizer.profileText && (
                <p className="text-sm text-slate-600 mt-1 mb-3 whitespace-pre-line">
                  {event.organizer.profileText}
                </p>
              )}
              {event.organizer.email && (
                <p className="text-sm text-slate-600">
                  <span className="font-medium">メール:</span>
                  <a
                    href={`mailto:${event.organizer.email}`}
                    className="text-blue-600 hover:underline ml-1"
                  >
                    {event.organizer.email}
                  </a>
                </p>
              )}
              {event.organizer.phone && (
                <p className="text-sm text-slate-600">
                  <span className="font-medium">電話:</span> {event.organizer.phone}
                </p>
              )}
              {event.organizer.urls && event.organizer.urls.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-slate-700 mb-1">関連リンク:</p>
                  <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                    {event.organizer.urls.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {link.label || link.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link to="/" className="text-blue-600 hover:underline">
              &larr; トップページへ戻る
            </Link>
          </div>
        </article>
      </main>
      <Footer /> {/* 4. フッター */}
    </div>
  );
};

export default EventDetailPage;
