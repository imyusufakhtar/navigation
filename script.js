// Create the navigation menu as a string
const navMenu = `
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
`;

// Add the navigation menu to the header
document.getElementById('header-nav').innerHTML = navMenu;

// Add the same navigation menu to the side nav
document.getElementById('side-nav').innerHTML = navMenu;

// Add event listener to toggle the side nav when the button is clicked
document.getElementById('toggle-btn').onclick = function() {
    let sideNav = document.getElementById('side-nav');
    if (sideNav.classList.contains('active')) {
        sideNav.classList.remove('active'); // Hide side nav
    } else {
        sideNav.classList.add('active'); // Show side nav
    }
};
