/* eslint-disable react/prop-types */
function Profile(props) {
  const { name } = props;
  // const name = props.name;
  return (
    <div className="profile">
      <img
        src={`https://api.multiavatar.com/${name}.svg`}
        alt={name + " avatar"}
      />
      {name}
    </div>
  );
}

export default Profile;
