/*Нативный*/
/*document.addEventListener('DOMContentLoaded', function() {
    let categories = document.querySelectorAll('[data-id="category_item"]');

    categories.forEach(function(category) {
        category.addEventListener('click', function(event) {
            let input = category.querySelector('input[type="radio"]');
            input.checked = true;

            let categoryId = input.value
            if(categoryId == 0) {
                let urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('category')) {
                    urlParams.delete('category');
                }

                window.location.href = `${window.location.pathname}?${urlParams.toString()}`;
            } else {
                let urlParams = new URLSearchParams(window.location.search);
                urlParams.set('category', categoryId);

                window.location.href = `${window.location.pathname}?${urlParams.toString()}`;
            }
        });
    });
});*/
/*Быстро поправил, пока никто не заметил, на jquery*/
$(document).ready(function() {
    let categories = $('[data-id="category_item"]');

    categories.on('click', function(event) {
        let category = $(this);
        let input = category.find('input[type="radio"]');
        input.prop('checked', true);

        let categoryId = input.val();
        if (categoryId == 0) {
            let urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('category')) {
                urlParams.delete('category');
            }

            window.location.href = `${window.location.pathname}?${urlParams.toString()}`;
        } else {
            let urlParams = new URLSearchParams(window.location.search);
            urlParams.set('category', categoryId);

            window.location.href = `${window.location.pathname}?${urlParams.toString()}`;
        }
    });
});