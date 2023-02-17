let serial = 0;

// Triangle
document.getElementById("btn-triangle").addEventListener('click', function () {
    serial += 1;

    const objectName = document.getElementById('triangle-object').innerText;
    const triangleBase = getInputFieldValue('triangle-base');
    const triangleHeight = getInputFieldValue('triangle-height');

    if (isNaN(triangleBase) || isNaN(triangleHeight) || triangleBase < 1 || triangleHeight < 1) {
        alert('Enter Value')
        return;
    }

    getTextValueById('triangle-display');

    const triangleResult = 0.5 * triangleBase * triangleHeight;

    displayTableData(objectName, triangleResult)

})

// Rectangle
document.getElementById("btn-rectangle").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('rectangle-object').innerText;
    const rectangleWidth = getInputFieldValue('rectangle-width');
    const rectangleLength = getInputFieldValue('rectangle-length');

    if (isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth < 1 || rectangleLength < 1) {
        alert('Enter Value')
        return;
    }

    getTextValueById('rectangle-display');

    const rectangleResult = rectangleWidth * rectangleLength;
    displayTableData(objectName, rectangleResult)
})

// Parallelogram 
document.getElementById("btn-parallelogram").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('parallelogram-object').innerText;
    const parallelogramBase = getInputFieldValue('parallelogram-base');
    const parallelogramHeight = getInputFieldValue('parallelogram-height');

    if (isNaN(parallelogramBase) || isNaN(parallelogramHeight) || parallelogramBase < 1 || parallelogramHeight < 1) {
        alert('Enter Value')
        return;
    }

    getTextValueById('parallelogram-display');

    const parallelogramResult = parallelogramBase * parallelogramHeight;
    displayTableData(objectName, parallelogramResult)
})

// Rhombus
document.getElementById("btn-rhombus").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('rhombus-object').innerText;
    const rhombusDiagonalOne = getInputFieldValue('rhombus-base');
    const rhombusDiagonalTwo = getInputFieldValue('rhombus-height');

    if (isNaN(rhombusDiagonalOne) || isNaN(rhombusDiagonalTwo) || rhombusDiagonalOne < 1 || rhombusDiagonalTwo < 1) {
        alert('Enter Value')
        return;
    }

    getTextValueById('rhombus-display');

    const rhombusResult = 0.5 * rhombusDiagonalOne * rhombusDiagonalTwo;
    displayTableData(objectName, rhombusResult)
})

