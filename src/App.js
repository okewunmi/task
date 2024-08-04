import "./App.css";
import Card from "./components/card";
import DetailedCard from "./components/detailed";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <DetailedCard />
    </div>
  );
}

export default App;
