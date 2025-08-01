const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};
.social-icons {
  margin-top: 15px;
}

.social-icons a {
  color: #00bcd4;
  margin: 0 10px;
  font-size: 22px;
  display: inline-block;
  transition: transform 0.3s, color 0.3s;
}

.social-icons a:hover {
  color: #fff;
  transform: scale(1.2);
}
