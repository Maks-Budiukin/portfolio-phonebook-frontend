import styled from "styled-components";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { ContactListItemMobile } from "components/ContactListItem/ContactListItemMobile";

const StyledList = styled.ul`
  padding: 0;
  padding-top: 30px;
  margin-left: -34px;
  list-style: none;
  width: 95vw;

  li {
    display: flex;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    font-weight: bold;
  }

  button {
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }

  li span {
    color: black;
    display: inline-block;
    margin-left: auto;
    margin-right: 8px;
    font-weight: normal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
  /* width: 90vw; */
`;

export const ContactListMobile = ({ filteredContacts }) => {
  return (
    <Wrapper>
      <div>
        <StyledList>
          {filteredContacts.map((item) => {
            return (
              <ContactListItemMobile
                key={item._id}
                contact={item}
              />
            );
          })}
        </StyledList>
      </div>
    </Wrapper>
  );
};
