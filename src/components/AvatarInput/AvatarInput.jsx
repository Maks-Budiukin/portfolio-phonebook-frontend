import { useRef, useState } from "react";
import styled from "styled-components";

import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

const AvatarWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  #form-file-upload {
    height: 16rem;
    width: 28rem;
    max-width: 200px;
    text-align: center;
    position: relative;
  }

  #input-file-upload {
    display: none;
  }

  #label-file-upload {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 1rem;
    border-color: #cbd5e1;
    background-color: #f8fafc;
  }

  #label-file-upload.drag-active {
    background-color: #ffffff;
  }

  .upload-button {
    cursor: pointer;
    padding: 0.25rem;
    font-size: 1rem;
    border: none;
    font-family: "Oswald", sans-serif;
    background-color: transparent;
  }

  .upload-button:hover {
    text-decoration-line: underline;
  }

  #drag-file-element {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

const CropperModal = styled.div`
  position: absolute;
  top: 20vh;
  left: -20vw;
  z-index: 50;
  width: 70vw;
  height: 90vh;
  background-color: #fff;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
`;

const DeleteButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    91deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--dark);

  font-weight: bold;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  border: 4px solid var(--dark);
  transition: var(--trans);
  margin-left: -4px;

  &:hover,
  &:focus {
    transform: scale(1.13);
  }
`;

export const AvatarInput = ({ getAvatar }) => {
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
            style={{
              backgroundImage: `url(${file})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              {!file && <p>Drag and drop your file here or click to upload</p>}
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
