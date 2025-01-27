import { useState } from "react";

function ImageToVideo({ imageSrc, videoSrc }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Handle image click to open the video modal
  const handleImageClick = () => {
    setIsVideoOpen(true);
  };

  // Handle close button click to close the video modal
  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  // Close the modal if the user clicks on the background
  const handleBackgroundClick = (e) => {
    if (e.target.id === "video-modal-background") {
      setIsVideoOpen(false);
    }
  };

  return (
    <div className="col-md-8">
      <div className="mb-n30">
        {/* Image Thumbnail */}
        <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
          <img
            src={imageSrc} // Replace with your image URL
            alt="Image Description"
            style={{ cursor: "pointer", width: "100%", borderRadius: "8px" }}
            onClick={handleImageClick} // Open the video modal
          />
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            id="video-modal-background"
            onClick={handleBackgroundClick} // Close on background click
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "80%",
                height: "80%",
                backgroundColor: "transparent",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              {/* Close Button */}
              <button
                onClick={handleCloseVideo}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  zIndex: 1001,
                }}
              >
                &times;
              </button>

              {/* YouTube Video */}
              <iframe
                src={`https://www.youtube.com/embed/${videoSrc}`} // Embed YouTube video using video ID
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "8px",
                }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageToVideo;
