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
            <ul>
              {displayedContact.name && (
                <ContactInfoItem data={displayedContact.name} />
              )}
              {displayedContact.number && (
                <ContactInfoItem data={displayedContact.number} />
              )}
              {displayedContact.whatsapp && (
                <ContactInfoItem data={displayedContact.whatsapp} />
              )}
              {displayedContact.viber && (
                <ContactInfoItem data={displayedContact.viber} />
              )}

              {/* <li>{displayedContact.number}</li>
              <li>{displayedContact.viber || null}</li>
              <li>{displayedContact.number}</li>
              <li>{displayedContact.number}</li> */}
            </ul>
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
