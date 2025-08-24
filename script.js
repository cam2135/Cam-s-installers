
function renderMarkdown(md) {
  let html = md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*?)\*/gim, '<i>$1</i>')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>')
    .replace(/\n$/gim, '<br />');
  return html;
}


function loadReadme(filename) {
  document.getElementById('readme-content').innerText = 'Loading README...';
  fetch(filename)
    .then(response => response.text())
    .then(md => {
      document.getElementById('readme-content').innerHTML = renderMarkdown(md);
    })
    .catch(() => {
      document.getElementById('readme-content').innerText = filename + ' not found.';
    });
}

// Expose loadReadme globally for inline script in index.html
window.loadReadme = loadReadme;
