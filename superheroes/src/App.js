import dataJSON from './data.json';
import Card from './components/Card';

import './App.css';

const data = JSON.parse(JSON.stringify(dataJSON));

function App() {
  return ( <main className="wrapper">{
    data.map((hero, index)=> {
      return (
        <Card className = "card"
          key = {index}
          name = {hero.name}
          universe = {hero.universe}
          alterego = {hero.alterego}
          occupation = {hero.occupation}
          friends = {hero.friends}
          superpowers = {hero.superpowers}
          url = {hero.url}
          info = {hero.info}
        >
        </Card>
      );
    })
  }</main>);
}

export default App;
