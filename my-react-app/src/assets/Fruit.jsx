export default function Fruit({ name, price, emoji }) {
  return (
    <>
      {/* {emoji} {name} {price}*/}
      {price > 5 ? (
        <li>
          <h2>
            {emoji} {name} {price}
          </h2>
        </li>
      ) : (
        ""
      )}
    </>
  );
}
