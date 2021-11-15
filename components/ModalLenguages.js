import Link from "next/link";
import { useRouter } from "next/router";

export default function ModalLenguages({ closeShowLenguages }) {
    /* Internationalization */
    const { locale, locales, defaultLocale } = useRouter();

    return (
        <div className="animation-lenguages absolute flex flex-col bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-900 mt-3 w-full divide-y divide-gray-200 py-3" style={{zIndex: 3}}>
            <ul className="text-sm">
                <Link
                    activeClassName={locale === "en-US"}
                    href="/"
                    locale="en-US"
                >
                <li onClick={closeShowLenguages} className="mx-2 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                    States &nbsp;🇺🇸
                </li>
                </Link>
                <Link
                activeClassName={locale === "it-IT"}
                href="/"
                locale="it-IT"
                >
                <li onClick={closeShowLenguages} className="mx-2 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                    Italia &nbsp;🇮🇹
                </li>
                </Link>
                <Link
                activeClassName={locale === "es-ES"}
                href="/"
                locale="es-ES"
                >
                <li onClick={closeShowLenguages} className="mx-2 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                    España &nbsp;🇪🇸
                </li>
                </Link>
                <Link
                className="p-2 hover:bg-gray-300"
                activeClassName={locale === "fr-FR"}
                href="/"
                locale="fr-FR"
                >
                <li onClick={closeShowLenguages} className="mx-2 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                    France &nbsp;🇫🇷
                </li>
                </Link>
            </ul>
        </div>
    )
}