let nav = document.getElementById("nav");

let htmlNav = `
        <ul>
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="twindex.html">About</a>
            </li>
            <li>Contact</li>
        </ul>
    `

nav.insertAdjacentHTML("afterbegin", htmlNav);