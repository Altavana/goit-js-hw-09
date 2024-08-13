const textEmail = document.querySelector('.feedback-form input');
const textMessage = document.querySelector('.feedback-form textarea');
const formEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const loadUser = () => {
  const userInfoFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (userInfoFromLS === null) {
    return;
  }
  formData = userInfoFromLS;
  for (const key in userInfoFromLS) {
    if (userInfoFromLS.hasOwnProperty(key)) {
      formEl.elements[key].value = userInfoFromLS[key];
    }
  }
};
loadUser();
const onFormChange = event => {
  const feildName = event.target.name;
  const feildValue = event.target.value;
  formData[feildName] = feildValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const onFormSubmit = event => {
  event.preventDefault();
  if (!textEmail.value.trim() || !textMessage.value.trim()) {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };
  }
};
formEl.addEventListener('input', onFormChange);
formEl.addEventListener('submit', onFormSubmit);
// ==== for styles like in Figma=====
textEmail.classList.add('user-email');
textMessage.classList.add('user-message');
const btnSub = document.querySelector('.feedback-form button');
btnSub.classList.add('button-sub');
