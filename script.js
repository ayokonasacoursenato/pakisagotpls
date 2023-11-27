const yes = document.getElementById('yes');
const yes_popup = document.getElementById('yes_popup');
const no = document.getElementById('no');


no.addEventListener('click', () => {
    random_place();
});

yes.addEventListener('click', () => {
    yes_popup.style.display = 'unset';
    no.style.display = 'none';
});


function random_place() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Calculate random positions within the allowed range
    const maxLeft = screenWidth - no.clientWidth - 40;
    const maxTop = screenHeight - no.clientHeight -40;

    const change_left = Math.floor(Math.random() * maxLeft);
    const change_top = Math.floor(Math.random() * maxTop);

    no.style.position = 'absolute';
    no.style.left = change_left + 'px';
    no.style.top  = change_top + 'px';
}