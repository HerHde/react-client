import React  from "react";
import "./user-avatar.scss"

export interface UserAvatarProps {
    name: string;
    photo: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, photo }) => {
    return (
        <div className='d-inline-flex align-items-baseline'>
            <img
                src={photo}
                className="user-avatar"
                alt={`Avatar of ${name}`}
            /><span>{name}</span>
        </div>
    );
}

export {UserAvatar}
