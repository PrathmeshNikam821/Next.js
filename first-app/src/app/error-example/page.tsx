async function getProducts() {
  //simulate a dummy error here
  const shouldError = Math.random() > 0.5;

  if (shouldError) {
    throw new Error("Failed to fetch Products ");
  }

  return [
    {
      id: 2,
      name: " Phone ",
    },
    {
      id: 3,
      name: "tablet",
    },
  ];
}

export default async function ErrorExample() {
  const products = await getProducts();
  return (
    <div className="p-4">
      <h1>Products list </h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
