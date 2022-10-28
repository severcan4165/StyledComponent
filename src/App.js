import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card.jsx";


const style = {
  responsive: "768px",
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A",
  }

}

function App() {
  return (
    <ThemeProvider theme = {style}>
      <GlobalStyles/>
      <Header />
      <Card/>
    </ThemeProvider>
  );
}

export default App;
