import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Jigglypuff"];

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };

  const handleSelect2 = (elemento: string) => {
    console.log("mostrando"+ elemento);
  };


  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect}/>
      <List data={list} onSelect={handleSelect2}/>
    </Card>
  );
}

export default App;
