const modalContents = {
  modal1: `
    <h2>About Goen</h2>
    <p>Goen is a human-centred cultural connection platform that facilitates real-life experiences between Japan-related hosts and curious guests in London.</p>
    <p>* “Goen” means “connection” in Japanese</p>
    <img src="images/UI.png" alt="Examples of User Interface" style="width:100%; max-width:500px;">
  `,
  modal2: `
    <h2>Storyboard</h2>
    <p>This video shows what Goen’s service experience looks like through our user’s eyes.</p>
    <video controls style="width:100%; max-width:600px;">
      <source src="videos/Storyboard.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `,
  modal3: `
    <h2>Prototype Test</h2>
    <p>We ran an MVP experience where guests joined a local Japanese home for a shared dinner, and collected feedback on how it felt.</p>
    <video controls style="width:100%; max-width:500px;">
    <source src="videos/Prototype_Test.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  `,
  modal4: `
    <h2>System Map</h2>
    <img src="images/System_Map.jpg" alt="System Map" style="width:100%; max-width:500px;">
  `,
  modal5: `
    <h2>Further Business Model</h2>
    <p>Looking ahead, our long-term vision involves building strategic partnerships with Japanese companies.</p>
    <p>By offering sponsorships, or product or material support, they can use Goen as a platform for local brand engagement, marketing, and real-world product trials. For example, a well-known Japanese cafe brand not yet in London could host a pop-up experience, letting guests try something they could only find in Japan.</p>
    <img src="images/System_Map_Long.jpg" alt="Business Model" style="width:100%; max-width:500px;">
  `,
  modal6: `
    <h2>Contact / Follow Us</h2>
    <p>Akane Nemoto <a href="mailto:10044370@network.rca.ac.uk">10044370@network.rca.ac.uk</a></p>
    <p>Chika Nakamura <a href="mailto:10045475@network.rca.ac.uk">10045475@network.rca.ac.uk</a></p>
  `
};

function openModal(event, modalKey) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `<span class="close" onclick="closeModal()">&times;</span>` + modalContents[modalKey];

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}