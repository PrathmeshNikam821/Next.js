const dummyData = {
  "1": {
    title: "one",
  },
  "2": {
    title: "two",
  },
  "3": {
    title: "three",
  },
};

export default function DynamicMetaData({
  params,
}: {
  params: { slug: string[] };
}) {
  const data = dummyData[params.slug[0] as keyof typeof dummyData];
  return <div>{data?.title}</div>;
}
