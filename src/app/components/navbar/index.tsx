"use client";
import { Saira_Stencil_One } from "next/font/google";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const StancilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navbar() {
 

  const [menuAberto, setMenuAberto] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(1);

  const handleSetActiveSection = (sectionNumber: number) => {
    setActiveSection(sectionNumber);
    setMenuAberto(false);
  };

  return (
    <>
      <div className={`px-10 2xl:px-44 lg:px-40 md:px-20 sm:px-10 text-white w-full flex justify-between items-center bg-navzin h-16`}>
        <a href={`#${1}`} onClick={() => handleSetActiveSection(1)}>
          <div className={`${StancilOne.className} items-center ml-10 flex-nowrap text-3xl`}>
            João Archiolli
          </div>
        </a>
        <nav className="flex justify-around list-none">
          <ul className="items-center justify-around list-none hidden xl:flex">
            <a
              href={`#${1}`}
              className={`ml-16 hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer rounded-full p-4 ${activeSection === 1 ? "bg-mouseHoverNav" : ""}`}
              onClick={() => handleSetActiveSection(1)}
            >
              Sobre mim
            </a>
            <a
              href={`#${2}`}
              className={`ml-16 hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer rounded-full p-4 ${activeSection === 2 ? "bg-mouseHoverNav" : ""}`}
              onClick={() => handleSetActiveSection(2)}
            >
              Projetos
            </a>
            <a
              href={`#${3}`}
              className={`ml-16 hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer rounded-full p-4 ${activeSection === 3 ? "bg-mouseHoverNav" : ""}`}
              onClick={() => handleSetActiveSection(3)}
            >
              Experiência
            </a>
            <a
              href={`#${4}`}
              className={`ml-16 hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer rounded-full p-4 ${activeSection === 4 ? "bg-mouseHoverNav" : ""}`}
              onClick={() => handleSetActiveSection(4)}
            >
              Contato
            </a>
          </ul>


          <div className="flex justify-end xl:hidden">

            {menuAberto ? (

              <>
                <button
                  className="text-white cursor-pointer transition-colors duration-500 rounded-full "
                  onClick={() => setMenuAberto(false)}
                >
                  <CloseIcon/>
                </button>
                <div className="w-full h-[calc(100vh-64px)] fixed top-16 left-0 bg-nav">

                  <div className="flex-col items-center justify-center">
                    <div className="justify-end flex w-full pr-20">
                    </div>
                    <div className="flex w-full justify-center text-center border-b border-white z-20" >
                      <a
                        href={`#${1}`}
                        className={`w-full text-white hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer p-4 ${activeSection === 1 ? "bg-mouseHoverNav" : ""}`}
                        onClick={() => handleSetActiveSection(1)}
                      >
                        Sobre mim
                      </a>
                    </div>
                    <div className="flex w-full justify-center text-center border-b border-white z-20" >
                      <a
                        href={`#${2}`}
                        className={`w-full text-white hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer p-4 ${activeSection === 2 ? "bg-mouseHoverNav" : ""}`}
                        onClick={() => handleSetActiveSection(2)}
                      >
                        Projetos
                      </a>
                    </div>
                    <div className="flex w-full justify-center text-center border-b border-white z-20" >
                      <a
                        href={`#${3}`}
                        className={`w-full text-white hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer p-4 ${activeSection === 3 ? "bg-mouseHoverNav" : ""}`}
                        onClick={() => handleSetActiveSection(3)}
                      >
                        Experiência
                      </a>
                    </div>
                    <div className="flex w-full justify-center text-center border-b border-white z-20" >
                      <a
                        href={`#${4}`}
                        className={`w-full text-white hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer p-4 ${activeSection === 4 ? "bg-mouseHoverNav" : ""}`}
                        onClick={() => handleSetActiveSection(4)}
                      >
                        Contato
                      </a>
                    </div>

                  </div>
                </div>
              </>

            ) : (
              <div className="cursor-pointer">
                <MenuIcon fontSize="medium" onClick={() => setMenuAberto(true)} />
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

