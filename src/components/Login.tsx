import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Login: React.FC = () => {
  const { data } = useSession();
  return (
    <div className="h-4 mb-4 p-2 flex flex-row justify-end text-gray-400 ">
      {data?.user?.name}{" "}
      {data ? (
        <>
          hello {data.user?.email?.split("@")[0]}
          <p
            className="cursor-pointer underline ml-4 hover:text-gray-800"
            onClick={() => signOut()}
          >
            sign out
          </p>
        </>
      ) : (
        <p
          className="cursor-pointer underline hover:text-gray-800"
          onClick={() => signIn()}
        >
          sign in
        </p>
      )}
    </div>
  );
};
