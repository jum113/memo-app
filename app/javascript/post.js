function post(){
  const textArea = document.getElementById("textarea")
  textArea.addEventListener('input', (e) => {
    console.log(e.target);
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/memos", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};



window.addEventListener('load', post);