document.addEventListener('DOMContentLoaded', function() {
    let photos = document.querySelectorAll('.gallery_overview img');
    let currentDisplayedContent = null;

    photos.forEach(photo => {
        photo.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the body click event from triggering

            let index = this.getAttribute('data-index');
            let contentDiv = document.getElementById(`content${index}`);

            if (currentDisplayedContent === contentDiv) {
                // If clicking the same image again, hide the displayed content and remove the border
                contentDiv.style.display = 'none';
                currentDisplayedContent = null;
                this.classList.remove('selected');
            } else {
                // Hide the previously displayed content and remove the border
                if (currentDisplayedContent) {
                    currentDisplayedContent.style.display = 'none';
                    const prevSelectedImage = document.querySelector('.gallery_overview img.selected');
                    if (prevSelectedImage) {
                        prevSelectedImage.classList.remove('selected');
                    }
                }

                // Display the clicked image's content and add the border
                contentDiv.style.display = 'block';
                currentDisplayedContent = contentDiv;
                this.classList.add('selected');
            }
        });

        photo.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                this.click(); // Trigger click on pressing Enter
            }
        });
    });
});

