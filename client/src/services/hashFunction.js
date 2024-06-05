export const hashPassword = (password) => {
    let hashedPassword = '';
    for(let i = 0; i < password.length; i++) {
        hashedPassword += password.charCodeAt(i);
    }
    return hashedPassword;
};

