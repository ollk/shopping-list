'use strict';

function main() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.target).parents('li').remove();
  });

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.target).parents('li').children('span').toggleClass('shopping-item__checked');
  });

  $('form button').click(function() {
    event.preventDefault();
    $('.shopping-list').append(`
    <li>
          <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
    `);
  });
}

$(main);