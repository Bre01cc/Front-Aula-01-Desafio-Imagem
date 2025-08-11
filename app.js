const trocarDeImagem = document.getElementById('trocar-img')
const autoImagem = document.getElementById('auto-img')

function trocarImagem() {
    //pega o nome digitado na caixa de texto atrvés do id'nomeImg'
    const img = document.getElementById('nomeImg').value
    //let ordem = ''

    if (img == '1'|| img=='celso') {
        let valor = 'Celso'
        let varImg = valor
        let foto = `./img/${varImg}.jpg`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)
        
    }
    else if (img == "2") {
        let valor = 'Estilo'
        let varImg = valor
        let foto = `./img/${varImg}.jpeg`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else if (img == "3"||img=="java") {
        let valor = 'Java'
        const varImg = valor
        const foto = `./img/${varImg}.webp`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else if (img == "4") {
        let valor = 'Oculos'
        const varImg = valor
        const foto = `./img/${varImg}.jpeg`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else if (img == "5") {
        let valor = 'pedra'
        const varImg = valor
        const foto = `./img/${varImg}.jpeg`
        document.documentElement.style.setProperty('--bg-img', `url(${foto})`)

    } else {
        const varImg = img
        const caminhaImg = `./img/${varImg}.jpeg`
        document.documentElement.style.setProperty('--bg-img', `url(${caminhaImg})`)

    }
}
function auto(){
    document.documentElement.style.setProperty('--bg-animation', 'slider 20s, fade 10s')
}
autoImagem.addEventListener('click', auto)
trocarDeImagem.addEventListener('click', trocarImagem)
