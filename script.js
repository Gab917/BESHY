function beshyConverter() {
    const inputSentence = document.getElementById('inputSentence').value;
    const outputDiv = document.getElementById('output');
  
    if (inputSentence.trim() === '') {
      outputDiv.innerHTML = '<p>Please enter a sentence.</p>';
      return;
    }
  
    const words = inputSentence.split(' ');
    const result = words.join(' 🤸 ') + ' 🤸'; // Appending cartwheel emoji between each word
  
    outputDiv.innerHTML = `<p>${result}</p>`;
  }