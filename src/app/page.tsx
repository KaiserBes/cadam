import { AboutPage } from "@/components/screens/about";
import { auth, signOut } from "../../auth";

const Home = async () => {
  const session = await auth();
  return (
    <>
      <AboutPage />
      <div className="">
        {JSON.stringify(session)}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      </div>
    </>
  );
};

export default Home;
