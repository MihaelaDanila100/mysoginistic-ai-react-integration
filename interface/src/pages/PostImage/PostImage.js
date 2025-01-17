import './PostImage.style.css';
import img from "../../assets/eye_icon.webp";
import { useEffect, useState } from 'react';

export const PostImage = ({imageUrl, description, flags}) => {

    let separator = flags.length === 2 ? ' and ' : ', ';

    const [warningMessage, setWarningMessage] = useState(`This image contains ${flags.join(separator)} content!`);
    const [imageClasses, setImageClasses] = useState(`image-item ${flags.length > 0 ? 'blured-image' : ''}`);
    const [isBlured, setIsBlured] = useState(flags.length > 0);

    useEffect(() => {
        setWarningMessage(`This image contains ${flags.join(separator)} content!`);
        setIsBlured(flags.length > 0);
        setImageClasses(`image-item ${flags.length > 0 ? 'blured-image' : ''}`);
    }, [flags]);


    const unBlur = () => {
        setIsBlured(false);
        setImageClasses('image-item unblurred-image-item');
    }

    return (
        <div className="image-container">
            <div className='description'>{ description }</div>
            <img src={imageUrl} alt = "Post" className={imageClasses} />
            { isBlured && (
                <div className='image-warning'>
                    <div className='icon-container'>
                        <img src={ img } alt="Post image" className='blured-icon' />
                    </div>
                    { warningMessage }
                    <div className='unblur-warning' onClick={unBlur}>Do you want to visualize it?</div>
                </div>
            )}

        </div>
    );
}