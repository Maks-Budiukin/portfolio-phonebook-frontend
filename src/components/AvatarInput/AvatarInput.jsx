import { useRef, useState } from "react";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import {
  AvatarWrapper,
  ButtonContainer,
  CropperModal,
  DeleteButton,
} from "./AvatarInput.styled";

export const AvatarInput = ({ getAvatar, currentAvatar }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [cropperModalOpen, setCropperModalOpen] = useState(null);
  const cropperRef = useRef(null);

  const toggleCropperModal = () => {
    setCropperModalOpen((prevstate) => !prevstate);
  };
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = URL.createObjectURL(e.dataTransfer.files[0]);
      setFile(file);
      toggleCropperModal();
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setFile(file);
      // setCropperModalOpen(true);
      // getAvatar(e.target.files[0]); - КЛЮЧЕВОЕ
      toggleCropperModal();
    }
  };

  const onChange = (cropper) => {};

  const onCrop = async () => {
    setFile(cropperRef.current.getCanvas()?.toDataURL());
    cropperRef.current.getCanvas()?.toBlob((blob) => {
      getAvatar(blob);
    });
    setCropperModalOpen(false);
  };

  const onCropCancel = () => {
    setCropperModalOpen(false);
    setFile(null);
    // onInputChange(null);
  };

  return (
    <>
      <AvatarWrapper>
        <div
          id="form-file-upload"
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? "drag-active" : ""}
            style={
              currentAvatar
                ? {
                    backgroundImage: `url(${currentAvatar})`,
                    backgroundSize: "cover",
                  }
                : {
                    backgroundImage: `url(${file})`,
                    backgroundSize: "cover",
                  }
            }
          >
            <div>
              {!file && !currentAvatar && (
                <p>Drag and drop your file here or click to upload</p>
              )}
            </div>
          </label>

          {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </div>
        <ButtonContainer>
          <DeleteButton
            type="button"
            onClick={() => setFile(null)}
          >
            X
          </DeleteButton>
        </ButtonContainer>
      </AvatarWrapper>
      {cropperModalOpen && (
        <CropperModal>
          <Cropper
            ref={cropperRef}
            src={file}
            onChange={onChange}
            className={"cropper"}
            stencilProps={{
              aspectRatio: 1 / 1,
            }}
          />
          <button
            type="button"
            onClick={onCrop}
          >
            Crop
          </button>
          <button
            type="button"
            onClick={onCropCancel}
          >
            Cancel
          </button>
        </CropperModal>
      )}
    </>
  );
};
