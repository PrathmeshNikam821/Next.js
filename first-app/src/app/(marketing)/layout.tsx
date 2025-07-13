import Link from "next/link";

export default function MarketingLaout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav className="p-4">
          <Link href={"/"}> Home </Link>
          <Link href={"/"}> about </Link>
          <Link href={"/"}> contact</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
