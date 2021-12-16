import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface propsTransactions {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<propsTransactions[]>([]);

  useEffect(() => {
    api("/transactions")
      .then((response) => {
        setTransactions(response.data);
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
            <tr>
              <td>{element.title}</td>
              <td className={element.type === "withdraw" ? 'withdraw' : 'deposit'}>{element.amount}</td>
              <td>{element.category}</td>
              <td>{element.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
