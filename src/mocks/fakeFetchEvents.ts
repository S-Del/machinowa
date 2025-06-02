import type { CommunityEvent } from "../types/CommunityEvent";

const mockEvents: CommunityEvent[] = [
  {
    id: "event-001-summer-festival",
    title: "わくわく！サンプル市 夏祭り2025",
    description:
      "家族みんなで楽しめる伝統的な夏祭りです。模擬店や盆踊り、子供向けのゲームコーナーも充実！夕方からは打ち上げ花火も予定しています。夏の思い出を一緒に作りましょう！",
    type: {
      mainCategory: "祭り・催事",
      tags: ["こども向け", "親子参加OK", "飲食出店あり", "雨天決行"],
      format: "オフライン",
      physicalSetting: "屋外",
    },
    requiresReservation: false,
    fee: {
      isFreeToJoin: true,
      description: "入場無料（模擬店・ゲームは別途有料）",
    },
    location: {
      address: "埼玉県サンプル市中央1-2-3 サンプル中央公園",
      venueName: "サンプル中央公園 多目的広場",
      accessNotes: "サンプル駅より徒歩10分。臨時駐車場あり（台数に限りがあります）。",
    },
    schedule: {
      startDateTime: "2025-07-20T15:00:00+09:00",
      endDateTime: "2025-07-20T21:00:00+09:00",
      notes:
        "雨天決行ですが、荒天の場合は一部内容変更または中止の可能性があります。当日の朝に市HPで告知します。",
    },
    organizer: {
      name: "サンプル市夏祭り実行委員会",
      email: "natsumatsuri@sample-city.example.com",
      profileText: "サンプル市の地域活性化を目指して活動する市民グループと市役所の共同開催です。",
      urls: [
        {
          label: "市HPイベントページ",
          url: "https://sample-city.example.com/natsumatsuri2025",
        },
      ],
    },
    imageUrls: [`${import.meta.env.BASE_URL}images/festival.jpg`],
    isFeatured: true,
  },
  {
    id: "event-002-tea-ceremony",
    title: "はじめての茶道体験教室",
    description:
      "日本の伝統文化である茶道に触れてみませんか？経験豊富な先生が、お茶の点て方から作法まで丁寧に指導します。静かな空間で心落ち着くひとときを。和菓子付き。",
    type: {
      mainCategory: "学習・講座",
      tags: ["初心者歓迎"],
      format: "オフライン",
      physicalSetting: "屋内",
    },
    requiresReservation: true,
    fee: {
      isFreeToJoin: false,
      description: "参加費：2,000円（抹茶・和菓子代込み）",
    },
    location: {
      address: "埼玉県サンプル市緑町4-5-6 サンプル公民館",
      venueName: "サンプル公民館 和室「松風」",
      accessNotes: "サンプル緑バス停より徒歩3分。",
    },
    schedule: {
      startDateTime: "2025-06-15T10:00:00+09:00",
      endDateTime: "2025-06-15T12:00:00+09:00",
      notes: "持ち物：白い靴下（お持ちでない場合は貸出あり）。服装は普段着で構いません。",
    },
    organizer: {
      name: "サンプル市文化協会 茶道部",
      phone: "090-1234-5678",
      profileText:
        "地域に日本の伝統文化を広める活動をしています。初心者向けの体験教室を定期開催。",
    },
    capacity: 10,
    imageUrls: [`${import.meta.env.BASE_URL}images/tea-ceremony.jpg`],
    isFeatured: true,
  },
  {
    id: "event-003-parent-child-tennis",
    title: "親子で楽しむ！はじめてのテニス教室",
    description:
      "広いテニスコートで、親子一緒にテニスを楽しみませんか？元プロ選手が基本から優しく指導します。ラケットやボールは無料貸出あり。運動不足解消にも！",
    type: {
      mainCategory: "スポーツ・健康",
      tags: ["親子参加OK", "初心者歓迎", "こども向け", "駐車場あり", "持ち物不要"],
      format: "オフライン",
      physicalSetting: "屋外",
    },
    requiresReservation: true,
    fee: {
      isFreeToJoin: false,
      description: "1組（親子2名）：1,500円",
    },
    location: {
      address: "埼玉県サンプル市スポーツの丘7-8-9 サンプルスポーツ公園",
      venueName: "サンプルスポーツ公園 テニスコート (Aコート)",
      accessNotes: "無料駐車場100台完備。公園入口からすぐ。",
    },
    schedule: {
      startDateTime: "2025-06-22T10:00:00+09:00",
      endDateTime: "2025-06-22T11:30:00+09:00",
      notes:
        "運動しやすい服装と靴でお越しください。飲み物は各自ご持参ください。雨天中止（前日夕方に連絡します）。",
    },
    organizer: {
      name: "サンプル市テニス連盟",
      email: "tennis@sample-city-sports.example.com",
      urls: [{ label: "連盟ウェブサイト", url: "https://sample-city-sports.example.com/tennis" }],
    },
    capacity: 20,
    imageUrls: [`${import.meta.env.BASE_URL}images/tennis.jpg`],
    isFeatured: false,
  },
  {
    id: "event-004-online-cooking",
    title: "おうちで本格イタリアン！オンライン料理教室",
    description:
      "自宅のキッチンから参加できるオンライン料理教室です。今回は「基本のトマトソースパスタ」と「簡単ティラミス」を作ります。材料は事前にリストをお送りしますのでご準備ください。Zoomを使用します。",
    type: {
      mainCategory: "学習・講座",
      tags: ["初心者歓迎"],
      format: "オンライン",
      onlineUrl: { label: "Zoom参加リンク", url: "https://zoom.example.com/j/1234567890" },
    },
    requiresReservation: true,
    fee: {
      isFreeToJoin: false,
      description: "参加費：1,800円（レシピ資料付き）",
    },
    // location はオンラインなので不要 (undefined)
    schedule: {
      startDateTime: "2025-06-29T11:00:00+09:00",
      endDateTime: "2025-06-29T13:00:00+09:00",
      notes:
        "事前にZoomアプリのインストールをお願いします。カメラオンでの参加を推奨しますが、オフでも構いません。",
    },
    organizer: {
      name: "Happy Kitchen オンライン",
      profileText:
        "料理研究家の田中が主催する、初心者向けのオンライン料理教室です。楽しく美味しい時間をご一緒しましょう！",
      urls: [
        {
          label: "Instagram",
          url: "https://instagram.example.com/happykitchen_online_example",
        },
      ],
    },
    // capacity はオンラインなので任意（設定する場合もある）
    imageUrls: [`${import.meta.env.BASE_URL}images/online-cooking.jpg`],
    isFeatured: false,
  },
  {
    id: 'event-005-bouldering-tournament',
    title: 'サンプル市ボルダリングコンペ2025 - 熱くなれ！',
    description: '初心者から上級者まで楽しめるボルダリング大会を開催！豪華賞品も用意しています。自分の限界に挑戦し、仲間と切磋琢磨しよう。観戦無料！',
    type: {
      mainCategory: 'スポーツ・健康',
      tags: ['経験者向け', '初心者歓迎', '駐車場あり'], // 参加クラス分けがあるイメージ
      format: 'オフライン',
      physicalSetting: '屋内',
    },
    requiresReservation: true, // 参加には予約必須
    fee: {
      isFreeToJoin: false,
      description: '参加費: 3,000円 (保険料込、観戦は無料)',
    },
    location: {
      address: '埼玉県サンプル市クライム壁町10-1 サンプルクライミングジム',
      venueName: 'サンプルクライミングジム「ロックフェイス」',
      accessNotes: 'サンプルクライム駅から徒歩8分。専用駐車場30台。',
    },
    schedule: {
      startDateTime: '2025-07-06T09:00:00+09:00',
      endDateTime: '2025-07-06T17:00:00+09:00',
      notes: 'クラス別に競技時間が異なります。詳細はウェブサイトをご確認ください。動きやすい服装でお越しください。',
    },
    organizer: {
      name: 'サンプル市クライミング連盟',
      email: 'climbing@sample-city-sports.example.com',
      profileText: 'ボルダリングの普及と競技力向上を目指して活動しています。',
      urls: [{ label: '大会特設サイト', url: 'https://sample-city-sports.example.com/bouldering2025' }],
    },
    capacity: 100, // 参加者定員
    imageUrls: [`${import.meta.env.BASE_URL}images/bouldering.jpg`],
    isFeatured: true, // 注目イベントにしてみましょう
  },
  {
    id: 'event-006-river-cleanup',
    title: '未来に残そう！サンプル川クリーンアップ大作戦',
    description: '私たちの街を流れるサンプル川を、みんなで綺麗にしませんか？大人も子供も大歓迎！清掃後は軽食を用意しています。軍手、ゴミ袋はこちらで用意します。',
    type: {
      mainCategory: '地域活動・ボランティア',
      tags: ['こども向け', '親子参加OK', '初心者歓迎' /* '誰でも歓迎'の代わり */, '雨天中止'],
      format: 'オフライン',
      physicalSetting: '屋外',
    },
    requiresReservation: false, // 飛び入り参加OKのイメージ
    fee: {
      isFreeToJoin: true,
      description: '参加無料！動きやすく汚れてもよい服装でご参加ください。',
    },
    location: {
      address: '埼玉県サンプル市リバーサイド サンプル川河川敷公園',
      venueName: 'サンプル川河川敷公園 (中央橋下集合)',
      accessNotes: 'サンプル駅から徒歩15分。公共交通機関をご利用ください。',
    },
    schedule: {
      startDateTime: '2025-06-08T09:30:00+09:00',
      endDateTime: '2025-06-08T11:30:00+09:00',
      notes: '雨天の場合は翌週に順延します。順延の際は前日17時に市HPでお知らせします。帽子、飲み物を持参推奨。',
    },
    organizer: {
      name: 'サンプル川を愛する会 & サンプル市環境課',
      phone: '048-XXX-XXXX (市役所代表)',
      profileText: 'サンプル川の環境保全と美化活動を行っている市民団体と市の共同プロジェクトです。',
    },
    // capacity は特に設定しないイメージ
    imageUrls: [`${import.meta.env.BASE_URL}images/river.jpg`],
    isFeatured: false,
  },
  {
    id: 'event-007-card-game-tournament',
    title: '第3回 サンプル市トレーディングカードゲーム大会',
    description: '人気のトレーディングカードゲーム「ミスティック・デュエル」の公認大会！初心者から猛者まで、自慢のデッキで頂点を目指せ！上位入賞者には豪華賞品あり。',
    type: {
      mainCategory: '交流・ミートアップ', // または「その他」
      tags: ['経験者向け', '初心者歓迎'], // トーナメントとは別にフリー対戦卓も用意するイメージ
      format: 'オフライン',
      physicalSetting: '屋内',
    },
    requiresReservation: true, // 事前エントリー制
    fee: {
      isFreeToJoin: false,
      description: '参加費：1,000円 (参加賞あり)',
    },
    location: {
      address: '埼玉県サンプル市駅前2-3-4 サンプル市民ホール',
      venueName: 'サンプル市民ホール 3階 大会議室',
      accessNotes: 'サンプル駅直結。会場内飲食可（ただし指定エリアのみ）。',
    },
    schedule: {
      startDateTime: '2025-07-13T10:00:00+09:00', // 受付開始は9:30など
      endDateTime: '2025-07-13T18:00:00+09:00',
      notes: '大会レギュレーションは公式サイトをご確認ください。デッキ持参。中学生以下は保護者同伴推奨。',
    },
    organizer: {
      name: 'サンプル市カードゲーム協会',
      profileText: '健全なカードゲーム文化の発展とプレイヤー間の交流を目的としています。',
      urls: [{ label: '大会詳細ページ', url: 'https://sample-cardgame.example.com/tournament3' }],
    },
    capacity: 64,
    imageUrls: [`${import.meta.env.BASE_URL}images/card-game.jpg`],
    isFeatured: false,
  },
  {
    id: 'event-008-local-history-walk',
    title: '古地図と歩く！サンプル市の歴史探訪ウォーキングツアー',
    description: '地元の歴史研究家と一緒に、普段何気なく通り過ぎている街角に残る歴史の痕跡を巡ります。古地図を片手に、知られざるサンプル市の魅力に触れてみませんか？約3kmのコースです。',
    type: {
      mainCategory: '学習・講座',
      tags: ['シニア向け', '初心者歓迎' /* '歴史好き'の代わり */, '雨天決行' /* 小雨の場合など */],
      format: 'オフライン',
      physicalSetting: '屋外',
    },
    requiresReservation: true,
    fee: {
      isFreeToJoin: false,
      description: '参加費：500円（資料代・保険料として）',
    },
    location: {
      address: '埼玉県サンプル市中央1-1-1 サンプル駅前広場',
      venueName: 'サンプル駅前広場 時計台下 (集合場所)',
      accessNotes: '歩きやすい靴でご参加ください。飲み物、帽子、雨具（必要な場合）は各自ご用意ください。',
    },
    schedule: {
      startDateTime: '2025-06-21T13:00:00+09:00',
      endDateTime: '2025-06-21T15:30:00+09:00',
      notes: '小雨決行。荒天の場合は中止とし、当日午前9時に主催者SNSで告知します。',
    },
    organizer: {
      name: 'サンプル市歴史散歩の会',
      email: 'historywalk@sample-city-heritage.example.com',
      profileText: 'サンプル市の歴史と文化を後世に伝えるため、様々な活動を行っています。',
    },
    capacity: 20,
    imageUrls: [`${import.meta.env.BASE_URL}images/old-map.jpg`],
    isFeatured: false,
  },
  {
    id: 'event-009-community-garden',
    title: 'みんなで育てる！コミュニティガーデン 春の植え付け体験',
    description: '地域の共有スペース「わくわくファーム」で、夏野菜の苗を一緒に植え付けましょう！土に触れ、種から育てる楽しさを体験できます。収穫祭も予定！初心者、お子様連れ大歓迎。',
    type: {
      mainCategory: '地域活動・ボランティア',
      tags: ['こども向け', '親子参加OK', '初心者歓迎', '持ち物不要' /* 農具など貸出ありの想定 */],
      format: 'オフライン',
      physicalSetting: '屋外',
    },
    requiresReservation: false, // 当日参加もOKだが、事前連絡推奨
    fee: {
      isFreeToJoin: true,
      description: '参加無料！汚れても良い服装、帽子、軍手（あれば）をご持参ください。',
    },
    location: {
      address: '埼玉県サンプル市畑中88 サンプルわくわくファーム',
      venueName: 'サンプルわくわくファーム (現地集合)',
      accessNotes: 'サンプルバス「畑中」バス停下車徒歩5分。駐車場は近隣に少数あり。',
    },
    schedule: {
      startDateTime: '2025-06-07T10:00:00+09:00',
      endDateTime: '2025-06-07T12:00:00+09:00',
      notes: '小雨決行。中止の場合は当日朝SNSで連絡。収穫物は参加者で分配予定。',
    },
    organizer: {
      name: 'わくわくファーム運営組合',
      profileText: '食育とコミュニティ形成を目的とした市民農園です。',
      urls: [{ label: 'ファームのブログ', url: 'https://wakuwakufarm.example.com' }],
    },
    imageUrls: [`${import.meta.env.BASE_URL}images/garden.jpg`],
    isFeatured: true, // 注目イベント
  },
  {
    id: 'event-010-repair-cafe',
    title: 'こわしちゃった？直せるかも！リペア・カフェ＠サンプル',
    description: '壊れた家電製品、おもちゃ、衣類などを持ち寄って、修理が得意なボランティアさんと一緒に修理に挑戦してみませんか？物を大切にする心と、修理の技術を楽しく学べます。相談無料。部品代実費の場合あり。',
    type: {
      mainCategory: '地域活動・ボランティア', // 「学習・講座」の側面も
      tags: ['初心者歓迎' /* '誰でも歓迎'の代わり */], // 'エコ活動', 'スキル交換' のタグも良いですね
      format: 'オフライン',
      physicalSetting: '屋内',
    },
    requiresReservation: false, // 持ち込み相談ベース
    fee: {
      isFreeToJoin: true,
      description: '相談・修理サポート無料（部品代が必要な場合は実費負担）',
    },
    location: {
      address: '埼玉県サンプル市エコプラザ1階 交流スペース',
      venueName: 'サンプル市エコプラザ 交流スペース',
      accessNotes: '毎月第3日曜開催。持ち込み多数の場合はお待ちいただくことがあります。',
    },
    schedule: {
      startDateTime: '2025-07-21T13:00:00+09:00', // 第3日曜と仮定
      endDateTime: '2025-07-21T16:00:00+09:00',
      notes: '修理できないものもありますのでご了承ください。まずはご相談ください。',
    },
    organizer: {
      name: 'サンプル・リペア・ネットワーク',
      email: 'repair-sample@example.com',
      profileText: '「捨てる」から「活かす」へ。地域で修理の輪を広げるボランティアグループです。',
    },
    imageUrls: [`${import.meta.env.BASE_URL}images/repair.jpg`],
    isFeatured: false,
  }
];

/**
 * API サーバーから地域イベントの一覧を取得できることを想定した非同期関数
 */
export const fakeFetchEvents = async (regionId: string): Promise<CommunityEvent[]> => {
  console.debug(`${regionId} のイベント一覧を取得開始`);

  // ローディング表示の実装を行った場合のための 300ms の遅延シミュレーション
  await new Promise((resolve) => setTimeout(resolve, 300));

  console.debug(`${regionId} のイベント一覧を取得完了`);

  return mockEvents;
};

/**
 * IDに基づいて単一のイベント情報を非同期で取得することを模倣する関数
 */
export const fakeFetchEventById = async (eventId: string): Promise<CommunityEvent | undefined> => {
  console.debug(`イベント詳細の取得を開始 ID: ${eventId}`);

  // ローディング表示の実装を行った場合のための遅延シミュレーション
  await new Promise((resolve) => setTimeout(resolve, 250));

  const event = mockEvents.find((e) => e.id === eventId);
  if (event) {
    console.debug(`Event found (ID: ${eventId}):`, event);
  } else {
    console.warn(`Event with ID: ${eventId} not found in mock data.`);
  }

  return event; // 見つからなければ undefined を返す
};
