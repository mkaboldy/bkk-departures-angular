import { Station } from './station';

export interface BkkStations {
  code: string;
  currentTime: number;
  stations: Station[];
  status: string;
  text: string;
  version: number;
}
