import PhoneIcon from '../assets/icons/phone.svg';
import EmailIcon from '../assets/icons/email.svg';
import GithubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import ContactImage from '../assets/images/avatar.jpg';

export default function () {
  return `
    <div class="contact-container">
      <div class="contact-content">

        <h2 class="contact-title">Contact me</h2>
        
        <p class="contact-desc">Please get i touch if you think our work could be mutually beneficial!</p>
        
        <div class="contact-address">
          <p>1234 Random Road</p>
          <p>Random Town, California 12345</p>
        </div>

        <div class="contact-phone">
          <img class="icon-n" src="${PhoneIcon}" alt="Phone Icon"/>
          <p class="phone-number">555-555-5555</p>
        </div>

        <div class="contact-email">
          <img class="icon-n" src="${EmailIcon}" alt="Email Icon"/>
          <p class="email-address">hieuhocit2309@gmail.com</p>
        </div>

        <div class="contact-social-media">
          <a href="https://github.com/hieuhocit" target="_blank">
              <img class="icon icon-l" src="${GithubIcon}" alt="Github Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/trung-hi%E1%BA%BFu-tr%E1%BA%A7n-1320572a2/" target="_blank">
              <img class="icon icon-l" src="${LinkedInIcon}" alt="Linkedin Icon"/>
            </a>
            <a href="#">
              <img class="icon icon-l" src="${TwitterIcon}" alt="Twitter Icon"/>
            </a>
        </div>
      </div>

      <div class="contact-img">
        <img src="${ContactImage}" alt="Contact Image"/>
      </div>
    </div>
  `;
}