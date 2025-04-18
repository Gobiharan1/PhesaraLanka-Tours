async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            console.error(`Failed to load component: ${file} Status: ${response.status}`);
            return; // Exit if fetch fails
        }
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(`Error loading component ${file}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent('navbar', 'Components/NavBar.html');
    loadComponent('footer', 'Components/footer.html');
    loadComponent('playground', 'playground.html');
});
