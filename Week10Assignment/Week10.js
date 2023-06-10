document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    let textInput= document.getElementById('textInput').value;
    let tableBody= document.getElementById('myTable').getElementsByTagName('tbody')[0];
    let newRow= tableBody.insertRow();
    let cell= newRow.insertCell();
    let textNode= document.createTextNode(textInput);
    cell.appendChild(textNode);
    document.getElementById('textInput').value = '';
});