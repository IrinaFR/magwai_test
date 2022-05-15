function createCards() {
    let countLoadPosts = 0;
    const result = document.getElementById('cardsList'),
        btnLoadPosts = document.getElementById('loadPosts');


        btnLoadPosts.addEventListener('click', () => {
            loadPosts(6);
        });

    function loadPosts(count) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((post) => {
            fetch('https://picsum.photos/v2/list?page=2&limit=100')
            .then(response => response.json())
            .then((json) => {
                for (let i = 0; i < count; i++) {
                    result.innerHTML +=
                        `<div class="cards__item">
                            <img src="${json[countLoadPosts].download_url}" alt="..." class="cards__item-img">
                            <div class="cards__item-space">
                                <div>
                                <div class="cards__item-description">
                                    <div class="cards__item-tag">Bridge</div>
                                    <div class="cards__item-title">${post[countLoadPosts].title}</div>
                                    <div class="cards__item-text">${post[countLoadPosts].body}</div>
                                    <div class="cards__item-info">Posted by <b>Eugenia</b>, on July  24, 2019</div>
                                </div>
                                </div>
                                <div class="cards__item-button">
                                    <button class="button">Continue reading</button>
                                </div>
                            </div>
                        </div>`;
                        countLoadPosts++;
                }
                
            })
            

        });
    }
    loadPosts(10)
}




function mobMenu() {
    const btnMenu = document.getElementById('btnMenu'),
        blockMenu = document.getElementById('blockMenu');
    let hidden = true;

    btnMenu.addEventListener('click', () => {
        if (hidden == true) {
            blockMenu.style.clipPath = 'inset(0px 0px 0px 0px)';
            hidden = false;
        } else {
            blockMenu.style.clipPath = 'inset(0px 100% 0px 0px)'
            hidden = true;
        }
    })

}

function popUp() {
    const btnOpenModal = document.querySelectorAll('.open-form'),
        modal = document.getElementById('modal'),
        modalClose = document.getElementById('modalClose');

    btnOpenModal.forEach((el) => {
        el.addEventListener('click', () => {
            modal.classList.toggle('hidden')
            document.body.classList.toggle('stop-scroll')
        })
    })   
    
    modalClose.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        document.body.classList.toggle('stop-scroll')
        document.querySelectorAll('.modal__input').forEach((el) => {
            el.value = '';
        })
    })
}



createCards()
mobMenu()
popUp()