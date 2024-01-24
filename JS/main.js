let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");
let topBar = document.querySelector(".bar-1");
let middleBar = document.querySelector(".bar-2");
let bottomBar = document.querySelector(".bar-3");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("nav-toggle");
    topBar.classList.toggle("top-cross");
    bottomBar.classList.toggle("bottom-cross");
    middleBar.classList.toggle("hidden");
})

let barOne = document.getElementById("bar-1");
let barTwo = document.getElementById("bar-2");
let barThree = document.getElementById("bar-3");
let htmlTxt = document.getElementById('html-percentage');
let cssTxt = document.getElementById('css-percentage');
let jsTxt = document.getElementById('js-percentage');

window.addEventListener("scroll", () => {
    async function delay() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 5);
        })
    }
    if (window.pageYOffset > 201) {
        barOne.style.width = `89%`;
        async function main() {
            for (let index = 0; index < 89; index++) {
                if (htmlTxt.textContent == "89%") {
                    htmlTxt.textContent = `89%`;
                } else {
                    await delay();
                    htmlTxt.textContent = index + 1 + `%`;
                }
            }
        }
        main()
    }
    if (window.pageYOffset > 235) {
        barTwo.style.width = '73%';
        async function main() {
            for (let index = 0; index < 73; index++) {
                if (cssTxt.textContent == "73%") {
                    cssTxt.textContent = `73%`;
                } else {
                    await delay();
                    cssTxt.textContent = index + 1 + `%`;
                }
            }
        }
        main()
    }
    if (window.pageYOffset > 270) {
        barThree.style.width = '58%';
        async function main() {
            for (let index = 0; index < 58; index++) {
                if (jsTxt.textContent == "58%") {
                    jsTxt.textContent = `58%`;
                } else {
                    await delay();
                    jsTxt.textContent = index + 1 + `%`;
                }
            }
        }
        main()
    }
});

function sendData() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "atbitcode@gmail.com",
        Password: "75186546",
        To: `sagarkum104@gmail.com`,
        From: document.getElementById("email").value,
        Subject: "A New Feedback",
        Body: document.getElementById("msg").value
    }).then(
        message => alert(`msg send`)
    );
}
