function getInputFieldValue(elementID) {
    const element = document.getElementById(elementID).value;
    const elementConverted = parseFloat(element);
    return elementConverted;
}

function getTextValueById(inputId) {
    const inputDisplayString = document.getElementById(inputId).innerText;
    inputDisplay = parseFloat(inputDisplayString).toFixed(2);
    return inputDisplay;
}

function displayTableData(nameOfP, priceOfP) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
     
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}<span>cm<sup>2</sup></span></td>
     <td>
    <button class="btn btn-sm bg-[#1090D8]">Square</button>
    </td>

  `;
    container.appendChild(tr);
    // document.getElementById("total-product").innerText = serial;
}