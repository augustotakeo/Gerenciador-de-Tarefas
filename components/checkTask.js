const checkTask = (event) => {
    const button = event.target;
    const checkTask = button.parentElement;
    checkTask.classList.toggle('done');
}

const CheckButton = () => {
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerText = 'Concluir';
    checkButton.addEventListener( 'click', checkTask );
    return checkButton;
}

export default CheckButton;