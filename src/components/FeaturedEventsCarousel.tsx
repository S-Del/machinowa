import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { CommunityEvent } from "../types/CommunityEvent";
import { Link } from "react-router-dom";


interface FeaturedEventsProps {
  readonly events: CommunityEvent[];
}


export const FeaturedEventsCarousel: React.FC<FeaturedEventsProps> = ({events}) => {
  // 注目のイベントが存在しない場合はこのコンポーネントは何もレンダリングしない。
  // この様にしておくことで、
  // このコンポーネントより下でレンダリングされるコンポーネントがページ上部へ引き上げられる。
  // 結果として、「イベント一覧」や「イベントを開く」が上部に移動し、
  // ユーザーの目に止まって欲しいという期待がある。
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-10">
      <Swiper modules={[Navigation, Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={events.length > 1}>
        {events.map(event => (
          <SwiperSlide key={event.id}>
            <Link to={`/event/${event.id}`}
                  className={[
                    "block",
                    "w-full",
                    "h-[30vh]",
                    "md:h-[40vh]",
                    "lg:h-[50vh]",
                    "xl:h-[60vh]",
                    "relative",
                    "group",
                    "overflow-hidden",
                    "bg-gray-800"
                  ].join(" ")}>
              <div className="absolute inset-0 flex items-center justify-center">{
                event.imageUrls && event.imageUrls.length > 0 ? (
                  <img src={event.imageUrls[0]}
                        alt={`${event.title}の画像`}
                        className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="bg-gray-300">画像無し</div>
                )
              }</div>
              <div className={[
                "absolute",
                "inset-0",
                "bg-gradient-to-t",
                "from-black/70",
                "via-black/30",
                "to-transparent",
                "p-4",
                "flex",
                "flex-col",
                "justify-end"
              ].join(" ")}>
                <h3 className={[
                  "text-white text-2xl md:text-3xl font-bold drop-shadow-md group-hover:underline"
                ].join(" ")}>
                  {event.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
};
