import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { StyledList, Wrapper } from "./ContactList.styled";

export const ContactList = ({ filteredContacts }) => {
  return (
    <Wrapper>
      <div>
        <StyledList>
          {filteredContacts.map((item) => {
            return (
              <ContactListItem
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
