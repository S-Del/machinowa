import React from 'react';
import { Link, useParams} from 'react-router-dom';

export const HostEventPrompt: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold mb-3">
        あなたのイベントを掲載しませんか？
      </h3>
      <p className="text-gray-700 mb-5">
        地域を盛り上げる素敵なイベント企画をお持ちのあなた！<br />
        「街の輪」で告知して、たくさんの人に参加してもらいましょう。
      </p>
      <Link
        to={`/events/${regionId}/new`}
        className={[
          "inline-block",
          "bg-orange-400",
          "text-white",
          "font-bold",
          "py-3",
          "px-6",
          "rounded-lg",
          "shadow-md",
          "hover:bg-orange-500",
          "hover:shadow-lg",
          "hover:scale-105",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-orange-400",
          "focus:ring-opacity-75",
          "active:bg-orange-700",
          "transition-all",
          "duration-150",
          "ease-in-out",
          "transform"
        ].join(" ")}
      >
        イベントを掲載・開催する
      </Link>
    </div>
  );
};
