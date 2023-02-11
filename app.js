const answer = document.querySelector('h2'),
    input = document.querySelector('input'),
    select = document.querySelector('select'),
    score = document.querySelector('span'),
    timer = document.querySelectorAll('span')[1],
    img = document.querySelector('img'),
    tik = document.querySelectorAll('audio')[0],
    success = document.querySelectorAll('audio')[1],
    gameOver = document.querySelectorAll('audio')[2],
    play = document.querySelectorAll('i')[0],
    again = document.querySelectorAll('i')[1];

tik.load()
success.load()
gameOver.load()
let w,
    scoreNum = 0,
    time = 10,
    diff = 0;
function random() {
    let num = Math.floor(Math.random() * words.length + 1)
    let text = words[num]
    answer.textContent = text
    w = text
}
input.disabled = true

select.addEventListener('click', () => {
    diff = Number(select.value);
    if (diff > 0) {
        play.classList.remove('d-none')
    }
})

random()

input.addEventListener('input', () => {
    if (input.value.toLowerCase() == w) {
        random()
        input.value = ''
        scoreNum++
        score.textContent = scoreNum
        time += diff+1
        success.play()
    }
})
play.addEventListener('click', () => {
    myFunc()
    input.disabled = false;
    select.disabled = true;
    play.classList.add('d-none')
    input.focus()
})
again.addEventListener('click', () => {
    random()
    select.disabled = false
    again.classList.toggle('d-none')
    document.body.classList.toggle('bg-warning')
    img.src = 'https://images.squarespace-cdn.com/content/v1/610118d718f2833505207c07/1628588663011-EUL7IJBBBUGG74R3CCWE/Wallace+at+Computer+Typing.gif'
    document.body.classList.toggle('bg-warning')
    document.body.classList.toggle('bg-danger')
    input.style.display = 'block'
    answer.style.display = 'block'
    input.value = ''
    time = 11
    scoreNum = 0
    score.textContent = scoreNum
    timer.textContent = `00:${time - 1}`
    play.classList.remove('d-none')
})

function myFunc() {
    const myInterval = setInterval(() => {
        if (time > 0) {
            time--
            timer.textContent = time < 10 ? `00:0${time}` : `00:${time}`;
        }
        if (time < 6) {
            tik.play()
            timer.classList.add('shake-slow')
        }
        if (time > 5) {
            timer.classList.remove('shake-slow')
            tik.pause()
        }
        if (time == 0) {
            play.classList.add('d-none')
            again.classList.toggle('d-none')
            document.body.classList.toggle('bg-danger')
            timer.classList.remove('shake-slow')
            tik.pause()
            input.style.display = 'none'
            answer.style.display = 'none'
            img.src = 'https://media4.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif?cid=790b7611c12511d44b272607375f5b62becdadade0d84145&rid=giphy.gif&ct=ts'
            document.body.classList.toggle('bg-warning')
            document.body.classList.toggle('bg-warning')
            gameOver.play()
            clearInterval(myInterval);
            input.disabled = true
        }
    }, 1000)
}