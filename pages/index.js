import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DropImage from '../components/DropImage'
import ModalResult from '../components/ModalResult'
import { useState } from 'react'
import { useRouter } from "next/router";

const textTranslated = {
  "it-IT": {
    title: "Italia",
    content: {
      title1: 'Ridimensiona',
      title2: 'le tue foto per postarle sui social.',
      description1: 'Carica la foto',
      sub1: 'Vedi in anteprima la tua foto in ogni social.',
      description2: 'Ridimesiona la foto',
      sub2: 'Ridimensiona la tua foto per ogni caso.',
      description3: 'Scarica la foto perfetta',
      sub3: 'Scarica la foto perfetta per i tuoi social!',
      button: 'Carica una foto',
      subTextButton: 'o rilasca un file',
      likePickster: 'Ti piace Pickster? Condividilo su Twitter.',
      twitterButton: 'Condividi Pickster',
    },
  },
  "en-US": {
    title: "States",
    content: {
      title1: 'Crop',
      title2: 'your photos and post it on social media.',
      description1: 'Upload a photo',
      sub1: 'Preview your photo to see how it looks on every social.',
      description2: 'Crop your photo',
      sub2: 'Redimension it for every use case.',
      description3: 'Download the result',
      sub3: 'Download the perfect photo for every social!',
      button: 'Upload a photo',
      subTextButton: 'or drop a file',
      likePickster: 'Do you like Pickster? Share it on Twitter.',
      twitterButton: 'Share Pickster',
    },
  },
  "fr-FR": {
    title: "France",
    content: {
      title1: 'Redimensionnez',
      title2: 'vos photos pour les publier sur les réseaux sociaux.',
      description1: 'Télécharger la photo',
      sub1: 'Prévisualisez votre photo dans tous les réseaux sociaux.',
      description2: 'Ridimesiona la foto',
      sub2: 'Redimensionner la photo.',
      description3: 'Téléchargez la photo parfaite',
      sub3: 'Téléchargez la photo parfaite pour vos réseaux sociaux!',
      button: 'Télécharger une photo',
      subTextButton: 'ou libérer un fichier',
      likePickster: 'Aimez-vous Pickster? Partagez-le sur Twitter.',
      twitterButton: 'Partager Pickster',
    },
  },
  "es-ES": {
    title: "España",
    content: {
      title1: 'Cambiar',
      title2: 'el tamaño de tus fotos para publicar en las redes sociales.',
      description1: 'Subir foto',
      sub1: 'Previsualiza tu foto en todas las redes sociales.',
      description2: 'Cambiar el tamaño de la foto',
      sub2: 'Cambiar el tamaño de la foto para cada caso.',
      description3: 'Descarga la foto perfecta',
      sub3: 'Descarga la foto perfecta para tus redes sociales!',
      button: 'Subir una foto',
      subTextButton: 'o liberar un archivo',
      likePickster: '¿Te gusta Pickster? Compártelo en Twitter.',
      twitterButton: 'Compartir Pickster',
    },
  },
};

export default function Home() {
  /* Internationalization */
  const { locale, locales, defaultLocale } = useRouter();
  const { content } = textTranslated[locale];

  function shareOnTwitter(){
    window.open('http://twitter.com/share?text=Pickster is a fantastick tool to crop an image for all your social media!!&url=https://pickster.io')
  }

  /* Handle file */
  const [file, setFile] = useState(null)
  function handleFile(e){
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      
      setOpenModalResult(true)
    }
  }

  /* Drag and drop */
  const [openModalDropImage, setOpenModalDropImage] = useState(false)
  const [openModalResult, setOpenModalResult] = useState(false)

  function closeModalDropImage(){
    setOpenModalDropImage(false)
  }
  function closeModalResult(){
    setOpenModalResult(false)
  }

  return (
    <div>      
      <Head>
        <title>Pickster.io | Ritaglia le tue foto per postarle sui social media, by Leonardo Citton.</title>
        <meta name="title" content="Pickster.io | Ritaglia le tue foto per postarle sui social media, by Leonardo Citton." />
        <meta name="keywords" content="Pickster, ridimensiona foto social media, leonardo citton, ritaglia foto social media" />
        <meta name="description" content="Ritaglia le tue foto e postale sui tuoi social media. Pickster ti aiuta a ceare la foto perfetta per instagram, facebook, twitter, pinterest e linkedin." />
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Ritaglia le tue foto per postarle sui social media." />
        <meta property="og:description" content="Pickster.io by Leonardo Citton" />
        <meta property="og:image" content="/favicon.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Ritaglia le tue foto per postarle sui social media." />
        <meta property="twitter:description" content="Pickster.io by Leonardo Citton" />
        <meta property="twitter:image" content="/favicon.png" />

        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Leonardo Citton" />
      </Head>

      {openModalDropImage && <DropImage closeModalDropImage={closeModalDropImage} />} 
      {openModalResult && <ModalResult file={file} closeModalResult={closeModalResult} />}

      <Header />

      <main>
        
        <div className="md:p-10">
          <div className="w-full md:flex items-center">
            <div className="md:w-1/2 h-full py-10 px-6 lg:p-10 lg:pl-20">
            <h1 className="text-4xl lg:text-5xl lg:leading-tight font-bold" style={{ maxWidth: '560px'}}>
              {/* Ottieni la foto perfetta per ogni social. */}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-pink-400"> {content.title1} </span> {content.title2}
            </h1>
            <div className="mt-12">
              <div className="flex items-center">
                <div className="dimension-ball rounded-full text-3xl font-bold bg-gray-100 border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-lg lg:text-xl"> {content.description1} </p>
                  <p className="text-sm lg:text-base text-gray-500 mt-1"> {content.sub1} </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="dimension-ball rounded-full text-3xl font-bold bg-gray-100 border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-lg lg:text-xl"> {content.description2} </p>
                  <p className="text-sm lg:text-base text-gray-500 mt-1"> {content.sub2} </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="dimension-ball rounded-full text-3xl font-bold bg-gray-100 border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-lg lg:text-xl"> {content.description3} </p>
                  <p className="text-sm lg:text-base text-gray-500 mt-1"> {content.sub3} </p>
                </div>
              </div>
             </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2 h-full p-10">
              <div className="relative w-96 h-96 rounded-3xl flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-pink-500">
                <div className="flex flex-col items-center justify-center" style={{zIndex: 2}}>
                  <div className="p-4 border-4 border-white opacity-60 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* Input file */}
                  <button className="fileContainer mt-8 px-7 py-3 bg-white rounded-xl font-semibold hover:bg-gray-200 flex items-center justify-center transition"> 
                    <input type="file" onChange={ handleFile } />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    {content.button}
                  </button>
                  <p className="mt-2 text-white"> {content.subTextButton} </p>
                  <div className="absolute bottom-5 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><title id="svg-inline--instagram"></title> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 264 512"><title id="svg-inline--facebook"></title> <path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 512 512"><title id="svg-inline--twitter"></title> <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 448.1 512"><title id="svg-inline--linkedin"></title> <path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 496 512"><title id="svg-inline--pinterest"></title> <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
                  </div>
                </div>
                <div className="w-full h-full absolute rounded-3xl transform shadow-lg border-4 border-black border-dashed -rotate-2" style={{zIndex: 1}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-xl mx-auto flex flex-col justify-center items-center p-10">
          <p className="text-lg lg:text-xl font-semibold text-center"> {content.likePickster} </p>
          <button onClick={shareOnTwitter} className="mt-5 px-6 py-3 bg-gray-200 rounded-xl font-semibold hover:bg-gray-300 flex items-center transition" style={{whiteSpace: 'nowrap'}}>
            {content.twitterButton}
            <img src="/twitter_logo.png" className="h-5 ml-2" alt=""/>
          </button>
        </div>

      </main>

      <Footer />
    </div>
  )
}
