import axios from "axios";
import { createServer } from "miragejs";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transactions",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});
