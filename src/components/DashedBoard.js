
// import ImgContainer from "./imgContainer"
import "../css/dashedBoard.css"
import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import Navigation from "./navigation"
// import axios from "axios";
function DashedBoard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  // const [fileName,setFileName] = useState("");
  // const [File,setFile] = useState(null);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    // const changeHandler=(event=>{
    //     // const{file}=event.target;
    //     // setFile(event.target.files[0])
    //     // console.log(File)
    // })
    // const uploadHandler=()=>{
    //   // const data = new FormData()
    //   // data.append('file',File)
    //   // axios.post("http://localhost:8000/upload",data)
    // }
    const clickHandler=()=>{
      document.getElementById("choose-bttn").click();
    }
  return (
      <div className="total-cont">
        <div className="upload-handl">
        <span className="upload-img" onClick={()=>alert("functionality had been disabled")}><i class="fa fa-upload fa-5x" aria-hidden="true"></i></span>
        <span><input type="file"  id="choose-bttn" className="choose-bttn" name="file"/></span>
        <div><button type="button" id="butn" onClick={clickHandler}>Choose Files</button></div>

        </div>
      <div className="nav"><Navigation/></div>
    <div className="gallery-container">
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
                
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    </div>
  );
}
export default DashedBoard;
