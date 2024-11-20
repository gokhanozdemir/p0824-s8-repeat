/* eslint-disable react/prop-types */
export default function AddProfile(props) {
  const { addUser, demoUser } = props;
  return (
    <div onClick={() => addUser(demoUser)} className="profile">
      <img src="/images/CirclePlus.svg" />
      Add Profile
    </div>
  );
}
