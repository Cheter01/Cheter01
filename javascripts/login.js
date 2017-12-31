var users = [
    { username: 'root', password: 'root' } //,
    // { username: 'user2', password: 'pass2' },
    // { username: 'user3', password: 'pass3' }
];

var button = document.getElementById('login');

function log() {
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

   for (var i = 0; i < users.length; i++) {
      if(username == users[i].username && password == users[i].password) {
         modal.style.display = "none";
         break;
      }else{
         alert('Password o Username errati');
         // break;
      }
   }
}
