"use client";

import Link from "next/link";

function Products() {
  const products = [
    {
      id: "1",
      name: "Mobile ",
      price: 500,
    },
    {
      id: "2",
      name: "laptop",
      price: 1500,
    },
    {
      id: "3",
      name: "Iphone ",
      price: 2500,
    },
  ];

  return (
    <>
      <div className="text-2xl font-semibold mb-4 ">Products </div>
      <div className="grid gap-4">
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded ">
            <h2>{item.name}</h2>
            <h3>$ {item.price}</h3>
            <Link href={`/products/${item.id}`}> Hello</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
