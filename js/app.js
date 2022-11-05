let body = document.querySelector("body");

let count = 0;

function myFun(event) {
  count++;

  if (count <= 60) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("circle");
    body.append(createDiv);

    createDiv.style.transition = "all .5s linear";

    createDiv.style.top = event.clientY + "px";
    createDiv.style.left = event.clientX + "px";

    createDiv.style.top = createDiv.offsetTop - 10 + "px";
    createDiv.style.left = createDiv.offsetLeft - 30 + "px";
    createDiv.style.visibility = "hidden";
  } else {
    count = 0;

    let circleAll = document.querySelectorAll(".circle");
    let circleArr = Array.from(circleAll);

    if (circleArr) {
      circleArr.map((el, index) => {
        el.remove();
      });
    }
  }
}

document.addEventListener("mousemove", myFun);
