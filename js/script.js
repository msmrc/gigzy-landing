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
    hero_title: 'Work-Life balance starts here',
    hero_text:
      'Tired of the rat race? <br />  Get freelance job offers straight to your mobile phone <br /> And retake control of your life!',
    about_subtitle: 'Lorem ipsum',
    about_title: 'Hey, we are Gigzy',
    about_button: 'Sign up',
    about_text: `We are on a mission to help you get freelance Gigz on time and schedule that you determine!<br />
            In our platform, you'll easily find a huge database of vacancies sent by business owners near your area.<br />
            All you need to do is choose a time, place, and sufficient payment and start working! We will take care of all the rest.`,
    quality_fast_title: 'Start instantly',
    quality_fast_text: 'Find Gigz in a day!',
    quality_comfortable_title: 'Save time',
    quality_comfortable_text: 'No need to spend time on frontal interviews',
    quality_flexible_title: 'Flexible schedule',
    quality_flexible_text: "You decide when it's time to work",
    quality_suitable_for_everyone_title: 'No commissions',
    quality_suitable_for_everyone_text:
      "We won't charge you a nickel for using Gigzy",
    quality_guarantee_title: 'Guaranteed payment',
    quality_guarantee_text: 'We pay you, not the business owners',
    employees_title: 'How do Gigzy works?',
    employees_text: `Finding a job is hard. <br />You need to write a CV and send it individually on job search sites, spend time and money on interviews, and wait a long time to get results. 
            <br /> With Gigzy, you'll get all the info you need about the job and business owner beforehand, apply in one tap, and get Gigz within a day just by filling out a single form once!`,
    employees_button: 'Get Gigz now!',
    employers_title: 'For employers',
    employers_text:
      'Today the labor market is in deep crisis. Businesses are desperately short of workers. Difficulties with accounting and taxes are added to the ongoing search process. Plus, the experience of coronavirus shows that sometimes there is simply no one to work, except for the head and owner of the business. Get access to a huge database of people willing to work with you. Register with Gigzy and solve your personnel problems tomorrow!',
    job_info_subtitle: 'Lorem ipsum',
    job_info_title: 'Lorem ipsum dolor sit amet',
    job_info_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam at pharetra elit auctor senectus mattis. \nEt at vel facilisi quis nibh at gravida integer arcu. \nSem egestas faucibus aenean nunc fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam at pharetra elit auctor senectus mattis. \nEt at vel facilisi quis nibh at gravida integer arcu. \nSem egestas faucibus aenean nunc fermentum.',
    faq: 'All you need to know about Gigzy',
    faq_first_tab: 'Employees',
    faq_first_tab_accordion_title_1: 'How do I start using Gigzy?',
    faq_first_tab_accordion_text_1:
      'Choose the gig that suits you, submit a response, get the job done, and get paid!',
    faq_first_tab_accordion_title_2: 'How do I get paid?',
    faq_first_tab_accordion_text_2:
      'All employers are screened before posting vacancies, so we ensure that all the Gigz on Gigzy are 100% legit. Plus, we pay you and not the employers, so we got your back.',
    faq_first_tab_accordion_title_3: 'What kind of job can I find on Gigzy?',
    faq_first_tab_accordion_text_3:
      'We provide jobs in blue-collar industries, such as restaurants, security, and farming.',
    faq_first_tab_accordion_title_4: 'To whom is Gigzy suitable?',
    faq_first_tab_accordion_text_4:
      'At first, we aim to help self-employed workers to get jobs fast.',
    faq_first_tab_accordion_title_5: 'Do I need to commit to anything?',
    faq_first_tab_accordion_text_5:
      'No! Gigzy is about giving you the freedom to work as much as you want when you feel like working.',
    faq_first_tab_accordion_title_6: 'How legal is it?',
    faq_first_tab_accordion_text_6: 'text',
    faq_first_tab_accordion_title_7: 'What will the tax man say?',
    faq_first_tab_accordion_text_7: 'text',
    faq_second_tab: 'Employers',
    faq_second_tab_accordion_title_1: 'second',
    faq_second_tab_accordion_text_1: 'second text',
    faq_second_tab_accordion_title_2: 'second',
    faq_second_tab_accordion_text_2: 'second text',
    faq_second_tab_accordion_title_3: 'To whom is it available?',
    faq_second_tab_accordion_text_3: 'text',
    faq_second_tab_accordion_title_4: "What do you wan't from me?",
    faq_second_tab_accordion_text_4: 'text',
    faq_second_tab_accordion_title_5: 'second text job can I get?',
    faq_second_tab_accordion_text_5: 'text',
    faq_second_tab_accordion_title_6: 'second text legal is it?',
    faq_second_tab_accordion_text_6: 'text',
    faq_second_tab_accordion_title_7: 'second text will the tax man say?',
    faq_second_tab_accordion_text_7: 'text',
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
    terms_text: 'By continuing to use this site, you consent to the processing of',
    terms_accept: 'Accept',
  },
  il: {
    header_login: 'להרשמה',
    hero_register: 'להרשמה',
    header_lang: 'עִברִית',
    hero_title: 'דרך חדשה לעבוד - Gigzy',
    hero_text: `
            תחום עובדי המסעדות, סדרנות וחקלאות כמו שלא הכרת. <br />
            Gigzy מאפשרת לך לעבוד כמה שבא לך, מתי שבא לך, מבלי להיגרר לראיונות עבודה מתישים ובלוח זמנים גמיש המתאים לאורח החיים שלך, על ידי שליחת מאות Gigz מבעלי עסקים מקומיים ואמינים ישירות לסמארטפון שלך.  <br />
            רוצה להתחיל לעבוד? תהליך הרשמה קטן וה-Gigz בדרך אליך!`,
    about_subtitle: 'לורם איפסום',
    about_title: 'היי, אנחנו Gigzy',
    about_button: 'להצטרפות ל - Gigzy',
    about_text: `
        המשימה שלנו היא לעזור לך להשיג Gigz בעולם עבודות הצווארון כחול בזמן ובלוח הזמנים שנוחים לך! <br />
        בפלטפורמה שלנו נמצא מאגר עצום של משרות פנויות שנשלחו אלינו על ידי בעלי עסקים באיזור שלך, כשלך כל שנותר לעשות הוא לבחור זמן, מקום ותשלום שמספק אותך ולהתחיל לעבוד! <br/>
        אנחנו נדאג לכל השאר.
        `,
    quality_fast_title: 'תחילת עבודה מיידית',
    quality_fast_text: 'אפשר להתחיל לעבוד מהיום להיום!',
    quality_comfortable_title: 'חיסכון בזמן',
    quality_comfortable_text: 'אין צורך להגיע לראיונות עבודה',
    quality_flexible_title: 'לוח זמנים גמיש',
    quality_flexible_text: 'מגוון רחב של משרות מלאות, חלקיות ופרויקטליות',
    quality_suitable_for_everyone_title: 'אין עמלות',
    quality_suitable_for_everyone_text: 'לא נגבה ממך אגורה על השימוש ב - Gigzy',
    quality_guarantee_title: 'תשלום מובטח',
    quality_guarantee_text: 'אנחנו משלמים לך, לא בעלי העסקים',
    employees_title: 'איך זה עובד?',
    employees_text: `
            למצוא עבודה זה קשה. <br />
            צריך לכתוב קורות חיים ולשלוח אותם אחד אחד באתרי חיפוש עבודה, להשקיע זמן וכסף בנסיעות לראיונות ולחכות המון זמן עד לקבלת תוצאות. <br />
            עם Gigzy כל המידע על המשרה ועל בעל העסק זמין לך מראש, מה שיעזור לך להחליט אם בא לך על המשרה הזו או לא. בנוסף, יש לך טופס אחד בלבד למלא, פעם אחת, והוא יישלח לכל משרה שתעניין אותך. זה הכל!
        `,
    employees_button: `אני רוצה לקבל Gigz!`,
    employers_title: 'למעסיקים',
    employers_text: `
            .נכון להיום, שוק העבודה נמצא במשבר עמוק. עסקים חסרים באופן קטסטרופלי עובדים <br />
            .קשיים בחשבונאות ומיסים מתווספים לתהליכי החיפוש המתמשכים <br />
            .בנוסף הקורונה לימדה אותנו שלפעמים פשוט אין מי שיעבוד מלבד המנהל ובעל העסק. קבל גישה למאגר עצום של אנשים <br />
            !הירשם ל - Gigzy ותפתור את בעיות הגיוס שלך כבר מחר`,
    job_info_subtitle: 'Lorem ipsum',
    job_info_title: 'Lorem ipsum dolor sit amet',
    job_info_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam at pharetra elit auctor senectus mattis. \nEt at vel facilisi quis nibh at gravida integer arcu. \nSem egestas faucibus aenean nunc fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam at pharetra elit auctor senectus mattis. \nEt at vel facilisi quis nibh at gravida integer arcu. \nSem egestas faucibus aenean nunc fermentum.',
    faq: 'כל מה שצריך לדעת על Gigzy',
    faq_first_tab: 'עובדים',
    faq_first_tab_accordion_title_1: 'איך מתחילים להשתמש ב - Gigzy?',
    faq_first_tab_accordion_text_1: `
            לאחר תהליך הרשמה קצרצר, אנחנו נתחיל לשלוח לך Gigz. <br />
            מצאת עבודה שמעניינת אותך? <br />
            כל מה שצריך לעשות זה להגיש מועמדות ולחכות עד יום עבודה אחד כדי לקבל תשובות!
        `,
    faq_first_tab_accordion_title_2: 'איך מקבלים תשלום ב - Gigzy?',
    faq_first_tab_accordion_text_2: `
            כל בתי העסק במאגר של Gigzy נבדקים לפני שהם יכולים לפרסם משרות, כך שאנו מבטיחים שכל המשרות במאגר הן אמיתיות ולגיטימיות. <br />
            בנוסף, אנחנו משלמים לך ולא בתי העסק, כך שהתשלום שלך מובטח.
        `,
    faq_first_tab_accordion_title_3:
      'אילו סוגים של משרות אפשר למצוא ב - Gigzy?',
    faq_first_tab_accordion_text_3: `
            אנו מספקים משרות בתעשיות צווארון כחול כגון מסעדות, סדרנות וחקלאות.
        `,
    faq_first_tab_accordion_title_4: 'למי Gigzy מתאימה?',
    faq_first_tab_accordion_text_4:
      'לפחות בהתחלה, אנחנו פונים לעובדים אשר מוגדרים כעצמאיים ויכולים להפיק חשבוניות.',
    faq_first_tab_accordion_title_5: 'האם אני נדרש להתחייב לכמות משמרות?',
    faq_first_tab_accordion_text_5:
      'לא! Gigzy נועדה לתת לך  את החופש לעבוד מתי שבא לך, כמה שבא לך.',
    faq_first_tab_accordion_title_6: '?כמה זה חוקי',
    faq_first_tab_accordion_text_6: 'זה חוקי לחלוטין',
    faq_first_tab_accordion_title_7: '?ומה רשות המיסים אומרת על זה',
    faq_first_tab_accordion_text_7:
      '.אנחנו דואגים בשבילכם לכל ההתחשבנות הדרושה בחוק בשביל שתוכלו לעבוד בראש שקט',
    faq_second_tab: 'עובדים',
    faq_second_tab_accordion_title_1: '?האם זה בתשלום',
    faq_second_tab_accordion_text_1: 'לא, השירות הוא לגמרי בחינם בשבילך',
    faq_second_tab_accordion_title_2: '?איך זה עובד',
    faq_second_tab_accordion_text_2: 'text',
    faq_second_tab_accordion_title_3: '?למי זה זמין',
    faq_second_tab_accordion_text_3: 'text',
    faq_second_tab_accordion_title_4: '?מה זה מצריך',
    faq_second_tab_accordion_text_4: 'text',
    faq_second_tab_accordion_title_5: 'איזו עבודה אוכל להשיג?',
    faq_second_tab_accordion_text_5: 'text',
    faq_second_tab_accordion_title_6: 'כמה זה חוקי?',
    faq_second_tab_accordion_text_6: 'text',
    faq_second_tab_accordion_title_7: 'ומה רשות המיסים אומרת על זה ?',
    faq_second_tab_accordion_text_7: 'text',
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
    terms_text: 'על ידי המשך השימוש באתר זה, אתה מסכים לעיבוד של',
    terms_accept: 'בסדר'
  },
};
const timeZoneCityToCountry = {
  Andorra: 'Andorra',
  Dubai: 'United Arab Emirates',
  Kabul: 'Afghanistan',
  Tirane: 'Albania',
  Yerevan: 'Armenia',
  Casey: 'Antarctica',
  Davis: 'Antarctica',
  Mawson: 'Antarctica',
  Palmer: 'Antarctica',
  Rothera: 'Antarctica',
  Troll: 'Antarctica',
  Vostok: 'Antarctica',
  Buenos_Aires: 'Argentina',
  Cordoba: 'Argentina',
  Salta: 'Argentina',
  Jujuy: 'Argentina',
  Tucuman: 'Argentina',
  Catamarca: 'Argentina',
  La_Rioja: 'Argentina',
  San_Juan: 'Argentina',
  Mendoza: 'Argentina',
  San_Luis: 'Argentina',
  Rio_Gallegos: 'Argentina',
  Ushuaia: 'Argentina',
  Pago_Pago: 'Samoa (American)',
  Vienna: 'Austria',
  Lord_Howe: 'Australia',
  Macquarie: 'Australia',
  Hobart: 'Australia',
  Melbourne: 'Australia',
  Sydney: 'Australia',
  Broken_Hill: 'Australia',
  Brisbane: 'Australia',
  Lindeman: 'Australia',
  Adelaide: 'Australia',
  Darwin: 'Australia',
  Perth: 'Australia',
  Eucla: 'Australia',
  Baku: 'Azerbaijan',
  Barbados: 'Barbados',
  Dhaka: 'Bangladesh',
  Brussels: 'Belgium',
  Sofia: 'Bulgaria',
  Bermuda: 'Bermuda',
  Brunei: 'Brunei',
  La_Paz: 'Bolivia',
  Noronha: 'Brazil',
  Belem: 'Brazil',
  Fortaleza: 'Brazil',
  Recife: 'Brazil',
  Araguaina: 'Brazil',
  Maceio: 'Brazil',
  Bahia: 'Brazil',
  Sao_Paulo: 'Brazil',
  Campo_Grande: 'Brazil',
  Cuiaba: 'Brazil',
  Santarem: 'Brazil',
  Porto_Velho: 'Brazil',
  Boa_Vista: 'Brazil',
  Manaus: 'Brazil',
  Eirunepe: 'Brazil',
  Rio_Branco: 'Brazil',
  Thimphu: 'Bhutan',
  Minsk: 'Belarus',
  Belize: 'Belize',
  St_Johns: 'Canada',
  Halifax: 'Canada',
  Glace_Bay: 'Canada',
  Moncton: 'Canada',
  Goose_Bay: 'Canada',
  Toronto: 'Canada',
  Nipigon: 'Canada',
  Thunder_Bay: 'Canada',
  Iqaluit: 'Canada',
  Pangnirtung: 'Canada',
  Winnipeg: 'Canada',
  Rainy_River: 'Canada',
  Resolute: 'Canada',
  Rankin_Inlet: 'Canada',
  Regina: 'Canada',
  Swift_Current: 'Canada',
  Edmonton: 'Canada',
  Cambridge_Bay: 'Canada',
  Yellowknife: 'Canada',
  Inuvik: 'Canada',
  Dawson_Creek: 'Canada',
  Fort_Nelson: 'Canada',
  Whitehorse: 'Canada',
  Dawson: 'Canada',
  Vancouver: 'Canada',
  Cocos: 'Cocos (Keeling) Islands',
  Zurich: 'Switzerland',
  Abidjan: "Côte d'Ivoire",
  Rarotonga: 'Cook Islands',
  Santiago: 'Chile',
  Punta_Arenas: 'Chile',
  Easter: 'Chile',
  Shanghai: 'China',
  Urumqi: 'China',
  Bogota: 'Colombia',
  Costa_Rica: 'Costa Rica',
  Havana: 'Cuba',
  Cape_Verde: 'Cape Verde',
  Christmas: 'Christmas Island',
  Nicosia: 'Cyprus',
  Famagusta: 'Cyprus',
  Prague: 'Czech Republic',
  Berlin: 'Germany',
  Copenhagen: 'Denmark',
  Santo_Domingo: 'Dominican Republic',
  Algiers: 'Algeria',
  Guayaquil: 'Ecuador',
  Galapagos: 'Ecuador',
  Tallinn: 'Estonia',
  Cairo: 'Egypt',
  El_Aaiun: 'Western Sahara',
  Madrid: 'Spain',
  Ceuta: 'Spain',
  Canary: 'Spain',
  Helsinki: 'Finland',
  Fiji: 'Fiji',
  Stanley: 'Falkland Islands',
  Chuuk: 'Micronesia',
  Pohnpei: 'Micronesia',
  Kosrae: 'Micronesia',
  Faroe: 'Faroe Islands',
  Paris: 'France',
  London: 'Britain (UK)',
  Tbilisi: 'Georgia',
  Cayenne: 'French Guiana',
  Gibraltar: 'Gibraltar',
  Nuuk: 'Greenland',
  Danmarkshavn: 'Greenland',
  Scoresbysund: 'Greenland',
  Thule: 'Greenland',
  Athens: 'Greece',
  South_Georgia: 'South Georgia & the South Sandwich Islands',
  Guatemala: 'Guatemala',
  Guam: 'Guam',
  Bissau: 'Guinea-Bissau',
  Guyana: 'Guyana',
  Hong_Kong: 'Hong Kong',
  Tegucigalpa: 'Honduras',
  'Port-au-Prince': 'Haiti',
  Budapest: 'Hungary',
  Jakarta: 'Indonesia',
  Pontianak: 'Indonesia',
  Makassar: 'Indonesia',
  Jayapura: 'Indonesia',
  Dublin: 'Ireland',
  Jerusalem: 'Israel',
  Kolkata: 'India',
  Calcutta: 'India',
  Chagos: 'British Indian Ocean Territory',
  Baghdad: 'Iraq',
  Tehran: 'Iran',
  Reykjavik: 'Iceland',
  Rome: 'Italy',
  Jamaica: 'Jamaica',
  Amman: 'Jordan',
  Tokyo: 'Japan',
  Nairobi: 'Kenya',
  Bishkek: 'Kyrgyzstan',
  Tarawa: 'Kiribati',
  Kanton: 'Kiribati',
  Kiritimati: 'Kiribati',
  Pyongyang: 'Korea (North)',
  Seoul: 'Korea (South)',
  Almaty: 'Kazakhstan',
  Qyzylorda: 'Kazakhstan',
  Qostanay: 'Kazakhstan',
  Aqtobe: 'Kazakhstan',
  Aqtau: 'Kazakhstan',
  Atyrau: 'Kazakhstan',
  Oral: 'Kazakhstan',
  Beirut: 'Lebanon',
  Colombo: 'Sri Lanka',
  Monrovia: 'Liberia',
  Vilnius: 'Lithuania',
  Luxembourg: 'Luxembourg',
  Riga: 'Latvia',
  Tripoli: 'Libya',
  Casablanca: 'Morocco',
  Monaco: 'Monaco',
  Chisinau: 'Moldova',
  Majuro: 'Marshall Islands',
  Kwajalein: 'Marshall Islands',
  Yangon: 'Myanmar (Burma)',
  Ulaanbaatar: 'Mongolia',
  Hovd: 'Mongolia',
  Choibalsan: 'Mongolia',
  Macau: 'Macau',
  Martinique: 'Martinique',
  Malta: 'Malta',
  Mauritius: 'Mauritius',
  Maldives: 'Maldives',
  Mexico_City: 'Mexico',
  Cancun: 'Mexico',
  Merida: 'Mexico',
  Monterrey: 'Mexico',
  Matamoros: 'Mexico',
  Mazatlan: 'Mexico',
  Chihuahua: 'Mexico',
  Ojinaga: 'Mexico',
  Hermosillo: 'Mexico',
  Tijuana: 'Mexico',
  Bahia_Banderas: 'Mexico',
  Kuala_Lumpur: 'Malaysia',
  Kuching: 'Malaysia',
  Maputo: 'Mozambique',
  Windhoek: 'Namibia',
  Noumea: 'New Caledonia',
  Norfolk: 'Norfolk Island',
  Lagos: 'Nigeria',
  Managua: 'Nicaragua',
  Amsterdam: 'Netherlands',
  Oslo: 'Norway',
  Kathmandu: 'Nepal',
  Nauru: 'Nauru',
  Niue: 'Niue',
  Auckland: 'New Zealand',
  Chatham: 'New Zealand',
  Panama: 'Panama',
  Lima: 'Peru',
  Tahiti: 'French Polynesia',
  Marquesas: 'French Polynesia',
  Gambier: 'French Polynesia',
  Port_Moresby: 'Papua New Guinea',
  Bougainville: 'Papua New Guinea',
  Manila: 'Philippines',
  Karachi: 'Pakistan',
  Warsaw: 'Poland',
  Miquelon: 'St Pierre & Miquelon',
  Pitcairn: 'Pitcairn',
  Puerto_Rico: 'Puerto Rico',
  Gaza: 'Palestine',
  Hebron: 'Palestine',
  Lisbon: 'Portugal',
  Madeira: 'Portugal',
  Azores: 'Portugal',
  Palau: 'Palau',
  Asuncion: 'Paraguay',
  Qatar: 'Qatar',
  Reunion: 'Réunion',
  Bucharest: 'Romania',
  Belgrade: 'Serbia',
  Kaliningrad: 'Russia',
  Moscow: 'Russia',
  Simferopol: 'Russia',
  Kirov: 'Russia',
  Volgograd: 'Russia',
  Astrakhan: 'Russia',
  Saratov: 'Russia',
  Ulyanovsk: 'Russia',
  Samara: 'Russia',
  Yekaterinburg: 'Russia',
  Omsk: 'Russia',
  Novosibirsk: 'Russia',
  Barnaul: 'Russia',
  Tomsk: 'Russia',
  Novokuznetsk: 'Russia',
  Krasnoyarsk: 'Russia',
  Irkutsk: 'Russia',
  Chita: 'Russia',
  Yakutsk: 'Russia',
  Khandyga: 'Russia',
  Vladivostok: 'Russia',
  'Ust-Nera': 'Russia',
  Magadan: 'Russia',
  Sakhalin: 'Russia',
  Srednekolymsk: 'Russia',
  Kamchatka: 'Russia',
  Anadyr: 'Russia',
  Riyadh: 'Saudi Arabia',
  Guadalcanal: 'Solomon Islands',
  Mahe: 'Seychelles',
  Khartoum: 'Sudan',
  Stockholm: 'Sweden',
  Singapore: 'Singapore',
  Paramaribo: 'Suriname',
  Juba: 'South Sudan',
  Sao_Tome: 'Sao Tome & Principe',
  El_Salvador: 'El Salvador',
  Damascus: 'Syria',
  Grand_Turk: 'Turks & Caicos Is',
  Ndjamena: 'Chad',
  Kerguelen: 'French Southern & Antarctic Lands',
  Bangkok: 'Thailand',
  Dushanbe: 'Tajikistan',
  Fakaofo: 'Tokelau',
  Dili: 'East Timor',
  Ashgabat: 'Turkmenistan',
  Tunis: 'Tunisia',
  Tongatapu: 'Tonga',
  Istanbul: 'Turkey',
  Funafuti: 'Tuvalu',
  Taipei: 'Taiwan',
  Kiev: 'Ukraine',
  Uzhgorod: 'Ukraine',
  Zaporozhye: 'Ukraine',
  Wake: 'US minor outlying islands',
  New_York: 'United States',
  Detroit: 'United States',
  Louisville: 'United States',
  Monticello: 'United States',
  Indianapolis: 'United States',
  Vincennes: 'United States',
  Winamac: 'United States',
  Marengo: 'United States',
  Petersburg: 'United States',
  Vevay: 'United States',
  Chicago: 'United States',
  Tell_City: 'United States',
  Knox: 'United States',
  Menominee: 'United States',
  Center: 'United States',
  New_Salem: 'United States',
  Beulah: 'United States',
  Denver: 'United States',
  Boise: 'United States',
  Phoenix: 'United States',
  Los_Angeles: 'United States',
  Anchorage: 'United States',
  Juneau: 'United States',
  Sitka: 'United States',
  Metlakatla: 'United States',
  Yakutat: 'United States',
  Nome: 'United States',
  Adak: 'United States',
  Honolulu: 'United States',
  Montevideo: 'Uruguay',
  Samarkand: 'Uzbekistan',
  Tashkent: 'Uzbekistan',
  Caracas: 'Venezuela',
  Ho_Chi_Minh: 'Vietnam',
  Efate: 'Vanuatu',
  Wallis: 'Wallis & Futuna',
  Apia: 'Samoa (western)',
  Johannesburg: 'South Africa',
  Antigua: 'Antigua & Barbuda',
  Anguilla: 'Anguilla',
  Luanda: 'Angola',
  McMurdo: 'Antarctica',
  DumontDUrville: 'Antarctica',
  Syowa: 'Antarctica',
  Aruba: 'Aruba',
  Mariehamn: 'Åland Islands',
  Sarajevo: 'Bosnia & Herzegovina',
  Ouagadougou: 'Burkina Faso',
  Bahrain: 'Bahrain',
  Bujumbura: 'Burundi',
  'Porto-Novo': 'Benin',
  St_Barthelemy: 'St Barthelemy',
  Kralendijk: 'Caribbean NL',
  Nassau: 'Bahamas',
  Gaborone: 'Botswana',
  'Blanc-Sablon': 'Canada',
  Atikokan: 'Canada',
  Creston: 'Canada',
  Kinshasa: 'Congo (Dem. Rep.)',
  Lubumbashi: 'Congo (Dem. Rep.)',
  Bangui: 'Central African Rep.',
  Brazzaville: 'Congo (Rep.)',
  Douala: 'Cameroon',
  Curacao: 'Curaçao',
  Busingen: 'Germany',
  Djibouti: 'Djibouti',
  Dominica: 'Dominica',
  Asmara: 'Eritrea',
  Addis_Ababa: 'Ethiopia',
  Libreville: 'Gabon',
  Grenada: 'Grenada',
  Guernsey: 'Guernsey',
  Accra: 'Ghana',
  Banjul: 'Gambia',
  Conakry: 'Guinea',
  Guadeloupe: 'Guadeloupe',
  Malabo: 'Equatorial Guinea',
  Zagreb: 'Croatia',
  Isle_of_Man: 'Isle of Man',
  Jersey: 'Jersey',
  Phnom_Penh: 'Cambodia',
  Comoro: 'Comoros',
  St_Kitts: 'St Kitts & Nevis',
  Kuwait: 'Kuwait',
  Cayman: 'Cayman Islands',
  Vientiane: 'Laos',
  St_Lucia: 'St Lucia',
  Vaduz: 'Liechtenstein',
  Maseru: 'Lesotho',
  Podgorica: 'Montenegro',
  Marigot: 'St Martin (French)',
  Antananarivo: 'Madagascar',
  Skopje: 'North Macedonia',
  Bamako: 'Mali',
  Saipan: 'Northern Mariana Islands',
  Nouakchott: 'Mauritania',
  Montserrat: 'Montserrat',
  Blantyre: 'Malawi',
  Niamey: 'Niger',
  Muscat: 'Oman',
  Kigali: 'Rwanda',
  St_Helena: 'St Helena',
  Ljubljana: 'Slovenia',
  Longyearbyen: 'Svalbard & Jan Mayen',
  Bratislava: 'Slovakia',
  Freetown: 'Sierra Leone',
  San_Marino: 'San Marino',
  Dakar: 'Senegal',
  Mogadishu: 'Somalia',
  Lower_Princes: 'St Maarten (Dutch)',
  Mbabane: 'Eswatini (Swaziland)',
  Lome: 'Togo',
  Port_of_Spain: 'Trinidad & Tobago',
  Dar_es_Salaam: 'Tanzania',
  Kampala: 'Uganda',
  Midway: 'US minor outlying islands',
  Vatican: 'Vatican City',
  St_Vincent: 'St Vincent',
  Tortola: 'Virgin Islands (UK)',
  St_Thomas: 'Virgin Islands (US)',
  Aden: 'Yemen',
  Mayotte: 'Mayotte',
  Lusaka: 'Zambia',
  Harare: 'Zimbabwe',
};
const facebookKey = 'EAAK3ZBuQ1RrgBAMH46kjOG5UnMARKfavLOT8qsMhvYQptsKLKt6IqZCBKa5GeAaBZChbblbuC9GNwZCKqScpVkrzLcOGkCrZAbqYrdwfes55ZBZCzN3DPT5kHWjvSx1hZCH2VIodIMZCCMh6Jero5lemlKAZBgrV1WGXlWGb9CSvNXhpLvUXmtbLJWunnfKSmsjq8ZD'

const accordions = document.querySelectorAll('.faq-acs');

accordions.forEach((container) => {
  new Accordion(container);
});

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

const switchLanguages = () => {
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
    localStorage.setItem('lang', 'il');
    document.body.classList.add('il');
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
const termsModal = document.querySelector('#terms-modal');
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

const acceptTerms = () => {
  termsModal.remove('active-terms')
  localStorage.setItem('isAcceptedTerms', true)
}

const isAcceptedTerms = localStorage.getItem('isAcceptedTerms')
if (isAcceptedTerms) {
  termsModal.remove('active-terms')
} else {
  termsModal.classList.add('active-terms')
}

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
    fbq("track", "CompleteRegistration");
    ym(92471249, 'reachGoal', 'registration_complete')

    // FACEBOOK START
    // await fetch(`https://graph.facebook.com/v16.0/572925031173136/events?access_token=${facebookKey}`, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: {
    //     "data": [
    //       {
    //         "event_name": "Registration",
    //         "event_time": new Date().getTime() / 1000,
    //         "action_source": "website",
    //         "user_data": {
    //           "em": [
    //             sha256(data.email)
    //           ],
    //           "ph": [
    //             sha256(data.telephone)
    //           ]
    //         },
    //       }
    //     ]
    //   },
    // }).then(() => { })
    // FACEBOOK END

    await fetch('https://api.gigzy.net/landing', {
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
