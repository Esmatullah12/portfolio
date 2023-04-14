const humburger = document.querySelector('.nav-menue-btn');
const projectsElm = document.getElementById('works')
const navXmark = document.querySelector('.nav-xmark');
const previewProject = document.getElementById('works')
const preview = document.getElementById('preview')
//const previewXmark = document.querySelector('.preview-xmark')

humburger.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.add('active');
};

navXmark.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.remove('active');
};

// previewXmark.onclick = function() {
//   const previewProject = document.querySelector(".prreview-project");
//   previewProject.classList.add('close')
// }


const project = [
  {
    id: 1,
    projectImg: 'images/project-1.svg',
    projectTitle: 'Tonic',
    projectSubt: 'CANOPY',
    projectType: "Back End Dev",
    projectYear: '2015',
    projectDes: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#'
  },
  {
    id: 2,
    projectImg: 'images/project-2.svg',
    projectTitle: 'Multi-Post Stories',
    projectSubt: 'FACEBOOK',
    projectType: "FULL Stack Dev",
    projectYear: '2015',
    projectDes: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#'
  },
  {
    id: 3,
    projectImg: 'images/project-3.svg',
    projectTitle: 'Facebook 360',
    projectSubt: 'FACEBOOK',
    projectType: "FULL Stack Dev",
    projectYear: '2015',
    projectDes: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#'
  },
  {
    id: 4,
    projectImg: 'images/project-4.svg',
    projectTitle: 'Uber Navigation',
    projectSubt: 'Uber',
    projectType: "Lead Development",
    projectYear: '2018',
    projectDes: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#'
  }
];

function createProjects() {
  projectsElm.innerHTML = project.map((info) => 
  `<div class="projects">
    <div class="project-img project-right-img">
      <img class="project-img" src=${info.projectImg} alt="Uber Navigation project screenshot image">
    </div>
    <div class="project-info project-left-info">
      <div class="project-name">
        <h2>${info.projectTitle}</h2>
      </div>
      <div class="project-subtitle">        
        <p>${info.projectSubt}</p>
        <span></span>
        <p>${info.projectType}</p>
        <span></span>
        <p>${info.projectYear}</p>
      </div>
      <div class="project-description">
        <p>${info.projectDes}</p>
        <ul>
          ${info.projectTech.map((x) => `<li class="tech-btn">${x}</li>`).join('')}
        </ul>
      </div>
      <button class="regular-btn" id=${info.id}>See Project</button> 
    </div>
  </div>`            
  ).join('');
}
createProjects()

previewProject.addEventListener('click', (val) => {
  if(val.target.classList.contains('regular-btn')) {
    preview.classList.remove('remove');
    const id = parseInt(val.target.id);
    const targetProject = project.find((x) => x.id === id)
    console.log(targetProject)
    if (targetProject !== undefined){
      preview.innerHTML = 
      `
      <div class="preview-project">
        <div class="preview-title-div">
          <h2 class="preview-project-title primary-font">${targetProject.projectTitle}</h2>
          <button class="preview-project-xmark" id="close"><i class="fa-solid fa-xmark fa-2x"></i></button>
        </div>
        <div class="project-subtitle primary-font">
          <p>${targetProject.projectSubt}</p>
          <span></span>
          <p>${targetProject.projectType}</p>
          <span></span>
          <p>${targetProject.projectYear}</p>
        </div>
        <img class="preview-project-img" src="images/${targetProject.projectImg}" alt="">
        <div class="pre-project-info">
          <div>
            <p class="review-info-project primary-font">${targetProject.projectDes}</p>
          </div>
          <div>
            <ul class="preview-tech-list primary-font">
              ${targetProject.projectTech.map((x) => `<li calss="tech-btn">${x}</li>`).join('')}
            </ul>
            <ul class="preview-tech-list primary-font second-list-tech">
                <li class="tech-btn">github</li>
                <li class="tech-btn">ruby</li>
                <li class="tech-btn">Bootstrap</li>
            </ul>
            <hr>
            <a class="preview-btn" href=${targetProject.projectLive}>See Live <img src="images/arrow-circle.svg" alt=""></a>
            <a class="preview-btn" href=${targetProject.projectCode}>See Source <img src="images/Frame.svg" alt=""></a>
          </div>
        </div>
      </div>
      `;
    }
  }
  createProjects()
})

preview.addEventListener('click', (val) => {
  if (val.target.id === 'close') {
    preview.classList.add('remove')
  }
  createProjects();
})