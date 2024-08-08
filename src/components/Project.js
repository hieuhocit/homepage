import GithubIcon from '../assets/icons/github.svg';
import NewTabIcon from '../assets/icons/open-in-new.svg';

export default function ({img, name, desc, source, livepreview}) {
  return `
    <div class="project">
      <div class="project-header">
        <img src="${img}" alt="${name} image" />
      </div>

      <div class="project-main">
        <p class="project-title">${name}</p>

        <div class="project-reference">
          <a class="project-source" href="https://github.com/hieuhocit/${source}" target="_blank">
            <img class="icon icon-n" src="${GithubIcon}" alt="Github Icon" />
          </a>
          <a class="project-live" href="https://hieuhocit.github.io/${livepreview}" target="_blank">
            <img class="icon icon-n" src="${NewTabIcon}" alt="Open New Tab Icon" />
          </a>
        </div>
      </div>

      <div class="project-footer">
        <p>${desc}</p>
      </div>
    </div>
  `;
}
