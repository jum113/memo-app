function folder(){
  folderBtn = document.getElementById("folder-btn");
  folderBtn.addEventListener('click', () => {
    folderForm = document.querySelector(".folder-form");
    if (folderForm.getAttribute("style") == "visibility: hidden;") {
      folderForm.style.visibility = "visible"
    } else {
      folderForm.style.visibility = "hidden"
    };
  });
};

window.addEventListener('load', folder)