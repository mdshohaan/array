/** Reduce Array into Single Object
 *
 */
const products = [
  { name: "Laptop", price: 800 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 250 },
  { name: "Keyboard", price: 50 },
  { name: "Monitor", price: 200 },
  { name: "Keyboard", price: 50 },
  { name: "Gaming Chair", price: 150 },
  { name: "Laptop", price: 800 },
];

const invoice = products.reduce((acc, curr) => {
  if (acc[curr.name]) {
    acc[curr.name].Quantity++;
    acc[curr.name].price += curr.price;
  } else {
    acc[curr.name] = {
      price: curr.price,
      Quantity: 1,
    };
  }
  return acc;
}, {});
console.log(invoice);
