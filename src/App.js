import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";


const style = {
  responsive: "768px",
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8A1C4A",
  }

}

function App() {
  return (
    <ThemeProvider theme = {style}>
      <GlobalStyles/>
      <Header />
    </ThemeProvider>
  );
}

export default App;
