import Head from "next/head";
import Main from "../components/Main";
export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen py-2 w-screen">
      <Head>
        <title>Member Choosed_App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold text-blue-700 text-shadow">
        Hello! Member Choosed App
      </h1>

      <Main />
    </div>
  );
}
