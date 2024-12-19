import { redirect } from "react-router-dom";

export const isAuthenticated = async () => {
  const auth = localStorage.getItem("opinionUser");
  if (auth) throw redirect("/dashboard");
  return null;
};