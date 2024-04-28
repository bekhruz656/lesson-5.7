let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let container = document.getElementById('container');

let elements = data.map(number => {
    let div = document.createElement('div');
    div.textContent = number;

    if (number > 50) {
        div.style.backgroundColor = 'green';
    } else {
        div.style.backgroundColor = 'red';
    }

    return div;
});

elements.forEach(element => {
    container.appendChild(element);
});