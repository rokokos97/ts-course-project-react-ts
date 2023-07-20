import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock/defaultUser";
import { useState } from "react";
import { GitHubError, GithubUser, LocalGitHubUser } from "types";
import { extactLocalUser } from "utils/extractLocalUser";
import { isGitHubUser } from "utils/typeGuards";

const baseUrl = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null >(defaultUser);
  const fetchUser = async (userName:string ) => {
    const url = baseUrl+userName;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GitHubError

    if(isGitHubUser(user)){
      setUser(extactLocalUser(user));
    } else {
      setUser(null);
    }
  }
  return (
  <Container>
    <Header/>
    {/* передаю порожні данні аби побачити як відображається елемент на сторінці */}
    <Search hasError={!user} onSubmit={fetchUser}/>
    {user && (
      <UserCard {...defaultUser } />
    )}
  </Container>
  );
}

export default App;
