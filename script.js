
function prikaziSekcija(sekcijaId, element) {
    let sekcii = document.querySelectorAll('.page-section');
    sekcii.forEach(s => s.classList.remove('active'));

    let dugminja = document.querySelectorAll('.nav-btn');
    dugminja.forEach(d => d.classList.remove('active'));

    let targetSection = document.getElementById(sekcijaId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    if (element) {
        element.classList.add('active');
    }

    if (sekcijaId === 'galerija') {
        prikazislikitenagrad();
    }
}


function zemiNajava(event) {
    event.preventDefault();
    let user = document.getElementById("usernameInput").value;
    document.getElementById("najavaStatus").innerHTML = "Успешно се најавивте како: " + user;
}


function presmetajTrosoci() {
    let denovi = document.getElementById("denovi").value;
    let budzet = document.getElementById("budzet").value;
    let rezultat = document.getElementById("rezultatTrosoci");

    if (denovi === "" || budzet === "" || denovi <= 0 || budzet <= 0) {
        rezultat.innerHTML = "Ве молиме внесете валидни броеви!";
        return;
    }

    let vkupno = denovi * budzet;
    rezultat.innerHTML = "Вкупен пропишан трошок: " + vkupno + " €";
}


function dodajDestinacija() {
    let ime = document.getElementById("novoIme").value;
    let lista = document.getElementById("listaDestinacii");

    if (ime.trim() === "") {
        alert("Внесете име на градот!");
        return;
    }

    let novLi = document.createElement("li");
    novLi.innerHTML = ime + ' <button class="delete-btn" onclick="izbrisiElement(this)">Избриши</button>';
    lista.appendChild(novLi);
    document.getElementById("novoIme").value = "";
}


function izbrisiElement(kopce) {
    kopce.parentElement.remove();
}


function prikazislikitenagrad() {
    let izborElement = document.getElementById("izborGrad");
    if (!izborElement) return;

    let izbranGrad = izborElement.value;
    let naslovGrad = document.getElementById("naslovGrad");
    let slikiContainer = document.getElementById("slikiContainer");
    let urls = [];

    if (izbranGrad === 'Pariz') {
        naslovGrad.innerText = "Париз - Галерија слики";
        urls = [
            "https://th.bing.com/th/id/R.73caeb4c8cdb7a3065d959b256a8bd85?rik=4QXcvHXBp4CTzw&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/R.8de31c88092e0c06ccdccd8470513a22?rik=%2brbltvwuvtw2sw&pid=ImgRaw&r=0",
            "https://a.cdn-hotels.com/gdcs/production148/d1856/a64f32eb-2f13-47d8-832f-ac6262743f8c.jpg",
            "https://www.fodors.com/wp-content/uploads/2018/10/9-The-Louvre.jpg",
            "https://i.natgeofe.com/n/75fbafd8-41d2-48ee-81d0-a200d04dd791/93247.jpg",
            "https://tse2.mm.bing.net/th/id/OIP.JN7mY8_mh8_yIKjXmMNV5QHaGB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        ];
    } else if (izbranGrad === 'Rim') {
        naslovGrad.innerText = "Рим - Галерија слики";
        urls = [
            "https://cdn.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
            "https://cdn.britannica.com/36/194936-050-495739BE/Trevi-Fountain-Rome.jpg",
            "https://th.bing.com/th/id/R.cc6988a37943938e519da487c0eda1a3?rik=whsHPGfYXmJx9A&pid=ImgRaw&r=0",
            "https://www.fodors.com/wp-content/uploads/2018/10/4_UltimateRome_PiazzaNavona.jpg",
            "https://www.tripsavvy.com/thmb/Nl1VtDv7MvS5US0daymR9FtCYfE=/3865x2576/filters:fill(auto,1)/sunrise--roman-forum--rome--italy-582021521-59bfc26daad52b00119c01cd.jpg",
            "https://www.enroma.com/wp-content/uploads/2020/02/roma-plaza-de-espana-escaleras-1024x683.jpg"
        ];
    } else if (izbranGrad === 'Madrid') {
        naslovGrad.innerText = "Мадрид - Галерија слики";
        urls = [
            "https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/master/pass/madrid-travel-guide.jpg",
            "https://spainvoyages.com/wp-content/uploads/2024/02/Foto-2.Estadio-Santiago-Bernabeu-e1709019972522.jpeg",
            "https://a.cdn-hotels.com/gdcs/production111/d1775/db972a33-a368-4954-a770-4d913571275c.jpg",
            "https://theplanetd.com/images/madrid-1558x1067.jpg",
            "https://i.pinimg.com/originals/5c/94/c4/5c94c43d61abf279973d73446d7323ef.jpg",
            "https://overmadrid.nl/wp-content/uploads/2019/10/bezienswaardigheden-madrid-puerta-del-sol-03.jpg"
        ];
    } else if (izbranGrad === 'Viena') {
        naslovGrad.innerText = "Виена - Галерија слики";
        urls = [
            "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500_1280.jpg",
            "https://media.istockphoto.com/id/1885400963/photo/lower-belvedere-palace-and-gardens-in-vienna-austria.jpg?s=612x612&w=0&k=20&c=sLgSz1lyJqyt6z2p6CzQrCaUQJXgggZxwtrYaB_OuOg=",
            "https://th.bing.com/th/id/R.baf2c0c8e5912355efc77ce70ef4c813?rik=CPm88%2biCqB0JHA&pid=ImgRaw&r=0",
            "https://global-golf.de/wp-content/uploads/2025/02/vienna_golf_club_facility.jpg",
            "https://www.guias.travel/wp-content/uploads/2019/10/schonbrunn-palace-1735571_1920-pixabay.jpg",
            "https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1683668141/blog/Discover%20Vienna's%20Glorious%20Ringstrasse:%20A%20Tour%20Through%20Time/4.jpg"
        ];
    } else if (izbranGrad === 'Istanbuls') {
        naslovGrad.innerText = "Истанбул - Галерија слики";
        urls = [
            "https://wallpapercave.com/wp/wp1813765.jpg",
            "https://img.freepik.com/premium-photo/ortakoy-istanbul-turkey-ortakoy-mosque-bosphorus-bridge-15th-july-martyrs-bridge-sunrise-view_846347-11.jpg",
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/63/17.jpg",
            "https://wallpapers.com/images/hd/istanbul-s-taksim-square-3utwzz6rgbuubl33.jpg",
            "https://istanbulepass.com/uploads/images/galata-tower-entrance-discounted--96941.webp",
            "https://www.touristsecrets.com/wp-content/uploads/2019/08/Dolmabahce-Palace-istanbul.jpg"
        ];
    } else if (izbranGrad === 'Amsterdam') {
        naslovGrad.innerText = "Амстердам - Галерија слики";
        urls = [
            "https://th.bing.com/th/id/R.07c7200edf0a4d3875577a603bd68036?rik=9v%2fgY9lSmE9HwA&riu=http%3a%2f%2fwww.netherlands-tourism.com%2fwp-content%2fuploads%2f2013%2f11%2fAmsterdam.jpg&ehk=YB1QDSyWHtc24XpsBtyy6%2fO4LSNpPqjef8D5Mbr1k%2bM%3d&risl=&pid=ImgRaw&r=0",
            "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canal-cruises-Amsterdam-scaled.jpg",
            "https://di262mgurvkjm.cloudfront.net/1a4e9e88-8a34-4492-9785-ba2ec9653481/Amsterdam_Vondelpark_Koningspark_xgaplus.jpg",
            "https://www.amsterdamtips.com/news/wp-content/uploads/2021/01/anne-frank-house-exhibition.jpg",
            "https://media1.thrillophilia.com/filestore/n9itxlhg9rzoe7j9c8jgtrd5pwyc_Van%20Gogh%20Museum.jpg",
            "https://discoveringtrips.com/wp-content/uploads/2024/02/Snapinsta.app_154910926_263483388625313_6993057873501774639_n_1080-1024x613.webp"
        ];
    }

    
    slikiContainer.innerHTML = "";
    urls.forEach((url, index) => {
        let card = document.createElement("div");
        card.className = "image-item-card";
        card.innerHTML = `
            <img src="${url}" alt="Слика ${index + 1}">
            <div class="reactions">
                <button onclick="like(this)">👍 Like (<span class="like-count">12</span>)</button>
                <button onclick="dislike(this)">👎 Dislike (<span class="dislike-count">1</span>)</button>
            </div>
            <div class="comments-section" style="margin-top: 5px;">
                <ul class="komentari-lista" style="list-style: none; padding: 0; font-size: 14px; margin-bottom: 5px;">
                    <li>Прекрасно место!</li>
                </ul>
                <div style="display: flex; gap: 5px;">
                    <input type="text" class="komentar-input" placeholder="Коментар..." style="padding: 6px; font-size: 14px; flex: 1;">
                    <button onclick="dodajKomentar(this)" style="padding: 6px 10px; font-size: 14px;">Испрати</button>
                </div>
            </div>
        `;
        slikiContainer.appendChild(card);
    });
}


window.onload = function() {
    prikazislikitenagrad();
};


function like(btn) {
    let span = btn.querySelector(".like-count");
    span.innerHTML = parseInt(span.innerHTML) + 1;
}

function dislike(btn) {
    let span = btn.querySelector(".dislike-count");
    span.innerHTML = parseInt(span.innerHTML) + 1;
}


function dodajKomentar(btn) {
    let input = btn.previousElementSibling;
    let tekst = input.value;
    if (tekst.trim() === "") return;

    let lista = btn.parentElement.parentElement.querySelector(".komentari-lista");
    let novLi = document.createElement("li");
    novLi.innerHTML = tekst;
    lista.appendChild(novLi);
    input.value = "";
}


function prikaziPoruka(event) {
    event.preventDefault();
    document.getElementById("porukaUspeshno").innerHTML = "Ви благодариме! Вашата анкета е успешно испратена.";
}

function toggleCard(cardElement) {
    cardElement.classList.toggle('selected');
}