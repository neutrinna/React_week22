import './Card.css';

function Card(props) {
  return (
    <section className="card">
      <h2>{props.name}</h2>
      <div>Вселенная: {props.universe}</div>
      <div>Альтер эго: {props.alterego}</div>
      <div>Род деятельности: {props.occupation}</div>
      <div>Друзья: {props.friends}</div>
      <div>Суперсилы: {props.superpowers}</div>
      <img src={props.url} alt = {props.name}/>
      <div className="info">{props.info}</div>
    </section>
  );
}

export default Card;