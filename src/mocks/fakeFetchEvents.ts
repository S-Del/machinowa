import type { CommunityEvent } from "../types/CommunityEvent";


const mockEvents: CommunityEvent[] = [{
  id: 'event-001-summer-festival',
  title: 'わくわく！サンプル市 夏祭り2025',
  description: '家族みんなで楽しめる伝統的な夏祭りです。模擬店や盆踊り、子供向けのゲームコーナーも充実！夕方からは打ち上げ花火も予定しています。夏の思い出を一緒に作りましょう！',
  type: {
    mainCategory: '祭り・催事',
    tags: ['こども向け', '親子参加OK', '飲食出店あり', '雨天決行'],
    format: 'オフライン',
    physicalSetting: '屋外',
  },
  requiresReservation: false,
  fee: {
    isFreeToJoin: true,
    description: '入場無料（模擬店・ゲームは別途有料）',
  },
  location: {
    address: '埼玉県サンプル市中央1-2-3 サンプル中央公園',
    venueName: 'サンプル中央公園 多目的広場',
    accessNotes: 'サンプル駅より徒歩10分。臨時駐車場あり（台数に限りがあります）。',
  },
  schedule: {
    startDateTime: '2025-07-20T15:00:00+09:00',
    endDateTime: '2025-07-20T21:00:00+09:00',
    notes: '雨天決行ですが、荒天の場合は一部内容変更または中止の可能性があります。当日の朝に市HPで告知します。',
  },
  organizer: {
    name: 'サンプル市夏祭り実行委員会',
    email: 'natsumatsuri@sample-city.example.com',
    profileText: 'サンプル市の地域活性化を目指して活動する市民グループと市役所の共同開催です。',
    urls: [{
      label: '市HPイベントページ',
      url: 'https://sample-city.example.com/natsumatsuri2025'
    }],
  },
  imageUrls: ["/images/festival.jpg"],
  isFeatured: true
},
{
  id: 'event-002-tea-ceremony',
  title: 'はじめての茶道体験教室',
  description: '日本の伝統文化である茶道に触れてみませんか？経験豊富な先生が、お茶の点て方から作法まで丁寧に指導します。静かな空間で心落ち着くひとときを。和菓子付き。',
  type: {
    mainCategory: '学習・講座',
    tags: ['初心者歓迎'],
    format: 'オフライン',
    physicalSetting: '屋内',
  },
  requiresReservation: true,
  fee: {
    isFreeToJoin: false,
    description: '参加費：2,000円（抹茶・和菓子代込み）',
  },
  location: {
    address: '埼玉県サンプル市緑町4-5-6 サンプル公民館',
    venueName: 'サンプル公民館 和室「松風」',
    accessNotes: 'サンプル緑バス停より徒歩3分。',
  },
  schedule: {
    startDateTime: '2025-06-15T10:00:00+09:00',
    endDateTime: '2025-06-15T12:00:00+09:00',
    notes: '持ち物：白い靴下（お持ちでない場合は貸出あり）。服装は普段着で構いません。',
  },
  organizer: {
    name: 'サンプル市文化協会 茶道部',
    phone: '090-1234-5678',
    profileText: '地域に日本の伝統文化を広める活動をしています。初心者向けの体験教室を定期開催。',
  },
  capacity: 10,
  imageUrls: ["/images/tea-ceremony.jpg"],
  isFeatured: true,
},
{
  id: 'event-003-parent-child-tennis',
  title: '親子で楽しむ！はじめてのテニス教室',
  description: '広いテニスコートで、親子一緒にテニスを楽しみませんか？元プロ選手が基本から優しく指導します。ラケットやボールは無料貸出あり。運動不足解消にも！',
  type: {
    mainCategory: 'スポーツ・健康',
    tags: ['親子参加OK', '初心者歓迎', 'こども向け', '駐車場あり', '持ち物不要'],
    format: 'オフライン',
    physicalSetting: '屋外',
  },
  requiresReservation: true,
  fee: {
    isFreeToJoin: false,
    description: '1組（親子2名）：1,500円',
  },
  location: {
    address: '埼玉県サンプル市スポーツの丘7-8-9 サンプルスポーツ公園',
    venueName: 'サンプルスポーツ公園 テニスコート (Aコート)',
    accessNotes: '無料駐車場100台完備。公園入口からすぐ。',
  },
  schedule: {
    startDateTime: '2025-06-22T10:00:00+09:00',
    endDateTime: '2025-06-22T11:30:00+09:00',
    notes: '運動しやすい服装と靴でお越しください。飲み物は各自ご持参ください。雨天中止（前日夕方に連絡します）。',
  },
  organizer: {
    name: 'サンプル市テニス連盟',
    email: 'tennis@sample-city-sports.example.com',
    urls: [{ label: '連盟ウェブサイト', url: 'https://sample-city-sports.example.com/tennis' }],
  },
  capacity: 20,
  imageUrls: ['/images/sample-tennis.jpg'], // 要生成
  isFeatured: false,
},
{
  id: 'event-004-online-cooking',
  title: 'おうちで本格イタリアン！オンライン料理教室',
  description: '自宅のキッチンから参加できるオンライン料理教室です。今回は「基本のトマトソースパスタ」と「簡単ティラミス」を作ります。材料は事前にリストをお送りしますのでご準備ください。Zoomを使用します。',
  type: {
    mainCategory: '学習・講座',
    tags: ['初心者歓迎'],
    format: 'オンライン',
    onlineUrl: { label: 'Zoom参加リンク', url: 'https://zoom.example.com/j/1234567890' },
  },
  requiresReservation: true,
  fee: {
    isFreeToJoin: false,
    description: '参加費：1,800円（レシピ資料付き）',
  },
  // location はオンラインなので不要 (undefined)
  schedule: {
    startDateTime: '2025-06-29T11:00:00+09:00',
    endDateTime: '2025-06-29T13:00:00+09:00',
    notes: '事前にZoomアプリのインストールをお願いします。カメラオンでの参加を推奨しますが、オフでも構いません。',
  },
  organizer: {
    name: 'Happy Kitchen オンライン',
    profileText: '料理研究家の田中が主催する、初心者向けのオンライン料理教室です。楽しく美味しい時間をご一緒しましょう！',
    urls: [{
      label: 'Instagram',
      url: 'https://instagram.example.com/happykitchen_online_example'
    }],
  },
  // capacity はオンラインなので任意（設定する場合もある）
  imageUrls: ['/images/sample-online-cooking.jpg'], // 要生成
  isFeatured: false,
}];


/**
 * API サーバーから地域イベントの一覧を取得できることを想定した非同期関数
 */
export const fakeFetchEvents = async (regionId: string): Promise<CommunityEvent[]> => {
  console.debug(`${regionId} のイベント一覧を取得開始`)

  // ローディング表示の実装を行った場合のための 300ms の遅延シミュレーション
  await new Promise(resolve => setTimeout(resolve, 300));

  console.debug(`${regionId} のイベント一覧を取得完了`)

  return mockEvents;
}
