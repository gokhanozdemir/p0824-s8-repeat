/* eslint-disable react/prop-types */
function Profile(props) {
  const { info } = props;
  // const name = props.name;
  return (
    <div className="profile">
      <img
        src={info.avatarUrl}
        alt={info.name + " avatar"}
      />
      {info.name}
    </div>
  );
}

export default Profile;
