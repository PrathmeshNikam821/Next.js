"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile() {
  const router = useRouter();

  const pathName = usePathname();

  const searchParams = useSearchParams();

  console.log(searchParams.get("name"), searchParams);

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <center>
      <button className="border m-4  p-4" onClick={handleNavigate}>
        navigate to home page{" "}
      </button>
    </center>
  );
}

export default Profile;
