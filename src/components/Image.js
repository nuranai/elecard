import { useState } from "react"

export default function Image({ url }) {
  const [showFullImage, setShowFullImage] = useState(false)

  const changeImageView = () => {setShowFullImage(!showFullImage)}

  return (
    <>
      <img className="thumbnail" src={url} onClick={changeImageView} alt='thumbnail'/>
      {showFullImage
        ? <div className="modal_content" onClick={changeImageView}>
          <h1 className="modal_close" >X</h1>
          <img className="full_img" src={url} alt="full"/>
        </div>
        : null}
    </>
  )
}