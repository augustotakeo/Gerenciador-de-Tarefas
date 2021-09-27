const deleteTask = (event) => {
    const button = event.target;
    const deleteButton = button.parentElement;
    deleteButton.remove();
}

const DeleteButton = () => {
    const deleteButton = document.createElement('button');

    deleteButton.innerText = 'Deletar';
    deleteButton.addEventListener( 'click', deleteTask );
    return deleteButton;
}

export default DeleteButton;