import { useEffect, useState } from "react";

import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactsThunk,
  deleteContactsThunk,
  editContactsThunk,
} from "redux/contacts/contacts.thunk";
import { updateUserThunk } from "redux/auth/auth.thunk";
import { AvatarInput } from "components/AvatarInput/AvatarInput";
import {
  ButtonContainer,
  CancelButton,
  FunctionalPartWrapper,
  InputWrapper,
  StyledForm,
  SubmitButton,
  TextPartWrapper,
} from "./MainForm.styled";

export const MainForm = ({ _id, fn, onSubmitClose, label }) => {
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
    if (fn === "editContact") {
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
    if (fn === "editUser") {
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
    if (fn === "addContact" && sharedContact) {
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
      case "addContact":
        await dispatch(
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
        // dispatch(
        //   uploadContactAvatar({ _id: selectedContact._id, avatar: avatarFile })
        // );

        break;
      case "editContact":
        await dispatch(
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
            avatarFile,
          })
        );
        // dispatch(uploadContactAvatar({ _id, avatar: avatarFile }));

        break;

      case "editUser":
        await dispatch(
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
            avatar,
            avatarFile,
          })
        );
        // dispatch(uploadUserAvatar({ _id, avatar: avatarFile }));

        break;

      case "deleteContact":
        await dispatch(deleteContactsThunk(_id));
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

  const getAvatar = async (file) => {
    await setAvatarFile(file);
  };

  const setAvatarPreview = async (avatar) => {
    setAvatar(avatar);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {fn !== "deleteContact" && (
        <>
          <FunctionalPartWrapper>
            <AvatarInput
              getAvatar={getAvatar}
              setAvatarPreview={setAvatarPreview}
              currentAvatar={avatar}
            />

            <ButtonContainer>
              <SubmitButton type="submit">{label}</SubmitButton>

              <CancelButton
                type="button"
                onClick={onSubmitClose}
              >
                Cancel
              </CancelButton>
            </ButtonContainer>
          </FunctionalPartWrapper>

          <TextPartWrapper>
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
            <InputWrapper>
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
            </InputWrapper>

            <InputWrapper>
              <label htmlFor={emailInpudId}>Email </label>
              <input
                type="email"
                name="email"
                id={emailInpudId}
                title="Email"
                value={email}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={telegramInpudId}>Telegram </label>
              <input
                type="text"
                name="telegram"
                id={telegramInpudId}
                title="Telegram"
                value={telegram}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={linkedinInpudId}>LinkedIn </label>
              <input
                type="text"
                name="linkedin"
                id={linkedinInpudId}
                title="LinkedIn"
                value={linkedin}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={instagramInpudId}>Instagram </label>
              <input
                type="text"
                name="instagram"
                id={instagramInpudId}
                title="Instagram"
                value={instagram}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={githubInpudId}>GitHub </label>
              <input
                type="text"
                name="github"
                id={githubInpudId}
                title="Github"
                value={github}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={facebookInpudId}>Facebook </label>
              <input
                type="text"
                name="facebook"
                id={facebookInpudId}
                title="Facebook"
                value={facebook}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={twitterInpudId}>Twitter </label>
              <input
                type="text"
                name="twitter"
                id={twitterInpudId}
                title="Twitter"
                value={twitter}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={bitbucketInpudId}>Bitbucket </label>
              <input
                type="text"
                name="bitbucket"
                id={bitbucketInpudId}
                title="Bitbucket"
                value={bitbucket}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={whatsappInpudId}>WhatsApp </label>
              <input
                type="text"
                name="whatsapp"
                id={whatsappInpudId}
                title="WhatsApp"
                value={whatsapp}
                onChange={onInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor={viberInpudId}>Viber </label>
              <input
                type="text"
                name="viber"
                id={viberInpudId}
                title="Viber"
                value={viber}
                onChange={onInputChange}
              />
            </InputWrapper>
          </TextPartWrapper>
        </>
      )}
      {fn === "deleteContact" && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <div>
              <img
                src={selectedContact.avatar}
                style={{ width: "200px" }}
              ></img>
            </div> */}
            <p style={{ color: "#fff", fontSize: "bold", textAlign: "center" }}>
              Are you sure you want to delete contact "{selectedContact.name}
              "?
            </p>

            <ButtonContainer>
              <SubmitButton type="submit">{label}</SubmitButton>

              <CancelButton
                type="button"
                onClick={onSubmitClose}
              >
                Cancel
              </CancelButton>
            </ButtonContainer>
          </div>
        </>
      )}
    </StyledForm>
  );
};
