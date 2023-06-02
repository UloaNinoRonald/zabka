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
        <li><a href = ""><p>fvdf1</p></a></li>
        <li><a href = ""><p>2dfg<p></a></li>
        <li><a href = ""><p>3fgv<p></a></li>
        <li><a href = ""><p>4ergerg<p></a></li>
        <li><a href = ""><p>5cergsf<p></a></li>
        <li><a href = ""><p>6srfg<p></a></li>
    </ul>
`;

nav.innerHTML = ul;
