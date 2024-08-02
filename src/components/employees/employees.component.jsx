import Card from "./card.component";
import "./employees.styles.scss";

const CardList = ({ employees }) => (
  <div className="card-list">
    {employees.map((employee) => {
      return <Card employee={employee} />;
    })}
  </div>
);

export default CardList;
