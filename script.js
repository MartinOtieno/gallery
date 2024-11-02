// Array to hold animal details
const animals = [
    {
        src: 'images/elephant.jfif',
        name: 'African Elephant',
        details: 'Size: Up to 13 ft (4 m)<br>Weight: Up to 12,000 lbs (5,443 kg)<br>Location: Sub-Saharan Africa'
    },
    {
        src: 'images/Bengal-Tiger.jfif',
        name: 'Bengal Tiger',
        details: 'Size: Up to 10 ft (3 m)<br>Weight: Up to 700 lbs (317 kg)<br>Location: India, Bangladesh'
    },
    {
        src: 'images/Grizzly-Bear.jfif',
        name: 'Grizzly Bear',
        details: 'Size: Up to 8 ft (2.4 m)<br>Weight: Up to 1,500 lbs (680 kg)<br>Location: North America'
    },
    {
        src: 'images/Saltwater-Crocodile.jfif',
        name: 'Saltwater Crocodile',
        details: 'Size: Up to 23 ft (7 m)<br>Weight: Up to 2,200 lbs (998 kg)<br>Location: Southeast Asia, Australia'
    }
];

// Open modal function
function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalInfo = document.getElementById('modalInfo');
    const animalName = document.getElementById('animalName');
    const animalDetails = document.getElementById('animalDetails');

    modal.style.display = 'flex';
    modalImage.src = animals[index].src;
    animalName.innerHTML = animals[index].name;
    animalDetails.innerHTML = animals[index].details;
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
