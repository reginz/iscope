//CONTACT PAGE

document.getElementById('vancouver-button-contact').addEventListener('click', function() {
    document.getElementById('toronto-location-contact').style.display = 'none';
    document.getElementById('toronto-button-contact').classList.remove('bg-[#3c4bbe]', 'text-white');
    document.getElementById('toronto-button-contact').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
    document.getElementById('toronto-button-contact').style.backgroundColor = 'transparent';
    this.classList.add('bg-[#3c4bbe]', 'text-white');
    this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
    this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
    document.getElementById('vancouver-location-contact').style.display = 'flex';
  });
  
  document.getElementById('toronto-button-contact').addEventListener('click', function() {
    this.classList.add('bg-[#3c4bbe]', 'text-white');
    this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
    this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
    document.getElementById('vancouver-button-contact').classList.remove('bg-[#3c4bbe]', 'text-white');
    document.getElementById('vancouver-button-contact').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
    document.getElementById('vancouver-button-contact').style.backgroundColor = 'transparent';
    document.getElementById('toronto-location-contact').style.display = 'flex';
    document.getElementById('vancouver-location-contact').style.display = 'none';
  });