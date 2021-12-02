const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click',function(){
    // console.log("yes");
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transitionArea = document.getElementById('transition-area');
    transitionArea.style.display = 'block';
})