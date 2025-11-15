//https://api.jikan.moe/v4/anime


const formCard = document.querySelector('#searchForm');
const results = document.querySelector('#results');

formCard.addEventListener('submit', async (e) => {
    e.preventDefault();
    const search = formCard.elements.query.value;
    getAnimeDetails(search);
});

const getAnimeDetails = async (search) => {

    try {
        const config = { params: {  q: search, limit: 20 } }
        const res = await axios.get(`https://api.jikan.moe/v4/anime`, config)
        renderImg (res.data.data);
      } catch (err) {
        console.log('Error', err);
     }
};

const renderImg = (data) => {
    
    results.innerHTML = ''; 

    for (let anime of data) {
        if (!anime.images || !anime.images.jpg || !anime.images.jpg.image_url) continue;

        const card = document.createElement('div');
        card.classList.add('anime-card');

        const img = document.createElement('img');
        img.src = anime.images.jpg.image_url;
        img.alt = anime.title;
        img.loading = 'lazy';
    
        const title = document.createElement('p');
        title.classList.add('anime-title');
        title.textContent = anime.title;
        
        card.appendChild(img);
        card.appendChild(title);
        results.appendChild(card);

     }
    };






