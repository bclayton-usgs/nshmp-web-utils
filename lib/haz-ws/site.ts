import { Location } from './location';

export interface Site {
  location: Location;
  vs30: number;
  vsInferred: boolean;
  z1p0: number;
  z2p5: number;
}
