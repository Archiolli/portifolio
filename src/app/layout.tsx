import "./globals.css";
import { Saira } from "next/font/google";

const inter = Saira({
 // weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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


  return (
    <html lang="pt-BR" className="scroll-smooth" >
      <body
        className={`${inter.className} h-full w-full overflow-y-hidden`}
      >
        <>
          <div className="bg-image bg-scroll bg-no-repeat bg-cover bg-center h-full w-full fixed">
            {children}
          </div>
        </>
      </body>
    </html>
  );
}