async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    stats: {
      users: 10000,
    },
  };
}

export default async function LoadingExample() {
  const data = await getData();

  return (
    <div className="p-4">
      <h1>Loading Example</h1>
      <p className="font-bold">{data.stats.users}</p>
    </div>
  );
}
