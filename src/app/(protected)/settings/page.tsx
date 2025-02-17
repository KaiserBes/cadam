import { auth } from "../../../../auth";

const SettingsPage = async () => {
  const session = await auth();
  return <>{JSON.stringify(session)}</>;
};

export default SettingsPage;
