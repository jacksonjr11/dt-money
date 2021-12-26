import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);

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
