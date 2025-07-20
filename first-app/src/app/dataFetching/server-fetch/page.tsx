interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductResponse {
  products: Product[];
  total: number;
}

async function getProducts(): Promise<ProductResponse> {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products ");
  }

  return response.json();
}
async function ServersideFetch() {
  const products = await getProducts();

  return (
    <div>
      <h1>Server side Fetching </h1>
      <h3>{products?.total} no of Products </h3>
      <div className="flex flex-col gap-2">
        {products?.products?.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServersideFetch;
