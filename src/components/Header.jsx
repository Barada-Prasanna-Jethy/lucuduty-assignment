import { useDispatch, useSelector } from "react-redux";
import { toggleUser } from "../actions";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const onUserToggle = (user) => {
    toggleUser(dispatch, user);
  };
  return (
    <div className="roleToggler">
      <div
        className={`userButton ${user === "admin" ? "active" : ""}`}
        onClick={() => {
          onUserToggle("admin");
        }}
      >
        Admin
      </div>
      <div
        className={`userButton ${user === "user" ? "active" : ""}`}
        onClick={() => {
          onUserToggle("user");
        }}
      >
        User
      </div>
    </div>
  );
}
