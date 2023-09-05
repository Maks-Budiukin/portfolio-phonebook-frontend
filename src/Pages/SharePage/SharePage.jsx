import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addSharedContactThunk } from "redux/contacts/contacts.thunk";

export const SharePage = () => {
  const data = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSharedContactThunk(data));
    navigate("/");
  }, []);

  return <></>;
};
