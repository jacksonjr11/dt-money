import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface propsTransactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<propsTransactions[]>([]);

  useEffect(() => {
    api("/transactions")
      .then((response) => {
        setTransactions(response.data.transactions);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((element, index) => (
            <tr key={index}>
              <td>{element.title}</td>
              <td className={element.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(element.amount)}
              </td>
              <td>{element.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(element.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
