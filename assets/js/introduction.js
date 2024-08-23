document.addEventListener("DOMContentLoaded", function() {
// wybiera wszystkie elementy o klasie .tooltip
    const tooltips = document.querySelectorAll('.tooltip');

// iteruje po każdym elemencie tooltip
    tooltips.forEach(function(tooltip) {

// pobiera dane z atrybutów dataset
        const url = tooltip.dataset.url;
        const tooltipType = tooltip.dataset.tooltipType;
        const tooltipContent = tooltip.dataset.tooltipContent;
        const originalText = tooltip.textContent;

// tworzenie elementu <a>
        const link = document.createElement('a');
        link.href = url;
        link.textContent = originalText;

// tworzenie element <span> dla tooltipa
        const tooltipBox = document.createElement('span');
        tooltipBox.classList.add('tooltip__box', `tooltip__box--${tooltipType}`);

// dodawanie zawartość do tooltipBox w zależności od typu tooltipa
        if (tooltipType === 'text') {
            tooltipBox.textContent = tooltipContent;
        } else if (tooltipType === 'image') {
            const img = document.createElement('img');
            img.src = tooltipContent;
            img.classList.add('tooltip__image');
            tooltipBox.appendChild(img);
        }

// czyszczenie zawartości ryginalnego elementu tooltip
        tooltip.textContent = '';

 //dodawanie elementi <a> i <span> do tooltipa
        tooltip.appendChild(link);
        tooltip.appendChild(tooltipBox);
    });
});