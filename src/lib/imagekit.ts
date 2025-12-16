'use server';

import ImageKit from 'imagekit';

if (!process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY || !process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT) {
    throw new Error('ImageKit environment variables are not set.');
}

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
});

export const uploadToImageKit = async (file: Buffer, fileName: string) => {
    try {
        const response = await imagekit.upload({
            file: file,
            fileName: fileName,
            folder: '/resumes'
        });
        return response;
    } catch (error) {
        console.error('ImageKit upload error:', error);
        throw new Error('Failed to upload file to ImageKit.');
    }
};
