import { redirect } from "next/navigation";

import { EAppRoutes } from "@/src/shared/config/routes";

export default function Home() {
  redirect(EAppRoutes.SIGN_IN)
}
