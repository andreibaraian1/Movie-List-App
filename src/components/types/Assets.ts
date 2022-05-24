export interface Asset {
  id: number;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
}
export interface Video {
  id: number;
  key: string;
  official: boolean;
  site: string;
  type: string;
}
