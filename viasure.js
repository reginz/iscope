//visaure PAGE

document.getElementById('vancouver-button-visaure').addEventListener('click', function() {
    document.getElementById('toronto-location-visaure').style.display = 'none';
    document.getElementById('toronto-button-visaure').classList.remove('bg-[#3c4bbe]', 'text-white');
    document.getElementById('toronto-button-visaure').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
    document.getElementById('toronto-button-visaure').style.backgroundColor = 'transparent';
    this.classList.add('bg-[#3c4bbe]', 'text-white');
    this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
    this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
    document.getElementById('vancouver-location-visaure').style.display = 'flex';
  });
  
  document.getElementById('toronto-button-visaure').addEventListener('click', function() {
    this.classList.add('bg-[#3c4bbe]', 'text-white');
    this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
    this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
    document.getElementById('vancouver-button-visaure').classList.remove('bg-[#3c4bbe]', 'text-white');
    document.getElementById('vancouver-button-visaure').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
    document.getElementById('vancouver-button-visaure').style.backgroundColor = 'transparent';
    document.getElementById('toronto-location-visaure').style.display = 'flex';
    document.getElementById('vancouver-location-visaure').style.display = 'none';
  });