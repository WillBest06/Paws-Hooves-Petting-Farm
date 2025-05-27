const claimBTN = document.querySelectorAll('.claimBTN');
const claimItemModal = document.querySelector('dialog');
const closeClaimItemModal = document.querySelector('.close-modal');

claimBTN.forEach((button) => button.addEventListener('click', (e) => {
    claimItemModal.showModal();
    const lostItem = e.target.parentElement;
    const lostItemName = lostItem.querySelector('h4').textContent; // adds name of item to be claimed to form
    const formLostItem = claimItemModal.querySelector('#itemClaimed');
    formLostItem.value = lostItemName;
}));

closeClaimItemModal.addEventListener('click', () => claimItemModal.close());