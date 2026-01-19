const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

function addCards(container) {
  let tmp = "";
  for (const teamMember of teamMembers) {
    tmp += AddMember(teamMember);
  }
  container.innerHTML = tmp;
}

function AddMember({ name, role, email, img }) {
  const tmpMember = `<div class="card">
              <div class="card-image">
                <img src="./${img}" alt="test" />
              </div>
              <div class="card-info">
                <h2>${name}</h2>
                <span>${role}</span>
                <a href="#">${email}</a>
              </div>
            </div>`;
  return tmpMember;
}

function send(e) {
  e.preventDefault();
  const nome = document.getElementById("nome");
  const ruolo = document.getElementById("ruolo");
  const mail = document.getElementById("emailz");
  const immagine = document.getElementById("immagine");

  if (!nome.value || !ruolo.value || !mail.value || !immagine.value) {
    alert("Ricontrolla i campi");
    return;
  }

  const obj = {
    name: nome.value,
    role: ruolo.value,
    email: mail.value,
    img: immagine.value,
  };
  teamMembers.push(obj);
  addCards(container);
  nome.value = "";
  ruolo.value = "";
  mail.value = "";
  immagine.value = "";
}
