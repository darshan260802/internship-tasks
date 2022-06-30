let step = 1;
const nextStep = () => {
    if(step > 3) return;
    let bar = document.querySelector(`#prog${step}`);
    let text = document.querySelector(`#text${step+1}`);
    bar.style.width = '100%';
    text.style.color = '#3D155F'
    text.style.backgroundColor = '#DF678C'
    text.parentElement.children[1].style.opacity = '1';
    step++;
}
const prevStep = () => {
    if(step < 2) return;
    let bar = document.querySelector(`#prog${step-1}`);
    let text = document.querySelector(`#text${step}`);
    text.parentElement.children[1].style.opacity = '0';
    text.style.backgroundColor = '#3D155F'
    text.style.color = '#DF678C'
    bar.style.width = '0%';
    step--;
    console.log(step);
}