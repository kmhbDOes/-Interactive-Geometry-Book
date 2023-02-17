let serial = 0;
document.getElementById("btn-triangle").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('triangle-object').innerText;
    const triangleBase = getInputFieldValue('triangle-base');
    const triangleHeight = getInputFieldValue('triangle-height');
    getTextValueById('triangle-display');

    const triangleResult = 0.5 * triangleBase * triangleHeight;
    console.log(triangleResult);
    displayTableData(objectName, triangleResult)
})

document.getElementById("btn-rectangle").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('rectangle-object').innerText;
    const rectangleWidth = getInputFieldValue('rectangle-width');
    const rectangleLength = getInputFieldValue('rectangle-length');
    getTextValueById('rectangle-display');

    const rectangleResult = rectangleWidth * rectangleLength;
    console.log(rectangleResult);
    displayTableData(objectName, rectangleResult)
})

