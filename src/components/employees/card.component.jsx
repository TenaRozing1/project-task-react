import "./card.styles.scss";

const Card = ({
  employee: { id, lastName, firstName, dateOfBirth, jobTitle },
}) => {
  return (
    <div className="card" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${firstName}`}
      />
      <h2 className="first-name">{firstName}</h2>
      <h2 className="last-name">{lastName}</h2>
      <h2 className="date-of-birth">{dateOfBirth}</h2>
      <h2 className="job-title">{jobTitle}</h2>
    </div>
  );
};
export default Card;
