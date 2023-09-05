import styled from "styled-components";
import { ContactIconsSet } from "components/ContactIconsSet/ContactIconsSet";
import { useDispatch } from "react-redux";
import { setSelectedContactsThunk } from "redux/contacts/contacts.thunk";

const ContactItem = styled.li`
  --yellow: #ffdd40;
  --dark: #2f313a;
  --deg: -86deg;
  --trans: all 0.4s ease 0s;

  z-index: 2;
  margin: 1.5em 0 0.5em;
  padding: 0.73em;
  background: linear-gradient(
    83deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  position: relative;
  list-style: none;

  transform: scale(0.84);
  transition: var(--trans);

  &:nth-of-type(even) {
    /* text-align: right; */
    background: linear-gradient(
      -83deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );
  }

  &:hover {
    transform: scale(0.88);
    transition: var(--trans);
    /* filter: drop-shadow(0px 5px 10px #0008);
    filter: grayscale(0); */
    img {
      filter: grayscale(0);
    }
  }

  .rotate {
    transform: rotate(-4deg);
  }

  &:nth-of-type(even) {
    .rotate {
      transform: rotate(2deg);
    }
  }
`;

const ContactPhotoThumb = styled.div`
  --yellow: #ffdd40;
  --dark: #2f313a;
  --deg: -86deg;
  --trans: all 0.4s ease 0s;

  width: 14vmin;
  height: 13vmin;
  float: left;
  margin-right: 1.25em;
  background: linear-gradient(
    var(--deg),
    var(--dark) 0 70%,
    var(--yellow) 0% 100%
  );

  transition: var(--trans);
  border-radius: 0.25em;
  overflow: hidden;
  margin-left: -3em;
  padding: 0.5em;

  &:nth-of-type(even) {
    /* text-align: right; */
    transform: rotate(14deg);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    filter: grayscale(1);
    background: var(--dark);
  }
`;

const ContactDescription = styled.div`
  --yellow: #ffdd40;
  --dark: #2f313a;
  --deg: -86deg;
  --trans: all 0.4s ease 0s;

  padding-top: 1vmin;
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    padding: 0 2em;
    margin-bottom: 1em;
  }

  h3 {
    background: linear-gradient(182deg, #fff0 60%, var(--dark) 0 100%);
    transform: rotate(-2deg);
    margin: 0;
    margin-top: -2.25em;
    left: 9vmin;
    padding: 0.5em 0.75em;
    color: var(--yellow);
    border-radius: 0.25em;
    font-size: 1.35em;
    transform-origin: left bottom;
  }
`;

const ContactName = styled.p`
  position: absolute;
  top: -34px;
  left: 76px;
  font-size: 22px;

  background: var(--dark);
  color: var(--yellow);

  background: linear-gradient(
    106deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

export const ContactListItem = ({ name, number, id, onClick, contact }) => {
  const dispatch = useDispatch();

  const handleItemClick = (contact) => {
    dispatch(setSelectedContactsThunk(contact));
  };

  return (
    <ContactItem onClick={() => handleItemClick(contact)}>
      <ContactPhotoThumb className="rotate">
        <img src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg?format=1500w"></img>
      </ContactPhotoThumb>

      <ContactDescription>
        <ContactName>{contact.name}</ContactName> <p>{contact.number}</p>
        <ContactIconsSet contact={contact} />
      </ContactDescription>
    </ContactItem>
  );
};
