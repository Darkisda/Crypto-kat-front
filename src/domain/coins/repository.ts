import { Model } from "./model";

export interface Repository {
  findAll(): Promise<Model[]>;
}
