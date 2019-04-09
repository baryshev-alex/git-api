import React from 'react';

const UserInfo = (props) => (
    <div>
        { props.avatar_url &&
            <div className="row profile pt-5">
                <div className="profile-avatar">
                    <a href={props.html_url}>
                        <img src={props.avatar_url} alt="avatar" className="rounded-circle profile-avatar_img"/>
                    </a>
                    <div className="profile-avatar_info pt-5 pb-5">
                        <h2>{props.name}</h2>
                        <h5>{props.bio}</h5>
                        <h6>{props.location}</h6>
                    </div>
                </div>
                <div className="profile_state">
                    <ul>
                        <li>
                            <p>Followers</p> 
                            <span>{props.followers}</span>
                        </li>
                        <li>
                            <p>Repositoriy</p>
                            <span>{props.public_repos}</span>
                        </li>
                        <li>
                            <p>Following</p>
                            <span>{props.following}</span>
                        </li>
                    </ul>
                </div>
            </div>
        }
        <span className="error">{props.error}</span>
    </div>
);

export default UserInfo;