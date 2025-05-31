export type EventLocation = {
  /**
   * 正式な住所 (必須)
   *
   * 地図サービスでの検索や、地域外からの参加者の案内に使用。
   * 例: "埼玉県〇〇市△△1-2-3"
   */
  readonly address: string;

  /**
   * 会場名 (任意)
   *
   * 例: "〇〇公園 中央広場", "△△公民館 多目的ホール"
   */
  readonly venueName?: string;

  /**
   * アクセスに関する補足情報 (任意)
   *
   * 例: "〇〇駅東口から徒歩5分 (駅前に案内図あり)", "図書館となり。駐車場は近隣コインパーキングをご利用ください。"
   * 地図だけでは分かりにくい場合の補足や、ローカルな目印、交通手段の補足など。
   */
  readonly accessNotes?: string;
};

export type EventSchedule = {
  /**
   * 開始日時 (必須)
   *
   * ISO 8601 形式の文字列 (例: "2025-07-07T10:00:00+09:00")
   * 行事の開始日時
   */
  readonly startDateTime: string;

  /**
   * 終了日時 (任意)
   *
   * ISO 8601 形式の文字列 (例: "2025-07-07T10:00:00+09:00")
   * これが指定されていれば、明確な「期間終了」もしくは「終了時刻」であることを示す。
   * 指定されていなければ終了日時は不定、以下の notes に補足があることを期待する。
   */
  readonly endDateTime?: string;

  /**
   * 補足項目 (任意)
   *
   * - 毎週土曜日開催（祝日を除く）
   * - 7月中は毎日10時～16時まで開館
   * 等の不定期に近い、複雑な開催ルールや例外日などの記載用。
   */
  readonly notes?: string;
};

export type EventFee = {
  /**
   * イベント参加が無料かどうか。(必須)
   *
   * - true: 参加に際して基本的な料金が発生しない。
   * - false: 何らかの参加料金が必須である。
   * 「子供無料」のような条件付き無料の場合は、false とし、詳細は description に記述する。
   */
  readonly isFreeToJoin: boolean;

  /**
   * 料金に関する表示用の詳細テキスト。(必須)
   *
   * isFreeToJoin が true の場合でも、「無料（要予約）」のような補足が可能。
   * isFreeToJoin が false の場合は、以下の様な具体的な料金体系を記述する。
   *   - 大人1000円、子供500円
   *   - 子供無料
   * この項目は、料金情報を表示する際には必ず参照されることを想定。
   */
  readonly description: string;
};

/**
 * イベントの主題とや主たるジャンルを示すための文字列。
 *
 * ひとつだけ選択される。
 */
type EventCategory =
  | "祭り・催事"
  | "スポーツ・健康"
  | "学習・講座"
  | "アート・文化"
  | "地域活動・ボランティア"
  | "交流・ミートアップ"
  | "その他";

/**
 * イベントの特性や補助的な情報を示すための文字列。
 *
 * 当てはまるものが複数選択される。
 */
type EventTag =
  | "初心者歓迎"
  | "経験者向け"
  | "こども向け"
  | "親子参加OK"
  | "託児サービスあり"
  | "シニア向け"
  | "ペット同伴可"
  | "駐車場あり"
  | "雨天決行"
  | "雨天中止"
  | "小雨決行"
  | "持ち物不要"
  | "飲食出店あり"
  | "飲食物持ち込み禁止";

/**
 * ラベルと URL のペア
 *
 * ラベルは任意
 */
export type LabeledLink = {
  readonly label?: string;
  readonly url: string;
};

/**
 * イベントの性質を表す情報
 */
export type EventType = {
  readonly mainCategory: EventCategory;
  readonly tags: EventTag[];
  readonly format:
    | "オフライン"
    | "オンライン"
    | "ハイブリッド (オンライン参加可)";

  /**
   * 屋内外情報 (任意)
   *
   * format に「オフライン」か「ハイブリッド」が選択された場合に以下の情報を期待する。
   */
  readonly physicalSetting?: "屋内" | "屋外";

  /**
   * オンライン開催の場合の URL 情報（任意）
   */
  readonly onlineUrl?: LabeledLink;
};

export type EventOrganizer = {
  /**
   * 主催者名 (必須)
   *
   * 団体名、グループ名、または個人の氏名。
   * 例: 「〇〇町内会」「 地域ボランティアサークル・スマイル」 「山田 太郎」
   */
  readonly name: string;

  /**
   * 連絡先電話番号 (任意)
   */
  readonly phone?: string;

  /**
   * 連絡先メールアドレス (任意)
   *
   * イベントに関する問い合わせ先として。
   */
  readonly email?: string;

  /**
   * 主催者や主催組織の簡単な紹介やプロフィール (任意)
   *
   * どんな団体なのか、どんな人が主催しているのか、といった補足情報。
   *   「私たちは〇〇地区で月一回、子供向けの工作教室を開いています！」
   *   「地域を盛り上げたい有志のグループです。」
   * 等々。
   */
  readonly profileText?: string;

  /**
   * 主催者の写真や主催組織のロゴ画像など (任意)
   */
  readonly imageUrl?: string;

  /**
   * リンク URL (任意)
   *
   * 公式サイト、SNS 等の URL 等。
   */
  readonly urls?: LabeledLink[];
};

/**
 * 詳細なイベント情報の集約エンティティ
 */
export type CommunityEvent = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly type: EventType;
  readonly requiresReservation: boolean;
  readonly fee: EventFee;
  readonly location?: EventLocation;
  readonly schedule: EventSchedule;
  readonly organizer: EventOrganizer;
  readonly capacity?: number;
  readonly imageUrls?: string[];
  readonly isFeatured?: boolean;
};
