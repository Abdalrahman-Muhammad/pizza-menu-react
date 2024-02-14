const Pizza = ({
  pizzaObj: { name, photoName, price, soldOut, ingredients },
}) => {
  return (
    <li className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
