function create(){
  const submit = document.getElementById("submit");
  submit.addEventListener('click', () => {
    const exampleModal = document.getElementById("exampleModal");
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    exampleModal.style.display = 'none';
  });
};

window.addEventListener('load', create);