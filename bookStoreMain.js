var data =
    fetch("https://api.myjson.com/bins/zyv02")
    .then(function (response) {
        //console.log(2);
        //console.log(response);
        return response.json();
    })
    .then(function (data) {
        dataImg(data.books, "books");
        document.addEventListener("change", function () {
            searchElelment(data.books, "books");
        });
    })
    .catch(function (error) {
        console.log(error);
    });

function dataImg(book, id) {
    var len = book.length;
    console.log(len);
    let rowEl = document.getElementById(id);
    for (var i = 0; i < len; i++) {
        displayImg(book, id, i, rowEl);
    };
}

function searchElelment(book, id) {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    console.log(filter);
    let rowEl = document.getElementById(id);
    rowEl.innerHTML = "";
    for (i = 0; i < book.length; i++) {
        if (book[i].title.toUpperCase().indexOf(filter) > -1) {
            console.log(book[i]);
            displayImg(book, id, i, rowEl);
        }
    }
}

function displayImg(book, id, i, rowEl) {

    let columnEl = document.createElement("div");
    columnEl.className = "col-xs-1 col-sm-3"
    let flipCard = document.createElement("div");
    flipCard.className = 'flip-card2';
    let flipCardInner = document.createElement("div");
    flipCardInner.className = "flip-card-inner2";
    let flipCardFront = document.createElement("div");
    flipCardFront.className = "flip-card-front2";
    let bookImg = document.createElement('img');
    bookImg.width = 100;
    bookImg.src = book[i].cover;
    flipCardFront.appendChild(bookImg);
    let flipCardBack = document.createElement("div");
    flipCardBack.className = "flip-card-back2";
    flipCardBack.innerHTML = book[i].title;
    let flipCardPara = document.createElement("p");
    flipCardPara.innerHTML = 'Click button for details';
    flipCardBack.appendChild(flipCardPara);
    let ButtonElement = document.createElement("button");
    ButtonElement.innerHTML = 'More';
    ButtonElement.className = "btn btn-info btn-lg";
    ButtonElement.setAttribute("data-toggle", "modal");
    ButtonElement.setAttribute("data-target", "#myModal" + i);
    ButtonElement.setAttribute("id", i);
    flipCardBack.appendChild(ButtonElement);
    let modalElement = document.createElement("div");
    //modalElement.width = 200;
    modalElement.className = "modal";
    modalElement.setAttribute("id", "myModal" + i);
    modalElement.setAttribute("role", "dialog");
    columnEl.appendChild(modalElement);
    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalElement.appendChild(modalContent);
    let closeButton = document.createElement("button");
    closeButton.className = "close";
    closeButton.setAttribute("dismiss", "modal");
    closeButton.innerHTML = "&times";
    modalElement.appendChild(closeButton);
    let bookImg1 = document.createElement('img');
    bookImg1.width = 200;
    bookImg1.id = "imageModal" + i;
    bookImg1.src = book[i].detail;
    modalContent.appendChild(bookImg1);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    columnEl.appendChild(flipCard);
    rowEl.appendChild(columnEl);
}
