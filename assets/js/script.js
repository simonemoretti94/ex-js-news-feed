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
    function cardMaker (objectEl, ...forCounter) {

        

        //creating template literal
        const cardEl = `
        <div class="card col-12 pt-2 mt-4">
            <div class="card-header pb-0">
                <div class="wrapper col-12 d-flex flex-row">
                    <p id="title" class="col-11 mb-1">${objectEl.title}</p>
                    <i id="${objectEl.tags}" class="col-1 fa-regular fa-bookmark" onclick="bookmarkslistener(this.id)"></i>
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
        console.log('CARDMAKERf says:  END CARD, iteration: ', forCounter);

        //verifying all card are created
        if(counter === 4){
            console.log(`CARDMAKERf says: All ${counter} of ${tags.length} object were converted in cards!`);
        }
        else
        {
            console.log(`CARDMAKERf says: I only created ${counter} of ${tags.length} cards!`);
        }
    };

    //card tag creator

    /**
     * 
     * @param {object} cardMakerObject receive the same object as cardMaker, but in order to perform different actions, as creating btn's and adding them to card's footer
     */
    function  buttonsMaker(cardMakerObject){
        
        const cardTags = [];
        
        for(let i of cardMakerObject.tags) {
            cardTags.push(i);
        }

        console.log(`BUTTONSMAKERf says: card author, ${cardMakerObject.author} tags: `, cardTags);

        const cardFooter = document.getElementById(`card-footer${cardMakerObject.id}`);

        //console.log('card-footer is connected: ', cardFooter.isConnected);

        //debug counter
        let counter = cardTags.length -1;

        cardTags.forEach(element => {

            console.log('BUTTONSMAKERf says: card tag: ', element, 'iteration: ', counter);

            counter--;

            const tempBtn = `
            <button id="btn-${element}" class="btn btn-sm border-1 rounded-2 text-center text-white text-lowercase" >${element}</button>
            `;

            
            console.log('BUTTONSMAKERf says: card tempBtn: ', tempBtn);
            
            cardFooter.innerHTML += tempBtn;

            console.log('BUTTONSMAKERf says: card footer: ', cardFooter);
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

        switch(cardMakerObject.id) {
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
                console.log('IMGPATHMAKERf says: error switch');
                break;
        }

        const imgPath = `
        <img class="card-img-bottom" ${path}></img>
        `;

        console.log('IMGPATHMAKERf says: img path: ', imgPath);

        cardBody.innerHTML = imgPath;
    }



    //bookmarks listener function

    /**
     * 
     * @param {string} id receive icon's id from onclick event into DOM, in order to save it into an array
     */
    function bookmarkslistener(id){
        console.log('BOOKMARKSLISTENERf says: received id: ', id);

        //changing bookmark icon's class
        const tempI = document.getElementById(id);
        console.log('BOOKMARKSLISTENERf says: tempI classlist:', tempI.classList);
        tempI.classList.remove('fa-regular');
        tempI.classList.add('fa-solid');

    
        //const bookmarks = document.querySelectorAll("i[id^='bookmark']");
    
        //verifying that id's bookmarks array includes or not input id
        if(bookMarksClick.includes(id)){
            console.log('BOOKMARKSLISTENERf says: still contains: ', id);
        }
        else {
            bookMarksClick.push(id);
        }

        console.log('BOOKMARKSLISTENERf says: array log: ', bookMarksClick);
    };

    //select event listener

        /**
     * receives click input from acting on select tag into the DOM
     */
    function typeSelector(){
        typesSelectEl.addEventListener('click', function(e){
            //prevent the page to recharge and lose data
            e.preventDefault();

            //converting input into string
            let value = e.target.value;
            
            value = value.toLowerCase();

            console.log(value);

            //making 'tutti i tag' option to create cards and make h2 news disappear
            if(containerEl.innerHTML !== '' && value === '' || containerEl.innerHTML === '' && value === ''){
                
                const noNewsH2 = document.getElementById('id_news');

                if(!noNewsH2.classList.contains('d-none')){
                    noNewsH2.classList.add('d-none');
                }

                containerEl.innerHTML = '';

                for(let index of tags) {
                    cardMaker(index);
                };
            }   //passing all values differents from 'tuti i tag'
            else if(value !== 'tutti i tags'){
                cardReMaker(value);
            }
        })
    };


    
    //card remaker function

    /**
     * 
     * @param {string} value input received from tag select
     * This function works in similar way as 'cardMaker', but creates only card which tag is compatible with chosen options.
     */
    function cardReMaker(value){
        const noNewsH2 = document.getElementById('id_news');

        clickevent(value);

        //makes h2 news appear
        if(value === 'politica'){
            noNewsH2.classList.remove('d-none');
        }

        //clear container in order to add new cards
        containerEl.innerHTML = '';

        //creating only cards compatible with 'value' string passed to the function
        for(let index of tags){
            if(index.tags.includes(value)){
                console.log('CARDREMAKERf index tags: ', index.tags);
                if(value !== 'politica' && !(noNewsH2.classList.contains('d-none'))){
                    noNewsH2.classList.add('d-none');
                }
                cardMaker(index);
            }
        }
    };


    //checkbox click event function

    /**
     * receives input from checkbox, then creates cards filtering saved elements and select option
     */
    function clickevent(value){
        clickcounter++;

        console.log('CLICKCOUNTERf says: value passed: ', value);

        console.log( 'click counter: ', clickcounter);

        if(clickcounter % 2 !== 0) {

            if(bookMarksClick === undefined || bookMarksClick.length == 0){
            }
            else if(bookMarksClick.contains(value)){
                return value;
            }
            else{
                return '';
            }
        }
    }




/* WORKING SCRIPT STARTS HERE */


//getting main_container
const containerEl = document.getElementById('main_container');

//console.log('container is connected: ', containerEl.isConnected);

let counter = 0;

for(let index of tags) {
    
    console.log('WORKINGSCRIPT says: object passed to function: ', index);

    counter++;
    cardMaker(index, counter);
};

//bookmarks click array
const bookMarksClick = [];

// select the 'select' tag and eleaborating input passed
const typesSelectEl = document.getElementById('main_select');



//clickeventcounter
let clickcounter = 0;