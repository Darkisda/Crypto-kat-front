import { Model, Repository } from "../domain/coins";
import api from "../api";

export class Service implements Repository {
  async findAll() {
    const response = await api.get<Model[]>("coins");

    return response.data;
  }
}
