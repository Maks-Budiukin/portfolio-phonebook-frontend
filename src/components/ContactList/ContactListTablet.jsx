import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { StyledList, Wrapper } from "./ContactListTablet.styled";

export const ContactListTablet = ({ filteredContacts }) => {
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
