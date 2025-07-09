const modalContents = {
  modal1: `
    <h2>Storyboard</h2>
    <p>This video shows what Goen’s service experience looks like through our user’s eyes.</p>
    <p><a href="https://drive.google.com/file/d/1lX0q7fgP_x_Z1NiU_z0CaaQPf08V7oqA/view?usp=sharing" target="_blank">▶ Watch Video on Google Drive</a></p>
  `,
  modal2: `
    <h2>Prototype Test</h2>
    <p>We ran an MVP experience where guests joined a local Japanese home for a shared dinner, and collected feedback on how it felt.</p>
  `,
  modal3: `
    <h2>System Map</h2>
    <img src="images/System_Map_Long.jpg" alt="System Map" style="width:100%; max-width:500px;">
  `,
  modal4: `
    <h2>Further Business Model</h2>
    <p>Looking ahead, our long-term vision involves building strategic partnerships with Japanese companies.</p>
    <p>By offering sponsorships, or product or material support, they can use Goen as a platform for local brand engagement, marketing, and real-world product trials. For example, a well-known Japanese cafe brand not yet in London could host a pop-up experience, letting guests try something they could only find in Japan.</p>
    <img src="images/System_Map.jpg" alt="Business Model" style="width:100%; max-width:500px;">
  `,
  modal5: `
    <h2>Contact / Follow Us</h2>
    <p>Akane Nemoto <a href="mailto:10044370@network.rca.ac.uk">10044370@network.rca.ac.uk</a></p>
    <p>Chika Nakamura <a href="mailto:10045475@network.rca.ac.uk">10045475@network.rca.ac.uk</a</p>
  `
};

function openModal(event, modalKey) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = modalContents[modalKey];

  // モーダルの位置調整
  const x = event.clientX;
  const y = event.clientY;
  modalContent.style.left = `${x}px`;
  modalContent.style.top = `${y}px`;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}