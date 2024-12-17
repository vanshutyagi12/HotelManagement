JS---
// Handle form submissions (Basic example)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login Successful!");
});
function openWin() {
  window.open("https://www.youtube.com/watch?v=Zrt77f7nTqY&list=RDCLAK5uy_n9Fbdw7e6ap-98_A-8JYBmPv64v-Uaq1g&index=2");