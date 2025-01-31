const handleSubmit = require("./js/formhandler");

document.getElementById('processURLButton').addEventListener('click', () => {
    let URL = document.getElementById('url').value;
    handleSubmit(URL)
});
