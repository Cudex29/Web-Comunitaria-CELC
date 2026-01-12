/* LOGICA DE JAVASCRIPT (Funcionalidad) */

// 1. Navegación de Secciones (Sidebar)
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(id);
  if(target) target.classList.add('active');
}

// 2. Navegación de Materias (Tabs internas)
function showMateria(id, btn) {
  const parentSection = btn.closest('section');
  parentSection.querySelectorAll('.materia').forEach(m => m.classList.remove('active'));
  
  const targetMateria = document.getElementById(id);
  if(targetMateria) targetMateria.classList.add('active');

  btn.closest('.bx--tabs__nav')
     .querySelectorAll('.bx--tabs__nav-item')
     .forEach(t => t.classList.remove('bx--tabs__nav-item--selected'));
  
  btn.parentElement.classList.add('bx--tabs__nav-item--selected');
}

// 3. Acordeón del Sidebar
function toggleAccordion(btn) {
  btn.parentElement.classList.toggle('bx--accordion__item--active');
}

// 4. Menú Móvil
function toggleSidebar() {
  document.getElementById('mainSidebar').classList.toggle('open');
}

function closeSidebarMobile() {
  if (window.innerWidth <= 768) {
    document.getElementById('mainSidebar').classList.remove('open');
  }
}
