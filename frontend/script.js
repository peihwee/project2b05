const txtToSend = document.getElementById("messageToSend");
const txtDisplay = document.getElementById("messagesDisplay");

const butInsert = document.getElementById("insertMessage");

butInsert.onclick = function()
{
    console.log(txtToSend.value);
    axios.get('http://localhost:5000/message', { params: { message: txtToSend.value } })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        txtDisplay.textContent = response.data.message;
    })
    .catch(function (error) {
        txtDisplay.textContent = error;
    });
}