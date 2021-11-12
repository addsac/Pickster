import Cropper from 'react-easy-crop'
import { useState } from 'react'
import { useCallback } from 'react'
import getCroppedImg from '../public/cropImage'

export default function Twitter({ file }) {
  /* Tweet */
  const [cropTweet, setCropTweet] = useState({ x: 0, y: 0 })
  const [zoomTweet, setZoomTweet] = useState(1)
  const [croppedAreaPixelsTweet, setCroppedAreaPixelsTweet] = useState(null)
  const [croppedImageTweet, setCroppedImageTweet] = useState(null)

  const onCropCompleteTweet = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsTweet(croppedAreaPixels)
  }, [])

  const downloadCroppedImageTweet = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsTweet,
      )
      setCroppedImageTweet(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsTweet])

  /* Card */
  const [cropCard, setCropCard] = useState({ x: 0, y: 0 })
  const [zoomCard, setZoomCard] = useState(1)
  const [croppedAreaPixelsCard, setCroppedAreaPixelsCard] = useState(null)
  const [croppedImageCard, setCroppedImageCard] = useState(null)

  const onCropCompleteCard = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsCard(croppedAreaPixels)
  }, [])

  const downloadCroppedImageCard = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsCard,
      )
      setCroppedImageCard(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsCard])

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Tweet</p>
            <a href={croppedImageTweet} download className="h-11 w-11 rounded-lg border cursor-pointer hover:bg-gray-200 transition flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                crop={cropTweet}
                zoom={zoomTweet}
                aspect={2/1}
                onCropChange={setCropTweet}
                onCropComplete={onCropCompleteTweet}
                onZoomChange={setZoomTweet}
                onInteractionEnd={downloadCroppedImageTweet}
                showGrid={false}
              />
              {/* { file && <img src={file} className="object-cover  h-full w-full" />} */}
            </div>
            <div className="absolute bottom-3 left-0 h-1 rounded-full bg-white" style={{width: '80px', marginLeft: '110px'}}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10 mb-16">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Card</p>
            <a href={croppedImageCard} download className="h-11 w-11 rounded-lg border cursor-pointer hover:bg-gray-200 transition flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                crop={cropCard}
                zoom={zoomCard}
                aspect={2.5/1}
                onCropChange={setCropCard}
                onCropComplete={onCropCompleteCard}
                onZoomChange={setZoomCard}
                onInteractionEnd={downloadCroppedImageCard}
                showGrid={false}
              />
              {/* { file && <img src={file} className="object-cover h-full w-full" />} */}
            </div>
            <div className="absolute bottom-3 left-0 h-1 rounded-full bg-white" style={{width: '80px', marginLeft: '110px'}}></div>
          </div>
        </div>
        
      </div>
    </>
  );
}
