document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars span');
    const ratingInput = document.getElementById('rating');
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    // Handle star rating
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.dataset.value;
            highlightStars(value);
        });

        star.addEventListener('mouseout', () => {
            highlightStars(ratingInput.value || 0);
        });

        star.addEventListener('click', () => {
            ratingInput.value = star.dataset.value;
            highlightStars(ratingInput.value);
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            star.classList.toggle('active', star.dataset.value <= value);
        });
    }

    // Handle review submission
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const rating = ratingInput.value;
        const reviewText = document.getElementById('review').value.trim();

        if (!name || !rating || !reviewText) {
            alert('Please fill out all fields.');
            return;
        }

        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h3>${name}</h3>
            <div class="stars">${'★'.repeat(rating)}${'★'.repeat(5 - rating)}</div>
            <p>${reviewText}</p>
        `;

        reviewsContainer.prepend(reviewElement);

        // Clear form
        reviewForm.reset();
        highlightStars(0);
    });
});


  