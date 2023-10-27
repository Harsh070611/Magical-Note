count = 0;
function Addnote(){
    count++;
    let note = document.getElementById('addtxt').value; 
    let new_card = document.createElement('div');
    new_card.className = "my-2 mx-2 card";
    new_card.id = `Note ${count}`
    let card_id = new_card.id;
    let note_title = document.getElementById('note_title').value;
    new_card.style = style="width: 18rem; margin-left: 15px;";
    new_card.innerHTML = `<div class="card-body">
                            <h5 class="card-title">${note_title}</h5>
                            <p class="card-text">${note}</p>
                            <button class="btn btn-primary" onclick = "Delete('${card_id}')">Delete Note</button>
                          </div>`

    let cont = document.querySelector('div#card-container');
    cont.appendChild(new_card);
    document.getElementById('addtxt').value = '';
    document.getElementById('note_title').value = '';

    
}


function Delete(note_id){
    let note = document.getElementById('card-container');
    note.removeChild(document.getElementById(note_id));
}