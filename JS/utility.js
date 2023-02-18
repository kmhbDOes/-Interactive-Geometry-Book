function getInputFieldValue(elementID) {
    const element = document.getElementById(elementID).value;
    const elementConverted = parseFloat(element);
    return elementConverted;
}

function getTextValueById(inputId) {
    const inputDisplayString = document.getElementById(inputId).innerText;
    inputDisplay = parseFloat(inputDisplayString);
    return inputDisplay;
}

function displayTableData(valueOne, valueTwo) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
       
    <td>${serial}. ${valueOne}</td>
    <td>${valueTwo}<span>cm<sup>2</sup></span></td>
     <td>
    <button class="btn btn-sm bg-[#1090D8]">Square</button>
    </td>

  `;
    container.appendChild(tr);
    // document.getElementById("total-product").innerText = serial;
}

function validation(inputOne, inputTwo) {
    if (isNaN(inputOne) || isNaN(inputTwo) || inputOne < 1 || inputTwo < 1) {
        alert('Enter Value')
        return;
    }
}