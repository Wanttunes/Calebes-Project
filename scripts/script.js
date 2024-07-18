let tendenciosa = document.getElementById('tendenciosa')
const foto1 = document.getElementById("img1")
const foto2 = document.getElementById("img2")
const text = document.getElementById("text")


function clicou(){
    foto1.style.display = 'flex'
    foto2.style.display = 'flex'
    text.style.display = 'flex'
    tendenciosa.innerHTML = '<source src="audio/4. VEIGH - TENDENCIOSA FT. DEREK (Dos Prédios Deluxe).mp3"></source>'
}
