function addCard(divMain) {
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
}
