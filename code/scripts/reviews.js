const reviews = [
    {
        title: "Lovely Day Out",
        para: "The kids had an amazing time feeding the goats. We'll definitely be back!",
        stars: 5
    },
    {
        title: "So Much Fun",
        para: "The animals were so friendly, and the staff were super helpful. Great vibes all around.",
        stars: 5
    },
    {
        title: "Highly Recommend",
        para: "Clean, well-kept, and packed with charm. A real gem for families.",
        stars: 5
    },
    {
        title: "Fantastic Experience",
        para: "Our toddler loved the bunnies! Staff went above and beyond to make it special.",
        stars: 5
    },
    {
        title: "Great for Kids",
        para: "Interactive and safe environment. My son hasn’t stopped talking about the piglets.",
        stars: 4
    },
    {
        title: "Peaceful and Sweet",
        para: "Perfect way to spend a sunny afternoon. Very relaxing and full of smiles.",
        stars: 4
    },
    {
        title: "Farm-tastic Visit",
        para: "Great mix of animals and activities. Loved the tractor ride around the farm.",
        stars: 5
    },
    {
        title: "Warm Welcome",
        para: "The staff made us feel like family. The baby lambs were the highlight.",
        stars: 5
    },
    {
        title: "Memorable Day",
        para: "Such a wholesome place. Loved how hands-on the experience was.",
        stars: 4
    },
    {
        title: "Perfect for Families",
        para: "Educational, entertaining, and adorable. Everything you want in a petting farm.",
        stars: 5
    },
    {
        title: "Well Organized",
        para: "No long waits, clean facilities, and lots of happy animals. Great job, team!",
        stars: 4
    },
    {
        title: "Loved Every Moment",
        para: "From the pony rides to the feeding stations, it was pure joy.",
        stars: 5
    }
];

function createReview(title, para, stars) { 
    const reviewCard = document.createElement('article');
    reviewCard.classList.toggle('review');

    const reviewTitle = document.createElement('h3');
    reviewTitle.textContent = title;

    const reviewPara = document.createElement('p');
    reviewPara.textContent = para;

    const reviewStars = document.createElement('h4');
    reviewStars.textContent = '★'.repeat(stars);
    reviewStars.style.color = '#EFBF04';
    reviewStars.style.fontSize = '2rem';

    reviewCard.appendChild(reviewTitle);
    reviewCard.appendChild(reviewStars);
    reviewCard.appendChild(reviewPara);

    const reviewGrid = document.querySelector('.review-grid');
    reviewGrid.appendChild(reviewCard);
}

for (let review of reviews) { 
    createReview(review.title, review.para, review.stars);
};