import React from 'react';
import { Link } from "react-router-dom";

import type { CommunityEvent } from '../types/CommunityEvent';
import { EventCard } from './EventCard';


interface EventCardsSectionProps {
  title: string;
  events: CommunityEvent[];
}

export const EventCardsSection: React.FC<EventCardsSectionProps> = ({ title, events }) => {
  // イベントの配列が空、または存在しない場合は、このセクション自体をレンダリングしない。
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="p-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
        {title}
      </h2>

      <div className="text-center mb-8">
        <Link to="/events/filter"
              className={[
                "inline-block",
                "bg-orange-400",
                "text-white",
                "font-semibold",
                "py-2",
                "px-6",
                "rounded-md",
                "shadow-md",
                "hover:bg-orange-500",
                "hover:shadow-lg",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-indigo-400",
                "focus:ring-opacity-75",
                "active:bg-indigo-700",
                "transition-all",
                "duration-150",
                "ease-in-out"
              ].join(" ")}
        >
          イベントを絞り込む・検索する (準備中)
        </Link>
      </div>

      <div className={[
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8"
      ].join(" ")}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {/* 将来的に「もっと見る」ボタンなどをここに配置することも可能
      <div className="text-center mt-8">
        <Link to="/all-events">
          すべてのイベントを見る &rarr;
        </Link>
      </div>
      */}
    </section>
  );
};
