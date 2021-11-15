import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuMobile({ content, closeMenuMobile }) {
  /* Internationalization */
  const { locale, locales, defaultLocale } = useRouter();

  function callMe() {
    location.href = "tel:3478758148";
  }

  return (
    <div
      className="animation-menu_mobile absolute bg-gray-100 dark:bg-gray-800 border dark:border-gray-900 rounded-xl mt-2 flex flex-col items-center justify-center z-5 md:hidden"
      style={{ width: "180px", marginLeft: "-140px" }}
    >
      <ul className="text-base m-5">
        <li className="w-full px-2 rounded-lg flex">
          <Link activeClassName={locale === "it-IT"} href="/" locale="it-IT">
            <div onClick={closeMenuMobile} className="-ml-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"> 🇮🇹 </div>
          </Link>
          <Link activeClassName={locale === "en-US"} href="/" locale="en-US">
            <div onClick={closeMenuMobile} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"> 🇺🇸 </div>
          </Link>
          <Link activeClassName={locale === "fr-FR"} href="/" locale="fr-FR">
            <div onClick={closeMenuMobile} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"> 🇫🇷 </div>
          </Link>
          <Link activeClassName={locale === "es-ES"} href="/" locale="es-ES">
            <div onClick={closeMenuMobile} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"> 🇪🇸 </div>
          </Link>
        </li>
        <li onClick={() => {window.open('https://buy.stripe.com/eVa6rEgFP55A7DO5kl')}} className="w-full p-1 px-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 my-1 cursor-pointer">
          {content.header2}
        </li>
        <li
          onClick={callMe}
          className="-full p-1 px-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
        >
          {content.header3}
        </li>
      </ul>
    </div>
  );
}
