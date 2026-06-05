function genrater(){
     const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$^&*";
  let password = "";
  for(i = 0; i<chars.length; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    password += chars[randomIndex]
  }
  document.getElementById("password").value= password

}
function copy(){
    navigator.clipboard.writeText
}