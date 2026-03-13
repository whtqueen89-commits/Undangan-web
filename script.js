/* buka undangan */
function bukaUndangan() {
  const flap = document.querySelector(".flap");
  const letter = document.querySelector(".letter");
  const opening = document.getElementById("opening");
  const firstSection = document.querySelector(".section");
  const musik = document.getElementById("musik"); // pastikan ada <audio id="musik">

  // 1. Flap terbuka
  flap.style.transform = "rotateX(180deg)";

  // 2. Letter muncul naik setelah flap mulai buka
  setTimeout(() => {
    letter.style.opacity = "1";
    letter.style.transform = "translateY(0)";
  }, 600); // bisa disesuaikan timing

  // 3. Hilangkan opening, main section muncul, dan musik mulai
  setTimeout(() => {
    opening.style.display = "none";
    if (musik) musik.play();

    // tampilkan section dengan transisi
    firstSection.classList.add("active");
  }, 1500); // setelah flap + letter selesai
}

/* nama tamu */
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("to");
if (nama) {
  const namaEl = document.getElementById("namaTamu");
  if (namaEl) namaEl.innerText = nama;
}

/* countdown */
var akad = new Date("Maret 30, 2026 08:00:00").getTime();
var resepsi = new Date("Apr 11, 2026 09:00:00").getTime();

setInterval(function(){
  var now = new Date().getTime();
  function hitung(jarak,p){
    var h = Math.floor(jarak / (1000*60*60*24));
    var j = Math.floor((jarak % (1000*60*60*24)) / (1000*60*60));
    var m = Math.floor((jarak % (1000*60*60)) / (1000*60));
    var d = Math.floor((jarak % (1000*60)) / 1000);
    document.getElementById(p+"_hari").innerHTML = h;
    document.getElementById(p+"_jam").innerHTML = j;
    document.getElementById(p+"_menit").innerHTML = m;
    document.getElementById(p+"_detik").innerHTML = d;
  }
  hitung(akad-now,"a");
  hitung(resepsi-now,"r");
},1000);

/* ucapan */
document.getElementById("formUcapan").addEventListener("submit",function(e){
  e.preventDefault();
  var nama = this.children[0].value;
  var hadir = this.children[1].value;
  var pesan = this.children[2].value;
  var div = document.createElement("div");
  div.innerHTML = "<b>"+nama+"</b> ("+hadir+")<p>"+pesan+"</p>";
  document.getElementById("listUcapan").prepend(div);
  this.reset();
});

/* copy rekening */
function copyRek(){
  var text = document.getElementById("rekening").innerText;
  navigator.clipboard.writeText(text);
  alert("Nomor rekening disalin");
}

/* copy alamat */
function copyAlamat(){
  var text = document.getElementById("alamat").innerText;
  navigator.clipboard.writeText(text);
  alert("Alamat disalin");
}

/* scroll trigger untuk section lainnya */
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.5 }
);
sections.forEach(section => observer.observe(section));