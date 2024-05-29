let currentId = 0;

document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    formData.append('id', currentId);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Data submitted successfully');
        this.reset();
        currentId++;
    } else {
        alert('Failed to submit data');
    }
});