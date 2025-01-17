import { PostImage } from '../PostImage/PostImage';
import './FeedbackItem.style.css';

export const FeedbackItem = ({imageUrl, description, flags}) => {

const avatarUrl = require('../../assets/user_avatar.jpg');

    return (
        <div className="profile-post">
            <div className="post-header">
                <img src={avatarUrl} alt="Profile" className="profile-photo" />
                <div className="profile-details">
                    <span className="profile-username">username</span>
                    <span className="profile-timestamp">Just now</span>
                </div>
            </div>
            <div className="post-image-container">
                <PostImage imageUrl={imageUrl} flags={flags} description={description}/>
            </div>
        </div>
    )
}