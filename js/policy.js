function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
const lang_config = {
  en: {
    header_login: 'Registration',
    hero_register: 'Register Now',
    header_lang: 'eng',

    dock_title: 'Cookie Notice',

    form_title: 'Fill out an application to work with us',
    form_phone: 'Phone',
    form_name: 'Name',
    form_surname: 'Surname',
    form_email: 'Email',
    form_submit: 'Submit form',
    form_age: 'Age',
    form_weekly_gigz: 'How Many Weekly Gigz',
    form_self_employed: 'Are you willing to be self employed?',
    modal_title: 'Fill out an application to work with us',
    form_yes: 'Yes',
    form_no: 'No',
    modal_success_title: 'Success',
    modal_success_message: `Thank you, we will contact you and notify you about the
                        launch of the application`,
    modal_success_ok: 'Ok',
    form_error_phone: 'Please, input only numbers',
    form_error_email: 'Please, input your Email',
    form_error_age: 'Please, select your Age',
    form_error_weekly_gigz: 'Please, select how many weekly Gigz do you want',
    form_error_self_employed: 'Please, select it',
  },
  il: {
    header_login: 'להרשמה',
    hero_register: 'להרשמה',
    header_lang: 'עִברִית',
    form_title: 'אנא השאירו את הפרטים הבאים',
    form_phone: 'מספר טלפון',
    form_name: 'שם',
    form_surname: 'שם משפחה',
    form_email: 'Email',
    form_submit: 'שלחו עכשיו ',
    form_age: 'גיל',
    form_weekly_gigz: 'כמה Gigz לדעתכם תעשו בשבוע',
    form_self_employed: 'האם תהיו מוכנים לפתוח עוסק?',
    modal_title: 'אנא השאירו את הפרטים הבאים',
    form_yes: 'כן',
    form_no: 'לא',
    modal_success_title: 'סיימנו',
    modal_success_message: `תודה, אנו ניצור איתך קשר ונודיע לך על השקת האפליקציה`,
    modal_success_ok: 'בסדר',
    form_error_phone: 'אנא, הזן רק מספרים',
    form_error_email: 'אנא הזן את האימייל שלך',
    form_error_age: 'אנא בחר את הגיל שלך',
    form_error_weekly_gigz: 'אנא, בחר Gigz כמה שבועי אתה רוצה',
    form_error_self_employed: 'בבקשה, בחר אותו',
  },
};

const closeModalsButton = document.querySelector('#successCloseButton');

closeModalsButton.addEventListener('click', () => {
  toggleModal('false');
  toggleSuccessModal('false');
});

//FORM

const form = document.querySelector('.mdform');
const telephone = form.querySelector('[name="telephone"]');
const email = form.querySelector('[name="email"]');
const name = form.querySelector('[name="firstName"]');
const surname = form.querySelector('[name="secondName"]');
const age = form.querySelector('[name="age"]');
const weeklyContent = form.querySelector('[name="weeklyContent"]');
const selfEmployed = form.querySelector('[name="selfEmployed"]');

// ERRORS
const phoneError = document.querySelector('#telephone-error');
const emailError = document.querySelector('#email-error');
const formAgeError = document.querySelector('#formAge-error');
const formWeeklyContentError = document.querySelector(
  '#form_weeklyContent-error'
);
const formSelfEmployedError = document.querySelector(
  '#form_selfEmployed-error'
);

const submit_button = form.querySelector('.form__button');
const inputs = document.querySelectorAll('.input');

inputs.forEach((item) => {
  item.addEventListener('input', (e) => {
    if (e.target.value) {
      item.parentNode.querySelector('label').classList.add('active');
    } else {
      item.parentNode.querySelector('label').classList.remove('active');
    }
  });
});

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    unlockScroll();
    burger.classList.remove('active');
    header.classList.remove('active');
  } else {
    blockScroll();
    burger.classList.add('active');
    header.classList.add('active');
  }
});

const engDocs = document.getElementById('eng_docks');
const heDocs = document.getElementById('he_docks');

const checkLanguage = () => {
  if (select_lang === 'en') {
    engDocs.style.display = 'flex';
    heDocs.style.display = 'none';
  } else {
    engDocs.style.display = 'none';
    heDocs.style.display = 'flex';
  }
};

const switchLanguages = () => {
  checkLanguage();
  const lang_items = document.querySelectorAll('[data-translate]');
  lang_items.forEach((item) => {
    const translate_key = item.getAttribute('data-translate');
    item.innerHTML = lang_config[select_lang][translate_key];
  });
  if (select_lang === 'en') {
    localStorage.setItem('lang', 'en');
    document.body.classList.remove('il');
    // Inputmask({ "mask": "+99 (999)-999-99-99", showMaskOnHover: false, }).mask(telephone);
  } else if (select_lang === 'il') {
    document.body.classList.add('il');
    localStorage.setItem('lang', 'il');
    // Inputmask({ "mask": "+999 (999)-999-99-99", showMaskOnHover: false, }).mask(telephone);
  }
  langIconSwitch();
};

const lang_switcher_items = document.querySelectorAll('.header__lang-list li');
const translate_icons = document.querySelectorAll('[data-translate-icon]');

const langIconSwitch = () => {
  translate_icons.forEach((icon) => {
    icon.style.display = 'none';
    if (icon.getAttribute('data-translate-icon') === select_lang)
      icon.style.display = 'block';
  });
};

lang_switcher_items.forEach((lang) => {
  lang.addEventListener('click', (e) => {
    select_lang = e.target.getAttribute('data-value');
    lang.blur();
    switchLanguages();
    langIconSwitch();
  });
});

const saved_lang = localStorage.getItem('lang');
let select_lang = saved_lang ? saved_lang : 'en';
switchLanguages()

const modal = document.querySelector('.modal');
const successModal = document.querySelector('.successModal');
const langModal = document.querySelector('#list-wrapper');
const langModalMobile = document.querySelector('#list-wrapper_mobile');
let scrollp = 0;

const blockScroll = () => {
  scrollp = window.pageYOffset;
  document.body.classList.add('fixed');
  document.body.style.top = -scrollp + 'px';
};
const unlockScroll = () => {
  document.body.classList.remove('fixed');
  document.body.style.top = 0 + 'px';
  window.scrollTo(0, scrollp);
};

const toggleModal = (action) => {
  if (action === 'open') {
    if (burger.classList.contains('active')) {
      burger.click();
    }
    blockScroll();
    modal.classList.add('active');
  } else {
    unlockScroll();
    modal.classList.remove('active');
  }
};

const toggleSuccessModal = (action) => {
  if (action === 'open') {
    if (burger.classList.contains('active')) {
      burger.click();
    }
    blockScroll();
    successModal.classList.add('active');
  } else {
    unlockScroll();
    successModal.classList.remove('active');
  }
};

const toggleLang = (action) => {
  if (action === 'open') {
    langModal.classList.add('active');
  }
};

const langToggler = document.querySelector('.lang-toggler');
const mobileLangToggler = document.querySelector('.lang-toggler_mobile');

langToggler.addEventListener('click', () => {
  langModal.classList.add('active');
  console.log('Hello!!');
});

mobileLangToggler.addEventListener('click', () => {
  langModalMobile.classList.add('active');
  console.log('hello!');
});

document.addEventListener('click', ({ target }) => {
  if (!target.closest('.lang-toggler')) {
    langModal.classList.remove('active');
  }
});

window.onload = () => {
  switchLanguages();
  // getCountry()
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('shadow');
  } else {
    document.querySelector('.header').classList.remove('shadow');
  }
};
//FORM
Inputmask({ mask: '*{3,20}@*{3,20}.*{2,7}', showMaskOnHover: false }).mask(
  email
);

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhone = (phone) => {
  return String(phone).toLowerCase().match(/^\d+$/);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    phoneNumber: telephone.value,
    email: email.value,
    firstName: name.value,
    secondName: surname.value,
    age: age.value,
    weeklyContent: weeklyContent.value,
    selfEmployed:
      selfEmployed.value === 'Yes'
        ? true
        : selfEmployed.value === 'No'
          ? false
          : undefined,
  };

  const formData = JSON.stringify(data);
  if (
    !Object.values(data).some(
      (x) => typeof x === 'undefined' || x === '' || x === null
    ) &&
    !!validateEmail(email.value) &&
    !!validatePhone(telephone.value) &&
    !!form.querySelector('[name="age"]:checked') &&
    !!form.querySelector('[name="weeklyContent"]:checked') &&
    !!form.querySelector('[name="selfEmployed"]:checked')
  ) {
    console.log(!!validateEmail(email.value));
    console.log(!!validatePhone(telephone.value));
    console.log(!!form.querySelector('[name="age"]:checked'));
    console.log(!!form.querySelector('[name="weeklyContent"]:checked'));
    console.log(!!form.querySelector('[name="selfEmployed"]:checked'));

    email.classList.remove('error');
    telephone.classList.remove('error');
    name.classList.remove('error');
    surname.classList.remove('error');
    age.classList.remove('error');
    weeklyContent.classList.remove('error');
    selfEmployed.classList.remove('error');

    submit_button.disabled = true;

    await fetch('https://api-dev.gigzy.net/landing', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    }).then(() => {
      form.reset();
      submit_button.disabled = false;
      toggleSuccessModal('open');
    });
  } else {
    if (!name.value) {
      name.classList.add('error');
    } else {
      name.classList.remove('error');
    }

    if (!surname.value) {
      surname.classList.add('error');
    } else {
      surname.classList.remove('error');
    }

    if (!telephone.value || !validatePhone(telephone.value)) {
      telephone.classList.add('error');
      phoneError.classList.remove('is-hidden');
    } else {
      telephone.classList.remove('error');
      phoneError.classList.add('is-hidden');
    }

    if (!email.value || !validateEmail(email.value)) {
      email.classList.add('error');
      emailError.classList.remove('is-hidden');
    } else {
      email.classList.remove('error');
      emailError.classList.add('is-hidden');
    }

    if (!form.querySelector('[name="age"]:checked')) {
      age.classList.add('error');
      formAgeError.classList.remove('is-hidden');
    } else {
      age.classList.remove('error');
      formAgeError.classList.add('is-hidden');
    }

    if (!form.querySelector('[name="weeklyContent"]:checked')) {
      weeklyContent.classList.add('error');
      formWeeklyContentError.classList.remove('is-hidden');
    } else {
      weeklyContent.classList.remove('error');
      formWeeklyContentError.classList.add('is-hidden');
    }

    if (!form.querySelector('[name="selfEmployed"]:checked')) {
      selfEmployed.classList.add('error');
      formSelfEmployedError.classList.remove('is-hidden');
    } else {
      selfEmployed.classList.remove('error');
      formSelfEmployedError.classList.add('is-hidden');
    }
  }
});

const tab_headers = document.querySelectorAll('.tab-header');

const unselectTabs = (tabs, tabs_blocks) => {
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  tabs_blocks.forEach((tab_block) => {
    tab_block.classList.remove('active');
  });
};

const selectTabBlock = (tab, tabs, tabs_blocks) => {
  let index;
  tabs.forEach((el, idx) => {
    if (el.classList.contains('active')) index = idx;
  });
  tabs_blocks[index].classList.add('active');
};

tab_headers.forEach((tab_header) => {
  const tabs = tab_header.querySelectorAll('.tabulation');
  const tabs_container = tab_header.parentNode.querySelector('.tab-container');
  const tabs_blocks = tabs_container.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      unselectTabs(tabs, tabs_blocks);
      tab.classList.add('active');
      selectTabBlock(tab, tabs, tabs_blocks);
    });
  });
});
