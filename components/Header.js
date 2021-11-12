import ModalLenguages from "../components/ModalLenguages"
import { useState } from "react";
import { useRouter } from "next/router";
import MenuMobile from "../components/MenuMobile"

const textTranslated = {
  "it-IT": {
    title: "Italia",
    content:{
      header1: 'Cambia lingua  🇮🇹',
      header2: 'Dona un caffè ☕️',
      header3: 'Supporto'
    },
  },
  "en-US": {
    title: "States",
    content:{
      header1: 'Change lenguage  🇺🇸',
      header2: 'Buy me a coffe ☕',
      header3: 'Support'
    },
  },
  "fr-FR": {
    title: "France",
    content:{
      header1: 'Changer langue  🇫🇷',
      header2: 'Achetez-moi un café ☕',
      header3: 'Soutien'
    },
  },
  "es-ES": {
    title: "España",
    content:{
      header1: 'Cambiar idioma 🇪🇸',
      header2: 'Cómprame un café ☕️',
      header3: 'Apoyo'
    },
  },
};

export default function Header() {
  function callMe() {
    if (
      confirm(`Stai per chiamare l\'assistenza di Pickster.io. Vuo continuare?`)
    ) {
      location.href = "tel:3478758148";
    }
  }

  /* Internationalization */
  const { locale, locales, defaultLocale } = useRouter();
  const { content } = textTranslated[locale];

  const [showLenguages, setShowLenguages] = useState(false)
  function closeShowLenguages(){
    setShowLenguages(false)
  }

  /* Menu mobile */
  const [menuMobile, setMenuMobile] = useState(false)

  function closeMenuMobile(){
    setMenuMobile(false)
  }

  return (
    <>
    <header className="w-screen border-b flex justify-center px-6 py-3 md:px-10 md:py-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <p className="text-xl font-bold tracking-tight">Pickster.io</p>
          <div className="uppercase text-xs font-semibold rounded-full h-3 w-3 text-white bg-gradient-to-r from-pink-500 to-pink-400 ml-1 -mt-3">
            
          </div>
        </div>
        <div className="flex text-lg">
          <div className="relative hidden md:block">
            <button onClick={() => { setShowLenguages(!showLenguages); }} className="button-header mr-1">
              {content.header1}
            </button>
            { showLenguages && <ModalLenguages closeShowLenguages={closeShowLenguages} /> }
          </div>
          <button onClick={() => {window.open('https://buy.stripe.com/eVa6rEgFP55A7DO5kl')}} className="button-header mr-1 hidden md:block">
            {content.header2}
          </button>
          <button onClick={callMe} className="button-header hidden md:block">
            {content.header3}
          </button>
          {/* Button menu mobile */}
          <div className="relative">
            <button onClick={() => {setMenuMobile(!menuMobile)} } className="rounded-lg bg-gray-100 border flex items-center justify-center h-10 w-10 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            { menuMobile && <MenuMobile content={content} closeMenuMobile={closeMenuMobile} /> }
          </div>
          {/* <button className="button-header-primary">
            Registrati — <i className="font-serif">è gratis</i>
          </button> */}
        </div>
      </div>
    </header>
    </>
  );
}
