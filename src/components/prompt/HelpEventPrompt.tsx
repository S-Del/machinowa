import React from 'react';
import { Link, useParams } from 'react-router-dom'; // お手伝い募集一覧ページへ遷移するため

export const HelpEventPrompt: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center"> {/* 例: 緑系の背景色 */}
      <h3 className="text-xl font-semibold mb-3">
        あなたのスキルを活かしませんか？
      </h3>
      <p className="text-gray-700 mb-5">
        得意なことや、少しの空き時間を使って、地域のイベントをサポートしませんか？<br />
        やりがいのあるお手伝いがきっと見つかります。
      </p>
      <Link
        to={`/events/${regionId}/opportunities`}
        className={[
          "inline-block",
          "bg-orange-400",
          "hover:bg-orange-500",
          "hover:scale-105",
          "active:bg-orange-400",
          "text-white",
          "font-bold",
          "py-3",
          "px-6",
          "rounded-lg",
          "shadow-md",
          "hover:shadow-lg",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring--400",
          "focus:ring-opacity-75",
          "focus:ring-green-500",
          "transition-all",
          "duration-150",
          "ease-in-out",
          "transform"
        ].join(" ")}
      >
        イベントを手伝う
      </Link>
    </div>
  );
};
