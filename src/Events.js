export function createButton() {
   let button = document.createElement('button');
   button.textContent = 'Удали меня';
   document.body.append(button);
   const buttonToDelete = document.getElementsByTagName('button')[0];
   buttonToDelete.addEventListener(
      'click',
      () => buttonToDelete.parentElement.removeChild(buttonToDelete),
      true,
   );
}
export function createArrList(arr) {
   let newUl = document.createElement('ul');
    document.body.append(newUl);
    let list = document.getElementsByTagName('ul')[0];

    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = arr[i];
        list.append(newLi);
    }
    for (let i = 0; i < arr.length; i++) {
        let el = document.getElementsByTagName('li')[i];
        el.addEventListener('mouseover', function () {
            let index = this.textContent;
            this.setAttribute('title', index);
        });
    }
}

export function createLink() {
   let newLink = document.createElement('a');
   newLink.textContent = 'tensor';
   newLink.setAttribute('href', 'https://tensor.ru/');
   document.body.append(newLink);
   let refLink = document.getElementsByTagName('a')[0];
   refLink.addEventListener(
      'click',
      () => (refLink.textContent = 'tensor https://tensor.ru/'),
   );
}

export function createList() {
   let newUl = document.createElement('ul');
   let newLi = document.createElement('li');
   newLi.textContent = 'Пункт';
   let newButton = document.createElement('button');
   newButton.textContent = 'Добавить пункт';
   newUl.append(newLi);
   document.body.append(newUl);
   document.body.append(newButton);
   let knopka = document.getElementsByTagName('button')[0];
   document.querySelector('ul').addEventListener('click', function (event) {
      if (event.target && event.target.nodeName === 'LI') {
         event.target.textContent = 'Пункт!';
      }
   });
   knopka.addEventListener('click', function () {
      let spisok = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.textContent = 'Пункт';
      spisok.append(li);
   });
}
