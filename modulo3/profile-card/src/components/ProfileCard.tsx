import React from "react";
import '../index.css';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

<div className="icons">
  <FaGithub />
  <FaLinkedin />
  <FaTwitter />
</div>


type ProfileCardProps  = {
    name: string;
    title: string;
    imageUrl: string;
    children?: React.ReactNode
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name, 
  title,
  imageUrl,
  children
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={imageUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
      
      <div className="profile-description">
        {children}
      </div>
      
      <p>Membro desde 2025</p>
      
      <div className="profile-footer">
        <div className="icons">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
        </div>
        <button>Ver Perfil</button>
      </div>
    </div>
  )
}
