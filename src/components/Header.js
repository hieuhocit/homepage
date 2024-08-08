import Avatar from '../assets/images/avatar.jpg';
import GithubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/twitter.svg';

export default function () {
  return `
    <header class="header">
      <div class="header-bgc"></div>
      <div class="about-me">
        <div class="about-me__img">
          <img src="${Avatar}" alt="Avatar">
          <p class="name">Trần Trung Hiếu</p>
        </div>

        <div class="desc-container">
          <h2>About me</h2>

          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus maxime, minus tenetur ipsam itaque sequi ex saepe dolor quae nobis laudantium! In molestiae perferendis aut nesciunt repellendus. Rem, quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quae consequatur maiores provident mollitia assumenda, aliquid quam magni iste ipsa eius. Illo sed modi dolorum quibusdam maxime velit vel perspiciatis.</p>

          <div class="social-icons">
            <a href="https://github.com/hieuhocit" target="_blank">
              <img class="icon icon-m" src="${GithubIcon}" alt="Github Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/trung-hi%E1%BA%BFu-tr%E1%BA%A7n-1320572a2/" target="_blank">
              <img class="icon icon-m" src="${LinkedInIcon}" alt="Linkedin Icon"/>
            </a>
            <a href="#">
              <img class="icon icon-m" src="${TwitterIcon}" alt="Twitter Icon"/>
            </a>
          </div>

        </div>
        
      </div>
    </header>
  `;
}
