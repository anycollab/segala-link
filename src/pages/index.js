import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Segala Link</title>
      </Head>

      <main className="">
        <h1 className="">
          Welcome to <a href="https://nextjs.org" className="hover:underline hover:text-blue-500">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing{' '}
          <code className="font-mono bg-gray-700 text-gray-100 text-sm px-1 py-0.5 rounded">pages/index.js</code>
        </p>

        <div className="">
          <a href="https://nextjs.org/docs" className="hover:underline hover:text-blue-500">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="hover:underline hover:text-blue-500">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="hover:underline hover:text-blue-500"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="hover:underline hover:text-blue-500"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500"
        >
          Powered by{' '}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
