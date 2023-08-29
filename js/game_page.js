
/*
function selected (event){
    event.relatedTarget.className = "letter_field_selected";
    document.getElementsByClassName("letter_field_selected").className = "letter_field";
}
*/
function createField(size)
{
    let size_of_field = 10;

    let table = document.createElement('table');
    table.id = "play_field"

    for (let i = 0; i < size; i++)
    {
        let temp_tr = table.insertRow(i);

        for (let j = 0; j < size; j++)
        {
            let temp_td = temp_tr.insertCell(j);
            
            temp_td.className = "letter_field";
            temp_td.addEventListener("click", function(){

                let unselected = document.getElementsByClassName("letter_field_selected");

                for (let l = 0; l < unselected.length; l++)
                {
                    unselected.item(l).className = "letter_field";
                }

                temp_td.className = "letter_field_selected";
            });
        }
    }

    crossword_container.prepend(table);
}



createField(15);


