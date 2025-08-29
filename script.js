const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

// Dirubah 
const pengirim = "ur boyfieee rappp rapp";
const nomorWa = "6287776182392" // awalan nomor 0 harus di awalin 62
const textWa = ""
const pesan = `
kamuu tauu gaa kenapaa aku pilih kamuu??? soalnyaa akuu percayaa kalo sama kamuu akuu yakin kitaa bisa wujudin mimpii kita bareng-barengg, kenapaa gituu??? karena sama kamuu akuu jadi lebih semangatt buat jalanin hari-hari yang dulunya aku anggap berat begitu jugaa kamuu, akuu bakal selalu support kamuu apapun yangg mauu kamuu capaii🤍🤍🤍
sayaang, akuu selalu adaaa buat kamuuuu. walaupun kita ldr kaya ginii akuu selalu percayaa samaa kamuu, aku bersyukur bangeet kamuu hadir di hidup akuu. akuu harap semogaa kamuu selalu seneng teruus bahagia teruus, bisaa banggain mama, papa, kakak, adek dan orang-orang terdekat kamuuu. aku mohonn kalo kamuu lagi sedihh, capee, ato ngerasa ngedown luapin semuanya ke akuu yaaa cerita ke akuuu🥺🥺
akuuu sayaang bangeett sama kamuuu, kamuu jugaa kann sayaang sama akuuu (jawab iyaa pliiss😣)
akuu banggaaa samaa kamuuu, selamat ulang tahunn yaa cantiiikk 18elieve you💕`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
})

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  hilang2.style.display = "block"
  Swal.fire({
    imageUrl: "stiker_mylove.gif",
    imageHeight: 120,
    title: 'Tulis nama lengkap kamuu yaa sayaangg',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Nama Kamu">`,
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      if (!login) {
        Swal.showValidationMessage(`Masukin nama kamuu yaa sayaang(`)
      }
      return { login }
    }
  }).then((result) => {
    let i = 0;
    const speed = 50;
    const namaAwal = result.value.login.charAt(0)
    let txt = `aloo sayaangkuuu ${result.value.login} ^-^ hehe, happy birth 18th dayyy🎉 \n ${pesan}`;
    txt = txt.replace(/\n/g, "<br>");


const typeWriter = () => {
  if (i < txt.length) {
    if (txt.substring(i, i+4) === "<br>") {
      messege2P.innerHTML += "<br>"; // bikin baris baru
      i += 4; // loncat 4 karakter
    } else {
      messege2P.innerHTML += txt.charAt(i);
      i++;
    }

    // auto scroll ke bawah
    messege2P.parentElement.scrollTop = messege2P.parentElement.scrollHeight;
    messege2.classList.remove('kelip')
    hilang2.style.display = "none"
    setTimeout(typeWriter, speed);
  } else {
    messege2.classList.add('kelip');
    body.classList.replace('background1', 'background2');
    body.classList.add('muncul');
    hilang2.style.display = "block";
  }
};

    typeWriter()


  })
})

hilang2.addEventListener('click', () => {
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, '_blank')
})

