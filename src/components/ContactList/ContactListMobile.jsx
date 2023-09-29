import { ContactListItemMobile } from "components/ContactListItem/ContactListItemMobile";
import { StyledList, Wrapper } from "./ContactListMobile.styled";

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
