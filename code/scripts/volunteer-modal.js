const openModal = document.querySelector('.open-volunteer-modal');
const volunteerModal = document.querySelector('dialog');
const closeVolunteerModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => volunteerModal.showModal())
closeVolunteerModal.addEventListener('click', () => volunteerModal.close());