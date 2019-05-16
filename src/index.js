import { searchOmdb, formSubmitListener } from './movie';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

// calling all the plugins
initSortable();
initMarkdown();
initSelect2();

const form = document.querySelector('form');
form.addEventListener('submit', formSubmitListener);

searchOmdb();
