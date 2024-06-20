import Head from "next/head";
import { LinkPreview } from "./link-preview";
export default function Home() {

  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
    </Head>
    <main className="grid grid-row mt-40 place-content-center">
      <h1 className="font-medium text-3xl text-red-500 justify-self-end hover:rotate-6">creativity&apos;s funeral</h1>
      <h2 className="font-semibold font-inter dark:text-white text-3xl w-11/12 mt-5 m-auto">what kind of project do u have on ur mind today?</h2>
      <input type="text" name="query" className="border border-red-500 rounded-md dark:border-red-800 focus:border-none p-2 mt-10 dark:bg-zinc-950" />
      <button className="bg-red-500 hover:bg-red-600 m-auto p-4 text-white text-xl rounded-md w-64 mt-12">generate <span className="font-bold">ideas</span></button>
    </main>
    <footer>
      <h1 className="absolute bottom-0 right-0 mr-2 text-lg dark:text-white">built by <LinkPreview url='https://github.com/vineetbambah' className="hover:underline ">@vineetbambah</LinkPreview></h1>
    </footer>
    </>
  );
}
