import { getValue, removeValue } from '../index';


export const getValidToken = () => {
    const user = getValue('user');
    if (user){
        console.log("Valid Token Service", user.user);
        return user.token;
    }
}

export const removeValidToken = () => {
    console.log('token timed out');
    localStorage.removeItem('access_token');
    removeValue('user');
    window.location.href = '/';
}