const initSearchDropdown = () => {
  const search_icon = document.querySelector('#search-icon');

  function dropdownFunction() {
    const search_form = document.querySelector('.search-form-control');
    search_form.classList.toggle('active');
    search_form.classList.toggle('opacity');
  }

  search_icon.addEventListener("click", dropdownFunction);
}


export { initSearchDropdown }
