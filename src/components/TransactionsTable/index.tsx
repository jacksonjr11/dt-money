import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
          {transactions.length ? (
            transactions.map((element, index) => (
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
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{textAlign: 'center'}}>Não há transações cadastradas</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
