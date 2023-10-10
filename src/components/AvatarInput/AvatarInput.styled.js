import styled from "styled-components";

export const AvatarWrapper = styled.div`
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

export const CropperModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* top: 10vh;
  left: 10vw; */
  /* top: 20vh; */
  /* left: -20vw; */
  z-index: 50;
  /* width: 70vw;
  height: 90vh; */
  width: 90vw;
  /* max-width: 80%; */
  height: 90vh;
  /* width: 80%; */

  background-color: #000;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
`;

export const DeleteButton = styled.button`
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

export const CropButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);

  color: var(--dark);
  font-weight: bold;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-right: -2px;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const CancelCropButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  clip-path: polygon(6% 0, 100% 0, 100% 100%, 0% 100%);

  color: var(--dark);
  font-weight: bold;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: -2px;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const CropperButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5vh;
`;
