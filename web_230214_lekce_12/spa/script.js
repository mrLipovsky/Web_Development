var currentPage = document.getElementById('page1');
var currentLink = document.getElementById('link1');

function displayPage(id) {

    const newLink = document.getElementById(`link${id}`);
    const newPage = document.getElementById(`page${id}`);

    newLink.classList.add('active');
    newPage.classList.add('active');

    currentPage.classList.remove('active');
    currentLink.classList.remove('active');

    currenPage = newPage;
    currenlink = newLink;

}