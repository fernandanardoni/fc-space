function logout() {
    window.location = "index.html";
}

const logOut = document.querySelector('#logout');

logOut.addEventListener('click', () => {
    auth.signOut().then(() => {
        logout();
    });
});