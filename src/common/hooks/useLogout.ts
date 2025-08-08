import { useDispatch } from "react-redux";
import { USER_LOGOUT } from "../utils/action";

export const useLogout = () => {
  const dispatch = useDispatch();

  return () => dispatch({ type: USER_LOGOUT });
};

