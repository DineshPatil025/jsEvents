let cl = console.log;

let accodHead = [...document.querySelectorAll(".accodHead")]



const onHeadClick = (eve) => {

    let activeCSSClass = eve.target.className;



    accodHead.forEach(eve => {
        eve.classList.remove('activ')
    })
    if (activeCSSClass.includes('activ')) {
        eve.target.classList.remove('activ')
    } else {
        eve.target.classList.add('activ')

    }
}

accodHead.forEach(accodHeads => {

    accodHeads.addEventListener('click', onHeadClick)
})



