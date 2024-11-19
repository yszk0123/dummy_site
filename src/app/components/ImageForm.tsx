'use client'
import React, { useState } from 'react';

const ImageForm: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} className="button-default" />
            {imagePreview && <img id="image-preview" src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />}
        </div>
    );
};

export default ImageForm;
