document.addEventListener('DOMContentLoaded', function() {
    const mixer = mixitup('.container_gallery');

    const filterButtons = document.querySelectorAll('.control');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            mixer.filter(filterValue);

            // Remove 'selected' class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('selected');
            });

            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });
});
