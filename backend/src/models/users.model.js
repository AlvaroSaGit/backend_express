const user = [

];

export const getusers = () => {
    return user;
};

export const getuserbyid = (id) => {
    return user.find((u) => u.id === id);
};