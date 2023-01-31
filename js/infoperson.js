let people = document.querySelectorAll('.slick_image');
let infomation = document.querySelectorAll('.main4_content_infinite');
for (let i = 0; i < people.length; i++) {
    people[i].addEventListener('click', function (e) {
        for (const j of infomation) {
            if (j.classList.contains('openi')) {
                j.classList.remove('openi');
            }
        }

        infomation[i].classList.add('openi');

    });
}

