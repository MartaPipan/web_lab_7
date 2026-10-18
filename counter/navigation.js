window.addEventListener("DOMContentLoaded", () => {
  const triggerGeometry = document.getElementById("trigger-geometry");
  const triggerLogic = document.getElementById("trigger-logic");
  const itemsGeometry = document.getElementById("items-geometry");
  const itemsLogic = document.getElementById("items-logic");

  if (triggerGeometry && itemsGeometry && itemsLogic) {  //чи взагалі існують ці елементи на сторінці
    triggerGeometry.addEventListener("click", () => {
      itemsGeometry.classList.toggle("show");//
      itemsLogic.classList.remove("show");
    });
  }

  if (triggerLogic && itemsLogic && itemsGeometry) {
    triggerLogic.addEventListener("click", () => {
      itemsLogic.classList.toggle("show");      //Список логіки відкривається або закривається за допомогою .toggle("show").
      itemsGeometry.classList.remove("show");   //Список геометрії автоматично закривається за допомогою .remove("show").
    });
  }

  const allMenuLinks = document.querySelectorAll(".sidebar-nav a");   //Автоматичне закриття меню при виборі формули
  allMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (itemsGeometry) itemsGeometry.classList.remove("show");
      if (itemsLogic) itemsLogic.classList.remove("show");
    });
  });
});
