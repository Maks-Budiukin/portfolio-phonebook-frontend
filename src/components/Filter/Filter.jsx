import styled from "styled-components";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { contactsFilter } from "redux/filter/filter.slice";
import { LuFilter } from "react-icons/lu";

const StyledFilter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 24vw;
  label {
    position: absolute;
    top: 8px;
    right: 0;
    font-weight: 500;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    height: 26px;
    border: 2px solid var(--dark);
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid var(--dark);
    }
  }
`;

export const Filter = () => {
  const filterInpudId = nanoid();

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    dispatch(contactsFilter(event.target.value));
  };

  return (
    <StyledFilter>
      <label htmlFor={filterInpudId}>
        {" "}
        <LuFilter style={{ color: "var(--dark)" }} />{" "}
      </label>
      <input
        type="text"
        name="filter"
        id={filterInpudId}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={onInputChange}
      />
    </StyledFilter>
  );
};
