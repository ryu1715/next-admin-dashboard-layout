import Head from "next/head";
import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>charts-sample</title>
      </Head>

      <div className={"flex h-100vh text-white"}>
        <Sidebar />
        <div className={"flex flex-col flex-grow bg-gray-800"}>
          <Header />
          <main className={"bg-gray-800 flex-grow p-20"}>{children}</main>
        </div>
      </div>
    </>
  );
}
