import Pizza from './Pizza';
import { pizzaData } from '../../public/data';
// const pizzaData = [];
const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza, i) => (
              <Pizza key={i} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We &lsquo;re still working on our menu. Please comeback later</p>
      )}
    </main>
  );
};

export default Menu;
