import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactsThunk,
  editContactsThunk,
} from "redux/contacts/contacts.thunk";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrEdit } from "react-icons/gr";
import styled from "styled-components";
import { ContactInfoItem } from "components/ContactInfoItem/ContactInfoItem";

import { TfiEmail } from "react-icons/tfi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaViber, FaPhoneSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandBitbucket } from "react-icons/tb";

const Tick = styled(MdDone)`
  margin-bottom: 4px;
`;

const StyledForm = styled.form`
  /* width: 300px; */

  input {
    display: flex;
    width: 110px;
    height: 20px;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }
  button {
    /* display: inline-block; */
    margin-left: auto;
    margin-right: 4px;
    background-color: #fff;
    /* padding: 5px 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
      color: skyblue;
    }
  }
`;

const Wrapper = styled.div`
  //тут работало
  position: sticky;
  top: 70px;
  color: #fff;
  width: 34vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  background-color: #2f313a;

  /* background: linear-gradient(
    88deg,
    #2f313a 0 70%,
    #ffdd40 0% 100%
  ); */

  p {
    height: 14px;
    margin-right: auto;
    margin-left: 8px;
  }
`;

const AvatarThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 220px;
  background: linear-gradient(-93deg, #2f313a, #333 33%, #ffdd40 95%, #333 65%);
  /* background: linear-gradient(-86deg, #2f313a 0 70%, #ffdd40 0% 100%); */
  /* background: linear-gradient(
    -104deg,
    #ffdd40 0 97%,
    #fff0 calc(97% + 1px) 100%
  ); */
  background-color: #ffdd40;
  /* transform: rotate(-2deg); */
`;

const UserAvatar = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;

  /* transform: rotate(2deg); */
  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div``;

const ListOfContactData = styled.li`
  list-style: none;
  padding: 12px;
`;

export const ContactInfo = ({ chosenContactID }) => {
  const contact = useSelector((state) =>
    state.contacts.items.find((contact) => contact._id === chosenContactID)
  );

  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.isLoading);

  const [displayedContact, setDisplayedContact] = useState(null);

  useEffect(() => {
    !isLoading && contact
      ? setDisplayedContact(contact)
      : setDisplayedContact(contacts[0]);
  }, [contact, isLoading]);

  const [editForm, setEditForm] = useState(null);
  const [editName, setEditName] = useState("");
  const [editNumber, setEditNumber] = useState("");

  const dispatch = useDispatch();

  const nameInpudId = nanoid();
  const numberInpudId = nanoid();

  const deleteHandler = (id) => {
    dispatch(deleteContactsThunk(id));
    setDisplayedContact(contacts[0]);
  };

  const editHandler = () => {
    setEditForm(contact.name);
    setEditName(contact.name);
    setEditNumber(contact.number);
  };

  const handleEditSubmit = () => {
    dispatch(
      editContactsThunk({
        id: contact._id,
        name: editName,
        number: editNumber,
      })
    );
    setEditForm(null);
  };

  const onEditInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setEditName(event.target.value);
        break;
      case "number":
        setEditNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  // ============ Обработка LinkedIn ссылки =============== //

  const handleLinkedInURL = (url) => {
    const inIndex = url.indexOf("/in/");
    if (inIndex !== -1) {
      let username = url.substring(inIndex + 4);
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }
    return url; // Возвращаем null, если не найдено "/in/"
  };

  // =============================================

  //==================== Обработка ссылок Telegram =========================//

  const handleTelegramURL = (url) => {
    const inIndex = url.indexOf("/t.me/");

    if (inIndex !== -1) {
      let username = `@${url.substring(inIndex + 4)}`;
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }

    return url; // Возвращаем null, если не найдено "/in/"
  };

  const handleTelegramLink = (url) => {
    const snailIndex = url.indexOf("@");
    if (snailIndex !== -1) {
      let userLink = `https://t.me/${url.substring(snailIndex + 1)}`;
      return userLink;
    }
  };

  const handleTwitterURL = (url) => {
    const inIndex = url.indexOf("twitter.com/");

    if (inIndex !== -1) {
      let username = `@${url.substring(inIndex + 4)}`;
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }

    return url; // Возвращаем null, если не найдено "/in/"
  };

  const handleTwitterLink = (url) => {
    const snailIndex = url.indexOf("@");
    if (snailIndex !== -1) {
      let userLink = `https://twitter.com/${url.substring(snailIndex + 1)}`;
      return userLink;
    }
  };

  const handleInstagramURL = (url) => {
    const inIndex = url.indexOf("instagram.com/");

    if (inIndex !== -1) {
      let username = `${url.substring(inIndex + 4)}`;
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }

    return url; // Возвращаем null, если не найдено "/in/"
  };

  const handleInstagramLink = (url) => {
    const domainlIndex = url.indexOf("instagram.com/");
    if (domainlIndex === -1) {
      let userLink = `https://www.instagram.com/${url}`;
      return userLink;
    }
    return url;
  };

  const handleGithubURL = (url) => {
    const inIndex = url.indexOf("github.com/");

    if (inIndex !== -1) {
      let username = `${url.substring(inIndex + 11)}`;
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }

    return url; // Возвращаем null, если не найдено "/in/"
  };

  const handleGithubLink = (url) => {
    const domainlIndex = url.indexOf("github.com/");
    if (domainlIndex === -1) {
      let userLink = `https://www.github.com/${url}`;
      return userLink;
    }
    return url;
  };

  const handleBitbucketURL = (url) => {
    const inIndex = url.indexOf("bitbucket.org/");

    if (inIndex !== -1) {
      let username = `${url.substring(inIndex + 14)}`;
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }

    return url; // Возвращаем null, если не найдено "/in/"
  };

  const handleBitbucketLink = (url) => {
    const domainlIndex = url.indexOf("bitbucket.org/");
    if (domainlIndex === -1) {
      let userLink = `https://www.bitbucket.org/${url}`;
      return userLink;
    }
    return url;
  };

  const handleFacebookURL = (url) => {
    const inIndex = url.indexOf("facebook.com/");
    const idIndex = url.indexOf("?id=");
    if (idIndex !== -1) {
      return "Facebook";
    }

    if (inIndex !== -1) {
      let username = `${url.substring(inIndex + 13)}`;
      const slashIndex = username.indexOf("/");
      if (slashIndex !== -1) {
        username = username.substring(0, slashIndex);
      }
      return username;
    }

    return "Facebook"; // Возвращаем null, если не найдено "/in/"
  };

  const handleFacebookLink = (url) => {
    const domainlIndex = url.indexOf("facebook.com/");
    if (domainlIndex === -1) {
      let userLink = `https://www.facebook.com/${url}`;
      return userLink;
    }
    return url;
  };

  return (
    <Wrapper>
      {editForm ? (
        <>
          <h2>Contact Info</h2>

          <button
            onClick={() => editHandler(displayedContact._id)}
            disabled={true}
          >
            <GrEdit />
          </button>
          <button
            onClick={() => deleteHandler(displayedContact._id)}
            disabled={true}
          >
            <RxCross2 />
          </button>
          <UserAvatar />
          <StyledForm onSubmit={handleEditSubmit}>
            <label htmlFor={nameInpudId}></label>
            <input
              type="text"
              name="name"
              id={nameInpudId}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={editName}
              onChange={onEditInputChange}
              required
            />

            <label htmlFor={numberInpudId}></label>

            <input
              type="tel"
              name="number"
              id={numberInpudId}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={editNumber}
              onChange={onEditInputChange}
              required
            />

            <button type="submit">
              <Tick />
            </button>
          </StyledForm>
        </>
      ) : (
        displayedContact && (
          <>
            <h2>{displayedContact.name}</h2>
            <AvatarThumb>
              <UserAvatar>
                <img src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg?format=1500w"></img>
              </UserAvatar>
            </AvatarThumb>
            <ButtonContainer>
              <button onClick={() => editHandler(displayedContact._id)}>
                <GrEdit />
              </button>
              <button onClick={() => deleteHandler(displayedContact._id)}>
                <RxCross2 />
              </button>
            </ButtonContainer>
            <ListOfContactData>
              {displayedContact.number && (
                <ContactInfoItem
                  data={`callto:${displayedContact.number}`}
                  icon={<FaPhoneSquare />}
                  title={displayedContact.number}
                />
              )}

              {displayedContact.email && (
                <ContactInfoItem
                  data={`mailto:${displayedContact.email}`}
                  icon={<TfiEmail />}
                  title={displayedContact.email}
                />
              )}
              {displayedContact.telegram && (
                <ContactInfoItem
                  data={handleTelegramLink(displayedContact.telegram)}
                  icon={<LiaTelegramPlane />}
                  title={handleTelegramURL(displayedContact.telegram)}
                />
              )}
              {displayedContact.whatsapp && (
                <ContactInfoItem
                  data={`https://wa.me/${displayedContact.whatsapp}`}
                  icon={<BsWhatsapp />}
                  title={displayedContact.whatsapp}
                />
              )}
              {displayedContact.viber && (
                <ContactInfoItem
                  data={`viber://chat?number=%2B${displayedContact.viber}`}
                  icon={<FaViber />}
                  title={displayedContact.viber}
                />
              )}
              {displayedContact.instagram && (
                <ContactInfoItem
                  data={handleInstagramLink(displayedContact.instagram)}
                  icon={<SiInstagram />}
                  title={handleInstagramURL(displayedContact.instagram)}
                />
              )}
              {displayedContact.facebook && (
                <ContactInfoItem
                  data={handleFacebookLink(displayedContact.facebook)}
                  icon={<BsFacebook />}
                  title={handleFacebookURL(displayedContact.facebook)}
                />
              )}
              {displayedContact.linkedin && (
                <ContactInfoItem
                  data={displayedContact.linkedin}
                  icon={<FaLinkedin />}
                  title={handleLinkedInURL(displayedContact.linkedin)}
                />
              )}
              {displayedContact.twitter && (
                <ContactInfoItem
                  data={handleTwitterLink(displayedContact.twitter)}
                  icon={<SlSocialTwitter />}
                  title={handleTwitterURL(displayedContact.twitter)}
                />
              )}
              {displayedContact.github && (
                <ContactInfoItem
                  data={handleGithubLink(displayedContact.github)}
                  icon={<RxGithubLogo />}
                  title={handleGithubURL(displayedContact.github)}
                />
              )}

              {displayedContact.bitbucket && (
                <ContactInfoItem
                  data={handleBitbucketLink(displayedContact.bitbucket)}
                  icon={<TbBrandBitbucket />}
                  title={handleBitbucketURL(displayedContact.bitbucket)}
                />
              )}

              {/* <li>{displayedContact.number}</li>
              <li>{displayedContact.viber || null}</li>
              <li>{displayedContact.number}</li>
              <li>{displayedContact.number}</li> */}
            </ListOfContactData>
            {/* <p>{displayedContact.number}</p>
            <p>{displayedContact.number}</p>
            <p>{displayedContact.number}</p>
            <p>{displayedContact.number}</p> */}
          </>
        )
      )}
    </Wrapper>
  );

  // return editForm ? (
  //   <StyledForm onSubmit={handleEditSubmit}>
  //     <label htmlFor={nameInpudId}></label>
  //     <input
  //       type="text"
  //       name="name"
  //       id={nameInpudId}
  //       // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //       value={editName}
  //       onChange={onEditInputChange}
  //       required
  //     />
  //     <label htmlFor={numberInpudId}></label>
  //     <input
  //       type="tel"
  //       name="number"
  //       id={numberInpudId}
  //       // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //       value={editNumber}
  //       onChange={onEditInputChange}
  //       required
  //     />

  //     <button type="submit">
  //       <Tick />
  //     </button>
  //   </StyledForm>
  // ) : (
  //   <li key={currentContact._id}>
  //     {" "}
  //     {currentContact.name} <span> {currentContact.number}</span>{" "}
  //     <button onClick={() => editHandler(currentContact._id)}>
  //       <GrEdit />
  //     </button>{" "}
  //     <button onClick={() => deleteHandler(currentContact._id)}>
  //       <RxCross2 />
  //     </button>
  //   </li>
  // );
};
