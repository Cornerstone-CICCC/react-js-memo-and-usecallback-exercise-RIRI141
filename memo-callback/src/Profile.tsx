import { memo } from "react";


type Props = {
  firstname: string;
  lastname: string;
}

const Profile = memo(({ firstname, lastname }: Props) => {
  console.log("Rendered Profile Component");
  
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {firstname} {lastname}</p>
    </div>
  );
});

Profile.displayName = 'Profile';

export default Profile;