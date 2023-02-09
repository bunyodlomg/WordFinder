const answer = document.querySelector('h2'),
    input = document.querySelector('input'),
    score = document.querySelector('span'),
    timer = document.querySelectorAll('span')[1],
    img = document.querySelector('img'),
    tik = document.querySelectorAll('audio')[0],
    success = document.querySelectorAll('audio')[1],
    gameOver = document.querySelectorAll('audio')[2],
    i = document.querySelector('i');
tik.load()
success.load()
gameOver.load()
let w,
    scoreNum = 0,
    time = 10
function random() {
    let num = Math.floor(Math.random() * words.length + 1)
    let text = words[num]
    answer.textContent = text
    w = text
}
random()
myFunc()
input.addEventListener('input', () => {
    if (input.value == w) {
        random()
        input.value = ''
        scoreNum++
        score.textContent = scoreNum
        time += 6
        success.play()
    }
})
console.log(time);
i.addEventListener('click', () => {
    i.classList.toggle('d-none')
    document.body.classList.toggle('bg-warning')
    time = 10
    img.src = 'https://images.squarespace-cdn.com/content/v1/610118d718f2833505207c07/1628588663011-EUL7IJBBBUGG74R3CCWE/Wallace+at+Computer+Typing.gif'
    document.body.classList.toggle('bg-warning')
    document.body.classList.toggle('bg-danger')
    input.style.display = 'block'
    answer.style.display = 'block'
    time = 11
    myFunc()
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
            document.body.classList.toggle('bg-danger')
            timer.classList.remove('shake-slow')
            tik.pause()
            input.style.display = 'none'
            answer.style.display = 'none'
            img.src = 'https://media4.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif?cid=790b7611c12511d44b272607375f5b62becdadade0d84145&rid=giphy.gif&ct=ts'
            document.body.classList.toggle('bg-warning')
            document.body.classList.toggle('bg-secondary')
            i.classList.remove('d-none')
            gameOver.play()
            clearInterval(myInterval);
            clearInterval();
        }
    }, 1000)
}