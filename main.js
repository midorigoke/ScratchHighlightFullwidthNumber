const target = document.querySelectorAll('.blocklyBlockCanvas');
const regexp = /[０-９]/;

const observer = new MutationObserver(records => {
  document.querySelectorAll('*[data-argument-type~="text"] text, *[data-argument-type~="number"] text').forEach(e => {
    if (regexp.test(e.textContent)){
      e.style.fill = 'red';
    } else {
      e.style.fill = '';
    }
  });
});

target.forEach(e => {
  observer.observe(e, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
});
