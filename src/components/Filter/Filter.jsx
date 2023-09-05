import styled from "styled-components";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { contactsFilter } from "redux/filter/filter.slice";
import { LuFilter } from "react-icons/lu";

const StyledFilter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* margin-left: 50px;
  margin-bottom: 20px; */
  /* max-width: 300px; */
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
    border: 2px solid #2f313a;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid #2f313a;
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
        <LuFilter style={{ color: "#2f313a" }} />{" "}
      </label>
      <input
        type="text"
        name="filter"
        id={filterInpudId}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={onInputChange}
      />
    </StyledFilter>
  );
};
