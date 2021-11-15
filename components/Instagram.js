import Cropper from 'react-easy-crop'
import { useState } from 'react'
import { useCallback } from 'react'
import getCroppedImg from '../public/cropImage'

export default function Instagram({ file }) {
  /* Post squared */
  const [cropPostSquared, setCropPostSquared] = useState({ x: 0, y: 0 })
  const [zoomPostSquared, setZoomPostSquared] = useState(1)
  const [croppedAreaPixelsPostSquared, setCroppedAreaPixelsPostSquared] = useState(null)
  const [croppedImagePostSquared, setCroppedImagePostSquared] = useState(null)

  const onCropCompletePostSquared = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsPostSquared(croppedAreaPixels)
  }, [])

  const downloadCroppedImagePostSquared = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsPostSquared,
      )
      setCroppedImagePostSquared(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsPostSquared])

  /* Post potrait */
  const [cropPostPotrait, setCropPostPotrait] = useState({ x: 0, y: 0 })
  const [zoomPostPotrait, setZoomPostPotrait] = useState(1)
  const [croppedAreaPixelsPostPotrait, setCroppedAreaPixelsPostPotrait] = useState(null)
  const [croppedImagePostPotrait, setCroppedImagePostPotrait] = useState(null)

  const onCropCompletePostPotrait = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsPostPotrait(croppedAreaPixels)
  }, [])

  const downloadCroppedImagePostPotrait = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsPostPotrait,
      )
      setCroppedImagePostPotrait(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsPostPotrait])

  /* Post landscape */
  const [cropPostLandscape, setCropPostLandscape] = useState({ x: 0, y: 0 })
  const [zoomPostLandscape, setZoomPostLandscape] = useState(1)
  const [croppedAreaPixelsPostLandscape, setCroppedAreaPixelsPostLandscape] = useState(null)
  const [croppedImagePostLandscape, setCroppedImagePostLandscape] = useState(null)

  const onCropCompletePostLandscape = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsPostLandscape(croppedAreaPixels)
  }, [])

  const downloadCroppedImagePostLandscape = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsPostLandscape,
      )
      setCroppedImagePostLandscape(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsPostLandscape])

  /* Post stories */
  const [cropPostStories, setCropPostStories] = useState({ x: 0, y: 0 })
  const [zoomPostStories, setZoomPostStories] = useState(1)
  const [croppedAreaPixelsPostStories, setCroppedAreaPixelsPostStories] = useState(null)
  const [croppedImagePostStories, setCroppedImagePostStories] = useState(null)

  const onCropCompletePostStories = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsPostStories(croppedAreaPixels)
  }, [])

  const downloadCroppedImagePostStories = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsPostStories,
      )
      setCroppedImagePostStories(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsPostStories])

  return (
    <>
        <div className="flex flex-col justify-center items-center my-10">
            <div>
                <div className="flex justify-between items-center">
                <p className="text-xl font-medium">Post squared</p>
                <a href={croppedImagePostSquared} download className="h-11 w-11 rounded-lg border dark:border-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition flex justify-center items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                    </svg>
                </a>
                </div>
                <div
                className="mx-auto mt-5 flex items-center bg-black relative"
                style={{ width: "300px", height: "522px" }}
                >
                <div
                    className="relative"
                    style={{ width: "100%", height: "100%" }}
                >
                    <Cropper
                        image={file}
                        crop={cropPostSquared}
                        zoom={zoomPostSquared}
                        aspect={1/1}
                        onCropChange={setCropPostSquared}
                        onCropComplete={onCropCompletePostSquared}
                        onZoomChange={setZoomPostSquared}
                        onInteractionEnd={downloadCroppedImagePostSquared}
                        showGrid={false}
                    />
                    {/* { file && <img src={file} className="object-cover h-full w-full" />} */}
                </div>
                <div className="absolute bottom-3 left-0 h-1 rounded-full bg-white" style={{width: '80px', marginLeft: '110px'}}></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
            <div>
                <div className="flex justify-between items-center">
                <p className="text-xl font-medium">Post portrait</p>
                <a href={croppedImagePostPotrait} download className="h-11 w-11 rounded-lg border dark:border-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition flex justify-center items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                    </svg>
                </a>
                </div>
                <div
                className="mx-auto mt-5 flex items-center bg-black relative"
                style={{ width: "300px", height: "522px" }}
                >
                <div
                    className="relative"
                    style={{ width: "100%", height: "100%" }}
                >
                    <Cropper
                        image={file}
                        crop={cropPostPotrait}
                        zoom={zoomPostPotrait}
                        aspect={1/1.25}
                        onCropChange={setCropPostPotrait}
                        onCropComplete={onCropCompletePostPotrait}
                        onZoomChange={setZoomPostPotrait}
                        onInteractionEnd={downloadCroppedImagePostPotrait}
                        showGrid={false}
                    />
                    {/* { file && <img src={file} className="object-cover h-full w-full" />} */}
                </div>
                <div className="absolute bottom-3 left-0 h-1 rounded-full bg-white" style={{width: '80px', marginLeft: '110px'}}></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
            <div>
                <div className="flex justify-between items-center">
                <p className="text-xl font-medium">Post landscape</p>
                <a href={croppedImagePostLandscape} download className="h-11 w-11 rounded-lg border dark:border-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition flex justify-center items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                    </svg>
                </a>
                </div>
                <div
                className="mx-auto mt-5 flex items-center bg-black relative"
                style={{ width: "300px", height: "522px" }}
                >
                <div
                    className="relative"
                    style={{ width: "100%", height: "100%" }}
                >
                    <Cropper
                        image={file}
                        crop={cropPostLandscape}
                        zoom={zoomPostLandscape}
                        aspect={1/0.52}
                        onCropChange={setCropPostLandscape}
                        onCropComplete={onCropCompletePostLandscape}
                        onZoomChange={setZoomPostLandscape}
                        onInteractionEnd={downloadCroppedImagePostLandscape}
                        showGrid={false}
                    />
                    {/* { file && <img src={file} className="object-cover h-full w-full" />} */}
                </div>
                <div className="absolute bottom-3 left-0 h-1 rounded-full bg-white" style={{width: '80px', marginLeft: '110px'}}></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10 mb-16">
            <div>
                <div className="flex justify-between items-center">
                <p className="text-xl font-medium">Stories</p>
                <a href={croppedImagePostStories} download className="h-11 w-11 rounded-lg border dark:border-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition flex justify-center items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                    </svg>
                </a>
                </div>
                <div
                className="mx-auto mt-5 flex items-center bg-black relative"
                style={{ width: "300px", height: "522px" }}
                >
                <div
                    className="relative"
                    style={{ width: "100%", height: "100%" }}
                >
                    <Cropper
                        image={file}
                        crop={cropPostStories}
                        zoom={zoomPostStories}
                        aspect={1/1.74}
                        onCropChange={setCropPostStories}
                        onCropComplete={onCropCompletePostStories}
                        onZoomChange={setZoomPostStories}
                        onMediaLoaded={downloadCroppedImagePostStories}
                        onInteractionEnd={downloadCroppedImagePostStories}
                        showGrid={false}
                    />
                    {/* { file && <img src={file} className="object-cover h-full w-full rounded-3xl" />} */}
                </div>
                <div className="absolute bottom-3 left-0 h-1 rounded-full bg-white" style={{width: '80px', marginLeft: '110px'}}></div>
                </div>
            </div>
        </div>
    </>
  );
}
