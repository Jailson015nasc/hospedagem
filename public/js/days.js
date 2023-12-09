const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const currentDateElement = document.getElementById("currentDate");
  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro, 2023",
    "Fevereiro, 2023",
    "Março, 2023",
    "Abril, 2023",
    "Maio, 2023",
    "Junho, 2023",
    "Julho, 2023",
    "Agosto, 2023",
    "Setembro, 2023",
    "Outubro, 2023",
    "Novembro, 2023",
    "Dezembro, 2023",
  ];

  currentDateElement.innerHTML = months[date.getMonth()];

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="day prev-date days-calendar" data-dia="${prevLastDay - x + 1}" data-mes="${date.getMonth() + 1}">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="day today days-calendar" data-dia="${i}" data-mes="${date.getMonth() + 1}" onclick="showDate(${i}, ${date.getMonth() + 1})">${i}  
        <aside class="home-vaga">
          <p>0/15</p>
          <span><img src="/svg/casa.svg" alt="casinha"></span>
        </aside>
      </div>`;
    } else {
      days += `<div class="day days-calendar" data-dia="${i}" data-mes="${date.getMonth() + 1}" onclick="showDate(${i}, ${date.getMonth() + 1})">${i}
        <aside class="home-vaga">
          <p>0/15</p>
          <span><img src="/svg/casa.svg" alt="casinha"></span>
        </aside>
      </div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date days-calendar" data-dia="${j}" data-mes="${date.getMonth() + 2}">${j}</div>`;
  }

  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.days-calendar');
  links.forEach(function (link) {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          var numeroDia = link.getAttribute('data-dia');
          var numeroMes = link.getAttribute('data-mes');
          window.location.href = `/reserva?dia=${numeroDia}/${numeroMes}`;
      });
  });
});





// menu
// Função para exibir/ocultar o menu
function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// Fechar o menu com animação ao clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              openDropdown.classList.remove('hide');
          }
      }
  }
}








