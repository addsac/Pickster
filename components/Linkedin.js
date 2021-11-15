import Cropper from 'react-easy-crop'
import { useState } from 'react'
import { useCallback } from 'react'
import getCroppedImg from '../public/cropImage'

export default function Linkedin({ file }) {
  /* Post */
  const [cropPost, setCropPost] = useState({ x: 0, y: 0 })
  const [zoomPost, setZoomPost] = useState(1)
  const [croppedAreaPixelsPost, setCroppedAreaPixelsPost] = useState(null)
  const [croppedImagePost, setCroppedImagePost] = useState(null)

  const onCropCompletePost = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixelsPost(croppedAreaPixels)
  }, [])

  const downloadCroppedImagePost = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixelsPost,
      )
      setCroppedImagePost(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixelsPost])

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 mb-16">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Post</p>
            <a href={croppedImagePost} download className="h-11 w-11 rounded-lg border cursor-pointer hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-800 transition flex justify-center items-center">
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
                  crop={cropPost}
                  zoom={zoomPost}
                  aspect={1/0.61}
                  onCropChange={setCropPost}
                  onCropComplete={onCropCompletePost}
                  onZoomChange={setZoomPost}
                  onInteractionEnd={downloadCroppedImagePost}
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
