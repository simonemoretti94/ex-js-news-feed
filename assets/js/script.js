//script
const tags = [
    {
        id: 1,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.',
        tags: ['geo', 'tech'],
        author: 'Diana Rossi',
        published: '2023-01-15',
    },
    {
        id: 2,
        title: 'Viaggio culinario: alla scoperta dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici',
        tags: ['cucina'],
        author: 'Marta Bianchi',
        published: '2023-04-20',
    },
    {
        id: 3,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tags: ['viaggi', 'geo'],
        author: 'Fabio Mari',
        published: '2023-03-14',
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: 'Un\'n analisi delle tendenze e delle sfide nell\'arte contemporanea, con interviste ad artisti emergenti.',
        tags: ['arte', 'tech'],
        author: 'Gabriele Neri',
        published: '2023-05-29',
    },
];

/* DECLARING FUNCTIONS */

//card creator

/**
 * 
 * @param {object} objectEl receive an object from 'tag' array 
 * @param {*} forCounter working script counter
 */
function cardMaker(objectEl, index) {

    //creating template literal
    const cardEl = `
        <div class="card col-12 pt-2 mt-4">
            <div class="card-header pb-0">
                <div class="wrapper col-12 d-flex flex-row">
                    <p id="title" class="col-11 mb-1">${objectEl.title}</p>
                    <i id="${objectEl.id}" class="col-1 fa-regular fa-bookmark""></i>
                </div>
                <p id="author" class="col-12 mb-0">pubblicato da ${objectEl.author}</p>
                <p id="published" class="col-12" >in data ${objectEl.published}</p>
                <p id="content" class="col-12  mb-0">${objectEl.content}</p>
            </div>
            <div id="card-body${objectEl.id}" class="card-body">
            </div>
            <div id="card-footer${objectEl.id}" class="card-footer">
            </div>
        </div>`;

    //injecting template literal into container
    containerEl.innerHTML += cardEl;

    //appending buttons to injected template literal
    buttonsMaker(objectEl);

    //appending img path to injected template literal
    imgpathMaker(objectEl)

    /* END CARD STRUCTURING */

};

//card tag creator

/**
 * 
 * @param {object} cardMakerObject receive the same object as cardMaker, but in order to perform different actions, as creating btn's and adding them to card's footer
 */
function buttonsMaker(cardMakerObject) {

    const cardTags = [];

    for (let i of cardMakerObject.tags) {
        cardTags.push(i);
    }

    //console.log(`BUTTONSMAKERf says: card author, ${cardMakerObject.author} tags: `, cardTags);

    const cardFooter = document.getElementById(`card-footer${cardMakerObject.id}`);

    //debug counter
    let counter = cardTags.length - 1;

    cardTags.forEach(element => {

        //console.log('BUTTONSMAKERf says: card tag: ', element, 'iteration: ', counter);

        counter--;

        const tempBtn = `
            <button id="btn-${element}" class="btn btn-sm border-1 rounded-2 text-center text-white text-lowercase" >${element}</button>
            `;


        //console.log('BUTTONSMAKERf says: card tempBtn: ', tempBtn);

        cardFooter.innerHTML += tempBtn;

        //console.log('BUTTONSMAKERf says: card footer: ', cardFooter);
    });

};

//card img path creator


/**
 * 
 * @param {object} cardMakerObject receive the same object as cardMaker, but in order to perform different actions, as creating img's paths and adding them to card's body
 */
function imgpathMaker(cardMakerObject) {

    const cardBody = document.getElementById(`card-body${cardMakerObject.id}`);

    let path;

    switch (cardMakerObject.id) {
        case 1:
            path = 'src="./assets/img/html_img/rubber-duck.jpg" alt="rubber-duck"';
            break;
        case 2:
            path = 'src="./assets/img/html_img/kitchen-food.jpg" alt="kitchen-food"';
            break;
        case 3:
            path = 'src="./assets/img/html_img/deep-sea.jpg" alt="deep-sea"';
            break;
        case 4:
            path = 'src="./assets/img/html_img/modern-art.jpg" alt="modern-art"';
            break;
        default:
            //console.log('IMGPATHMAKERf says: error switch');
            break;
    }

    const imgPath = `
        <img class="card-img-bottom" ${path}></img>
        `;

    //console.log('IMGPATHMAKERf says: img path: ', imgPath);

    cardBody.innerHTML = imgPath;
}

//select type based on card tags

/**
 * 
 * @param {string} selectvalue value received from user interaction with DOM's select tag
 */
function typeSelector(selectvalue) {

    const selectDOM = document.getElementById('main_select').addEventListener('change', function (e) {
        e.preventDefault();
    });

    let tempVal = selectvalue.toLowerCase();

    if (selectvalue === '') {
        //if (tutti i tags) prints every card
        tags.forEach((objectElement, index) => {
            cardMaker(objectElement, index);
        });
    }
    else if (selectvalue === 'politica') {
        //if (politica) clear the container
        containerEl.innerHTML = '';
    }
    else {
        //creates cards when parameters requested match
        checkAndSelectCardMaker(tempVal, checkBoxValue)
    }

    /* No news H2 showing itself or not */
    const noNewsH2 = document.getElementById('id_news');

    if (containerEl.innerHTML == '') {
        noNewsH2.classList.remove('d-none');
    }
    else {
        if (containerEl.innerHTML != '' && !noNewsH2.classList.contains('d-none')) {
            noNewsH2.classList.add('d-none');
            //adding class display-none to noNewsH2 in case it's visible while container isn't empty
        }
    }

    console.log('TYPESELECTORf says: bkm and check log: ', bookMarksClick, ' ', checkBoxValue);


    //return only for checkbox
    return selectvalue;
};

//typeselector coadiuvating function

/**
 * 
 * @param {string} selectvalue string received from DOM select's option
 * @param {boolean} checkBoxValue boolean value true or false from DOM's checkbox
 */
function checkAndSelectCardMaker(selectvalue, checkBoxValue) {
    // Array filtering based on "selectvalue"

    let filteredCards = tags.filter(card => {

        //Checking if "selectvalue" is present into card's tag property
        let isTagPresent = card.tags.includes(selectvalue);

        console.log('isTagPresent: ', isTagPresent);

        // //if checkbox ist "true", let's check if the card's id is present inside bookMarksClick array
        if (checkBoxValue == true) {
            return isTagPresent || bookMarksClick.includes(card.id);
        }
        else {
            //Otherwise, it returns only cards with specified tag
            return isTagPresent;
        }
    });

    console.log('filtered Cards: ', filteredCards);

    containerEl.innerHTML = '';

    for (let index of filteredCards) {
        cardMaker(index);
    }
}





/* WORKING SCRIPT STARTS HERE */


//getting main_container
const containerEl = document.getElementById('main_container');


tags.forEach((objectElement, index) => {

    //console.log('WORKINGSCRIPT says: object passed to function: ', objectElement);

    cardMaker(objectElement, index);
});



//bookmarks click array
const bookMarksClick = [];

// select the 'select' tag and eleaborating input passed
const typesSelectEl = document.getElementById('main_select');


//check box variable
let checkBoxValue;

//checkbox listener 
document.getElementById('checkbox1').addEventListener('change', function () {
    checkBoxValue = this.checked; // questo sarà true se il checkbox è selezionato, false altrimenti

});




/* icons tag selector */
const bookmarksQuery = document.querySelectorAll('i');

//console.log('bookmarksQuery log: ', bookmarksQuery);

bookmarksQuery.forEach(iconElement => {

    iconElement.addEventListener('click', function (e) {


        //console.log('BOOKMARKSQUERY says: received id: ', e.target.id);

        const selectedIconId = Number(e.target.id);

        //console.log('BOOKMARKSQUERY says: typeof selectedIconId ', typeof (selectedIconId));

        //changing bookmark icon's class
        const tempI = document.getElementById(selectedIconId);

        //console.log('BOOKMARKSQUERY says: tempI classlist:', tempI.classList);

        if (tempI.classList.contains('fa-regular')) {

            //if (!bookMarksClick.includes(selectedIconId)) {

            tempI.classList.remove('fa-regular');
            tempI.classList.add('fa-solid');

            bookMarksClick.push(selectedIconId)

            console.log('BOOKMARKSQUERY says: bookmarksclick id added log: ', bookMarksClick);

            //}

        }
        else {

            tempI.classList.remove('fa-solid');
            tempI.classList.add('fa-regular');

            for (let i = 0; i < bookMarksClick.length; i++) {
                if (bookMarksClick[i] === selectedIconId) {
                    console.log('bookmark removed: ', bookMarksClick[i]);
                    bookMarksClick.splice(i, 1);
                    console.log('bookmarksclick log: ', bookMarksClick);
                }
            }
        }
    });
});

