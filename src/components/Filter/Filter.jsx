import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { contactsFilter } from "redux/filter/filter.slice";
import { LuFilter } from "react-icons/lu";
import { StyledFilter } from "./Filter.styled";

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
