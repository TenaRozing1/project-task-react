const Card = ({
  employee: { id, lastName, firstName, dateOfBirth, jobTitle },
}) => {
  return (
    <div key={id}>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{dateOfBirth}</h2>
      <h2>{jobTitle}</h2>
    </div>
  );
};
export default Card;
