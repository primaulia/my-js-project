import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('.cards');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`);
    // }
  });
};

export { initSortable };