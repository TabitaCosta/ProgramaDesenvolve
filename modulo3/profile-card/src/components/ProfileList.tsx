import React from "react";
import { ProfileCard } from "./ProfileCard";
import '../index.css';

type Profile = {
  name: string;
  title: string;
  imageUrl: string;
  description: React.ReactNode;
};

type ProfileListProps = {
  profiles: Profile[];
};

export const ProfileList: React.FC<ProfileListProps> = ({ profiles }) => {
  return (
    <div className="profile-list">
      <h2>Nosso Time</h2>
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            title={profile.title}
            imageUrl={profile.imageUrl}
          >
            {profile.description}
          </ProfileCard>
        ))}
      </div>
    </div>
  );
};
