const form = document.getElementById("ideaForm");
const container = document.getElementById("ideContainer");

// Muat data dari localStorage saat pertama kali dibuka
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("ideBarengData")) || [];
  data.forEach(addIdeaToDOM);
};

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const judul = document.getElementById("judul").value;
  const deskripsi = document.getElementById("deskripsi").value;
    const idea = {
    judul,
    deskripsi,
    tanggal: new Date().toLocaleString()
    };

    addIdeaToDOM(idea);
    saveIdeaToStorage(idea);
    form.reset();
});

function addIdeaToDOM(idea) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${idea.judul}</strong><br>${idea.deskripsi}<br><small>${idea.tanggal}</small><hr>`;
  container.prepend(li);
}

function saveIdeaToStorage(idea) {
  const data = JSON.parse(localStorage.getItem("ideBarengData")) || [];
  data.push(idea);
  localStorage.setItem("ideBarengData", JSON.stringify(data));
}
