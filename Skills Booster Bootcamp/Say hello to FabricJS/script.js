const canvas = new fabric.Canvas('c')

// Shapes Buttons
const rectButton = document.querySelector('#rect')
rectButton.addEventListener('click', () => {
    const rect = new fabric.Rect({
        top: 25,
        left: 25,
        height: 100,
        width: 100,
        fill: 'red',
    })
    canvas.add(rect)
})

const cirButton = document.querySelector('#cir')

cirButton.addEventListener('click', () => {
    const cir = new fabric.Circle({
        top: 25,
        left: 25,
        radius: 50,
        fill: 'blue'
    })
    canvas.add(cir)
})

const triButton = document.querySelector('#tri')
triButton.addEventListener('click', () => {
    const tri = new fabric.Triangle({
        top: 25,
        left: 25,
        fill: 'yellow'
    })
    canvas.add(tri)
})


// Actions Buttons
const deleteButton = document.querySelector('#del')
document.addEventListener('keydown', (eve) => {
    if (eve.key === 'Delete') {
        canvas.remove(canvas.getActiveObject())
    }
})

deleteButton.addEventListener('click', () => {
    canvas.remove(canvas.getActiveObject())
})


const exportSVG = document.querySelector('#exp')


// ------------------>
exportSVG.addEventListener("click", () => {
    const SVG = canvas.toSVG()
    const anchor = document.createElement('a')
    anchor.href = 'data:attachment/text,' + encodeURI(SVG.toString());
    anchor.download = 'untitled.svg'
    anchor.click()
});

// Colors
const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')
const black = document.querySelector('#black')
const white = document.querySelector('#white')


red.addEventListener('click', () => {
    try {
        canvas.getActiveObject().set('fill', 'red')
        canvas.renderAll()
    } catch (err) {
    }
})
green.addEventListener('click', () => {
    try {
        canvas.getActiveObject().set('fill', 'green')
        canvas.renderAll()
    } catch (err) {
    }
})
blue.addEventListener('click', () => {
    try {


        canvas.getActiveObject().set('fill', 'blue')
        canvas.renderAll()
    } catch (err) {
    }
})
yellow.addEventListener('click', () => {
    try {

        canvas.getActiveObject().set('fill', 'yellow')
        canvas.renderAll()
    } catch (err) {
    }
})
black.addEventListener('click', () => {
    try {
        canvas.getActiveObject().set('fill', 'black')
        canvas.renderAll()
    } catch (err) {
    }
})
white.addEventListener('click', () => {
    try {
        canvas.getActiveObject().set('fill', 'white')
        canvas.renderAll()
    } catch (err) {
    }
})

