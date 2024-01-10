import React from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { Upload } from '@cloudinary/react';
import '@cloudinary/react/widget';

const CloudinaryUploadWidget = () => {
    const cloudName = 'fashi';
    const uploadPreset = 'fashi_img';

    const handleSuccess = (result) => {
        // Handle the successful upload
        console.log('Upload successful. Public URL:', result.info.secure_url);
    };

    return (
        <CloudinaryContext cloudName={cloudName}>
            <Upload
                apiKey={cloudName}
                cloudName={cloudName}
                uploadPreset={uploadPreset}
                onSuccess={handleSuccess}
                maxFiles={1}
                resourceType="auto"
                type="fetch"
                fetchFormat="auto"
            >
                <button>Select Image</button>
            </Upload>
        </CloudinaryContext>
    );
};

export default CloudinaryUploadWidget;
