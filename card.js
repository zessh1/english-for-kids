const burger_icon = document.querySelector(".burger-icon")
const grid_cards_train = document.querySelector(".grid-cards-Train")
const burger_menu = document.querySelector(".burger-menu");
const dive = document.querySelector(".dive");
const grid_card = document.querySelector(".grid-cards")
const checkbox = document.getElementById("checkbox")
const overlay = document.querySelector(".overlay")
const train_box = document.querySelector(".train-box")
const statistic = document.querySelector(".statistic")


const number_list = [0, 1, 2, 3, 4, 5, 6, 7];

var count = 0;

let failure_count = 0;
var k = 0
const shuffledArray = number_list.sort(() => 0.5 - Math.random());
const cards = [
    ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions','Food (set A)','Food (set B)'],
    [
        {
            word: 'cry',
            translation: 'плакать',
            image: 'img/cry.jpg',
            audioSrc: 'audio/cry.mp3'
        },
        {
            word: 'dance',
            translation: 'танцевать',
            image: 'img/dance.jpg',
            audioSrc: 'audio/dance.mp3'
        },
        {
            word: 'dive',
            translation: 'нырять',
            image: 'img/dive.jpg',
            audioSrc: 'audio/dive.mp3'
        },
        {
            word: 'draw',
            translation: 'рисовать',
            image: 'img/draw.jpg',
            audioSrc: 'audio/draw.mp3'
        },
        {
            word: 'fish',
            translation: 'ловить рыбу',
            image: 'img/fish.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'fly',
            translation: 'летать',
            image: 'img/fly.jpg',
            audioSrc: 'audio/fly.mp3'
        },
        {
            word: 'hug',
            translation: 'обнимать',
            image: 'img/hug.jpg',
            audioSrc: 'audio/hug.mp3'
        },
        {
            word: 'jump',
            translation: 'прыгать',
            image: 'img/jump.jpg',
            audioSrc: 'audio/jump.mp3'
        }
    ],
    [
        {
            word: 'open',
            translation: 'открывать',
            image: 'img/open.jpg',
            audioSrc: 'audio/open.mp3'
        },
        {
            word: 'play',
            translation: 'играть',
            image: 'img/play.jpg',
            audioSrc: 'audio/play.mp3'
        },
        {
            word: 'point',
            translation: 'указывать',
            image: 'img/point.jpg',
            audioSrc: 'audio/point.mp3'
        },
        {
            word: 'ride',
            translation: 'ездить',
            image: 'img/ride.jpg',
            audioSrc: 'audio/ride.mp3'
        },
        {
            word: 'run',
            translation: 'бегать',
            image: 'img/run.jpg',
            audioSrc: 'audio/run.mp3'
        },
        {
            word: 'sing',
            translation: 'петь',
            image: 'img/sing.jpg',
            audioSrc: 'audio/sing.mp3'
        },
        {
            word: 'skip',
            translation: 'пропускать, прыгать',
            image: 'img/skip.jpg',
            audioSrc: 'audio/skip.mp3'
        },
        {
            word: 'swim',
            translation: 'плавать',
            image: 'img/swim.jpg',
            audioSrc: 'audio/swim.mp3'
        }
    ],
    [
        {
            word: 'cat',
            translation: 'кот',
            image: 'img/cat.jpg',
            audioSrc: 'audio/cat.mp3'
        },
        {
            word: 'chick',
            translation: 'цыплёнок',
            image: 'img/chick.jpg',
            audioSrc: 'audio/chick.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: 'img/chicken.jpg',
            audioSrc: 'audio/chicken.mp3'
        },
        {
            word: 'dog',
            translation: 'собака',
            image: 'img/dog.jpg',
            audioSrc: 'audio/dog.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: 'img/horse.jpg',
            audioSrc: 'audio/horse.mp3'
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: 'img/pig.jpg',
            audioSrc: 'audio/pig.mp3'
        },
        {
            word: 'rabbit',
            translation: 'кролик',
            image: 'img/rabbit.jpg',
            audioSrc: 'audio/rabbit.mp3'
        },
        {
            word: 'sheep',
            translation: 'овца',
            image: 'img/sheep.jpg',
            audioSrc: 'audio/sheep.mp3'
        }
    ],
    [
        {
            word: 'bird',
            translation: 'птица',
            image: 'img/bird.jpg',
            audioSrc: 'audio/bird.mp3'
        },
        {
            word: 'fish',
            translation: 'рыба',
            image: 'img/fish1.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'frog',
            translation: 'жаба',
            image: 'img/frog.jpg',
            audioSrc: 'audio/frog.mp3'
        },
        {
            word: 'giraffe',
            translation: 'жирафа',
            image: 'img/giraffe.jpg',
            audioSrc: 'audio/giraffe.mp3'
        },
        {
            word: 'lion',
            translation: 'лев',
            image: 'img/lion.jpg',
            audioSrc: 'audio/lion.mp3'
        },
        {
            word: 'mouse',
            translation: 'мышь',
            image: 'img/mouse.jpg',
            audioSrc: 'audio/mouse.mp3'
        },
        {
            word: 'turtle',
            translation: 'черепаха',
            image: 'img/turtle.jpg',
            audioSrc: 'audio/turtle.mp3'
        },
        {
            word: 'dolphin',
            translation: 'дельфин',
            image: 'img/dolphin.jpg',
            audioSrc: 'audio/dolphin.mp3'
        }
    ],
    [
        {
            word: 'skirt',
            translation: 'юбка',
            image: 'img/skirt.jpg',
            audioSrc: 'audio/skirt.mp3'
        },
        {
            word: 'pants',
            translation: 'брюки',
            image: 'img/pants.jpg',
            audioSrc: 'audio/pants.mp3'
        },
        {
            word: 'blouse',
            translation: 'блузка',
            image: 'img/blouse.jpg',
            audioSrc: 'audio/blouse.mp3'
        },
        {
            word: 'dress',
            translation: 'платье',
            image: 'img/dress.jpg',
            audioSrc: 'audio/dress.mp3'
        },
        {
            word: 'boot',
            translation: 'ботинок',
            image: 'img/boot.jpg',
            audioSrc: 'audio/boot.mp3'
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: 'img/shirt.jpg',
            audioSrc: 'audio/shirt.mp3'
        },
        {
            word: 'coat',
            translation: 'пальто',
            image: 'img/coat.jpg',
            audioSrc: 'audio/coat.mp3'
        },
        {
            word: 'shoe',
            translation: 'туфли',
            image: 'img/shoe.jpg',
            audioSrc: 'audio/shoe.mp3'
        }
    ],
    [
        {
            word: 'sad',
            translation: 'грустный',
            image: 'img/sad.jpg',
            audioSrc: 'audio/sad.mp3'
        },
        {
            word: 'angry',
            translation: 'сердитый',
            image: 'img/angry.jpg',
            audioSrc: 'audio/angry.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: 'img/happy.jpg',
            audioSrc: 'audio/happy.mp3'
        },
        {
            word: 'tired',
            translation: 'уставший',
            image: 'img/tired.jpg',
            audioSrc: 'audio/tired.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивлённый',
            image: 'img/surprised.jpg',
            audioSrc: 'audio/surprised.mp3'
        },
        {
            word: 'scared',
            translation: 'испуганный',
            image: 'img/scared.jpg',
            audioSrc: 'audio/scared.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: 'img/smile.jpg',
            audioSrc: 'audio/smile.mp3'
        },
        {
            word: 'laugh',
            translation: 'смех',
            image: 'img/laugh.jpg',
            audioSrc: 'audio/laugh.mp3'
        }
    ],[
        {
            word: 'potato',
            translation: 'картошка',
            image: 'img/potato.jpg',
            audioSrc: 'audio/potato.mp3'
        },
        {
            word: 'cucumber',
            translation: 'огурец',
            image: 'img/cucumber.jpg',
            audioSrc: 'audio/cucumber.mp3'
        },
        {
            word: 'tomato',
            translation: 'помидор',
            image: 'img/tomato.jpg',
            audioSrc: 'audio/tomato.mp3'
        },
        {
            word: 'cauliflower',
            translation: 'цветная капуста',
            image: 'img/cauliflower.jpg',
            audioSrc: 'audio/cauliflower.mp3'
        },
        {
            word: 'donuts',
            translation: 'пончик',
            image: 'img/donuts.jpg',
            audioSrc: 'audio/donuts.mp3'
        },
        {
            word: 'hamburger',
            translation: 'гамбургер',
            image: 'img/hamburger.jpg',
            audioSrc: 'audio/hamburger.mp3'
        },
        {
            word: 'spinach',
            translation: 'шпинат',
            image: 'img/spinach.jpg',
            audioSrc: 'audio/spinach.mp3'
        },
        {
            word: 'egg',
            translation: 'яйцо',
            image: 'img/egg.jpg',
            audioSrc: 'audio/egg.mp3'
        }
    ],
    [
        {
            word: 'meat',
            translation: 'мясо',
            image: 'img/meat.jpg',
            audioSrc: 'audio/meat.mp3'
        },
        {
            word: 'carrot',
            translation: 'морковь',
            image: 'img/carrot.jpg',
            audioSrc: 'audio/carrot.mp3'
        },
        {
            word: 'noodle',
            translation: 'лапша',
            image: 'img/noodle.jpg',
            audioSrc: 'audio/noodle.mp3'
        },
        {
            word: 'hot dog',
            translation: 'хотдог',
            image: 'img/hot-dog.jpg',
            audioSrc: 'audio/hot-dog.mp3'
        },
        {
            word: 'bread',
            translation: 'хлеб',
            image: 'img/bread.jpg',
            audioSrc: 'audio/bread.mp3'
        },
        {
            word: 'cake',
            translation: 'кекс',
            image: 'img/cake.jpg',
            audioSrc: 'audio/cake.mp3'
        },
        {
            word: 'eggplant',
            translation: 'баклажан',
            image: 'img/eggplant.jpg',
            audioSrc: 'audio/eggplant.mp3'
        },
        {
            word: 'cheese',
            translation: 'сыр',
            image: 'img/cheese.jpg',
            audioSrc: 'audio/cheese.mp3'
        }
    ]
]
const stats = {
    "ActionA" : {
        "try": 0,
        "0": {
            "name" : "cry",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "dance",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "dive",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "draw",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "fish",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "fly",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "hug",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "jump",
            "correct": 0,
            "wrong": 0,

        }
    },
    "ActionB" : {
        "try": 0,
        "0": {
            "name" : "open",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "play",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "point",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "ride",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "run",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "sing",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "skip",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "swim",
            "correct": 0,
            "wrong": 0,

        }
    },
    "AnimalA" : {
        "try": 0,
        "0": {
            "name" : "cat",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "chick",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "chicken",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "dog",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "horse",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "pig",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "rabbit",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "sheep",
            "correct": 0,
            "wrong": 0,

        }
    },
    "AnimalB" : {
        "try": 0,
        "0": {
            "name" : "bird",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "fish",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "frog",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "giraffe",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "lion",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "mouse",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "turtle",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "dolphin",
            "correct": 0,
            "wrong": 0,

        }
    },
    "Clothes" : {
        "try": 0,
        "0": {
            "name" : "skirt",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "pants",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "blouse",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "dress",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "boot",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "shirt",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "coat",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "shoe",
            "correct": 0,
            "wrong": 0,

        }
    },
    "Emotions" : {
        "try": 0,
        "0": {
            "name" : "sad",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "angry",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "happy",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "tired",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "surprised",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "scared",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "smile",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "laugh",
            "correct": 0,
            "wrong": 0,

        }
    },
    "FoodA" : {
        "try": 0,
        "0": {
            "name" : "potato",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "cucumber",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "tomato",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "cauliflower",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "donuts",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "hamburger",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "spinach",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "egg",
            "correct": 0,
            "wrong": 0,

        }
    },
    "FoodB" : {
        "try": 0,
        "0": {
            "name" : "meat",
            "correct": 0,
            "wrong": 0,

        },"1": {
            "name" : "carrot",
            "correct": 0,
            "wrong": 0,

        },"2": {
            "name" : "noodle",
            "correct": 0,
            "wrong": 0,

        },"3": {
            "name" : "hot dog",
            "correct": 0,
            "wrong": 0,

        },"4": {
            "name" : "bread",
            "correct": 0,
            "wrong": 0,

        },"5": {
            "name" : "cake",
            "correct": 0,
            "wrong": 0,

        },"6": {
            "name" : "eggplant",
            "correct": 0,
            "wrong": 0,

        },"7": {
            "name" : "cheese",
            "correct": 0,
            "wrong": 0,

        }
    },
}

burger_icon.addEventListener("click", function () {
    if (burger_menu.classList.contains(`closed`)) {
        burger_menu.classList.add("open");
        burger_menu.classList.remove("closed");
        overlay.classList.add("active")
    }
    else {
        burger_menu.classList.remove("open");
        burger_menu.classList.add("closed");
        overlay.classList.remove("active")
    }


})
overlay.addEventListener("click", function () {


    overlay.classList.remove("active");
    burger_menu.classList.remove("open");
    burger_menu.classList.add("closed");




})


function locationHashChanged() {

    if (location.hash === '#Action(A)') {
        let card_page = 1
        x = null
        if (grid_card.classList.contains("full") && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }

        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }

        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")

        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"


        card_block.classList.add("card-block")

        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let card_train = document.createElement("div")
            let card_absolute = document.createElement("div")
            let card_img_train = document.createElement("img")

            let x = new Audio(cards[card_page][i].audioSrc)

            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("card")
            card_train.classList.add("train-card")
            grid_cards_train.classList.add("ful")



            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                    x.play();
                })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"ActionA")
            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })

            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)


        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc);
            m.play();
            overlay.classList.remove("active");
            stats.ActionA.try += 1;
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)

        })
        
        train_box.appendChild(bottom_line)
    }else if (location.hash === '#Action(B)') {
        x = null

        if (grid_card.classList.contains("full") && document.querySelector(".card") ) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")

        let card_page = 2
        page = card_page
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("card")
            card_train.classList.add("train-card")
            grid_cards_train.classList.add("ful")

            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                x.play();
            })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"ActionB")


            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })

            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)

        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active")
            stats.ActionB.try += 1
            grid_cards_train.removeChild(card_block)

            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }
            count = 0;
            k = 0;
            console.log(k)
        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#Animal(A)') {
        x = null

        if (grid_card.classList.contains("full") && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")
        let card_page = 3
        page = card_page
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("card")
            card_train.classList.add("train-card")
            grid_cards_train.classList.add("ful")

            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                x.play();
            })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"AnimalA")

            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })
            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)

        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active")
            stats.AnimalA.try += 1
            grid_cards_train.removeChild(card_block)
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)
        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#Animal(B)') {

        if (grid_card.classList.contains("full") && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")
        let card_page = 4
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("train-card")
            grid_cards_train.classList.add("ful")
            card_train.classList.add("card")

            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                x.play();
            })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"AnimalB")

            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word


                })
            })
            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)


        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active");
            stats.AnimalB.try += 1
            grid_cards_train.removeChild(card_block)
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)

        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#Clothes') {

        if (grid_card.classList.contains("full") && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)

            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")
        let card_page = 5
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("train-card")
            card_train.classList.add("card")
            grid_cards_train.classList.add("ful")

            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                x.play();
            })

            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"Clothes")

            })

            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })
            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)

        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active")
            stats.Clothes.try += 1
            grid_cards_train.removeChild(card_block)
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)
        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#Emotions') {

        if (grid_card.classList.contains("full") && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")
        let card_page = 6
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("train-card")
            card_train.classList.add("card")
            grid_cards_train.classList.add("ful")

            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                x.play();
            })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"Emotions")

            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })
            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)

        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active")
            stats.Emotions.try += 1
            grid_cards_train.removeChild(card_block)
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)
        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#Food(A)') {

        if (grid_card.classList.contains("full") && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")
        let card_page = 7
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            card_train.classList.add("card")
            grid_cards_train.classList.add("ful")
            card_train.classList.add("train-card")

            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image

            card.addEventListener("click", function () {

                x.play();
            })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"FoodA")

            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })
            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)

        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active")
            stats.FoodA.try += 1
            grid_cards_train.removeChild(card_block)
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)
        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#Food(B)') {

        if (grid_card.classList.contains("full")  && document.querySelector(".card")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful") && document.querySelector(".train-card")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        if(statistic.classList.contains("active")) {
            statistic.classList.remove("active")
        }
        let bottom_line = document.createElement("div")
        let start_button = document.createElement("button")
        let star_box = document.createElement("div")
        let card_block = document.createElement("div")
        bottom_line.classList.add("bottom-line")
        start_button.classList.add("start-button")
        star_box.classList.add("star-box")
        bottom_line.appendChild(start_button)
        bottom_line.appendChild(star_box)
        start_button.innerHTML = "START"
        card_block.classList.add("card-block")
        let card_page = 8
        for (let i = 0; i < 8; i++) {
            let card = document.createElement("div")
            let card_img = document.createElement("img")
            let card_name = document.createElement("div")
            let card_rotate = document.createElement("img")
            let card_absolute = document.createElement("div")
            let card_train = document.createElement("div")
            let card_img_train = document.createElement("img")
            let x = new Audio(cards[card_page][i].audioSrc)
            card.classList.add("card")
            card_img.classList.add("card-img")
            card_name.classList.add("card-name")
            card_rotate.classList.add("card-rotate")
            card_absolute.classList.add("card-absolute")
            card_img_train.classList.add("card-img-train")
            card_absolute.setAttribute("id", i)
            grid_cards_train.classList.add("ful")
            card_train.classList.add("card")
            card_train.classList.add("train-card")


            card_img.src = cards[card_page][i].image
            card_name.innerHTML = cards[card_page][i].word
            card_rotate.src = "icons/rotate.svg"
            card_img_train.src = cards[card_page][i].image


            card.addEventListener("click", function () {

                x.play();
            })
            card_absolute.addEventListener("click", event => {
                game(card_page,event.target.id,star_box,"FoodB")

            })
            card_rotate.addEventListener("click", function (){
                card.classList.add("rotate")
                card_name.innerHTML = cards[card_page][i].translation
                card.addEventListener("mouseleave", function () {
                    card.classList.remove("rotate")
                    card_name.innerHTML = cards[card_page][i].word

                })
            })
            card.appendChild(card_img)
            card.appendChild(card_name)
            card.appendChild(card_rotate)
            card_train.appendChild(card_absolute)
            grid_card.appendChild(card)
            grid_card.classList.add("full")
            card_train.appendChild(card_img_train)
            grid_cards_train.appendChild(card_train)
            grid_cards_train.appendChild(card_block)

        }
        start_button.addEventListener("click", function () {
            let shuffledArray = number_list.sort((a, b) => 0.5 - Math.random());
            let m = new Audio(cards[card_page][shuffledArray[k]].audioSrc)
            m.play()
            overlay.classList.remove("active")
            stats.FoodB.try += 1
            grid_cards_train.removeChild(card_block)
            if (grid_cards_train.querySelector(".card-block")) {
                grid_cards_train.removeChild(card_block);
            }

            count = 0;
            k = 0;
            console.log(k)
        })

        train_box.appendChild(bottom_line)
    }
    else if (location.hash === '#statistic') {
        if (grid_card.classList.contains("full")) {
            for (let i = 0; i < 8; i++) {

                let full = document.querySelector(".card")
                grid_card.removeChild(full)
            }
        }
        if (grid_cards_train.classList.contains("ful")) {
            for (let i = 0; i< 8; i++) {
                let ful = document.querySelector(".train-card")
                grid_cards_train.removeChild(ful)
            }
            let Ful = document.querySelector(".bottom-line")
            train_box.removeChild(Ful)

        }
        let ActionA = document.querySelector(".ActionA")
        let ActionB = document.querySelector(".ActionB")
        let AnimalA = document.querySelector(".AnimalA")
        let AnimalB = document.querySelector(".AnimalB")
        let Clothes = document.querySelector(".Clothes")
        let Emotions = document.querySelector(".Emotions")
        let FoodA = document.querySelector(".FoodA")
        let FoodB = document.querySelector(".FoodB")




        statistic.classList.add("active")
        for (let i = 0; i < 8; i++) {

            ActionA.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.ActionA[i].wrong
            ActionA.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.ActionA[i].correct
            ActionA.getElementsByClassName("static-card")[i].querySelector(".card-try").innerHTML = stats.ActionA.try

            ActionB.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.ActionB[i].wrong
            ActionB.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.ActionB[i].correct
            ActionB.getElementsByClassName("static-card")[i].querySelector(".card-try").innerHTML = stats.ActionB.try

            AnimalA.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.AnimalA[i].wrong
            AnimalA.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.AnimalA[i].correct

            AnimalB.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.AnimalB[i].wrong
            AnimalB.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.AnimalB[i].correct

            Clothes.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.Clothes[i].wrong
            Clothes.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.Clothes[i].correct

            Emotions.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.Emotions[i].wrong
            Emotions.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.Emotions[i].correct

            FoodA.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.FoodA[i].wrong
            FoodA.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.FoodB[i].correct

            FoodB.getElementsByClassName("static-card")[i].querySelector(".card-wrong").innerHTML = stats.FoodB[i].wrong
            FoodB.getElementsByClassName("static-card")[i].querySelector(".card-correct").innerHTML = stats.FoodB[i].correct



        }
    }

}


locationHashChanged();
window.onhashchange = locationHashChanged;

checkbox.addEventListener('change', (event) => {

    if (event.currentTarget.checked) {
        let bottom = document.querySelector(".bottom-line")
        grid_cards_train.classList.add("train")
        grid_card.classList.remove("learn")
        if (overlay.classList.contains("active")) {
            overlay.classList.remove("active")
        }
        bottom.classList.remove("open")



    } else {
        let bottom = document.querySelector(".bottom-line")
        grid_cards_train.classList.remove("train")
        grid_card.classList.add("learn")
        overlay.classList.add("active")
        bottom.classList.add("open")
    }
})




function game(card_page,press = -1,star_box,pages) {
    const correct_star = document.createElement("img")
    const failure_star = document.createElement("img")
    let correct = new Audio("audio/correct.mp3")
    let failure = new Audio("audio/failure.mp3")
    correct_star.src = "icons/star-win.svg"
    failure_star.src = "icons/star.svg"
    var page = pages

    if (count > 5) {
        star_box.removeChild(star_box.firstChild);
    }
    if(k < 7) {

        var x = new Audio(cards[card_page][shuffledArray[k + 1]].audioSrc)
    }

    if (press == shuffledArray[k]) {
        correct.play()

        if (k < 7) {
            x.play()
            star_box.appendChild(correct_star)
            count += 1
        }
        else {

            alert(failure_count + " wrong answer")
        }

        switch (page) {
            case "ActionA":
                stats.ActionA[press].correct += 1
            case "ActionB":
                stats.ActionB[press].correct += 1
            case "AnimalA":
                stats.AnimalA[press].correct += 1
            case "AnimalB":
                stats.AnimalB[press].correct += 1
            case "Clothes":
                stats.Clothes[press].correct += 1
            case "Emotions":
                stats.Emotions[press].correct += 1
            case "FoodA":
                stats.FoodA[press].correct += 1
            case "FoodB":
                stats.FoodB[press].correct += 1

        }
        k += 1
    }
    else {
        failure.play()

        star_box.appendChild(failure_star)
        count += 1
        failure_count += 1
        switch (page) {
            case "ActionA":
                stats.ActionA[press].wrong += 1
            case "ActionB":
                stats.ActionB[press].wrong += 1
            case "AnimalA":
                stats.AnimalA[press].wrong += 1
            case "AnimalB":
                stats.AnimalB[press].wrong += 1
            case "Clothes":
                stats.Clothes[press].wrong += 1
            case "Emotions":
                stats.Emotions[press].wrong += 1
            case "FoodA":
                stats.FoodA[press].wrong += 1
            case "FoodB":
                stats.FoodB[press].wrong += 1

        }


    }


}





console.log(stats.ActionA)
