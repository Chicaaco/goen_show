const modalContents = {
  modal1: `
    <h2>About Goen</h2>
    <p class="modal-text">Goen is a human-centred cultural connection platform that facilitates real-life experiences between Japan-related hosts and curious guests in London.</p>
    <p class="modal-text">* “Goen” means “connection” in Japanese</p>
    <img src="images/UI.png" class="zoomable-img" alt="Examples of User Interface" style="width:100%;">
  `,
  modal2: `
    <h2>Storyboard</h2>
    <p class="modal-text">This video shows what Goen’s service experience looks like through our user’s eyes.</p>
    <video 
    controls 
    poster="images/Storyboard_Thumbnail.png" 
    style="width:100%;">
      <source src="videos/Storyboard.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `,
  modal3: `
    <h2>Prototype Test</h2>
    <p class="modal-text">We ran an MVP experience where guests joined a local Japanese home for a shared dinner, and collected feedback on how it felt.</p>
    <video 
    controls 
    poster="images/Prototype_Thumbnail.png" 
    style="width:100%;">
      <source src="videos/Prototype_Test.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `,
  modal4: `
    <h2>System Map</h2>
    <p class="modal-text">Overview of how our service ecosystem works.</p>
    <p class="modal-text">A seamless and reassuring onboarding process, including guest verification and host screening, and combined with early communication and post-experience feedback, helps both guests and hosts feel confident, safe, and connected.</p>
    <img src="images/System_Map.jpg" class="zoomable-img" alt="System Map" style="width:100%;">
  `,
  modal5: `
    <h2>Further Business Model</h2>
    <p class="modal-text">Looking ahead, our long-term vision involves building strategic partnerships with Japanese companies.</p>
    <p class="modal-text">By offering sponsorships, or product or material support, they can use Goen as a platform for local brand engagement, marketing, and real-world product trials. For example, a well-known Japanese cafe brand not yet in London could host a pop-up experience, letting guests try something they could only find in Japan.</p>
    <img src="images/System_Map_Long.jpg" class="zoomable-img" alt="Business Model" style="width:100%;">
  `,
  modal6: `
    <h2>Impact</h2>
    <p>Impact on each stakeholders.</p>
    <img src="images/Impact.jpg" alt="Impact" style="width:100%;" class="zoomable-img">
  `,
  modal7: `
    <h2>Contact</h2>
    <p class="modal-text">Akane Nemoto <a href="mailto:10044370@network.rca.ac.uk">10044370@network.rca.ac.uk</a></p>
    <p class="modal-text">Chika Nakamura <a href="mailto:10045475@network.rca.ac.uk">10045475@network.rca.ac.uk</a></p>
    <img src="images/RCA_Logo.jpg" alt="Royal College of Art Logo" style="width:30%;">
    <img src="images/SD_Logo.png" alt="Royal College of Art Service Design Logo" style="width:30%;">
  `,
};

function openModal(event, modalKey) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `<span class="close" onclick="closeModal()">&times;</span>` + modalContents[modalKey];

  modal.style.display = "block";


 document.querySelectorAll('.zoomable-img').forEach(img => {
  img.addEventListener('click', function () {
    const overlay = document.getElementById('image-overlay');
    const overlayImg = overlay.querySelector('img');
    overlayImg.src = this.src;
    overlay.style.display = 'flex';
   });
});
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// 拡大用オーバーレイ作成
const overlay = document.createElement('div');
overlay.id = 'image-overlay';
document.body.appendChild(overlay);

// クリックされた画像を表示
document.querySelectorAll('.zoomable-img').forEach(img => {
  img.addEventListener('click', () => {
    overlay.innerHTML = `<img src="${img.src}" alt="Zoomed">`;
    overlay.style.display = 'flex';
  });
});

// オーバーレイをクリックしたら閉じる
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});