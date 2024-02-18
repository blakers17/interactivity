console.log('hello world!')
const message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const list = document.querySelector('ul');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    list.appendChild(movie);
    // console.log(movie);
    movieTitle.addEventListener('click', crossOffMovie);
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    inputField.value = ''
}
const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = (event.target.parentNode.firstChild.textContent + ' movie deleted')
    revealMessage();
}
const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = (event.target.textContent + ' watched')
    } else {
        message.textContent = (event.target.textContent + ' lets watch it again')
    }
    revealMessage();
}
const revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
document.querySelector('form').addEventListener('submit', addMovie);