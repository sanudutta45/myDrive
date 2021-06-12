import "../css/dashedBoard.scss";
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

function DashedBoard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const clickHandler = () => {
    document.getElementById("choose-bttn").click();
  };
  return (
    <section id="dashboard">
      <div className="total-cont">
        <div className="upload-handl">
          <span
            className="upload-img"
            onClick={() => alert("functionality had been disabled")}
          >
            <i class="fa fa-upload fa-5x" aria-hidden="true"></i>
          </span>
          <span>
            <input
              type="file"
              id="choose-bttn"
              className="choose-bttn"
              name="file"
            />
          </span>
          <div>
            <button type="button" id="butn" onClick={clickHandler}>
              Choose Files
            </button>
          </div>
        </div>
        <div className="gallery-container">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
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
    </section>
  );
}
export default DashedBoard;
