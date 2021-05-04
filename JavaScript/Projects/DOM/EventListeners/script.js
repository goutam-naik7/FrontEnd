const red = document.querySelector('.red')
const cyan = document.querySelector('.cyan')
const orange = document.querySelector('.orange')
const violet = document.querySelector('.violet')
const pink = document.querySelector('.pink')

const center = document.querySelector('.center')


//console.log(window.getComputedStyle(red).backgroundColor); // grab the styled color 



// addEventListener("action", function)

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}


//var color = getBGColor(pink);

//pink.addEventListener("mouseenter", () => {
//    center.style.background = color;
//});


const colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    }); // dom event listner 

}


colorChanger(red, getBGColor(red))
colorChanger(cyan, getBGColor(cyan))
colorChanger(orange, getBGColor(orange))
colorChanger(violet, getBGColor(violet))
colorChanger(pink, getBGColor(pink))


