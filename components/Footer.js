import { useRouter } from "next/router";

const textTranslated = {
  "it-IT": {
    title: "Italia",
    content:{
      text1: 'Fatto con',
      text2: 'da'
    },
  },
  "en-US": {
    title: "States",
    content:{
      text1: 'Built with',
      text2: 'by'
    },
  },
  "fr-FR": {
    title: "France",
    content:{
      text1: 'Fait avec',
      text2: 'par'
    },
  },
  "es-ES": {
    title: "España",
    content:{
      text1: 'Hecho con',
      text2: 'por'
    },
  },
};

export default function Footer() {
  /* Internationalization */
  const { locale, locales, defaultLocale } = useRouter();
  const { content } = textTranslated[locale];

  return (
    <footer className="flex justify-center items-center border-t dark:border-gray-600 p-10">
      <a
        href="https://leonardocitton.com"
        rel="nofollow"
        className="hover:underline text-base md:text-lg flex items-center"
      >
        {content.text1}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mx-1 text-pink-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          />
        </svg>
        {content.text2}
        <img
          src="https://www.leonardocitton.com/logo.png"
          alt=""
          className="mx-2 w-5 h-5 dark:border-gray-200 border-white border"
        />
        <span className="font-bold">Leonardo Citton</span>
      </a>
    </footer>
  );
}
