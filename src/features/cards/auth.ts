import axios from 'axios';

const CLIENT_ID = process.env.BATTLEGROUNDED_CLIENT_ID;
const CLIENT_SECRET = process.env.BATTLEGROUNDED_CLIENT_SECRET;

export const getAccessToken = async (): Promise<string | undefined> => {
    try {
        const response = await axios.post('https://us.battle.net/oauth/token', null, {
            params: {
                grant_type: 'client_credentials'
            },
            auth: {
                username: CLIENT_ID,
                password: CLIENT_SECRET
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return undefined;
    }
}