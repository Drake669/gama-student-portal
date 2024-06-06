import Layout from "@/components/layout/Layout";
import { signOut, useSession } from "next-auth/react";

export default function AppPage() {
  const session = useSession();
  console.log("SESSION::", session);
  const onLogout = async () => {
    // Make API call to backend first
    signOut();
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div
        style={{
          height: "10vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h1>
          This route will be contain all routes that requires authentication to
          access
        </h1>
      </div>

      <div
        style={{
          height: "10vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <button
          className="w-full btn flex items-center justify-center"
          onClick={onLogout}
        >
          LOGOUT
        </button>
      </div>
    </Layout>
  );
}
