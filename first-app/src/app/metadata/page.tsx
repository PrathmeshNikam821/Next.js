import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metadata ",
  description: "this is my example for writing metadata ",
};

function MetaData() {
  const examples = [
    {
      id: 1,
      title: "one",
    },
    {
      id: 2,
      title: "two",
    },
    {
      id: 3,
      title: "three",
    },
  ];

  return (
    <div>
      <h1>MetaData Examples </h1>

      <ul>
        {examples.map((item) => (
          <li key={item.id}>
            <Link href={"/metadata-example/1"}>{item.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MetaData;
