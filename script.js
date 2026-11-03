// Data store strutturato con metadati, descrizione a testo unico fluido e documentazione multimediale originale
const projectData = {
  project1: {
    title: "Flip me to the moon and beyond",
    intro: "A project that explores the communicative power of abstract animation. It is an animated book about animation, an experiment in the visual translation of a story.",
    year: "2024",
    client: "Academic research",
    service: "Animation, research",
    tags: "Art direction — Marina Picari, Luca Santarelli\nIllustration and animation — Marina Picari",
    media: "<img src='images/FlipMeToTheMoon/FMTM-3.jpg' style='width:100%;' alt='FMTMB-cover'>",
    description: "The text is an interdisciplinary reflection that delves into the deep roots of the act of infusing objects with a soul. From the so-called pre-cinema to the study of the evolution of storytelling, the text questions whether animation can be, as in the vision of kinetic artist Len Lye, an act of composition, similar to musical composition. Visually, the book is a flipbook, an animated book. The images on the sides tell a story in eight sequences that progress simultaneously in groups of four as one flips through it. The story is an anti-mimetic visual translation of the emotions depicted in the first Toy Story. The choice to translate the first 3D feature film is a provocation against the animation film industry, which has become fixated on an increasingly meticulous pursuit of realism and easily assimilable narrative codes. In cinema, animation has ceased to experiment with its core potential, becoming a copy of live-action cinema, but less real. The animated sequences visually convey the content of the thesis, attempting to understand the limits of abstraction, colour and movement that allow the communication of pride, fear, friendship, and relief.",
    documentation: [
      { type: "video", src: "images/FlipMeToTheMoon/MP4/FlipBook_1.mp4", class: "" },
      { type: "video", src: "images/FlipMeToTheMoon/MP4/1920x1080_impaginato.mp4", class: "" },
      { type: "video", src: "images/FlipMeToTheMoon/MP4/Sequenze_video/FTMB_03.mp4", class: "full-width" },
      { type: "image", src: "images/FlipMeToTheMoon/FMTM-1.jpg", class: "" },
      { type: "image", src: "images/FlipMeToTheMoon/FMTM-2.jpg", class: "" },
      { type: "image", src: "images/FlipMeToTheMoon/FMTM-4.jpg", class: "" },
      { type: "image", src: "images/FlipMeToTheMoon/DSC_0832.jpg", class: "" },
            { type: "image", src: "images/FlipMeToTheMoon/Pagine da Frame video-7.png", class: "" },
      { type: "image", src: "images/FlipMeToTheMoon/Pagine da Frame video-8.png", class: "" },
      { type: "image", src: "images/FlipMeToTheMoon/Pagine da Frame video.png", class: "" },
      { type: "image", src: "images/FlipMeToTheMoon/Pagine da Frame video-2.png", class: "" },
      { type: "video", src: "images/FlipMeToTheMoon/MP4/Sequenze_video/FTMB_04.mp4", class: "full-width" },
      { type: "video", src: "images/FlipMeToTheMoon/MP4/Sequenze_video/FTMB_01.mp4", class: "" },
      { type: "video", src: "images/FlipMeToTheMoon/MP4/Sequenze_video/FTMB_02.mp4", class: "" }
    ]
  },
  project2: {
    title: "Mangaverse identity",
    intro: "Branding, visual and motion system designed for a new platform dedicated to manga.",
    year: "2025",
    client: "Project for Mangaverse",
    service: "Brand system, video launch",
    tags: "Art direction and design — Marina Picari, Luca Santarelli\nMascotte design — Mogiko\nFont — Zetafonts",
    media: "<img src='images/Mangaverse/Logo-Layout_16-9.jpg', style='width:100%;' alt='Mangaverse-cover'>",
    description: "Mangaverse is an online portal entirely dedicated to manga and its enthusiasts. The project was born when only a name and an idea existed, both in need of becoming a recognizable and cohesive whole. We started by creating the brand's personality, tone of voice, visual identity, and motion design, ultimately leading to the construction of the e-commerce website—the core of the experience for anyone stepping into the Mangaverse. The identity is built on playfulness and contrast. Mangaverse is an expert and authoritative universe, yet ironic and chaotic, which uses typography as the defining core of its brand identity. The visual inspiration comes from manga covers and Japanese comic magazines that fearlessly use typography and vivid colors. The contrast between thick and thin strokes in the typeface evokes the speed lines and onomatopoeia typical of manga. But who inhabits the Mangaverse? Tapu and Uni-Chan are the mascots who will help readers find their perfect title, guiding them through the exploration of this adventure-filled universe.",
    documentation: [
      { type: "image", src: "images/Mangaverse/MV-16-95.jpg", class: "" },
      { type: "image", src: "images/Mangaverse/MV-Mobile_16-9.jpg", class: "" },
      { type: "image", src: "images/Mangaverse/MV-16-9.jpg", class: "" },
      { type: "image", src: "images/Mangaverse/MV-16-92.jpg", class: "" },
      { type: "image", src: "images/Mangaverse/MV-16-93.jpg", class: "" },
      { type: "image", src: "images/Mangaverse/MV-16-94.jpg", class: "" },
      { type: "image", src: "images/Mangaverse/MV-16-96.jpg", class: "full-width" },
      { type: "image", src: "images/Mangaverse/MV-Pack-16-9.jpg", class: "full-width" },
      { type: "video", src: "images/Mangaverse/REC-Motion-Language.mp4", class: "full-width" },
      { type: "video", src: "images/Mangaverse/99_PRESS/00.Export/04.Animazione_Post.mp4", class: "" },
      { type: "video", src: "images/Mangaverse/99_PRESS/00.Export/9.mp4", class: "" },
 
      { type: "video", src: "images/Mangaverse/99_PRESS/00.Export/14.Transizione_Logo_SimboloMP.mp4", class: "" },
      { type: "video", src: "images/Mangaverse/99_PRESS/00.Export/7.mp4", class: "" },
    ]
  },
  project3: {
    title: "I did my job, boss",
  intro: "A short animated story that, using a light tone, portrays an ordinary problem turning into an unpredictable and extraordinary chain of events. No vacation is safe when you're a creative, maybe.",
    year: "2023",
    client: "Academic research",
    service: "Animation",
    tags: "Art direction and illustration — Marina Picari, Luca Santarelli\nAnimation — Marina Picari\nMusic — Old Hawaii, South See Music by JuliusH; Comedy Big Band Jazz by Onoychenkomusic; Dans Pole Emploi by Frederic Lardon feat Laura Palmée",
    media: "<video src='images/IDidMyJobBoss/Fabio_Work.mp4' autoplay loop muted playsinline style='width:100%; display:block;'></video>",
    description: "The protagonist, by pressing a key on the keyboard, initiates a domino effect that will lead to his resignation. In contrast to the professional imagery, the subjects of the cascading effect are toys and objects related to the world of childhood. The intricate and exaggerated mechanism mirrors Rube Goldberg machines, which are similarly interconnected systems built to perform a simple task in reality. The narrative is divided into visual sequences that vary in style, production technique, and type of animation. The goal was to explore and bring together different languages of contemporary illustration and animation within the same space. ",
    documentation: [
      { type: "image", src: "images/IDidMyJobBoss/Omino_video.png", class: "" }, 
      { type: "image", src: "images/IDidMyJobBoss/Girandola_video.png", class: "" },
      { type: "video", src: "images/IDidMyJobBoss/pattino.mp4", class: "full-width" },
      { type: "video", src: "images/IDidMyJobBoss/Guantone.mp4", class: "" },
      { type: "video", src: "images/IDidMyJobBoss/Girandola.mp4", class: "" },
      { type: "image", src: "images/IDidMyJobBoss/Storyboard_1.png", class: "" },
      { type: "image", src: "images/IDidMyJobBoss/Storyboard_2.png", class: "" },
      { type: "image", src: "images/IDidMyJobBoss/Occhi_zoom.png", class: "" }, 
      { type: "image", src: "images/IDidMyJobBoss/Render_finale.png", class: "" },
      { type: "video", src: "images/IDidMyJobBoss/Transizione_Titolo.mp4", class: "full-width" }]
  },
  project4: {
    title: "Anica Huck art catalogue",
    intro: "The portfolio of Anica Huck aims to reflect, in its structure, the artistic exploration of the sculptor and performer. Inextricably linked not only to material but also to space and time.",
    year: "2022",
    client: "Anica Huck",
    service: "Editorial design",
    tags: "Art direction and design — Marina Picari, Luca Santarelli",
    media: "<img src='images/Anica/01_still life.jpg', style='width:100%;' alt='Anica-Cover'>",
    description: "To bring the temporal dimension into the catalog, it was chosen to divide the works from their descriptions into sequential pages. In the textual section, the meaning of the artwork is described without revealing it, and only by turning to the next page will it be possible to physically see it, carrying with it the memory of the idea underlying that specific piece. The typography defines the spaces of the catalog. Each page is uniquely composed on a 12-column grid, capable of determining the position of images through absence. In the most significant passages, the text is reduced, compelling the reader to pay greater attention.",
    documentation: [
       { type: "image", src: "images/Anica/02_still life.jpg", class: "" },
       { type: "image", src: "images/Anica/04_still life.jpg", class: "" },
       { type: "image", src: "images/Anica/03_still life.jpg", class: "" }, 
       { type: "image", src: "images/Anica/05_still life.jpg", class: "" }, 
       { type: "image", src: "images/Anica/01_imp.jpg", class: "full-width" }, 
       { type: "image", src: "images/Anica/02_imp.jpg", class: "" }, 
       { type: "image", src: "images/Anica/03_imp.jpg", class: "" }, 
       { type: "image", src: "images/Anica/04_imp.jpg", class: "" }, 
       { type: "image", src: "images/Anica/05_imp.jpg", class: "" }, 
    ]
  },
  project5: {
    title: "PLAY",
    intro: "An editorial project that explores play as an approach to design. Play is researched as the freedom to make mistakes, the curiosity to change one's point of view, and an opportunity to love the process instead of looking for the result. The words of designers, biologists, educators, provocateurs, and eternal children resonate in an exploration where play is taken very seriously.",
    year: "2020",
    client: "Academic research",
    service: "Editorial, workshop",
    tags: "Art direction and design — Marina Picari, Luca Santarelli\nWorkshop done with RUFA students",
    media: "<img src='images/PLAY/mUNARI.jpg', style='width:100%;' alt='PLAY-Cover'>",
    description: "This book is not a manual of pre-packaged activities, but a portal for those who wish to learn how to play in their own way. Every aspect of the graphic project was considered an opportunity for play, from the cover that creates surprise once revealed, to the index and the images created using the collage technique. The handwritten texts are the most important parts; they are like the thoughts a reader writes in the margins while reading a book. The last section of the book is dedicated to a series of workshops conducted with graphic design students. The activities were designed to give space to creative processes that value collaboration, research, and a change of perspective. The tools used by the students were all analog because the aim was to create conditions for reconsidering mistakes as opportunities for design and to value instinct and spontaneity.",
    documentation: [
      { type: "image", src: "images/PLAY/GIF Tesi (0-00-00-01).jpg", class: "" },
      { type: "image", src: "images/PLAY/GIF Tesi (0-00-00-21).jpg", class: "" },
      { type: "image", src: "images/PLAY/2-3.jpg", class: "" },
      { type: "image", src: "images/PLAY/28-29.jpg", class: "" },
      { type: "image", src: "images/PLAY/DSC_0725.png", class: "full-width" },
      { type: "image", src: "images/PLAY/DSC_0728.png", class: "" },
      { type: "image", src: "images/PLAY/DSC_0748.png", class: "" },
      { type: "image", src: "images/PLAY/Foto_Workshop/Segnali_2.png", class: "" },
      { type: "image", src: "images/PLAY/Foto_Workshop/Giornale_2.png", class: "" },
      { type: "image", src: "images/PLAY/Foto_Workshop/A_Gotico.png", class: "" },
      { type: "image", src: "images/PLAY/Foto_Workshop/Giornale_3.png", class: "" },

      
    ]
  },
  project6: {
    title: "First of May concert",
    intro: "The First May concert in Rome is an event organized by the three major Italian trade unions on the occasion of Labor Day. It is one of the largest free concerts in Europe.",
    year: "2019",
    client: "iCompany",
    service: "Stage animation",
    tags: "Project realized with Rome University of Fine Arts",
 media: "<img src='images/PrimoMaggio/Subsonica-2.png', style='width:100%;' alt='FirstMay-Cover'>",
    description: "As a team of young designers, we were commissioned to create the stage animations for the May 1st Concert in Piazza San Giovanni—one of Europe’s largest free music events, featuring a 12-hour marathon show and drawing a crowd of thousands. The brief called for animated experiments designed to actively engage the audience, dynamically adapting to both the live music and the day’s core themes: labour, solidarity, and unity. I produced a series of motion graphics sequences, ranging from expressive typographic compositions to immersive 3D explorations. Through minimal yet impactful visual cues, I aimed to convey the raw energy and eclectic variety of the performances. Our visuals accompanied major Italian artists, including Pinguini Tattici Nucleari, Achille Lauro and Subsonica.",
    documentation: [
      { type: "image", src: "images/PrimoMaggio/primomaggio_2019_5.jpg", class: "full-width" },
      { type: "image", src: "images/PrimoMaggio/primomaggio_2019_3.jpg", class: "" },
      { type: "image", src: "images/PrimoMaggio/hero_primo-maggio-2019.jpg", class: "" },
      { type: "image", src: "images/PrimoMaggio/18.jpg", class: "" },
      { type: "image", src: "images/PrimoMaggio/11.jpg", class: "" },
      { type: "image", src: "images/PrimoMaggio/Eugenio in Via di Gioia_Altrove_Onde.gif", class: "full-width" },
      { type: "image", src: "images/PrimoMaggio/Notte_Normale_Blu00.jpg", class: "" },
      { type: "image", src: "images/PrimoMaggio/Notte_Veloce_Rosso14.jpg", class: "" },
    ]
  },
  project7: {
    title: "Più cultura meno paura",
    intro: "The Arci membership card becomes a statement of the association's values in a time when fear of diversity is growing in social discourse.",
    year: "2018",
    client: "Arci",
    service: "Visual identity",
    tags: "Team — Antonio Mastrogiacomo, Marina Picari, Luca Santarelli, Matteo Testini",
 media: "<img src='images/TesseraArci/1.jpg', style='width:100%;' alt='Arci-Cover'>",
    description: "In order to fully understand the Arci membership campaign, it is important to understand the context of Italy in 2018. The elections that year led to the formation of the first populist government in Europe. This government was conservative and anti-immigration, and it created a climate of growing tension in the country. In this context, the Arci membership card became a symbol of resistance. Joining Arci was a way to show support for the values of inclusion, diversity, and social justice. It was also a way to take a stand against the government's policies. The campaign slogan, More culture, less fear, captures this spirit of resistance. It is a call for a more inclusive and welcoming society, based on the values of culture, solidarity, and mutual aid.Becoming an Arci member is not just about joining a club or organization. It is a political act that expresses one's support for the values of inclusion, diversity, and social justice. Many Arci members do not fully understand the history and founding values of the association. They may have joined for practical reasons, such as to go to a party or participate in an activity. The Arci communication strategy aims to raise awareness of the association's values. The membership card is a key part of this strategy. The card is designed to be a visual statement of Arci's values. It features images and slogans that promote inclusion, diversity, and social justice. The membership card is also designed to be a conversation starter. It is intended to provoke discussion about current issues and to reaffirm the importance of Arci's values. ",
    documentation: [
      { type: "image", src: "images/TesseraArci/PosterArci_web.jpg", class: "" },
      { type: "image", src: "images/TesseraArci/PosterArci_web2.jpg", class: "" },
      { type: "image", src: "images/TesseraArci/bANDIERA.jpg", class: "full-width" },
      { type: "image", src: "images/TesseraArci/libro_convenzioni-arci-2018.jpg", class: "" },
      { type: "image", src: "images/TesseraArci/libro_convenzioni_interno-2018.jpg", class: "" },
      
    ]
  },
    project8: {
    title: "A Christmas Carol, universe edition",
    intro: "An animated story about ancient beliefs, scientific discoveries, and hypotheses on the shape, origin, and future of the universe.",
    year: "2025",
    client: "INFN",
    service: "Animation",
    tags: "Concept — Martina Bologna, Cecilia Collà Ruvolo, Francesca Mazzotta\nIllustration and animation — Francesca Cuicchio, Giorgia Malizia, Marina Picari\nText, voices and sound — Cecilia Collà Ruvolo\nWith the scientific consultancy of Antonio Riotto, University of Geneva",
    link: "",
 media: "<img src='images/Natale25_INFN/AstroArtboard 24.png', style='width:100%;' alt='Christmas-Cover'>",
    description: "Every year, the National Institute for Nuclear Physics (INFN) creates a Christmas video to send holiday greetings to its research community and to all physics enthusiasts. Each year, a different theme and technique are chosen to explore scientific discoveries, mysteries, and questions. In 2025, the theme was the universe, and the famous Charles Dickens’ A Christmas Carol was used as the narrative framework. The universe, worried about its uncertain future, is visited by the ghosts of Christmas Past, Present, and Future. The three characters tell the story of how, over time, beliefs and discoveries have changed our understanding of the shape and fate of the universe. The story was brought to life through an illustrated style, designed to make complex scientific ideas accessible while preserving the sense of wonder at the heart of the story. The result is a Christmas tale that combines science, history, and imagination, inviting even non-specialist audiences to engage with some of the deepest questions about our universe.",
    documentation: [
      { type: "video", src: "images/Natale25_INFN/CCPT4.mp4", class: "" },
      { type: "video", src: "images/Natale25_INFN/CC-Pt-2.mp4", class: "" },
      { type: "image", src: "images/Natale25_INFN/INFN_Natale_Thumbnail_1.png", class: "" },
      { type: "image", src: "images/Natale25_INFN/INFN_Natale_Thumbnail_2.png", class: "" },
      { type: "image", src: "images/Natale25_INFN/Story_1.jpg", class: "" },
      { type: "image", src: "images/Natale25_INFN/Story_2.jpg", class: "" },
      { type: "video", src: "images/Natale25_INFN/CCPT3.mp4", class: "full-width" },
      { type: "image", src: "images/Natale25_INFN/CC-Frame-115.jpg", class: "" },
      { type: "image", src: "images/Natale25_INFN/CC-Frame-206.jpg", class: "" },
      { type: "image", src: "images/Natale25_INFN/CC-Frame-326.jpg", class: "full-width" },
      { type: "video", src: "images/Natale25_INFN/CC-Pt-1.mp4", class: "" },
      { type: "video", src: "images/Natale25_INFN/CCPT5.mp4", class: "" },

    ]
  },
};

// Elenco ordinato dei tuoi asset multimediali originali per il Playground
const playgroundItems = [
  { type: "video", src: "images/00-playground/Hula_4.mp4", alt: "hula-hoop-color" },
  { type: "image", src: "images/00-playground/Camera-9-16.gif", alt: "Asset 9" },
  { type: "image", src: "images/00-playground/Forge_Dynamics.gif", alt: "Type_1" },
  { type: "image", src: "images/00-playground/StopMotion-L.gif", alt: "StopMotion-L" },
  { type: "image", src: "images/00-playground/post_insta3.jpg", alt: "post_insta3.jpg" },
  { type: "image", src: "images/00-playground/snake-2.png", alt: "Snake-1" },
  { type: "image", src: "images/00-playground/Nat-1.png", alt: "snake-2" },
  { type: "video", src: "images/00-playground/proceduraleTextureDots.mp4", alt: "procedurale texture-dots" },
  { type: "image", src: "images/00-playground/Loop_Sigla_RG.gif", alt: "Asset 12" },
  { type: "video", src: "images/00-playground/Loop_Sigla_3.mp4", alt: "loop_sigla_3" },
  { type: "image", src: "images/00-playground/hula-hoop-1.gif", alt: "hula-hoop-1" },
  { type: "image", src: "images/00-playground/_MG_8148BW2.png", alt: "Asset 13" },
  { type: "video", src: "images/00-playground/KillBill.mp4", alt: "Asset 14" },

    { type: "image", src: "images/00-playground/render.2_1.jpg", alt: "render.2_1" },
 
  { type: "image", src: "images/00-playground/Type-2.gif", alt: "type-2" },
   { type: "video", src: "images/00-playground/Intro_Illustrazioni_1.mp4", alt: "Intro_Illustrazioni_1" },
    { type: "image", src: "images/00-playground/Omino_2.jpg", alt: "Omino_2" },  

  
  
  

  
];

function generatePlaygroundGrid() {
  const container = document.getElementById('playground-dynamic-grid');
  if (!container) return;

  container.innerHTML = ""; 

  // Imposta 2 colonne su mobile (<768px) o 4 su desktop (>=768px)
  const numColumns = window.innerWidth < 768 ? 2 : 4;
  const columnsContainers = [];

  for (let i = 0; i < numColumns; i++) {
    const col = document.createElement('div');
    col.className = 'playground-column';
    container.appendChild(col);
    columnsContainers.push(col);
  }

  playgroundItems.forEach((item, index) => {
    const targetColumn = index % numColumns;
    const itemWrapper = document.createElement('div');
    itemWrapper.className = 'playground-item';
    
    if (item.type === "image") {
      itemWrapper.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
    } else if (item.type === "video") {
      itemWrapper.innerHTML = `<video src="${item.src}" autoplay loop muted playsinline></video>`;
    }
    columnsContainers[targetColumn].appendChild(itemWrapper);
  });
}

function openPlayground() {
  const playgroundOverlay = document.getElementById('playground-overlay');
  if (playgroundOverlay) {
    generatePlaygroundGrid(); // Genera le colonne asimmetriche al volo
    playgroundOverlay.style.display = 'block';
    playgroundOverlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
}

function closePlayground() {
  const playgroundOverlay = document.getElementById('playground-overlay');
  if (playgroundOverlay) {
    playgroundOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

window.addEventListener('resize', () => {
  const playgroundOverlay = document.getElementById('playground-overlay');
  if (playgroundOverlay && playgroundOverlay.style.display === 'block') {
    generatePlaygroundGrid();
  }
});


// Funzione di gestione apertura overlay e popolamento sicuro
function openProject(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  if (document.getElementById('overlay-title')) document.getElementById('overlay-title').innerText = data.title;
  if (document.getElementById('overlay-intro')) document.getElementById('overlay-intro').innerText = data.intro || "";
  if (document.getElementById('overlay-media-container')) document.getElementById('overlay-media-container').innerHTML = data.media;
  if (document.getElementById('overlay-year')) document.getElementById('overlay-year').innerText = data.year || "—";
  if (document.getElementById('overlay-client')) document.getElementById('overlay-client').innerText = data.client || "—";
  if (document.getElementById('overlay-service')) document.getElementById('overlay-service').innerText = data.service || "—";
  if (document.getElementById('overlay-tags')) document.getElementById('overlay-tags').innerText = data.tags || "—";

  const linkElement = document.getElementById('overlay-link');
  const linkWrapper = document.getElementById('overlay-link-wrapper');
  if (linkElement && linkWrapper) {
    if (data.link) {
      linkElement.href = data.link;
      linkWrapper.style.display = 'flex';
    } else {
      linkWrapper.style.display = 'none';
    }
  }

  const textContainer = document.getElementById('overlay-dynamic-text');
  if (textContainer) {
    textContainer.innerText = data.description || "Descrizione in fase di aggiornamento...";
  }

  // Nasconde preventivamente tutti i blocchi contenitori di Vimeo nell'HTML
  const allVimeoContainers = document.querySelectorAll('#vimeo-static-containers > .overlay-media-vimeo');
  allVimeoContainers.forEach(container => {
    container.style.display = 'none';
  });

  // Mostra l'iframe specifico associato al progetto corrente
  const activeVimeo = document.getElementById(`vimeo-${projectId}`);
  if (activeVimeo) {
    activeVimeo.style.display = 'block';
  }

  const docContainer = document.getElementById('overlay-documentation-container');
  if (docContainer) {
    docContainer.innerHTML = ""; 
    if (data.documentation && data.documentation.length > 0) {
      data.documentation.forEach(item => {
        const itemWrapper = document.createElement('div');
        itemWrapper.className = `documentation-item ${item.class}`.trim();
        
        if (item.type === "image") {
          itemWrapper.innerHTML = `<img src="${item.src}" alt="Asset di documentazione">`;
        } else if (item.type === "video") {
          itemWrapper.innerHTML = `<video src="${item.src}" autoplay loop muted playsinline></video>`;
        }
        docContainer.appendChild(itemWrapper);
      });
    }
  }

  const overlayEl = document.getElementById('project-overlay');
  if (overlayEl) {
    overlayEl.style.display = 'block';
    overlayEl.scrollTop = 0; 
    document.body.style.overflow = 'hidden';
  }
}

function closeProject() {
  const overlayEl = document.getElementById('project-overlay');
  if (overlayEl) {
    overlayEl.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    const allIframes = document.querySelectorAll('#vimeo-static-containers iframe');
    allIframes.forEach(iframe => {
      const currentSrc = iframe.src;
      iframe.src = currentSrc;
    });
  }
}

function openAboutMobile() {
  const aboutOverlay = document.getElementById('about-overlay-mobile');
  if (aboutOverlay) {
    aboutOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeAboutMobile() {
  const aboutOverlay = document.getElementById('about-overlay-mobile');
  if (aboutOverlay) {
    aboutOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function openPlayground() {
  const playgroundOverlay = document.getElementById('playground-overlay');
  if (playgroundOverlay) {
    generatePlaygroundGrid(); // Genera le colonne asimmetriche al volo
    playgroundOverlay.style.display = 'block';
    playgroundOverlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
}

function closePlayground() {
  const playgroundOverlay = document.getElementById('playground-overlay');
  if (playgroundOverlay) {
    playgroundOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

window.addEventListener('resize', () => {
  const playgroundOverlay = document.getElementById('playground-overlay');
  if (playgroundOverlay && playgroundOverlay.style.display === 'block') {
    generatePlaygroundGrid();
  }
});
