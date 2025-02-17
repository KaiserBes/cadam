"use client";

import { AboutPage } from "@/components/screens/about";
import { logout } from "../../actions/logout";
import { useCurrentUser } from "../../hooks/use-current-user";

const Home = () => {
  const user = useCurrentUser();
  const signOut = () => {
    logout();
  };
  return (
    <>
      <AboutPage />
      <div className="">
        {JSON.stringify(user)}
        <button onClick={signOut} type="submit">
          Sign out
        </button>
      </div>
    </>
  );
};

export default Home;
