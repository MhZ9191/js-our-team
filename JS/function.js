function addCard(divMain) {
  let tmp = "";
  for (const teamMember of teamMembers) {
    tmp += AddMember(teamMember);
  }
  divMain.innerHTML = tmp;
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

  const obj = {
    name: nome.value,
    role: ruolo.value,
    email: mail.value,
    img: immagine.value,
  };
  teamMembers.push(obj);
  AddMember(obj);
  addCard(divMain);
  nome.value = "";
  ruolo.value = "";
  mail.value = "";
  immagine.value = "";
}
