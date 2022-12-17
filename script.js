
// task 1

task1();

function task1() {

  let input = document.querySelectorAll('#task1 input[name=inputNumber]');
  let btn = document.querySelector('#task1 button');
  let result = document.querySelector('#task1 input[name=result]');


  btn.addEventListener('click', resultBtn);

  function resultBtn() {
    let inputSum = 0;

    for (let i = 0; i < input.length; i++) {

      inputSum += +input[i].value;
    }
    result.value = inputSum;
  }

}

// task 2

task2();

function task2() {

  let input = document.querySelector('#task2 input[name=number]');

  input.addEventListener('blur', checkNumber);

  function checkNumber() {
    if (this.value >= 1 && this.value <= 100) {
      this.style.border = '2px solid green';
    } else {
      this.style.border = '2px solid red';
    }
  }

}

// task 3

task3();

function task3() {

  let radios = document.querySelectorAll('#task3 input');
  let result = document.querySelector('#task3 p span');

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', func);
  }

  function func() {
    result.innerHTML = this.value;
  }

}

// task 4

task4();

function task4() {

  let paragraph = document.querySelectorAll('#task4 p');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', show);
  }

  function show() {
    this.nextElementSibling.style.display = 'block';
    removeEventListener('click', show);
    this.addEventListener('click', hide);

  }

  function hide() {
    this.nextElementSibling.style.display = 'none';
    removeEventListener('click', hide);
    this.addEventListener('click', show);
  }
}


// task 5

task5();

function task5() {

  let cityArr = {
    'ua': ['Житомир', 'Калуш', 'Тисмениця', 'Київ', 'Івано-Франківськ'],
    'pl': ['Варшава', 'Краків', 'Вроцлав', 'Познань'],
    'usa': ['Вашиннтон', 'Бостон'],
  };

  let countriesSelect = document.querySelector('#task5 .country');
  countriesSelect.addEventListener('change', toCities);
  countriesSelect.addEventListener('change', toParagraph);

  let citiesSelect = document.querySelector('#task5 .cities');
  citiesSelect.addEventListener('change', toParagraph);

  function toCities() {
    citiesSelect.innerHTML = '';
    let selectedCountry = countriesSelect.value;
    for (let i = 0; i < cityArr[selectedCountry].length; i++) {
      let newOption = document.createElement('option');
      newOption.innerHTML = cityArr[selectedCountry][i];
      citiesSelect.appendChild(newOption);
    }
  }

  let paragraph = document.querySelector('#task5 p');
  function toParagraph() {
    paragraph.innerHTML = '';
    paragraph.innerHTML = countriesSelect.options[countriesSelect.selectedIndex].text + ','
    +citiesSelect.options[citiesSelect.selectedIndex].text;
  }
}
// task 6

task6();

function task6() {

  let num = document.querySelectorAll('#task6 .num');
  let btn = document.querySelector('#task6 button');
  let result = document.querySelector('#task6 .result');


  btn.addEventListener('click', resBtn);

  function resBtn() {
    let sum = 0;


    for (let i = 0; i < num.length; i++) {
      sum += +num[i].value;
    }

    result.innerHTML = sum;
  }

}


// task 7

task7();

function task7() {

  let input = document.querySelector('#task7 input[name=text]');

  input.addEventListener('blur', countLetter);

  function countLetter() {
    let num = 0;
    let arr = input.value.split(' ');
    for (let i = 0; i < arr.length; i++) {

      num++

    }

    let result = document.querySelector('#task7 .result span');
    result.innerHTML = num;

  }

}


// task 8

task8();

function task8() {

  let input = document.querySelector('#task8 .num');

  input.addEventListener('blur', count);

  function count() {
    let sum = 0;
    let str = input.value;
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
    }

    let result = document.querySelector('#task8 .result span');
    result.innerHTML = sum;

  }

}
// task 9

task9();
function task9() {

  let input = document.querySelector('#task9 input[name=anyText]');

  document.documentElement.addEventListener('mouseup', func);

  function func() {
    let content = window.getSelection().toString();
    input.value = content;
  }
}

// task 10

task10();

function task10() {

  let checkboxes = document.querySelectorAll('#task10 input');
  let result = document.querySelector('#task10 p span');
  let arr = [];

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', func);
  }

  function func() {
    if (this.checked) {
      arr.push(this.value);
      result.innerHTML = arr;
    }
  }
}

// task 11

task11();

function task11() {

  let input = document.querySelector('#task11 input[name=country]');
  let paragraph = document.querySelector('#task11 p');

  input.addEventListener('keypress', countriesList);

  function countriesList(event) {
    if (event.which === 13) {
      paragraph.innerHTML += input.value + ', ';
    }
  }
}

// task 12

// task 13

task13();

function task13() {


  let input = document.querySelector('#task13 .num');

  input.addEventListener('blur', count);

  function count() {
    let sum = 0;
    let str = input.value;
    let arr = str.split(',');
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    let average = sum / arr.length;
    let result = document.querySelector('#task13 .result span');
    result.innerHTML = average;

  

  }


}

// task 14

task14();

function task14() {

  let numbers = document.querySelectorAll('#task14 p');
  let btn = document.querySelector('#task14 button');

  btn.addEventListener('click', compare);

  function compare() {
    let newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      newNumbers[i] = numbers[i].innerHTML;

    }
    let sortNewNumbers = newNumbers.sort(mySort);
    let number = sortNewNumbers[sortNewNumbers.length - 1];

    for (let i = 0; i < sortNewNumbers.length; i++) {
      if (numbers[i].innerHTML === number) {
        numbers[i] = numbers[i].style.border = "thick solid red";
      }

    }

  }
  function mySort(a, b) {
    return a - b;
  }
}

// task 15

task15();

function task15() {

  let checkbox = document.querySelector('#task15 input[name=check]');
  let input = document.querySelector('#task15 input[name=text]');


  checkbox.addEventListener('change', func);

  function func() {
    if (!checkbox.checked) {
      input.style.display = 'none';
    }
    else {
      input.style.display = 'inline';
    }
  }

}

// task 16

task16();

function task16() {

  let div = document.querySelectorAll('#task16 div');
  let btn = document.querySelector('#task16 button');

  btn.addEventListener('click', cut);

  function cut() {

    for (let i = 0; i < div.length; i++) {
      div[i].innerHTML = div[i].innerHTML.slice(0, 10) + '...';
    }

  }

}

// task 17



// task 18

task18();

function task18() {

  let input = document.querySelector('#task18 input[name=fullName]');
  let name = document.querySelectorAll('#task18 input[name=name]');

  input.addEventListener('blur', splitting);

  function splitting() {

    let arr = input.value.split(' ');

    for (let i = 0, j = 0; i < arr.length, j < name.length; i++, j++) {
      name[j].value = arr[i];
    }

  }

}

// task 19

task19();

function task19() {

  let paragraph = document.querySelectorAll('#task19 p');
  let input = document.querySelector('#task19 input[name=result]');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', func);
  }

  let count = 0;

  function func() {
    count++;
    input.value = count;
  }

}

// task 20

task20();

function task20() {

  let checkbox = document.querySelectorAll('#task20 input');

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', func);

    if (!checkbox[i].checked) {
      checkbox[i].nextElementSibling.style.display = 'none';
    }

  }

  function func() {

    if (!this.checked) {
      this.nextElementSibling.style.display = 'none';
    } else {
      this.nextElementSibling.style.display = 'inline';
    }
  }

}

// task 21

task21();

function task21() {

  let td = document.querySelectorAll('#task21 td');
  let btn = document.querySelector('#task21 button');

  btn.addEventListener('click', func);

  let max = '';
  let n = 0;

  function func() {
    for (let i = 0; i < td.length; i++) {
      if (+td[i].innerHTML > max) {
        max = +td[i].innerHTML;
        n = i;
      }
    }
    td[n].style.backgroundColor = 'red';
  }

}

// task 22



// task 23



// task 24

task24();

function task24() {

  let paragraph = document.querySelectorAll('#task24 p');
  let btn = document.querySelector('#task24 button');
  let input = document.querySelector('#task24 input[name=numbers]');

  btn.addEventListener('click', rase);

  function rase() {

    let arr = [];

    for (let i = 0; i < paragraph.length; i++) {
      arr[i] = paragraph[i].innerHTML;
    }

    input.value = arr.sort(sortArr).join(',');
  }

  function sortArr(a, b) {
    return a - b;
  }

}

// task 25

task25();

function task25() {


  let paragraph = document.querySelector('#task25 p');
  let checkboxes = document.querySelectorAll('#task25 input');

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', changeP);
  }

  function changeP() {
    if (this.checked) {
      paragraph.style.cssText += this.value;
    }
    else {
      paragraph.style.cssText = 'none';
    }
  }
}

// task 26

task26();

function task26() {

  let tr = document.querySelectorAll('#task26 tr');
  let btn = document.querySelector('#task26 button');

  btn.addEventListener('click', func);

  function func() {
    let arr = [];

    for (let i = 0; i < tr.length - 1; i++) {
      for (let j = 0; j < tr[i].children.length; j++) {
        if (arr[j] === undefined) arr[j] = 0;
        arr[j] += Number(tr[i].children[j].innerHTML);
      }
    }

    for (let k = 0; k < tr[tr.length - 1].children.length; k++) {
      tr[tr.length - 1].children[k].innerHTML = arr[k];
    }
  }
}

// task 27

// task 28

task28();

function task28() {
  let td = document.querySelectorAll('#task28 td');
  let btnGo = document.querySelector('#task28 .go');
  let btnClear = document.querySelector('#task28 .clear');
  let result = document.querySelector('#task28 p span');

  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function () {
      this.classList.add('red');
    })
  }

  btnGo.addEventListener('click', function () {
    let active = document.querySelectorAll('#task28 .red');
    let sum = 0;
    for (let i = 0; i < active.length; i++) {
      sum += Number(active[i].innerHTML);
    }
    result.innerHTML = sum;
  });

  btnClear.addEventListener('click', function () {
    let active = document.querySelectorAll('#task28 .red');
    for (let i = 0; i < active.length; i++) {
      active[i].classList = [];
    }
  })

}

// task 29

task29();

function task29() {
  let td = document.querySelectorAll('#task29 td');
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function () {
      let newValue = this.innerHTML;
      this.style.display = 'none';

      let newInput = document.createElement('input');
      newInput.value = newValue;

      newInput.addEventListener('change', function () {
        this.previousElementSibling.innerHTML = this.value;
        this.previousElementSibling.style.display = '';
        this.parentElement.removeChild(this);
      });
      this.parentElement.insertBefore(newInput, this.nextSibling);
    });
  }

}

// task 30

task30();

function task30() {
  var country = document.querySelectorAll('#task30 p');
  for(var i = 0; i < country.length; i++) {
    country[i].addEventListener('click', show);
  }
  
  function show() {
    this.nextElementSibling.style.display = 'block';
    this.removeEventListener('click', show);
    this.addEventListener('click', hide);
  }
  
  function hide(){
    this.nextElementSibling.style.display = 'none';
    this.removeEventListener('click', hide);
    this.addEventListener('click', show);
  }

}



