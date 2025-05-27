const claimBTN = document.querySelectorAll('.claimBTN');
const modal = document.querySelector('dialog');
const closeModalBTN = document.querySelector('.closeBTN');

claimBTN.forEach((button) => button.addEventListener('click', (e) => {
    modal.showModal();
    const lostItem = e.target.parentElement;
    const lostItemName = lostItem.querySelector('h4').textContent;
    const formLostItem = modal.querySelector('#itemClaimed');
    formLostItem.value = lostItemName;
}));
closeModalBTN.addEventListener('click', () => modal.close());