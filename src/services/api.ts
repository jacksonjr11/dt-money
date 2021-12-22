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
        {
          id: "1",
          title: "Freelancer de Website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: "2",
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 400,
          createdAt: new Date("2021-02-14 08:00:00"),
        },
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
