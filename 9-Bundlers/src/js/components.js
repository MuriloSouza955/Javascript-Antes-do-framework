export function title(titlke){
    const element = document.createElement('h1');
    element.textContent = titlke;

    document.body.appendChild(element);
}