/* eslint-disable @typescript-eslint/naming-convention */
import { type ReactElement } from 'react';
import { ProfileData } from '../../dataTypes/Types';
import UserAvatar from './UserAvatar';
import UserID from './UserID';
import UserNickname from './UserNickname';
import UserWebsite from './UserWebsite';

interface Props {
  data: ProfileData[];
}

const MyProfile = ({ data }: Props): ReactElement => {
  if (!data) {
    return <div>no data</div>;
  }

  const { id, username, avatar_url, website } = data[0];

  return (
    <div>
      <UserID id={id} />
      <UserNickname username={username} />
      <UserAvatar avatar_url={avatar_url} />
      <UserWebsite website={website} />
    </div>
  );
};

export default MyProfile;
