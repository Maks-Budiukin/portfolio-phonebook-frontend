import styled from "styled-components";

export const ShareButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    94deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );

  color: var(--dark);
  font-weight: bold;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
  margin-left: auto;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 0, 98% 100%, 4% 100%);

  padding: 68px 48px 28px 48px;

  &.block {
    transform: scale(0.95);
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    transform: scale(1);
  }
`;

export const ShareLinkText = styled.p`
  line-height: 1.3;
  color: #fff;
  font-size: 28px;
  transition-property: color;
  transition-duration: 250ms;
  cursor: pointer;
  &:hover {
    color: var(--yellow);
  }
`;

export const ShareLinkTextCopied = styled.p`
  line-height: 1.3;
  font-size: 28px;
  color: var(--yellow);
  cursor: pointer;
`;

export const QRThumb = styled.div`
  padding: 26px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
