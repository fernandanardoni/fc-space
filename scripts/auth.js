const userView = document.querySelector('.user-view');

// ouvindo mudanças de login e logout
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in', user.email)
        const userInfo = `<a href="#email"><span id="profile-email" class="black-text email">${user.email}</span></a>`;
        userView.innerHTML = userInfo;
    } else {
        console.log('user logged out')
    }
});