import { LABELS } from "../../enums/labels";
import { FeedbackItem } from "../FeedbackItem/FeedbackItem";
import { UploadImageForm } from '../ImageForm/ImageForm';
import { useState } from "react";
import './FeedbackPage.style.css';

export const FeedbackPage = () => {

    const images = [
        {
            imageUrl: 'https://cdn.expertphotography.com/wp-content/uploads/2024/08/Take-Large-Group-Photos-Joel-Muniz.jpg',
            description: 'Had so much fun with you all',
            misogynous: 0,
            shaming: 0,
            stereotype: 0,
            objectification: 0,
            violence: 0
        }, {
            imageUrl: 'https://pbs.twimg.com/media/FZonXD6XkAEFzB7.jpg',
            description: 'My man spitting facts',
            misogynous: 1,
            shaming: 1,
            stereotype: 0,
            objectification: 0,
            violence: 0
        }, {
            imageUrl: 'https://img.resized.co/hersport/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltZy5oZXJzcG9ydC5pZVxcXC9wcm9kXFxcL3VwbG9hZHNcXFwvd29ybGQtcnVnYnktY29hY2hpbmctZ3VpZGVsaW5lcy1hcG9sb2d5LnBuZ1wiLFwid2lkdGhcIjoxMjAwLFwiaGVpZ2h0XCI6NjI3LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyc3BvcnQuaWVcXFwvaW1hZ2VzXFxcL25vLWltYWdlLnBuZz92PTJcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiZTdiOWM4OGE3NTk4M2EyNTcxNTBhODZlZTIxNTkyYTI3NmNhMmMzMCJ9/world-rugby-issues-apology-for-misogynistic-coaching-guidelines-hersport-ie.png',
            description: 'Forza gli Azzurri',
            misogynous: 0,
            shaming: 0,
            stereotype: 0,
            objectification: 0,
            violence: 0
        }
    ];
    const [feedImages, setFeedImages] = useState([...images]);

    const createFlags = (imageObj) => {
        let flags = [];
        if(imageObj.misogynous === 1) flags.push(LABELS.MYSONIGIC);
        if(imageObj.shaming === 1) flags.push(LABELS.SHAMING);
        if(imageObj.stereotype === 1) flags.push(LABELS.STEREOTYPE);
        if(imageObj.objectification === 1) flags.push(LABELS.OBJECTIFICATION);
        if(imageObj.violence === 1) flags.push(LABELS.VIOLENCE);
        return flags;
    }

    const updateImages = (newImage) => {
        setFeedImages([newImage, ...feedImages]);
    }

    return (
        <div className="feed-container">

            <UploadImageForm onUploadedImage={updateImages} />

            {feedImages.map((imageObj, index) => (
                <div key={index}>
                    <FeedbackItem imageUrl={imageObj.imageUrl} flags={createFlags(imageObj)} description={imageObj.description}/>
                </div>
            ))}
            
        </div>
    );
}