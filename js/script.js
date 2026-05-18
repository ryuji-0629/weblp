
const menuOpen = document.querySelector('#menu-open');
const menuPanel = document.querySelector('#menu-panel');
const menuClose = document.querySelector('#menu-close');
const menuOptions = {
    duration: 1400,
    fill: 'forwards',
    easing: 'ease'
};

// メニューを開く
menuOpen.addEventListener('click', () => {
    menuPanel.animate({ translate: ['100vw', 0] }, menuOptions),
        // リンクの表示
        menuItems.forEach((menuItem, index) => {
            menuItem.animate(
                {
                    opacity: [0, 1],
                    translate: ['2rem', 0]
                },
                {
                    duration: 2400,
                    fill: 'forwards',
                    easing: 'ease',
                    delay: 300 * index
                }
            );
        });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
    menuPanel.animate({ translate: [0, '100vw'] }, menuOptions),
        // リンクの表示
        menuItems.forEach((menuItem) => {
            menuItem.animate(
                {
                    opacity: [1, 0]
                },
                menuOptions
            );
        });
});
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
});
elements.forEach(el=>observer.observe(el));