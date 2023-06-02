const navigation = document.createElement("div");
navigation.classList.add("navigation");
boxContainer.appendChild(navigation);

const logo = document.createElement("div");
logo.classList.add("logo");
navigation.appendChild(logo);

const nav = document.createElement("div");
nav.classList.add("nav");
navigation.appendChild(nav);

const logotype = document.createElement("img");
logotype.classList.add("logotype");
logo.appendChild(logotype);
logotype.src = "./image/logo.png";

const logistic = document.createElement("h2");
logistic.classList.add("logistic");
logo.appendChild(logistic);
logistic.textContent = "LOGISTIC POLSKAA";

const ul = `
    <ul>
        <li>
                <a href = "">
                    <p>Главная</p>
                </a>
        </li>
        <li>
                 <a href = "">
                    <p>Мрожня</p>
                 </a>
        </li>
        <li>
                 <a href = "">
                    <p>Хлодня</p>
                 </a>
        </li>
        <li>
                 <a href = "">
                    <p>Food</p>
                 </a>
        </li>
        <li>
                 <a href = "">
                    <p>ФОлия</p>
                 </a>
        </li>
        <li>
                 <a href = "">
                    <p>Мойка</p>
                 </a>
        </li>
        <li>
                 <a href = "">
                    <p>акциза</p>
                 </a>
        </li>
        
    </ul>
`;

nav.innerHTML = ul;
