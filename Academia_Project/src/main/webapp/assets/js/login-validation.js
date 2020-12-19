let login_form = document.getElementById('login-validation');

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (login_form.checkValidity() === true) {
        let response = await fetch('api/students/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: document.getElementById('email').value,
            })
        });
        console.log("waiting");
        let result = await response.json();
        console.log("reciebce");
        console.log(result);
        if(result["id"]){
         //   console.log("Inside ");
          //  sessionStorage.setItem('id',result["id"]);
          //  sessionStorage.setItem('fname',result["firstname"]);
          //  sessionStorage.setItem('lname',result["lastname"]);
            location.href = "dashboard.html";
        }else{
            document.getElementById("login-alert").style.display = "block";
        }

    }
});