document.getElementById('bioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;
    
    const bioData = document.createElement('div');
    bioData.innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Occupation: ${occupation}</p>
    `;
    
    document.getElementById('bioData').appendChild(bioData);
    
    document.getElementById('bioForm').reset();
});
