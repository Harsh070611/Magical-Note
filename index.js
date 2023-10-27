count = 0;
note_array = [];
function Addnote(){
    count++;
    let note = document.getElementById('addtxt').value; 
    let new_card = document.createElement('div');
    new_card.className = "my-2 mx-2 card";
    new_card.id = `Note ${count}`
    
    let card_id = new_card.id;
    
    let note_title = document.getElementById('note_title').value;
    note_array.push(note_title);
    note_array.push(card_id);
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
    console.log(note_array);
    
}


function Delete(note_id){
    let note = document.getElementById('card-container');
    note.removeChild(document.getElementById(note_id));
}


/*function Search(){
    let search_txt = document.getElementById('searchtxt').value;
    let i = 0;
    let flag = false;
    while(i<note_array.length){
        if(search_txt == note_array[i]){
            flag = true;
            let note = document.getElementById(note_array[i+1]);
            note.style.
        }
        i = i + 2;
    }
    if(flag == false){
        alert(" 'NOTE NOT FOUND' ");
    }
}*/
let search = document.getElementById('searchtxt');
search.addEventListener('input',Search);


// IMPORTANT CODE FOR SEARCH FUNCTIONALITY

function Search(){
    let search_txt = search.value.toLowerCase();
    let cards = document.getElementsByClassName('my-2 mx-2 card');
    Array.from(cards).forEach(function(element){
        let card_txt = element.getElementsByTagName('p')[0].innerHTML.toLowerCase();
        if(card_txt.includes(search_txt)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
    })

}



        
