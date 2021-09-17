function createNode(element) {
    return document.createElement(element);
}


const recepts = document.querySelector('#recepts');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let recept = data.veckansTips;


        return recept.map(function(element) {
            recepts.innerHTML = "Recept: " + element.recept + ", tillagningstid: " + element.tid + ", Svårighetsgrad: " + element.grad;

        })
    })
    .catch(function(error) {
        console.log(error);
    });

