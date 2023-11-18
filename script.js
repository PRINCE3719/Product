

function Login(){
    
    
    const req = new XMLHttpRequest();
    const url = 'https://api.escuelajs.co/api/v1/auth/login';

    const name = document.getElementById('name').value;
    const pass = document.getElementById('password').value;

    req.open("POST",url,true);
    req.setRequestHeader("Content-Type", "application/json");

    const body = JSON.stringify({
        email: name,
        password: pass

    });
    
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
          if (req.status === 201) {
           
            const response = JSON.parse(req.responseText);
            window.location.href = 'home.html';
          } else {
            console.error('Request failed with status:', req.status);
          }
        }
      };
      req.send(body);

      
    
}
