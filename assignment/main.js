const record = document.querySelector('#record');

const onClickHandler = () => {
  if (record.classList.contains('play')) {
    record.classList.remove('play');
  } else {
    record.classList.add('play');
  }
};
