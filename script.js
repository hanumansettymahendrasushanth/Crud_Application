var selectedrow = null;

//alertss
function showalert(msg,classname)
{
  const div = document.createElement("div");
  div.className = `alert alert-${classname}`;
  

  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div,main);

  setTimeout(()=> document.querySelector(".alert").remove(),3000);
}


//clear fields

function clearfields()
{
  document.querySelector("#firstname").value="";
  document.querySelector("#lastname").value="";
  document.querySelector("#rollno").value="";
}

//adding

document.querySelector("#student-form").addEventListener("submit", (e)=>
{
  e.preventDefault();

  //getting values
  const firstname= document.querySelector("#firstname").value;
  const lastname= document.querySelector("#lastname").value;
  const rollno= document.querySelector("#rollno").value;

  if(firstname=="" || lastname=="" || rollno=="")
  {
    showalert("Please  fill all the fields", "danger");
  }
  else
  {
    if(selectedrow==null)
    {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${rollno}</td>
      <td>
      <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      </td>
      `;
      list.appendChild(row);
      selectedrow=null;
      showalert("Student Added","success");
    }
    else
    {
      selectedrow.children[0].textContent = firstname;
      selectedrow.children[1].textContent = lastname;
      selectedrow.children[2].textContent = rollno;
      selectedrow=null;
      showalert("Student Info Edited", "info")
    }
    clearfields();

  }
});

//edit

document.querySelector("#student-list").addEventListener("click", (e)=>
{
  target = e.target;
  if(target.classList.contains("edit"))
  {
    selectedrow = target.parentElement.parentElement;
    document.querySelector("#firstname").value=selectedrow.children[0].textContent = firstname;
    selectedrow = target.parentElement.parentElement;
    document.querySelector("#lastname").value=selectedrow.children[1].textContent = lastname;
    selectedrow = target.parentElement.parentElement;
    document.querySelector("#rollno").value=selectedrow.children[2].textContent = rollno;
  }
})

//deleting the data

document.querySelector("#student-list").addEventListener("click",(e)=>{
  target = e.target;
  if(target.classList.contains("delete"))
  {
    target.parentElement.parentElement.remove();
    showalert("Student Data Deleted" , "danger");
  }
})