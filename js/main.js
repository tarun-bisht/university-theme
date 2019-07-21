var menu_btn=document.getElementById('menu-btn');
var menu_overlay=document.getElementById('menu-overlay');
var key_person=document.getElementsByClassName('person-card');
var open=false;
menu_btn.addEventListener('click',()=>
{
  if(!open)
  {
    openNav();
    open=true;
  }
  else
  {
    closeNav();
    open=false;
  }
});
for (var i = 0; i < key_person.length; i++)
{
  key_person[i].addEventListener('onmouseover',()=>
  {
    var person_name=key_person.querySelector('card-title').innerHTML;
    var person_designation=key_person.querySelector('card-text').innerHTML;
    console.log(person_name);
    key_person[i].tooltip(title="person_name, "+"person_designation");
  });
}
function openNav() {
  menu_overlay.style.width = "70%";
  menu_btn.innerHTML='<i class="fas fa-times"></i>';
}
function closeNav() {
  menu_overlay.style.width = "0%";
  menu_btn.innerHTML='<i class="fas fa-bars"></i>';
}
