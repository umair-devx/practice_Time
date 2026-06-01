function generator(){
    const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$^&*";
  let password = "";
  for(let i=0; i<10; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    password+= chars[randomIndex]
  }

  document.getElementById("Password").value = password
}

function copy(){
    let password = document.getElementById("Password").value;

    if(!password){
        alert("Please genrate the password")
        return;
    }
    navigator.clipboard.writeText(password)
    alert("copy");
  
}