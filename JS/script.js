//Dato un array di oggetti rappresentante un team di un’azienda,
//creare una pagina dedicata in cui mostrare una card per ciascun componente.

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

const divMain = document.getElementById("main-div");
let tmp = "";
for (const teamMember of teamMembers) {
  const { name, role, email, img } = teamMember;
  tmp += `<div class="card">
            <div class="card-image">
              <img src="./${img}" alt="test" />
            </div>
            <div class="card-info">
              <h2>${name}</h2>
              <span>${role}</span>
              <a href="#">${email}</a>
            </div>
          </div>`;
}

divMain.innerHTML = tmp;
