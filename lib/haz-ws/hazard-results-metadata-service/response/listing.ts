import { DataType } from './data-type';

export interface Listing {
  bucket: string;
  dataType: DataType;
  path: string;
  user: string;
}
