// import React from 'react';
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
// import { Upload } from '@cloudinary/react';
// import '@cloudinary/react/widget';

// const CloudinaryUploadWidget = () => {
//     const cloudName = 'fashi';
//     const uploadPreset = 'fashi_img';

//     const handleSuccess = (result) => {
//         // Handle the successful upload
//         console.log('Upload successful. Public URL:', result.info.secure_url);
//     };

//     return (
//         <CloudinaryContext cloudName={cloudName}>
//             <Upload
//                 apiKey={cloudName}
//                 cloudName={cloudName}
//                 uploadPreset={uploadPreset}
//                 onSuccess={handleSuccess}
//                 maxFiles={1}
//                 resourceType="auto"
//                 type="fetch"
//                 fetchFormat="auto"
//             >
//                 <button>Select Image</button>
//             </Upload>
//         </CloudinaryContext>
//     );
// };

// export default CloudinaryUploadWidget;

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your API credentials
cloudinary.config({
    cloud_name: 'fashi',
    api_key: '183874549213243',
    api_secret: 'jZ2hb9seaIKuwYgGhulCMErYPro',
});

// Upload an image to Cloudinary
cloudinary.v2.uploader
    .upload('women-4.jpg', {
        folder: 'Products',
        resource_type: 'image',
    })
    .then(console.log);
