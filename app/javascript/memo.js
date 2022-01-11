function post(){
  const textArea = document.getElementById("text-area")
  textArea.addEventListener('change', (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/memos", true);
    XHR.responseType = "json";
    XHR.send(formData)
  });
};

window.addEventListener('load', post);