export const dynamic = 'force-static'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h2>Welcome to My Landing Page</h2>
        <p>This is a simple landing page built using Next.js App Router.</p>

        <div className="heroActions">
          <Link className="btnPrimary" href="#contact">Get Started</Link>
          <Link className="btnSecondary" href="#services">View Services</Link>
          <Link className="btnSecondary" href="/users">Browse Users</Link>
        </div>
      </section>

      <section id="about" className="section">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section id="services" className="section">
        <h3>Our Services</h3>
        <p className="muted">
          A few examples of what we build (placeholder content for the assignment).
        </p>

        <div className="grid">
          <div className="card">
            <h4>UI Development</h4>
            <p>Responsive, accessible interfaces using modern React patterns.</p>
          </div>

          <div className="card">
            <h4>API Integration</h4>
            <p>Connect your app to REST/GraphQL APIs with clean data handling.</p>
          </div>

          <div className="card">
            <h4>Performance & SEO</h4>
            <p>Fast load times, best practices, and search-friendly pages.</p>
          </div>
        </div>
      </section>


      <section id="contact" className="section">
        <h3>Contact Us</h3>
        <p>
          Email: contact@example.com  
          <br />
          Phone: (123) 456-7890
        </p>
      </section>
    </div>
  )
}

// ORIGINAL (DEFAULT)
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
