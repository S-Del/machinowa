import type { RegionInfo } from "../types/RegionInfo";

const mockRegions: RegionInfo[] = [
  {
    id: "sample",
    displayName: "サンプル市",
  },
  // 複数の地域情報が格納される予定
  //{
  //  id: "mirai",
  //  displayName: "みらい市"
  //}
];

/**
 * API サーバーから RegionInfo の配列を取得できることを想定した非同期関数
 */
export const fakeFetchRegions = async (): Promise<RegionInfo[]> => {
  return mockRegions;
};
