import axios from "axios";
import { createServer, Model } from "miragejs";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
       
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});
