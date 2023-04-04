const filterItems = document.querySelectorAll('.filters-block-item');

const swiper = new Swiper('.starter-swiper', {
  spaceBetween: 50,
  navigation: {
    nextEl: '.starter-button-next',
    prevEl: '.starter-button-prev',
  },
});


// выбираем все элементы с классом "filters-block-input"
const inputs = document.querySelectorAll('.filters-block-input input');

// добавляем обработчики событий для каждого элемента
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value) {
      input.classList.add('active');
    } else {
      input.classList.remove('active');
    }
  });
  
  input.addEventListener('focus', () => {
    input.classList.add('active');
  });
  
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.classList.remove('active');
    }
  });
});

document.body.addEventListener('click', function(e){
  const target = e.target;

  if (target.closest('.filters-block-input')){
    const parent = target.closest('.filters-block-item');

    // Закрываем все открытые фильтры
    for (let i = 0; i < filterItems.length; i++) {
      if (filterItems[i] !== parent && filterItems[i].classList.contains('active')) {
        filterItems[i].classList.remove('active');
      }
    }

    // Открываем выбранный фильтр
    parent.classList.add('active');
  } else {
    // Удаляем класс "active" у всех элементов с классом "filters-block-item active", если клик был выполнен вне таких элементов
    const activeFilters = document.querySelectorAll('.filters-block-item.active');
    for (let i = 0; i < activeFilters.length; i++) {
      if (!activeFilters[i].contains(target)) {
        activeFilters[i].classList.remove('active');
      }
    }
  }
});
