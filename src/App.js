import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";

import List from "./components/List";
import { ItemProvider } from "./components/ItemContext";
import StyleContainer from "./components/StyleContainer";

function App() {
  return (
    <ItemProvider>
      <div className="bg-zinc-100 flex flex-col p-6 w-full h-screen">
        <StyleContainer>
          <Logo />
          <Form />
          <List />
          <Stats />
        </StyleContainer>
      </div>
    </ItemProvider>
  );
}

export default App;
