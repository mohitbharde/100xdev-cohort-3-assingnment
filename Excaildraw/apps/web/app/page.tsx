// app/page.tsx
import { getServerSession } from "next-auth";
import Providers from "../components/Providers"; // client wrapper
import JoinRoom from "../components/JoinRoom";
import { authOptions } from "./api/auth/[...nextauth]/route"; // export authOptions from your route

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    // Providers is a client component that simply renders SessionProvider
    <Providers session={session}>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>{" "}
        {/* server-side session render */}
        <JoinRoom /> {/* a client component that can use useSession() */}
      </div>
    </Providers>
  );
}
