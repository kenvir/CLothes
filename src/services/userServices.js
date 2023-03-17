import * as httpRequest from '~/utils/httpRequest';

export const getUserProfile = async ({ id, accessToken }) => {
    try {
        const res = await httpRequest.get(`productDetail/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
