import Fruit from "./Fruit";
export default function Hello() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 8, emoji: "🍌" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Orange", price: 4, emoji: "🟠" },
  ];
  return (
    <>
      <ol>
        {fruits.map((fruit) => (
          <Fruit
            Key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ol>
    </>
  );
}
