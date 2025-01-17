import { useState } from "react";
import axios from "axios";
import "./ImageForm.style.css";

export const UploadImageForm = ({onUploadedImage}) => {

    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [chosenPicture, setChosenPicture] = useState(null);

    const handleImageChange = (event) => {
        const chosenFile = event.target.files[0];

        if(chosenFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result.split(',')[1]);
            };

            reader.readAsDataURL(chosenFile);
            const imageUrl = URL.createObjectURL(chosenFile);
            setChosenPicture(imageUrl);
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!image) {
            alert('Please add an image!');
            return;
        }

        const formData = new FormData();
        formData.append('text', description);
        formData.append('image', image);

        const reqHeaders = {
            'Content-Type': 'multipart/form-data'
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
                headers: reqHeaders
            });

            console.log('Success ', response.data);
            const res = {
                imageUrl: chosenPicture,
                description: description,
                ...response.data
            };
            onUploadedImage(res);
            setDescription('');
            setChosenPicture(null);
        } catch(error) {
            console.error('Error upload ', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="form-container">

            <div className="input-container">
                <textarea type = "text" 
                    value = {description}
                    onChange = {handleDescriptionChange}
                    placeholder="Write here a new post..."
                    className="text-input" />

                <button type="submit" className="upload-button">Post</button>
            </div>

            <div className="buttons-container">
                <label htmlFor="file-input" className="add-photo-button">Add photo</label>
                {chosenPicture !== null && <div className="photo-description">Image uploaded successfully!</div>}
                <input type="file"
                    id="file-input"
                    onChange={handleImageChange}
                    style={{display: "none"}}
                    acept="image/*" />
            </div>

        </form>
    );
}