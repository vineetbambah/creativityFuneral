import Head from "next/head";
import { LinkPreview } from "./link-preview";
import { ModeToggle } from "./theme-toggle";
export default function Home() {

  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
    </Head>
    <main className="grid grid-row mt-40 place-content-center">
      <span className="fixed top-0 right-0 m-2"><ModeToggle/></span>
      <h1 className="font-medium text-3xl text-red-500 justify-self-end transition duration-50 ease-linear hover:rotate-6">creativity&apos;s funeral</h1>
      <h2 className="font-semibold font-inter dark:text-white text-3xl w-11/12 mt-5 m-auto">what kind of project do u have on ur mind today?</h2>
      <input type="text" name="query" className="border border-red-500 rounded-md transition duration-500 ease-in shadow-blur focus:shadow-red-500 dark:focus:shadow-red-400 dark:border-red-800 focus:border-red-500 focus:outline-none dark:focus:outline-none p-2 mt-10 dark:bg-zinc-950" />
      <button className="bg-red-500 hover:bg-red-600 m-auto p-4 text-white text-xl transition duration-500 ease-in shadow-blur2 hover:shadow-blue-400 dark:hover:shadow-blue-800 rounded-md w-64 mt-12">generate <span className="font-bold">ideas</span></button>
    </main>
    <footer>
      <span className="fixed bottom-0 right-0 mr-2 flex"><h1 className="text-lg dark:text-white">built by @</h1> <LinkPreview url='https://github.com/vineetbambah' className="dark:text-white text-lg hover:underline ">vineetbambah</LinkPreview></span>
    </footer>
    </>
  );
}
