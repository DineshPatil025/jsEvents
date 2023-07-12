const cl = console.log;

const selectColor = document.getElementById('selectColor')
const allDivs = [...document.querySelectorAll('.all')];

const onChangeColor = (eve => {
    const selectedColor = eve.target.value;
    cl(selectedColor)

    allDivs.forEach(div => {
        div.classList.add('d-none')
    });

    const showDivs = [...document.getElementsByClassName(selectedColor)]
    showDivs.forEach(div => {
        div.classList.remove('d-none')
    })
})


selectColor.addEventListener("change", onChangeColor)



// js practice on arrayjs