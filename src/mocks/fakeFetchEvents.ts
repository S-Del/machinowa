import type { CommunityEvent } from "../types/CommunityEvent";


const mockEvents: CommunityEvent[] = [
  // モックデータを複数件追加予定
];


export const fakeFetchEvents = async (regionId: string): Promise<CommunityEvent[]> => {
  console.debug(`${regionId} のイベント一覧を取得開始`)

  // ローディング表示の実装を行った場合のため
  await new Promise(resolve => setTimeout(resolve, 300));

  console.debug(`${regionId} のイベント一覧を取得完了`)

  return mockEvents;
}
