let nav = document.getElementById("nav"); //Gets the id that i'll add it too, make sure they match


//Creating my html as a variable
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

//I assign the dom i created in htmlNav to my variable nav which is connected to nav. This adds the html to the dom
nav.innerHTML = htmlNav;
