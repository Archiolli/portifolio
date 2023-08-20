import Navbar from "./components/navbar";
import "./globals.css";
import { Saira } from "next/font/google";

const inter = Saira({ subsets: ["latin"]});

export const metadata = {
  title: "Portifólio João Archiolli",
  description:
    "Desenvolvedor Full-stack - NextJs, Node, TypeScript, Tailwind, MySQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

//flex flex-col h-screen w-full
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className}  overflow-y-hidden`}
      >
        <>
          <div className="bg-image bg-scroll bg-no-repeat bg-cover bg-center h-screen w-screen fixed">
            {children}
          </div>
        </>
      </body>
    </html>
  );
}
