import Link from "next/link";

// this layout only applies to '/dashboard'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex">
        <aside className="w-64 p-4 border-r">
          <h2>DashBoard</h2>
          <nav>
            <ul>
              <li>
                <Link href={"/Dashboard"}>DashBoard Home </Link> <br />
                <Link href={"/Dashboard/analytics"}>DashBoard analytics </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
