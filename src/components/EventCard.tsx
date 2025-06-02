import { Link } from "react-router-dom";

import { formatDateForDisplay } from "../utils/isoDateTimeString";
import type { CommunityEvent } from "../types/CommunityEvent";

interface EventCardProps {
  event: CommunityEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const displayDate = formatDateForDisplay(event.schedule.startDateTime);

  return (
    <Link
      to={`/event/${event.id}`}
      className={[
        "block",
        "bg-white",
        "rounded-lg",
        "shadow-lg",
        "hover:shadow-xl",
        "transition-all",
        "duration-200",
        "ease-in-out",
        "overflow-hidden",
        "group",
        "focus:shadow-xl",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-blue-500",
        "focus:ring-opacity-60",
      ].join(" ")}
      aria-label={`イベント「${event.title}」の詳細を見る`}
    >
      <div className="h-48 w-full bg-gray-200 overflow-hidden">
        {event.imageUrls && event.imageUrls.length > 0 ? (
          <img
            src={event.imageUrls[0]}
            alt={`イベント「${event.title}」の画像`}
            className={[
              "w-full",
              "h-full",
              "object-cover",
              "transition-transform",
              "duration-300",
              "ease-in-out",
              "group-hover:scale-105",
            ].join(" ")}
          />
        ) : (
          // 画像がない場合のプレースホルダー
          <div
            className={[
              "w-full h-full flex items-center justify-center bg-slate-100 text-slate-400",
            ].join(" ")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* --- 情報エリア --- */}
      <div className="p-4">
        {/* タイトル (常に表示) */}
        <h3
          className={[
            "text-base",
            "sm:text-lg",
            "font-semibold",
            "text-gray-800",
            "group-hover:text-blue-600",
            "transition-colors",
            "duration-150",
            "truncate",
          ].join(" ")}
          title={event.title}
        >
          {event.title}
        </h3>

        {/* 日時 (xl サイズ以上の画面でのみ表示) */}
        <p className="hidden md:flex md:items-center text-xs sm:text-sm text-gray-600 mt-2">
          {/* Heroicons のカレンダーアイコン (例) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1.5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {displayDate}
        </p>
      </div>
    </Link>
  );
};
