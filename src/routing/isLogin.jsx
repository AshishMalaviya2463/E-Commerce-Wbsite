const isLogin = () => {
    const localData = localStorage.getItem("userLogin");

    if (localData) {
        return true;
    } else {
        return false;
    }
}

export default isLogin
