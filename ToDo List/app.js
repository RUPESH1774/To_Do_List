
const mydiv=document.getElementById("mydiv")
const table=document.createElement("table")
const btn= document.getElementById("btn")
btn.addEventListener('click',function()
{
    const text = document.getElementById("task").value
    table.setAttribute("border","1px")
    table.setAttribute("cellpadding","10px");
            var deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class","button del-button");
            deleteBtn.innerText = "Delete";

            var updateBtn = document.createElement("button");
            updateBtn.setAttribute("class","button updt-button");
            updateBtn.innerText = "Update";
        
            var myspan = document.createElement("span");
            myspan.append(updateBtn);
            myspan.append(" ");
            myspan.append(deleteBtn);

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("class", "firstTd");
            var td2 = document.createElement("td");
            td1.innerText = text;
            td2.append(myspan);
            tr.append(td1);
            tr.append(td2);

            table.append(tr);
            mydiv.append(table);
           deleteBtn.addEventListener('click',function(event)
        {
            event.preventDefault();
            tr.remove();
        });

        updateBtn.addEventListener('click', function(event){
            event.preventDefault();

            document.getElementById("task").value = td1.innerText;
            td1.innerText = " ";

            var allBtn = document.getElementsByClassName("button");
            for(var i = 0; i < allBtn.length; i++)
            {
               tr.remove();
            }
        });
})