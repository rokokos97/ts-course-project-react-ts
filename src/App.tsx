import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";


function App() {
  return (
  <Container>
    <Header/>
    {/* передаю порожні данні аби побачити як відображається елемент на сторінці */}
    <Search hasError onSubmit={()=>{}}/>
  </Container>
  );
}

export default App;
