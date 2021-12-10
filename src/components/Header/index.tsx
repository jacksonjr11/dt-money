import {Container,Content} from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
