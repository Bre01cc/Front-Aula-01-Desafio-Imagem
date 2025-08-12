const trocarDeImagem = document.getElementById('trocar-img')
const autoImagem = document.getElementById('auto-img')

function trocarImagem() {
    //pega o nome digitado na caixa de texto atrvés do id'nomeImg'
    const img = document.getElementById('nomeImg').value
    //let ordem = ''

    if (img == '1') {
        let varImg = "Basquete"
        let foto = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)
        
    }
    else if (img == "2") {
       
        let varImg = "Durant"
        let foto = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else if (img == "3") {
      
        const varImg = "LeBron"
        const foto = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else if (img == "4") {
      
        const varImg = "LeBronCavs"
        const foto = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else if (img == "5") {
        const varImg = "LeBronMiame"
        const foto = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else {
        const varImg = img
        const caminhaImg = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${caminhaImg})`)

    }
}
function auto(){
    document.documentElement.style.setProperty('--bg-animation', 'slider 30s, fade 10s')
}
autoImagem.addEventListener('click', auto)
trocarDeImagem.addEventListener('click', trocarImagem)
