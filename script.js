const textInput = document.querySelector('.textarea');
const checkBtn = document.querySelector('.check-btn');

checkBtn.addEventListener('click', countVowel);

function countVowel(e){
    e.preventDefault();

    const splitString = textInput.value.toString().split("");
    const vowels = [];
    
    splitString.forEach(e => {
        if ((e == 'a')||(e == 'e')||(e == 'i')||(e == 'o')||(e == 'u')){
            vowels.push(e);
        }
        else return;
    });

    alert(`There are ${vowels.length} vowels in this text.`);
}