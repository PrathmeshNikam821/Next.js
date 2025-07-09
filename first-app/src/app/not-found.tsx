"use client";

import { useRouter } from "next/navigation";

function NotFoundPage() {
  const Router = useRouter();
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <div>
      <h1>The page you are looking is not available !</h1>
      <button className="bg-black text-white p-1" onClick={handleClick}>
        Click Here for Home{" "}
      </button>
    </div>
  );
}

export default NotFoundPage;
