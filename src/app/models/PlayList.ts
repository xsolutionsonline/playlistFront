import { Song } from "./Song";

export interface PlayList {
    name: string;
    description: string;
    songs:Song[];
  }