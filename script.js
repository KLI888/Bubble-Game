function makeBubble() {
    var cluster = "";
    for (let i = 1; i <= 119; i++) {
        let number = Math.floor(Math.random() * 10);
        let id = `no_${i}_${number}`;
        cluster += `<div class="gm_no" id="${id}" onclick="newScore(${number}, '${id}')" value="${number}">${number}</div>`;
    }
    document.querySelector(".game_numbers").innerHTML = cluster;
}


var timer = 60
function runTimer() {
    var timeint = setInterval(() => {
        if (timer > 0) {
            timer -= 1
            document.getElementById("timeval").textContent = timer
        } else {
            clearInterval(timeint)
            var gm_no = document.querySelectorAll(".gm_no");
            gm_no.forEach((element) => {
                element.style.display = "none"
            })
        }

    }, 1000);
    console.log(timer)
}


var hit = 0
function getNewHit() {
    hit = Math.floor(Math.random() * 10)
    document.getElementById("hitval").textContent = hit
}

var score = 0
function newScore(hitNumber, no_id) {
    let hitNo = document.getElementById("hitval").textContent
    if (hitNumber == hitNo) {
        score++
        document.getElementById("scoreval").textContent = score

        let clickedBubble = document.getElementById(no_id);
        clickedBubble.style.pointerEvents = "none"
        clickedBubble.textContent = ''
    }
}



makeBubble()
runTimer()
getNewHit()