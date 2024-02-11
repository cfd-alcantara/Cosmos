const pElement = document.getElementById('profText');
    const text = pElement.innerText;
    const wordLimit = 100; 

    if (text.split(' ').length > wordLimit) {
      pElement.style.fontSize = '0.5rem'; 
    }