export const dynamic = "force-dynamic";
export const revalidate = 3600;
import Link from "next/link";
import { notFound } from "next/navigation";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

// Optional: prebuild all user pages at build time (SSG for dynamic routes)
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: { id: number }[] = await res.json();

  return users.map((u) => ({ id: String(u.id) }));
}

export default async function UserProfilePage({
  params,
}: {
    //REMEMBER!!!! Promise < >
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) notFound();

  return (
    <section className="section">
      <Link href="/users" className="btnSecondary">
        ← Back to Users
      </Link>

      <div style={{ marginTop: "1rem" }}>
        <h3>{user.name}</h3>
        <p className="muted">@{user.username}</p>
      </div>

      <div className="grid" style={{ marginTop: "1rem" }}>
        <div className="card">
          <h4>Contact</h4>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>

        <div className="card">
          <h4>Address</h4>
          <p>
            {user.address?.street}, {user.address?.suite}
          </p>
          <p>
            {user.address?.city} {user.address?.zipcode}
          </p>
        </div>

        <div className="card">
          <h4>Company</h4>
          <p>{user.company?.name}</p>
          <p className="muted">{user.company?.catchPhrase}</p>
        </div>
      </div>
    </section>
  );
}
