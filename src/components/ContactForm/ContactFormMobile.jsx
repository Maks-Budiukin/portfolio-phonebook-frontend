import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactsThunk,
  editContactsThunk,
  uploadContactAvatar,
} from "redux/contacts/contacts.thunk";
import { updateUserThunk, uploadUserAvatar } from "redux/auth/auth.thunk";
import { AvatarInput } from "components/AvatarInput/AvatarInput";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 4px;
  width: 300px;

  input {
    display: flex;
    width: 210px;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }
  /* button {
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  } */
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  /* flex-direction: column; */
  /* border: 1px solid silver; */
  input {
    display: flex;
    width: 210px;
    /* flex-direction: column; */
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }
`;

// const AvatarWrapper = styled.div`
//   #form-file-upload {
//     height: 16rem;
//     width: 28rem;
//     max-width: 100%;
//     text-align: center;
//     position: relative;
//   }

//   #input-file-upload {
//     display: none;
//   }

//   #label-file-upload {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-width: 2px;
//     border-radius: 1rem;
//     border-style: dashed;
//     border-color: #cbd5e1;
//     background-color: #f8fafc;
//   }

//   .upload-button {
//     cursor: pointer;
//     padding: 0.25rem;
//     font-size: 1rem;
//     border: none;
//     font-family: "Oswald", sans-serif;
//     background-color: transparent;
//   }

//   .upload-button:hover {
//     text-decoration-line: underline;
//   }
// `;

export const ContactForm = ({ _id, fn, onSubmitClose, label }) => {
  const selectedContact = useSelector(
    (state) => state.contacts.selectedContact
  );
  const user = useSelector((state) => state.auth.user);
  const sharedContact = useSelector((state) => state.contacts.sharedContact);
  const dispatch = useDispatch();

  const nameInpudId = nanoid();
  const numberInpudId = nanoid();
  const emailInpudId = nanoid();
  const telegramInpudId = nanoid();
  const linkedinInpudId = nanoid();
  const instagramInpudId = nanoid();
  const githubInpudId = nanoid();
  const facebookInpudId = nanoid();
  const twitterInpudId = nanoid();
  const bitbucketInpudId = nanoid();
  const whatsappInpudId = nanoid();
  const viberInpudId = nanoid();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [bitbucket, setBitbucket] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [viber, setViber] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    if (fn === "edit") {
      // selectedContact.name && setName(selectedContact.name);
      // selectedContact.email && setEmail(selectedContact.email);
      // selectedContact.number && setNumber(selectedContact.number);
      // selectedContact.telegram && setTelegram(selectedContact.telegram);
      // selectedContact.linkedin && setLinkedin(selectedContact.linkedin);
      // selectedContact.instagram && setInstagram(selectedContact.instagram);
      // selectedContact.github && setGithub(selectedContact.github);
      // selectedContact.facebook && setFacebook(selectedContact.facebook);
      // selectedContact.twitter && setTwitter(selectedContact.twitter);
      // selectedContact.bitbucket && setBitbucket(selectedContact.bitbucket);
      // selectedContact.whatsapp && setWhatsapp(selectedContact.whatsapp);
      // selectedContact.viber && setViber(selectedContact.viber);
      // selectedContact.avatar && setAvatar(selectedContact.avatar);
      setName(selectedContact.name || "");
      setEmail(selectedContact.email || "");
      setNumber(selectedContact.number || "");
      setTelegram(selectedContact.telegram || "");
      setLinkedin(selectedContact.linkedin || "");
      setInstagram(selectedContact.instagram || "");
      setGithub(selectedContact.github || "");
      setFacebook(selectedContact.facebook || "");
      setTwitter(selectedContact.twitter || "");
      setBitbucket(selectedContact.bitbucket || "");
      setWhatsapp(selectedContact.whatsapp || "");
      setViber(selectedContact.viber || "");
      setAvatar(selectedContact.avatar || "");
    }
    if (fn === "userEdit") {
      setName(user.name || "");
      setEmail(user.email || "");
      setNumber(user.number || "");
      setTelegram(user.telegram || "");
      setLinkedin(user.linkedin || "");
      setInstagram(user.instagram || "");
      setGithub(user.github || "");
      setFacebook(user.facebook || "");
      setTwitter(user.twitter || "");
      setBitbucket(user.bitbucket || "");
      setWhatsapp(user.whatsapp || "");
      setViber(user.viber || "");
      setAvatar(user.avatar || "");
    }
    if (fn === "add" && sharedContact) {
      setName(sharedContact.name || "");
      setEmail(sharedContact.email || "");
      setNumber(sharedContact.number || "");
      setTelegram(sharedContact.telegram || "");
      setLinkedin(sharedContact.linkedin || "");
      setInstagram(sharedContact.instagram || "");
      setGithub(sharedContact.github || "");
      setFacebook(sharedContact.facebook || "");
      setTwitter(sharedContact.twitter || "");
      setBitbucket(sharedContact.bitbucket || "");
      setWhatsapp(sharedContact.whatsapp || "");
      setViber(sharedContact.viber || "");
      setAvatar(sharedContact.avatar || "");
    }
  }, [fn, sharedContact, selectedContact, user]);

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "telegram":
        setTelegram(event.target.value);
        break;
      case "linkedin":
        setLinkedin(event.target.value);
        break;
      case "instagram":
        setInstagram(event.target.value);
        break;
      case "github":
        setGithub(event.target.value);
        break;
      case "facebook":
        setFacebook(event.target.value);
        break;
      case "twitter":
        setTwitter(event.target.value);
        break;
      case "bitbucket":
        setBitbucket(event.target.value);
        break;
      case "whatsapp":
        setWhatsapp(event.target.value);
        break;
      case "viber":
        setViber(event.target.value);
        break;
      default:
        return;
    }
  };

  const action = async (fn) => {
    switch (fn) {
      case "add":
        dispatch(
          addContactsThunk({
            name,
            number,
            email,
            telegram,
            linkedin,
            instagram,
            github,
            facebook,
            twitter,
            bitbucket,
            whatsapp,
            viber,
            avatar: avatarFile,
          })
        );
        break;
      case "edit":
        dispatch(
          editContactsThunk({
            _id,
            name,
            number,
            email,
            telegram,
            linkedin,
            instagram,
            github,
            facebook,
            twitter,
            bitbucket,
            whatsapp,
            viber,
            avatar,
          })
        );
        dispatch(uploadContactAvatar({ _id: _id._id, avatar: avatarFile }));

        break;

      case "userEdit":
        dispatch(
          updateUserThunk({
            _id,
            name,
            number,
            email,
            telegram,
            linkedin,
            instagram,
            github,
            facebook,
            twitter,
            bitbucket,
            whatsapp,
            viber,
          })
        );
        dispatch(uploadUserAvatar({ _id, avatar: avatarFile }));

        break;
      default:
        return;
    }
  };

  // const normalizedName = name.toLowerCase();

  const handleSubmit = (event) => {
    event.preventDefault();
    action(fn);
    onSubmitClose();

    // contacts.find((contact) => contact.name.toLowerCase() === normalizedName)
    //   ? alert(`${name} is already in contacts `)
    //   : action(fn);
  };

  const getAvatar = (file) => {
    setAvatarFile(file);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <AvatarInput getAvatar={getAvatar} />

      <InputWrapper>
        <label htmlFor={nameInpudId}>Name </label>
        <input
          type="text"
          name="name"
          id={nameInpudId}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onInputChange}
          required
        />
      </InputWrapper>
      <label htmlFor={numberInpudId}>Number </label>
      <input
        type="tel"
        name="number"
        id={numberInpudId}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={onInputChange}
        required
      />

      <label htmlFor={emailInpudId}>Email </label>
      <input
        type="email"
        name="email"
        id={emailInpudId}
        title="Email"
        value={email}
        onChange={onInputChange}
      />
      <label htmlFor={telegramInpudId}>Telegram </label>
      <input
        type="text"
        name="telegram"
        id={telegramInpudId}
        title="Telegram"
        value={telegram}
        onChange={onInputChange}
      />
      <label htmlFor={linkedinInpudId}>LinkedIn </label>
      <input
        type="text"
        name="linkedin"
        id={linkedinInpudId}
        title="LinkedIn"
        value={linkedin}
        onChange={onInputChange}
      />
      <label htmlFor={instagramInpudId}>Instagram </label>
      <input
        type="text"
        name="instagram"
        id={instagramInpudId}
        title="Instagram"
        value={instagram}
        onChange={onInputChange}
      />
      <label htmlFor={githubInpudId}>GitHub </label>
      <input
        type="text"
        name="github"
        id={githubInpudId}
        title="Github"
        value={github}
        onChange={onInputChange}
      />
      <label htmlFor={facebookInpudId}>Facebook </label>
      <input
        type="text"
        name="facebook"
        id={facebookInpudId}
        title="Facebook"
        value={facebook}
        onChange={onInputChange}
      />
      <label htmlFor={twitterInpudId}>Twitter </label>
      <input
        type="text"
        name="twitter"
        id={twitterInpudId}
        title="Twitter"
        value={twitter}
        onChange={onInputChange}
      />
      <label htmlFor={bitbucketInpudId}>Bitbucket </label>
      <input
        type="text"
        name="bitbucket"
        id={bitbucketInpudId}
        title="Bitbucket"
        value={bitbucket}
        onChange={onInputChange}
      />
      <label htmlFor={whatsappInpudId}>WhatsApp </label>
      <input
        type="text"
        name="whatsapp"
        id={whatsappInpudId}
        title="WhatsApp"
        value={whatsapp}
        onChange={onInputChange}
      />
      <label htmlFor={viberInpudId}>Viber </label>
      <input
        type="text"
        name="viber"
        id={viberInpudId}
        title="Viber"
        value={viber}
        onChange={onInputChange}
      />

      <button type="submit">{label}</button>
      <button
        type="button"
        onClick={onSubmitClose}
      >
        Cancel
      </button>
    </StyledForm>
  );
};
