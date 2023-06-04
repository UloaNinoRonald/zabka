const contact = document.createElement("div");
contact.classList.add("contact");
boxContainer.appendChild(contact);

const telefon = document.createElement("div");
telefon.classList.add("top");
contact.appendChild(telefon);

const social = document.createElement("div");
social.classList.add("center");
contact.appendChild(social);

const loc = document.createElement("div");
loc.classList.add("loc");
contact.appendChild(loc);

const kar = document.createElement("iframe");
kar.classList.add("kar");
loc.appendChild(kar);
kar.src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.6014057464436!2d18.605062223102138!3d54.240655589206646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd708bfb30791d%3A0x8335b05cf0df302b!2sCentrum%20Logistyczne%20%C5%BBabka%20Polska%20B%C4%99dzieszyn%20CLGD!5e0!3m2!1spl!2spl!4v1685877362352!5m2!1spl!2spl";

const leftLi = `
    <ul>
        <li>
               mail:KAKAJULIJA@gmail.com
        </li>
        <li>
               Адрес склада:102, Będzieszyn.
        </li>
        <li>
                Адрес фирмы:102, Пшулки ул.спортова д.25.
        </li>
        <li>
                 ещё что то напишем 
        </li>
        <li>
                 ещё что то напишем 
        </li>
        <li>
                <a href = "">
                  Polska: +48773312312314
                 </a>
        </li>
        <li>
                 <a href = "">
                   Рус: +48773129545534
                 </a>
        </li>

    </ul>
`;
telefon.innerHTML = leftLi;

const socialNetwork = `
 <a href=""><i class="fa-brands fa-viber"></i></a>
 <a href=""><i class="fa-brands fa-facebook"></i></a>
 <a href=""><i class="fa-brands fa-instagram"></i></a>
 <a href=""><i class="fa-brands fa-telegram"></i></a>
 <a href=""><i class="fa-sharp fa-solid fa-phone"></i></a>
`;
social.innerHTML = socialNetwork;
