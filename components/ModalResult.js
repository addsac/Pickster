import { useState } from "react"
import Instagram from "../components/Instagram";
import Facebook from "../components/Facebook";
import Twitter from "../components/Twitter";
import Linkedin from "../components/Linkedin";
import Pinterest from "../components/Pinterest";

export default function ModalResult({ file, closeModalResult }) {
  const [social, setSocial] = useState('instagram')

  return (
    <>
      <div className="z-10 w-screen h-screen bg-black opacity-60 flex items-center justify-center fixed"></div>
      <div className="z-10 modal-transition flex justify-center fixed py-3 md:p-10" style={{minHeight: '100vh', minWidth: '100vw', maxHeight: '100vh', maxWidth: '100vw', overflowY: 'auto'}}>
        <div className="w-full md:w-3/4 lg:w-2/3 h-full bg-white rounded-3xl relative">
            <div className="m-8 flex">
              <div onClick={() => { setSocial('instagram') }} className={"h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full mr-3 cursor-pointer transition " + (social == 'instagram' ? "bg-pink-500 text-white" : "hover:bg-gray-300")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current stroke-4" fill="currentColor" viewBox="0 0 448 512"><title id="svg-inline--instagram"></title> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </div>
              <div onClick={() => { setSocial('facebook') }} className={"h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full mr-3 cursor-pointer transition " + (social == 'facebook' ? "bg-pink-500 text-white" : "hover:bg-gray-300")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 264 512"><title id="svg-inline--facebook"></title> <path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path></svg>
              </div>
              <div onClick={() => { setSocial('twitter') }} className={"h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full mr-3 cursor-pointer transition " + (social == 'twitter' ? "bg-pink-500 text-white" : "hover:bg-gray-300")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512"><title id="svg-inline--twitter"></title> <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
              </div>
              <div onClick={() => { setSocial('linkedin') }} className={"h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full mr-3 cursor-pointer transition " + (social == 'linkedin' ? "bg-pink-500 text-white" : "hover:bg-gray-300")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 448.1 512"><title id="svg-inline--linkedin"></title> <path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path></svg>
              </div>
              <div onClick={() => { setSocial('pinterest') }} className={"h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full mr-3 cursor-pointer transition " + (social == 'pinterest' ? "bg-pink-500 text-white" : "hover:bg-gray-300")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5" fill="currentColor" viewBox="0 0 496 512"><title id="svg-inline--pinterest"></title> <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
              </div>
            </div>
            
            {/* Instagram */}
            {social == 'instagram' && <Instagram file={file} />}
            {/* Facebook */}
            {social == 'facebook' && <Facebook file={file} />}
            {/* Twitter */}
            {social == 'twitter' && <Twitter file={file} />}
            {/* Linkedin */}
            {social == 'linkedin' && <Linkedin file={file} />}
            {/* Pinterest */}
            {social == 'pinterest' && <Pinterest file={file} />}

            {/* Close button */}
            <div onClick={closeModalResult} className="hidden md:block close-modal-button absolute right-4 top-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Close button mobile */}
            <div className="md:hidden fixed bottom-6 w-full flex justify-center items-center">
              <button onClick={closeModalResult} className="px-12 py-2 rounded-full bg-white border text-sm font-medium z-10">
                Chiudi
              </button>
            </div>
        </div>
      </div>
    </>
  );
}
