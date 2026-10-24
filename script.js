// showPopup is called only when a new recommendation is submitted.
function showPopup(message) {
  let popup = document.getElementById('popup');

  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'popup';
    popup.className = 'popup';
    document.body.appendChild(popup);
  }

  popup.textContent = message;
  popup.classList.add('visible');

  window.clearTimeout(showPopup._timer);
  showPopup._timer = window.setTimeout(function () {
    popup.classList.remove('visible');
  }, 3000);
}

function addRecommendation(name, text) {
  const list = document.getElementById('recommendation-list');

  const card = document.createElement('div');
  card.className = 'recommendation';

  const quote = document.createElement('p');
  quote.className = 'quote';
  quote.textContent = '\u201C' + text + '\u201D';

  const author = document.createElement('p');
  author.className = 'author';
  author.textContent = name + ' \u00B7 Added from this page';

  card.appendChild(quote);
  card.appendChild(author);
  list.appendChild(card);

  return card;
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recommendation-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameField = document.getElementById('recommender-name');
    const textField = document.getElementById('recommendation-input');
    const name = nameField.value.trim();
    const text = textField.value.trim();

    if (!name || !text) {
      return;
    }

    addRecommendation(name, text);
    showPopup('Thank you, ' + name + '! Your recommendation has been added.');
    form.reset();
  });
});
