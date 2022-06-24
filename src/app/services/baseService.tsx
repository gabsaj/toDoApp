import axios from "axios";

export class BaseService {
  protected instance = axios.create({
    baseURL: "http://localhost3000/",
  });
}
