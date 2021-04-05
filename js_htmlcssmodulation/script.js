const selectElem = document.querySelector('button');
const div = document.getElementById('div');
const inputText = document.getElementById('input1');
const inputElement = document.getElementById('input2');
const inputKey = document.getElementById('input3');
const inputValue = document.getElementById('input4');
const demo = document.getElementById('demo');
inputText.setAttribute('placeholder','enter text');
inputElement.setAttribute('placeholder','example:h1,h2,p');
inputKey.setAttribute('placeholder','example:font-size,color,margin');
inputValue.setAttribute('placeholder','example: 10px, white, #fff');

selectElem.addEventListener('click',()=>{
    div.setAttribute('element',`<${inputElement.value}>${inputText.value}</${inputElement.value}>`)
    demo.innerHTML=(div.getAttribute('element'))
    demo.setAttribute('style',`${inputKey.value}:${inputValue.value};`);

})
