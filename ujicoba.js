const bgm = document.getElementById("bgm");

let sudahPlay = false;

document.body.addEventListener("click", () => {
if(!sudahPlay){
bgm.play();
sudahPlay = true;
}
});

const kartu = [
{
judul: "Day 1 fotbar",
deskripsi: "Masih ingat gak, waktu kita fotbar bareng? Seru banget ya! Dari yang awalnya cuma iseng temenan, eh ternyata jadi momen yang gak bisa aku lupain. Kita ketawa bareng, saling ngeledek, sampai capek sendiri tapi tetap senang. Hal-hal sederhana kayak gitu justru jadi kenangan yang paling berarti buat aku. Kadang kalau diingat lagi, rasanya pengen balik ke momen itu.. tanpa beban, cuma ada kita dan kebahagiaan kecil yang kita buat sendiri. Dan dari situ aku sadar, kebahagiaan itu bukan soal tempat atau hal besar, tapi tentang siapa yang ada di samping kita.",
img: "20250423180340362.jpg"
},    
{
judul: "Keberuntungan",
deskripsi: "Dari yang awalnya cuma tebak-tebakan nama bapakmu, siapa sangka itu jadi awal aku bisa kenal kamu lebih dekat. Dari hal kecil yang sederhana, kita jadi makin sering ngobrol, saling cerita, sampai akhirnya aku bisa kenal kamu lebih dalam, bahkan sedikit demi sedikit mengenal keluargamu juga. Aku merasa beruntung banget bisa punya kesempatan buat kenal kamu, karena dari situ aku bisa lihat sisi lain dari kamu yang mungkin gak banyak orang tahu. Dan yang paling bikin aku senang, kita bisa saling support dan jadi teman yang baik buat satu sama lain. Jadi, aku benar-benar merasa beruntung bisa kenal kamu, dan aku berharap kita bisa terus jalin hubungan yang baik ini ke depannya.",
img: "IMG-20250810-WA0036.jpg"
},
{
judul: "Kesempatan",
deskripsi: "Omagaa, jersey akuh tuh… 😭💖 salting banget woiiii pas lihat jerseyku dipakai sama orang terfavorit. Rasanya campur aduk bangettt, seneng, deg-degan juga. Hal kecil kayak gitu tapi bikin hati langsung hangat dan senyum-senyum sendiri. Gak nyangka aja, jersey kebanggaan ku dipake kamu. Entah kenapa jadi terasa lebih spesial. Mungkin karena yang pakai juga orang yang spesial buat aku 🤍.",
img: "IMG_20251017_153644.jpg"
},
{
judul: ".....",
deskripsi: "Siapa sangka, itu akan jadi fotbar terakhir kita sebagai pasangan secara resmi. Di balik senyum di foto itu, ternyata tersimpan perpisahan yang gak kita duga. Yang dulu terasa biasa aja, sekarang jadi kenangan yang begitu berarti. Kadang kalau dilihat lagi, rasanya campur aduk.. ada bahagia karena pernah punya momen itu, tapi juga sedih karena semuanya sudah berubah. Tapi satu hal yang pasti, foto itu akan selalu jadi bukti kalau kita pernah saling punya, dan pernah sebahagia itu bersama 🤍.",
img: "IMG-20251110-WA0065.jpg"
}
];

let sudahDipilih = [];

const intro = document.getElementById("intro");
const game = document.getElementById("game");
const result = document.getElementById("result");
const end = document.getElementById("end");

const resultImg = document.getElementById("resultImg");
const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");

/* INTRO -> GAME */

intro.onclick = function(){

intro.classList.add("hidden");
game.classList.remove("hidden");

};


/* PILIH KARTU */

function pilihKartu(index){

if(sudahDipilih.includes(index)) return;

sudahDipilih.push(index);

let data = kartu[index];

resultImg.src = data.img;
resultTitle.innerText = data.judul;
resultDesc.innerText = data.deskripsi;

game.classList.add("hidden");
result.classList.remove("hidden");

}


/* RESULT -> NEXT */

result.onclick = function(){

result.classList.add("hidden");

if(sudahDipilih.length === kartu.length){

end.classList.remove("hidden");

}else{

game.classList.remove("hidden");

}

};

function createShootingStar(){

const star = document.createElement("div");
star.classList.add("shooting-star");

/* posisi random */
star.style.left = Math.random() * window.innerWidth + "px";
star.style.top = Math.random() * window.innerHeight/2 + "px";

/* ukuran random */
star.style.height = (80 + Math.random()*100) + "px";

/* durasi random */
star.style.animationDuration = (1 + Math.random()*2) + "s";

document.body.appendChild(star);

/* hapus setelah animasi */
setTimeout(()=>{
star.remove();
},3000);

}

/* muncul tiap beberapa detik */
setInterval(createShootingStar, 1500);
