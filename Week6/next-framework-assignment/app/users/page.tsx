import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
  company?: { name: string };
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <section className="section">
      <h3>Users</h3>
      <p className="muted">Click a user to view their profile (dynamic route).</p>

      <div className="grid">
        {users.map((u) => (
          <Link key={u.id} className="card" href={`/users/${u.id}`}>
            <h4>{u.name}</h4>
            <p>{u.email}</p>
            <p className="muted">{u.company?.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
