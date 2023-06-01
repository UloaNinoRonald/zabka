const navigation = document.createElement("div");

navigation.classList.add("navigation");

boxContainer.appendChild(navigation);

const logo = document.createElement("div");

logo.classList.add("logo");

navigation.appendChild(logo);

const nav = document.createElement("div");

nav.classList.add("nav");

navigation.appendChild(nav);

const ul = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
    </ul>
`;

nav.innerHTML = ul;
