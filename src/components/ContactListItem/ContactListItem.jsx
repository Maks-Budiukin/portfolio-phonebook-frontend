import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { LiaBitbucket } from "react-icons/lia";
import { TbBrandBitbucket } from "react-icons/tb";
import { ContactIconsSet } from "components/ContactIconsSet/ContactIconsSet";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid silver;
  border-radius: 8px;
  transition-property: scale;
  transition-duration: 250ms;
  transition-timing-function: ease;
  &:hover {
    scale: 1.02;
  }
`;

const StyledNumber = styled.p`
  margin-left: auto;
  margin-right: 36px;
`;

const StyledName = styled.p`
  margin-left: 12px;
`;

export const ContactListItem = ({ name, number, id, onClick }) => {
  return (
    <ListItem
      key={id}
      onClick={onClick}
    >
      <StyledName>{name}</StyledName> <StyledNumber>{number}</StyledNumber>
      <ContactIconsSet />
    </ListItem>
  );
};
