function userSignUp(){
    let userName = document.getElementById('userSignUp').value;
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = {user : {username: userName, password: userPass}};
    fetch('http://localhost:4000/api/user/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function (response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}

function userSignIn(){
    const url = 'http://localhost:4000/api/user/signin';
    let userName = document.getElementById('li_username').value;
    let userPass = document.getElementById('li_password').value;
    console.log(userName, userPass);

    let userData = {user : {username: userName, password: userPass}};
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}

function getSessionToken(){
    var data = localStorage.getItem('SessionToken');
    console.log(data);
    return data;
}