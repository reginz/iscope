document.getElementById('vancouver-button-monalisa').addEventListener('click', function() {
    document.getElementById('toronto-location-monalisa').style.display = 'none';
    document.getElementById('toronto-button-monalisa').classList.remove('bg-[#3c4bbe]', 'text-white');
    document.getElementById('toronto-button-monalisa').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
    document.getElementById('toronto-button-monalisa').style.backgroundColor = 'transparent';
    this.classList.add('bg-[#3c4bbe]', 'text-white');
    this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
    this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
    document.getElementById('vancouver-location-monalisa').style.display = 'flex';
  });
  
  document.getElementById('toronto-button-monalisa').addEventListener('click', function() {
    this.classList.add('bg-[#3c4bbe]', 'text-white');
    this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
    this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
    document.getElementById('vancouver-button-monalisa').classList.remove('bg-[#3c4bbe]', 'text-white');
    document.getElementById('vancouver-button-monalisa').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
    document.getElementById('vancouver-button-monalisa').style.backgroundColor = 'transparent';
    document.getElementById('toronto-location-monalisa').style.display = 'flex';
    document.getElementById('vancouver-location-monalisa').style.display = 'none';
  });