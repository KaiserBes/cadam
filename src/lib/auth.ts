import { auth } from "../../auth";

export async function getServerSession() {
  return auth();
}
