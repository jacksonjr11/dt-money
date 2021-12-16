import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: 'Transactions',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transactions',
          amount: -900,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transactions',
          amount: 500,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transactions',
          amount: -500,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transactions',
          amount: 500,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },  {
          id: 2,
          title: 'Transactions',
          amount: -500,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transactions',
          amount: 500,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyles/>
    </>
  );
}
