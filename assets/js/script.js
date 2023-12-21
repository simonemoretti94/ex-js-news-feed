//script
const tags = [
    {
        id: 1,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.',
        tags: ['geo', 'tech'],
        author: 'Diana Rossi',
        published: '2023-02-11',
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tags: ['viaggi', 'geo'],
        author: 'Fabio Mari',
        published: '2023-03-14',
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla scoperta dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici',
        tags: ['cucina'],
        author: 'Marta Bianchi',
        published: '2023-04-20',
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
     */
    function cardMaker (objectEl) {

        //creating template literal
        const cardEl = `
        <div class="card col-12 pt-2 mt-4">
            <div class="card-header pb-0">
                <div class="wrapper col-12 d-flex flex-row">
                    <p id="title" class="col-11 mb-1">${objectEl.title}</p>
                    <i id="bookmark" class="col-1 fa-regular fa-bookmark"></i>
                </div>
                <p id="author" class="col-12 mb-0">pubblicato da ${objectEl.author}</p>
                <p id="published" class="col-12" >in data ${objectEl.published}</p>
                <p id="content" class="col-12  mb-0">${objectEl.content}</p>
            </div>
            <div class="card-body">
                <img class="card-img-bottom" src="./assets/img/html_img/rubber-duck.jpg" alt="rubber-duck">
            </div>
            <div id="card-footer${objectEl.id}" class="card-footer">
            </div>
        </div>`;
     
        //injecting template literal into container
        containerEl.innerHTML += cardEl;
         
        //appending buttons to injected template literal
        buttonsMaker(objectEl);
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

        //debugging counter
        let counter = cardTags.length + 1;

        console.log(`card author, ${cardMakerObject.author} tags: `, cardTags);

        const cardFooter = document.getElementById(`card-footer${cardMakerObject.id}`);

        console.log('card-footer is connected: ', cardFooter.isConnected);

        cardTags.forEach(element => {

            console.log('card tags row js.95: ', element);

            const tempBtn = `
            <button id="btn-${element}" class="btn btn-sm border-1 rounded-2 text-center text-white text-lowercase" >${element}</button>
            `;

            
            console.log('card tempBtn js.101: ', tempBtn);
            
            cardFooter.innerHTML += tempBtn;

            console.log('card footer js.109: ', cardFooter);

            //counter for debugging
            counter--;
            console.log('counter js.110: ', counter);
        });
        
    };



/* WORKING SCRIPT STARTS HERE */


//getting main_container
const containerEl = document.getElementById('main_container');

console.log('container is connected: ', containerEl.isConnected);


for(let i of tags) {
    
    cardMaker(i);
};



