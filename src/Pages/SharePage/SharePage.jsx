import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useHistory } from "react-router-dom";
import { addSharedContactThunk } from "redux/contacts/contacts.thunk";
import { Portal } from "components/Portal/Portal";
import { ContactModal } from "components/ContactModal/ContactModal";

export const SharePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("navigate", navigate);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  useEffect(() => {
    dispatch(addSharedContactThunk(id));
    navigate("/");
    setIsModalOpen(true);
  }, []);

  return (
    <>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={"add"}
          />
        </Portal>
      )}
    </>
  );
};
