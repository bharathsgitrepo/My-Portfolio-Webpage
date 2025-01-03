const MyButton = document.getElementById('MyButton');
MyButton.addEventListener('click', function() {
    document.getElementById('MyHeading').innerText = "An aspiring web developer and freelancer with a passion for building web applications and learning new technologies."
})

const button = document.getElementById('showdetailsButton');
    const details = document.getElementById('details');
    button.addEventListener('click', function() {
        if (details.style.display === 'none') {
            details.style.display = 'block';
            button.innerText = 'Hide Details'; 
        } else {
            details.style.display = 'none';
            button.innerText = 'Show Details'; 
        }
    });

    document.getElementById('showResume').addEventListener('click', function() {
        const resumeContainer = document.getElementById('resumeContainer');
        const img = resumeContainer.querySelector('img');

        if (resumeContainer.style.display === 'none' || !img.src) {
            img.src = '../assets/Bharath_Resume.jpg';
            resumeContainer.style.display = 'block';
            this.innerText = 'Hide Resume';
        } else {
            resumeContainer.style.display = 'none';
            this.innerText = 'Show Resume';
        }
    });