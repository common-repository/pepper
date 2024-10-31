/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _npmZepto = __webpack_require__(2);

	var _npmZepto2 = _interopRequireDefault(_npmZepto);

	var _querystring = __webpack_require__(7);

	var _querystring2 = _interopRequireDefault(_querystring);

	var _serializer = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(10);

	var intervalHandle = null;

	var DEFAULT_LANGUAGE = 'en';
	var DEFAULT_PRONOUN = 'us';

	var TRANSLATION = {
	    en: {
	        social_media: 'Social Media',
	        introduction: 'Introduction',
	        classic: 'Classic',
	        get_pepper_link_text: 'Get PEPPER for your website!',
	        get_pepper_link_title: 'Get PEPPER now!'
	    },
	    de: {
	        social_media: 'Soziale Medien',
	        classic: 'Klassik',
	        introduction: 'Einleitung',
	        get_pepper_link_text: 'Hol dir PEPPER auf deine Website!',
	        get_pepper_link_title: 'Hol dir PEPPER jetzt!'
	    },
	    es: {
	        social_media: 'Redes sociales',
	        classic: 'Clásicos',
	        introduction: 'Introducción',
	        get_pepper_link_text: 'Consigue PEPPER para tu sitio web!',
	        get_pepper_link_title: 'Consigue PEPPER para tu sitio web!'
	    },
	    pl: {
	        social_media: 'Media Społecznościowe',
	        introduction: 'Wprowadzenie',
	        classic: 'Klasyka',
	        get_pepper_link_text: 'Zdobądź PEPPER na swoją witrynę!',
	        get_pepper_link_title: 'Zdobądź PEPPER teraz!'
	    },
	    ru: {
	        social_media: 'Социальные сети',
	        introduction: 'Вступление',
	        classic: 'Классика',
	        get_pepper_link_text: 'Поставь PEPPER на свой сайт!',
	        get_pepper_link_title: 'Скачай PEPPER прямо сейчас!'
	    },
	    fr: {
	        social_media: 'Reseaux Sociaux',
	        introduction: 'Présentation',
	        classic: 'Classiques',
	        get_pepper_link_text: 'Installez PEPPER sur votre site!',
	        get_pepper_link_title: 'Obtenez PEPPER maintenant!'
	    },
	    nl: {
	        social_media: 'Social Media',
	        introduction: 'Introductie',
	        classic: 'Classic',
	        get_pepper_link_text: 'PEPPER op jouw website!',
	        get_pepper_link_title: 'Installeer PEPPER nu!'
	    },
	    ch: {
	        social_media: '社群',
	        introduction: '簡介',
	        classic: '聯絡方式',
	        get_pepper_link_text: 'Get PEPPER for your website!',
	        get_pepper_link_title: 'Get PEPPER now!'
	    },
	    fi: {
	        social_media: 'Sosiaalinen media',
	        introduction: 'Esittely',
	        classic: 'Classic',
	        get_pepper_link_text: 'Lisää PEPPER sivuillesi!',
	        get_pepper_link_title: 'Hanki PEPPER nyt!'
	    },
	    sk: {
	        social_media: 'Sociálne siete',
	        introduction: 'Intro',
	        classic: 'Klasika',
	        get_pepper_link_text: 'Pridaj si PEPPER na svoju stránku!',
	        get_pepper_link_title: 'Pridaj PEPPER teraz!'
	    },
	    cs: {
	        social_media: 'Sociální sítě',
	        introduction: 'Intro',
	        classic: 'Klasika',
	        get_pepper_link_text: 'Přidej si PEPPER na svou stránku!',
	        get_pepper_link_title: 'Přidej PEPPER teď!'
	    },
	    se: {
	        social_media: 'Sociala medier',
	        introduction: 'Introduktion',
	        classic: 'Traditionella kontaktvägar',
	        get_pepper_link_text: 'Skaffa PEPPER till din hemsida!',
	        get_pepper_link_title: 'Skaffa PEPPER nu!'
	    },
	    pt: {
	        social_media: 'Redes Sociais',
	        introduction: 'Introdução',
	        classic: 'Clássico',
	        get_pepper_link_text: 'Use o PEPPER no seu website!',
	        get_pepper_link_title: 'Use já o PEPPER!'
	    },
	    tr: {
	        social_media: 'Sosyal Medya',
	        introduction: 'Giriş',
	        classic: 'Klasik',
	        get_pepper_link_text: 'Siten için PEPPER edin!',
	        get_pepper_link_title: 'Şimdi PEPPER edin!'
	    },
	    it: {
	        social_media: 'Social Media',
	        introduction: 'Introduzione',
	        classic: 'Classico',
	        get_pepper_link_text: 'Ottieni PEPPER per il tuo sito!',
	        get_pepper_link_title: 'carica PEPPER Adesso!'
	    }
	};

	var CHANNEL_TITLE = {
	    en: {
	        facebook: {
	            me: 'Friend me',
	            us: 'Like us'
	        },
	        twitter: {
	            me: 'Tweet me',
	            us: 'Tweet us'
	        },
	        instagram: {
	            me: 'Follow me',
	            us: 'Follow us'
	        },
	        messenger: {
	            me: 'Message me',
	            us: 'Message us'
	        },
	        telegram: {
	            me: 'Telegram me',
	            us: 'Telegram us'
	        },
	        whatsapp: {
	            me: 'Write me',
	            us: 'Write us'
	        },
	        vkontakte: {
	            me: 'Write me',
	            us: 'Write us'
	        },
	        phone: {
	            me: 'Call me',
	            us: 'Call us'
	        },
	        email: {
	            me: 'Email me',
	            us: 'Email us'
	        },
	        skype: {
	            me: 'Skype with me',
	            us: 'Skype with us'
	        },
	        linkedin: {
	            me: 'Connect with me',
	            us: 'Connect with us'
	        },
	        github: {
	            me: 'Code with me',
	            us: 'Code with us'
	        },
	        stackoverflow: {
	            me: 'Code with me',
	            us: 'Code with us'
	        },
	        xing: {
	            me: 'Connect with me',
	            us: 'Connect with us'
	        },
	        slack: {
	            me: 'Chat with me',
	            us: 'Chat with us'
	        },
	        website: {
	            me: 'Visit me',
	            us: 'Visit us'
	        },
	        kik: {
	            me: 'Chat with me',
	            us: 'Chat with us'
	        },
	        producthunt: {
	            me: 'Hunt me',
	            us: 'Hunt us'
	        },
	        indiegogo: {
	            me: 'Pledge for me',
	            us: 'Pledge for us'
	        },
	        kickstarter: {
	            me: 'Back me',
	            us: 'Back us'
	        },
	        snapchat: {
	            me: 'Snap with me',
	            us: 'Snap with us'
	        },
	        youtube: {
	            me: 'Watch with me',
	            us: 'Watch with us'
	        },
	        vimeo: {
	            me: 'Watch with me',
	            us: 'Watch with us'
	        },
	        soundcloud: {
	            me: 'Listen with me',
	            us: 'Listen with us'
	        },
	        medium: {
	            me: 'Read from me',
	            us: 'Read from us'
	        }
	    },
	    de: {
	        facebook: {
	            me: 'Like mich',
	            us: 'Like uns'
	        },
	        twitter: {
	            me: 'Tweete mir',
	            us: 'Tweete uns'
	        },
	        instagram: {
	            me: 'Folge mir',
	            us: 'Folge uns'
	        },
	        messenger: {
	            me: 'Schreib mir',
	            us: 'Schreib uns'
	        },
	        telegram: {
	            me: 'Schreib mir',
	            us: 'Schreib uns'
	        },
	        whatsapp: {
	            me: 'Schreib mir',
	            us: 'Schreib uns'
	        },
	        vkontakte: {
	            me: 'Schreib mir',
	            us: 'Schreib uns'
	        },
	        phone: {
	            me: 'Ruf mich an',
	            us: 'Ruf uns an'
	        },
	        email: {
	            me: 'Mail mir',
	            us: 'Mail uns'
	        },
	        skype: {
	            me: 'Skype mit mir',
	            us: 'Skype mit uns'
	        },
	        linkedin: {
	            me: 'Kontaktiere mich',
	            us: 'Kontaktiere uns'
	        },
	        github: {
	            me: 'Programmier mit mir',
	            us: 'Programmier mit uns'
	        },
	        stackoverflow: {
	            me: 'Programmier mit mir',
	            us: 'Programmier mit uns'
	        },
	        xing: {
	            me: 'Kontaktiere mich',
	            us: 'Kontaktiere uns'
	        },
	        slack: {
	            me: 'Chatte mit mir',
	            us: 'Chatte mit uns'
	        },
	        website: {
	            me: 'Besuche mich',
	            us: 'Besuche uns'
	        },
	        kik: {
	            me: 'Chatte mit mir',
	            us: 'Chatte mit uns'
	        },
	        producthunt: {
	            me: 'Jage mich ;)',
	            us: 'Jage uns ;)'
	        },
	        indiegogo: {
	            me: 'Unterstütze mich',
	            us: 'Unterstütze uns'
	        },
	        kickstarter: {
	            me: 'Unterstütze mich',
	            us: 'Unterstütze uns'
	        },
	        snapchat: {
	            me: 'Snap mit mir',
	            us: 'Snap mit uns'
	        },
	        youtube: {
	            me: 'Schau mit mir',
	            us: 'Schau mit uns'
	        },
	        vimeo: {
	            me: 'Schau mit mir',
	            us: 'Schau mit uns'
	        },
	        soundcloud: {
	            me: 'Hör mit mir',
	            us: 'Hör mit us'
	        },
	        medium: {
	            me: 'Lies von mir',
	            us: 'Lies von uns'
	        }
	    },
	    es: {
	        facebook: {
	            me: 'Sígueme en Facebook',
	            us: 'Síguenos en Facebook'
	        },
	        twitter: {
	            me: 'Escríbeme en Twitter',
	            us: 'Escríbanos en Twitter'
	        },
	        instagram: {
	            me: 'Sígueme en Instagram',
	            us: 'Síguenos en Instagram'
	        },
	        messenger: {
	            me: 'Mensajeame',
	            us: 'Mensajeanos'
	        },
	        telegram: {
	            me: 'Mensajeame',
	            us: 'Mensajeanos'
	        },
	        whatsapp: {
	            me: 'Mensajeame',
	            us: 'Mensajeanos'
	        },
	        vkontakte: {
	            me: 'Mensajeame',
	            us: 'Mensajeanos'
	        },
	        phone: {
	            me: 'Llámame',
	            us: 'Llámenos'
	        },
	        email: {
	            me: 'Escríbeme',
	            us: 'Escríbanos'
	        },
	        skype: {
	            me: 'Llámame',
	            us: 'Llámenos'
	        },
	        linkedin: {
	            me: 'Conectate conmigo',
	            us: 'Conectate con nosotros'
	        },
	        github: {
	            me: 'Escríbe código conmigo',
	            us: 'Escríbe código con nosotros'
	        },
	        stackoverflow: {
	            me: 'Escríbe código conmigo',
	            us: 'Escríbe código con nosotros'
	        },
	        xing: {
	            me: 'Conectate conmigo',
	            us: 'Conectate con nosotros'
	        },
	        slack: {
	            me: 'Chatear conmigo',
	            us: 'Chatear con nosotros'
	        },
	        website: {
	            me: 'Visitame',
	            us: 'Visitanos'
	        },
	        kik: {
	            me: 'Chatear conmigo',
	            us: 'Chatear con nosotros'
	        },
	        producthunt: {
	            me: 'Cazarme ;)',
	            us: 'Cazarnos ;)'
	        },
	        indiegogo: {
	            me: 'Promesa para mí',
	            us: 'Promesa para nosotros'
	        },
	        kickstarter: {
	            me: 'Apóyame',
	            us: 'Apóyarnos'
	        },
	        snapchat: {
	            me: 'Agrégame a snapchat',
	            us: 'Agréganos a snapchat'
	        },
	        youtube: {
	            me: 'Mira conmigo',
	            us: 'Mira con nosotros'
	        },
	        vimeo: {
	            me: 'Mira conmigo',
	            us: 'Mira con nosotros'
	        },
	        soundcloud: {
	            me: 'Escucha conmigo',
	            us: 'Escucha con nosotros'
	        },
	        medium: {
	            me: 'Leer de mí',
	            us: 'Leer de nosotros'
	        }
	    },
	    pl: {
	        facebook: {
	            me: 'Polub mnie',
	            us: 'Polub nas'
	        },
	        twitter: {
	            me: 'Tweetnij do mnie',
	            us: 'Tweetnij do nas'
	        },
	        instagram: {
	            me: 'Śledź mnie',
	            us: 'Śledź nas'
	        },
	        messenger: {
	            me: 'Napisz do mnie',
	            us: 'Napisz do nas'
	        },
	        telegram: {
	            me: 'Telegram do mnie',
	            us: 'Telegram do nas'
	        },
	        whatsapp: {
	            me: 'Napisz do mnie',
	            us: 'Napisz do nas'
	        },
	        vkontakte: {
	            me: 'Napisz do mnie',
	            us: 'Napisz do nas'
	        },
	        phone: {
	            me: 'Zadzwoń do mnie',
	            us: 'Zadzwoń do nas'
	        },
	        email: {
	            me: 'Napisz do mnie',
	            us: 'Napisz do nas'
	        },
	        skype: {
	            me: 'Porozmawiaj ze mną',
	            us: 'Porozmawiaj z nami'
	        },
	        linkedin: {
	            me: 'Połącz się ze mną',
	            us: 'Połącz się z nami'
	        },
	        github: {
	            me: 'Koduj ze mną',
	            us: 'Koduj z nami'
	        },
	        stackoverflow: {
	            me: 'Koduj ze mną',
	            us: 'Koduj z nami'
	        },
	        xing: {
	            me: 'Połącz się ze mną',
	            us: 'Połącz się z nami'
	        },
	        slack: {
	            me: 'Czatuj ze mną',
	            us: 'Czatuj z nami'
	        },
	        website: {
	            me: 'Odwiedź mnie',
	            us: 'Odwiedź nas'
	        },
	        kik: {
	            me: 'Czatuj ze mną',
	            us: 'Czatuj z nami'
	        },
	        producthunt: {
	            me: 'Upoluj mnie',
	            us: 'Upoluj nas'
	        },
	        indiegogo: {
	            me: 'Wspomóż mnie',
	            us: 'Wspomóż nas'
	        },
	        kickstarter: {
	            me: 'Wesprzyj mnie',
	            us: 'Wesprzyj nas'
	        },
	        snapchat: {
	            me: 'Snapuj ze mną',
	            us: 'Snapuj z nami'
	        },
	        youtube: {
	            me: 'Oglądaj ze mną',
	            us: 'Oglądaj z nami'
	        },
	        vimeo: {
	            me: 'Oglądaj ze mną',
	            us: 'Oglądaj z nami'
	        },
	        soundcloud: {
	            me: 'słuchać ze mną',
	            us: 'słuchać z nami'
	        },
	        medium: {
	            me: 'Czytaj ze mną',
	            us: 'Czytaj z nami'
	        }
	    },
	    ru: {
	        facebook: {
	            me: 'Подружись',
	            us: 'Подпишись'
	        },
	        twitter: {
	            me: 'Напиши мне',
	            us: 'Напиши нам'
	        },
	        instagram: {
	            me: 'Знакомься со мной',
	            us: 'Знакомься с нами'
	        },
	        messenger: {
	            me: 'Напиши мне',
	            us: 'Напиши нам'
	        },
	        telegram: {
	            me: 'Телеграфируй мне',
	            us: 'Телеграфируй нам'
	        },
	        whatsapp: {
	            me: 'Напиши мне',
	            us: 'Напиши нам'
	        },
	        vkontakte: {
	            me: 'Напиши мне',
	            us: 'Напиши нам'
	        },
	        phone: {
	            me: 'Позвони мне',
	            us: 'Позвони нам'
	        },
	        email: {
	            me: 'Отправь мне письмо',
	            us: 'Отправь нам письмо'
	        },
	        skype: {
	            me: 'Позвони в скайпе',
	            us: 'Позвони в скайпе'
	        },
	        linkedin: {
	            me: 'Будь на связи',
	            us: 'Будь на связи'
	        },
	        github: {
	            me: 'Пиши со мной',
	            us: 'Пиши с нами'
	        },
	        stackoverflow: {
	            me: 'Пиши со мной',
	            us: 'Пиши с нами'
	        },
	        xing: {
	            me: 'Будь на связи',
	            us: 'Будь на связи'
	        },
	        slack: {
	            me: 'Напиши мне',
	            us: 'Напиши нам'
	        },
	        website: {
	            me: 'Навести меня',
	            us: 'Проведай нас'
	        },
	        kik: {
	            me: 'Напиши мне',
	            us: 'Напиши нам'
	        },
	        producthunt: {
	            me: 'Найди меня',
	            us: 'Найди нас'
	        },
	        indiegogo: {
	            me: 'Поддержи меня',
	            us: 'Поддержи нас'
	        },
	        kickstarter: {
	            me: 'Поддержи меня',
	            us: 'Поддержи нас'
	        },
	        snapchat: {
	            me: 'Поймай меня',
	            us: 'Поймай нас'
	        },
	        youtube: {
	            me: 'Посмотрим вместе',
	            us: 'Посмотрим вместе'
	        },
	        vimeo: {
	            me: 'Посмотрим вместе',
	            us: 'Посмотрим вместе'
	        },
	        soundcloud: {
	            me: 'слушать со мной',
	            us: 'слушать с нами'
	        },
	        medium: {
	            me: 'Читайте от меня',
	            us: 'Читайте у нас'
	        }
	    },
	    fr: {
	        facebook: {
	            me: 'Se connecter',
	            us: 'Suivez-nous'
	        },
	        twitter: {
	            me: 'Tweetez moi',
	            us: 'Tweetez nous'
	        },
	        instagram: {
	            me: 'Suivez-moi',
	            us: 'Suivez-nous'
	        },
	        messenger: {
	            me: 'Ecrivez-moi',
	            us: 'Ecrivez-nous'
	        },
	        telegram: {
	            me: 'Telegram moi',
	            us: 'Telegram nous'
	        },
	        whatsapp: {
	            me: 'Écrivez-moi',
	            us: 'Écrivez-nous'
	        },
	        vkontakte: {
	            me: 'Écrivez-moi',
	            us: 'Écrivez-nous'
	        },
	        phone: {
	            me: 'Appelez-moi',
	            us: 'Appelez-nous'
	        },
	        email: {
	            me: 'Ecrivez-moi',
	            us: 'Ecrivez-nous'
	        },
	        skype: {
	            me: 'Skype avec moi',
	            us: 'Skype avec nous'
	        },
	        linkedin: {
	            me: 'Connectons-nous',
	            us: 'Connectez-vous avec nous'
	        },
	        github: {
	            me: 'Codez avec moi',
	            us: 'Codez avec nous'
	        },
	        stackoverflow: {
	            me: 'Codez avec moi',
	            us: 'Codez avec nous'
	        },
	        xing: {
	            me: 'Se connecter',
	            us: 'Connectez-vous avec nous'
	        },
	        slack: {
	            me: 'Discutez avec moi',
	            us: 'Discutez avec nous'
	        },
	        website: {
	            me: 'Visitez',
	            us: 'Visitez'
	        },
	        kik: {
	            me: 'Discutez avec moi',
	            us: 'Discutez avec nous'
	        },
	        producthunt: {
	            me: 'Chassez-moi',
	            us: 'Chassez-nous'
	        },
	        indiegogo: {
	            me: 'Participez au projet',
	            us: 'Participez au projet'
	        },
	        kickstarter: {
	            me: 'Soutenez-moi',
	            us: 'Soutenez-nous'
	        },
	        snapchat: {
	            me: 'Ajoutez-moi',
	            us: 'Ajoutez-nous'
	        },
	        youtube: {
	            me: 'Suivez-moi',
	            us: 'Suivez-nous'
	        },
	        vimeo: {
	            me: 'Suivez-moi',
	            us: 'Suivez-nous'
	        },
	        soundcloud: {
	            me: 'Suivez-moi',
	            us: 'Suivez-nous'
	        },
	        medium: {
	            me: 'Lire de moi',
	            us: 'Lire de nous'
	        }
	    },
	    nl: {
	        facebook: {
	            me: 'Word vrienden',
	            us: 'Like ons'
	        },
	        twitter: {
	            me: 'Tweet mij',
	            us: 'Tweet ons'
	        },
	        instagram: {
	            me: 'Volg mij',
	            us: 'Volg ons'
	        },
	        messenger: {
	            me: 'Stuur een bericht',
	            us: 'Stuur een bericht'
	        },
	        telegram: {
	            me: 'Stuur een Telegram',
	            us: 'Stuur een Telegram'
	        },
	        whatsapp: {
	            me: 'WhatsApp mij',
	            us: 'WhatsApp ons'
	        },
	        vkontakte: {
	            me: 'Bericht mij',
	            us: 'Bericht ons'
	        },
	        phone: {
	            me: 'Bel mij',
	            us: 'Bel ons'
	        },
	        email: {
	            me: 'E-mail mij',
	            us: 'E-mail ons'
	        },
	        skype: {
	            me: 'Skype mij',
	            us: 'Skype ons'
	        },
	        linkedin: {
	            me: 'Connect met mij',
	            us: 'Connect met ons'
	        },
	        github: {
	            me: 'Check mijn code',
	            us: 'Check onze code'
	        },
	        stackoverflow: {
	            me: 'Check mijn code',
	            us: 'Check onze code'
	        },
	        xing: {
	            me: 'Connect met mij',
	            us: 'Connect met ons'
	        },
	        slack: {
	            me: 'Chat met mij',
	            us: 'Chat met ons'
	        },
	        website: {
	            me: 'Bezoek mijn site',
	            us: 'Bezoek onze site'
	        },
	        kik: {
	            me: 'Chat met mij',
	            us: 'Chat met ons'
	        },
	        producthunt: {
	            me: 'Producthunt mij',
	            us: 'Producthunt ons'
	        },
	        indiegogo: {
	            me: 'Pledge voor mij',
	            us: 'Pledge voor ons'
	        },
	        kickstarter: {
	            me: 'Steun mij',
	            us: 'Steun ons'
	        },
	        snapchat: {
	            me: 'Snap mij',
	            us: 'Snap ons'
	        },
	        youtube: {
	            me: 'Bekijk mij',
	            us: 'Bekijk ons'
	        },
	        vimeo: {
	            me: 'Bekijk mij',
	            us: 'Bekijk ons'
	        },
	        soundcloud: {
	            me: 'Listen naar mij',
	            us: 'Listen naar ons'
	        },
	        medium: {
	            me: 'Lees mij',
	            us: 'Lees ons'
	        }
	    },
	    ch: {
	        facebook: {
	            me: '我的Facebook',
	            us: '我們的Facebook'
	        },
	        twitter: {
	            me: '在Twitter上關注我',
	            us: '在Twitter關注我們'
	        },
	        instagram: {
	            me: '關注我',
	            us: '關注我們'
	        },
	        messenger: {
	            me: '用Message發送訊息',
	            us: '用Message發送訊息'
	        },
	        telegram: {
	            me: 'Telegram',
	            us: 'Telegram'
	        },
	        whatsapp: {
	            me: '發送訊息',
	            us: '發送訊息'
	        },
	        vkontakte: {
	            me: '發送訊息',
	            us: '發送訊息'
	        },
	        phone: {
	            me: '電話',
	            us: '電話'
	        },
	        email: {
	            me: '電子郵件',
	            us: '電子郵件'
	        },
	        skype: {
	            me: 'Skype',
	            us: 'Skype'
	        },
	        linkedin: {
	            me: 'Linkedin',
	            us: 'Linkedin'
	        },
	        github: {
	            me: '我的Github',
	            us: '我們的Github '
	        },
	        stackoverflow: {
	            me: '我的Github',
	            us: '我們的Github '
	        },
	        xing: {
	            me: 'Xing',
	            us: 'Xing'
	        },
	        slack: {
	            me: 'Slack',
	            us: 'Slack'
	        },
	        website: {
	            me: '我的網站',
	            us: '我們的網站'
	        },
	        kik: {
	            me: 'kik',
	            us: 'kik'
	        },
	        producthunt: {
	            me: 'Producthunt',
	            us: 'Producthunt'
	        },
	        indiegogo: {
	            me: '贊助我',
	            us: '贊助我們'
	        },
	        kickstarter: {
	            me: 'kickstarter',
	            us: 'Kickstarter'
	        },
	        snapchat: {
	            me: 'snapchat',
	            us: 'snapchat'
	        },
	        youtube: {
	            me: '觀看我在youtube上的影片',
	            us: '觀看我們在youtube上的影片'
	        },
	        vimeo: {
	            me: 'vimeo',
	            us: 'vimeo'
	        },
	        soundcloud: {
	            me: 'soundcloud',
	            us: 'soundcloud'
	        },
	        medium: {
	            me: 'medium',
	            us: 'medium'
	        }
	    },
	    fi: {
	        facebook: {
	            me: 'Lisää ystäväksi',
	            us: 'Tykkää meistä'
	        },
	        twitter: {
	            me: 'Twiittaa minulle',
	            us: 'Twiittaa meille'
	        },
	        instagram: {
	            me: 'Seuraa minua',
	            us: 'Seuraa meitä'
	        },
	        messenger: {
	            me: 'Lähetä minulle viesti',
	            us: 'Lähetä meille viesti'
	        },
	        telegram: {
	            me: 'Kirjoita minulle',
	            us: 'Kirjoita meille'
	        },
	        whatsapp: {
	            me: 'Kirjoita minulle',
	            us: 'Kirjoita meille'
	        },
	        vkontakte: {
	            me: 'Kirjoita minulle',
	            us: 'Kirjoita meille'
	        },
	        phone: {
	            me: 'Soita minulle',
	            us: 'Soita meille'
	        },
	        email: {
	            me: 'Lähetä minulle sähköpostia',
	            us: 'Lähetä meille sähköpostia'
	        },
	        skype: {
	            me: 'Soita minulle Skypellä',
	            us: 'Soita meille Skypellä'
	        },
	        linkedin: {
	            me: 'Verkostoidu kanssani',
	            us: 'Verkostoidu kanssamme'
	        },
	        github: {
	            me: 'Code kanssani',
	            us: 'Code kanssamme'
	        },
	        stackoverflow: {
	            me: 'Code kanssani',
	            us: 'Code kanssamme'
	        },
	        xing: {
	            me: 'Verkostoidu kanssani',
	            us: 'Verkostoidu kanssamme'
	        },
	        slack: {
	            me: 'Chattaa kanssani',
	            us: 'Chattaa kanssamme'
	        },
	        website: {
	            me: 'Käy sivuillani',
	            us: 'Käy sivuillamme'
	        },
	        kik: {
	            me: 'Chattaa kanssani',
	            us: 'Chattaa kanssamme'
	        },
	        producthunt: {
	            me: 'Metsästä minut Product Huntissa',
	            us: 'Metsästä meidät Product Huntissa'
	        },
	        indiegogo: {
	            me: 'Takaa minua',
	            us: 'Takaa meitä'
	        },
	        kickstarter: {
	            me: 'Takaa minua',
	            us: 'Takaa meitä'
	        },
	        snapchat: {
	            me: 'Snappää minulle',
	            us: 'Snäppää meille'
	        },
	        youtube: {
	            me: 'Katso kanssani',
	            us: 'Katso kanssamme'
	        },
	        vimeo: {
	            me: 'Katso kanssani',
	            us: 'Katso kanssamme'
	        },
	        soundcloud: {
	            me: 'Kuuntele kanssani',
	            us: 'Kuuntele kanssamme'
	        },
	        medium: {
	            me: 'Lue juttujani',
	            us: 'Lue juttujamme'
	        }
	    },
	    sk: {
	        facebook: {
	            me: 'Lajkni ma',
	            us: 'Lajkni nás'
	        },
	        twitter: {
	            me: 'Tweetuj',
	            us: 'Tweetuj'
	        },
	        instagram: {
	            me: 'Followuj ma',
	            us: 'Followuj nás'
	        },
	        messenger: {
	            me: 'Napíš mi',
	            us: 'Napíš nám'
	        },
	        telegram: {
	            me: 'Napíš mi',
	            us: 'Napíš nám'
	        },
	        whatsapp: {
	            me: 'Napíš mi',
	            us: 'Napíš nám'
	        },
	        vkontakte: {
	            me: 'Napíš mi',
	            us: 'Napíš nám'
	        },
	        phone: {
	            me: 'Zavolaj mi',
	            us: 'Zavolaj nám'
	        },
	        email: {
	            me: 'Napíš mi email',
	            us: 'Napíš nám email'
	        },
	        skype: {
	            me: 'Skypuj so mnou',
	            us: 'Skypuj s nami'
	        },
	        linkedin: {
	            me: 'Pridaj si ma',
	            us: 'Pridaj si nás'
	        },
	        github: {
	            me: 'Kóduj so mnou',
	            us: 'Kóduj s nami'
	        },
	        stackoverflow: {
	            me: 'Kóduj so mnou',
	            us: 'Kóduj s nami'
	        },
	        xing: {
	            me: 'Pridaj si ma',
	            us: 'Pridaj si nás'
	        },
	        slack: {
	            me: 'Chatuj so mnou',
	            us: 'Chatuj s nami'
	        },
	        website: {
	            me: 'Navštív môj web',
	            us: 'Navštív náš web'
	        },
	        kik: {
	            me: 'Chatuj so mnou',
	            us: 'Chatuj s nami'
	        },
	        producthunt: {
	            me: 'Ulov ma',
	            us: 'Ulov nás'
	        },
	        indiegogo: {
	            me: 'Podpor ma',
	            us: 'Podpor nás'
	        },
	        kickstarter: {
	            me: 'Podpor ma',
	            us: 'Podpor nás'
	        },
	        snapchat: {
	            me: 'Snapuj',
	            us: 'Snapuj'
	        },
	        youtube: {
	            me: 'Pozeraj',
	            us: 'Pozeraj'
	        },
	        vimeo: {
	            me: 'Pozeraj',
	            us: 'Pozeraj'
	        },
	        soundcloud: {
	            me: 'Počúvaj',
	            us: 'Počúvaj'
	        },
	        medium: {
	            me: 'Čítaj',
	            us: 'Čítaj'
	        }
	    },
	    cs: {
	        facebook: {
	            me: 'Lajkni mě',
	            us: 'Lajkni nás'
	        },
	        twitter: {
	            me: 'Tweetuj',
	            us: 'Tweetuj'
	        },
	        instagram: {
	            me: 'Followuj mě',
	            us: 'Followuj nás'
	        },
	        messenger: {
	            me: 'Napiš mi',
	            us: 'Napiš nám'
	        },
	        telegram: {
	            me: 'Napiš mi',
	            us: 'Napiš nám'
	        },
	        whatsapp: {
	            me: 'Napiš mi',
	            us: 'Napiš nám'
	        },
	        vkontakte: {
	            me: 'Napiš mi',
	            us: 'Napiš nám'
	        },
	        phone: {
	            me: 'Zavolej mi',
	            us: 'Zavolej nám'
	        },
	        email: {
	            me: 'Napiš mi email',
	            us: 'Napiš nám email'
	        },
	        skype: {
	            me: 'Skypuj se mnou',
	            us: 'Skypuj s námi'
	        },
	        linkedin: {
	            me: 'Přidej si mě',
	            us: 'Přidej si nás'
	        },
	        github: {
	            me: 'Kóduj se mnou',
	            us: 'Kóduj s námi'
	        },
	        stackoverflow: {
	            me: 'Kóduj se mnou',
	            us: 'Kóduj s námi'
	        },
	        xing: {
	            me: 'Přidej si mě',
	            us: 'Přidej si nás'
	        },
	        slack: {
	            me: 'Chatuj se mnou',
	            us: 'Chatuj s námi'
	        },
	        website: {
	            me: 'Navštiv můj web',
	            us: 'Navštiv náš web'
	        },
	        kik: {
	            me: 'Chatuj se mnou',
	            us: 'Chatuj s námi'
	        },
	        producthunt: {
	            me: 'Ulov mě',
	            us: 'Ulov nás'
	        },
	        indiegogo: {
	            me: 'Podpoř mě',
	            us: 'Podpoř nás'
	        },
	        kickstarter: {
	            me: 'Podpoř mě',
	            us: 'Podpoř nás'
	        },
	        snapchat: {
	            me: 'Snapuj',
	            us: 'Snapuj'
	        },
	        youtube: {
	            me: 'Sleduj',
	            us: 'Sleduj'
	        },
	        vimeo: {
	            me: 'Sleduj',
	            us: 'Sleduj'
	        },
	        soundcloud: {
	            me: 'Poslouchej',
	            us: 'Poslouchej'
	        },
	        medium: {
	            me: 'Čti',
	            us: 'Čti'
	        }
	    },
	    se: {
	        facebook: {
	            me: 'Bli vän med mig',
	            us: 'Gilla oss'
	        },
	        twitter: {
	            me: 'Twittra mig',
	            us: 'Twittra oss'
	        },
	        instagram: {
	            me: 'Följ mig',
	            us: 'Följ oss'
	        },
	        messenger: {
	            me: 'Skicka mig ett meddelande',
	            us: 'Skicka oss ett meddelande'
	        },
	        telegram: {
	            me: 'Skicka mig ett telegram',
	            us: 'Skicka oss ett telegram'
	        },
	        whatsapp: {
	            me: 'Skriv till mig',
	            us: 'Skriv till oss'
	        },
	        vkontakte: {
	            me: 'Skriv till mig',
	            us: 'Skriv till oss'
	        },
	        phone: {
	            me: 'Ring mig',
	            us: 'Ring oss'
	        },
	        email: {
	            me: 'Skicka e-mail till mig',
	            us: 'Skicka e-mail till oss'
	        },
	        skype: {
	            me: 'Skypa med mig',
	            us: 'Skypa med oss'
	        },
	        linkedin: {
	            me: 'Anslut med mig',
	            us: 'Anslut med oss'
	        },
	        github: {
	            me: 'Koda med mig',
	            us: 'Koda med oss'
	        },
	        stackoverflow: {
	            me: 'Koda med mig',
	            us: 'Koda med oss'
	        },
	        xing: {
	            me: 'Anslut med mig',
	            us: 'Anslut med oss'
	        },
	        slack: {
	            me: 'Chatta med mig',
	            us: 'Chatta med oss'
	        },
	        website: {
	            me: 'Besök mig',
	            us: 'Besök oss'
	        },
	        kik: {
	            me: 'Chatta med mig',
	            us: 'Chatta med oss'
	        },
	        producthunt: {
	            me: 'Jaga mig',
	            us: 'Jaga oss'
	        },
	        indiegogo: {
	            me: 'Stötta mig',
	            us: 'Stötta oss'
	        },
	        kickstarter: {
	            me: 'Stötta mig',
	            us: 'Stötta oss'
	        },
	        snapchat: {
	            me: 'Snappa med mig',
	            us: 'Snappa med oss'
	        },
	        youtube: {
	            me: 'Kolla med mig',
	            us: 'Kolla med oss'
	        },
	        vimeo: {
	            me: 'Kolla med mig',
	            us: 'Kolla med oss'
	        },
	        soundcloud: {
	            me: 'Lyssna med mig',
	            us: 'Lyssna med oss'
	        },
	        medium: {
	            me: 'Läs av mig',
	            us: 'Läs av oss'
	        }
	    },
	    pt: {
	        facebook: {
	            me: 'Adicione-me',
	            us: 'Faça Like'
	        },
	        twitter: {
	            me: 'Envie um Tweet',
	            us: 'Envie um Tweet'
	        },
	        instagram: {
	            me: 'Siga-me',
	            us: 'Siga-nos'
	        },
	        messenger: {
	            me: 'Contacte-me',
	            us: 'Contacte-nos'
	        },
	        telegram: {
	            me: 'Contacte-me',
	            us: 'Contacte-nos'
	        },
	        whatsapp: {
	            me: 'Escreva-me',
	            us: 'Escreva-nos'
	        },
	        vkontakte: {
	            me: 'Escreva-me',
	            us: 'Escreva-nos'
	        },
	        phone: {
	            me: 'Ligue-me',
	            us: 'Ligue-nos'
	        },
	        email: {
	            me: 'Envie-me um Email',
	            us: 'Envie-nos um Email'
	        },
	        skype: {
	            me: 'Skype',
	            us: 'Skype'
	        },
	        linkedin: {
	            me: 'Conecte-me',
	            us: 'Conecte-nos'
	        },
	        github: {
	            me: 'Programe comigo',
	            us: 'Programe connosco'
	        },
	        stackoverflow: {
	            me: 'Programe comigo',
	            us: 'Programe connosco'
	        },
	        xing: {
	            me: 'Ligue-se a mim',
	            us: 'Ligue-se a nós'
	        },
	        slack: {
	            me: 'Fale comigo',
	            us: 'Fale connosco'
	        },
	        website: {
	            me: 'Visite-me',
	            us: 'Visite-nos'
	        },
	        kik: {
	            me: 'Fale comigo',
	            us: 'Fale connosco'
	        },
	        producthunt: {
	            me: 'Encontre-me no ProductHunt',
	            us: 'Encontre-nos no ProductHunt'
	        },
	        indiegogo: {
	            me: 'Encontre-me no Indiegogo',
	            us: 'Encontre-nos no Indiegogo'
	        },
	        kickstarter: {
	            me: 'Encontre-me no Kickstarter',
	            us: 'Encontre-nos no Kickstarter'
	        },
	        snapchat: {
	            me: 'Envie-me um Snap',
	            us: 'Envie-nos um Snap'
	        },
	        youtube: {
	            me: 'Veja-me no Youtube',
	            us: 'Veja-nos no Youtube'
	        },
	        vimeo: {
	            me: 'Veja-me no Youtube',
	            us: 'Veja-nos no Youtube'
	        },
	        soundcloud: {
	            me: 'Ouça comigo',
	            us: 'Ouça connosco'
	        },
	        medium: {
	            me: 'Leia os meus artigos',
	            us: 'Leia os nossos artigos'
	        }
	    },
	    tr: {
	        facebook: {
	            me: 'Beni ekle',
	            us: 'Bizi beğen'
	        },
	        twitter: {
	            me: 'Bana tweet at',
	            us: 'Bize tweet at'
	        },
	        instagram: {
	            me: 'Beni takip et',
	            us: 'Bizi takip et'
	        },
	        messenger: {
	            me: 'Bana mesaj at',
	            us: 'Bize mesaj at'
	        },
	        telegram: {
	            me: 'Beni ekle',
	            us: 'Bizi ekle'
	        },
	        whatsapp: {
	            me: 'Bana yaz',
	            us: 'Bize yaz'
	        },
	        vkontakte: {
	            me: 'Bana yaz',
	            us: 'Bize yaz'
	        },
	        phone: {
	            me: 'Beni ara',
	            us: 'Bizi ara'
	        },
	        email: {
	            me: 'Bana mail at',
	            us: 'Bize mail at'
	        },
	        skype: {
	            me: 'Benimle Skype yap',
	            us: 'Bizimle Skype yap'
	        },
	        linkedin: {
	            me: 'Benimle bağlan',
	            us: 'Bizimle bağlan'
	        },
	        github: {
	            me: 'Benimle kodla',
	            us: 'Bizimle kodla'
	        },
	        stackoverflow: {
	            me: 'Benimle kodla',
	            us: 'Bizimle kodla'
	        },
	        xing: {
	            me: 'Benimle bağlan',
	            us: 'Bizimle bağlan'
	        },
	        slack: {
	            me: 'Benimle chat yap',
	            us: 'Bizimle chat yap'
	        },
	        website: {
	            me: 'Beni ziyaret et',
	            us: 'Bizi ziyaret et'
	        },
	        kik: {
	            me: 'Benimle chat yap',
	            us: 'Bizimle chat yap'
	        },
	        producthunt: {
	            me: 'Beni avla',
	            us: 'Bizi avla'
	        },
	        indiegogo: {
	            me: 'Bana söz ver',
	            us: 'Bize söz ver'
	        },
	        kickstarter: {
	            me: 'Beni destekle',
	            us: 'Bizi destekle'
	        },
	        snapchat: {
	            me: 'Beni snaple',
	            us: 'Bizi snaple'
	        },
	        youtube: {
	            me: 'Benimle izle',
	            us: 'Bizimle izle'
	        },
	        vimeo: {
	            me: 'Benimle izle',
	            us: 'Bizimle izle'
	        },
	        soundcloud: {
	            me: 'Benimle dinle',
	            us: 'Bizimle dinle'
	        },
	        medium: {
	            me: 'Benden oku',
	            us: 'Bizden oku'
	        }
	    },
	    it: {
	        facebook: {
	            me: 'Chidimi l\'amicizia',
	            us: 'Metti mi Piace'
	        },
	        twitter: {
	            me: 'Tweettami',
	            us: 'Tweettaci'
	        },
	        instagram: {
	            me: 'Seguimi',
	            us: 'Seguici'
	        },
	        messenger: {
	            me: 'Mandami un messaggio',
	            us: 'Mandaci un messaggio'
	        },
	        telegram: {
	            me: 'Scrivimi',
	            us: 'Scrivici'
	        },
	        whatsapp: {
	            me: 'Scrivimi',
	            us: 'Scrivici'
	        },
	        vkontakte: {
	            me: 'Scrivimi',
	            us: 'Scrivici'
	        },
	        phone: {
	            me: 'Chiamami',
	            us: 'Chiamaci'
	        },
	        email: {
	            me: 'Scrivimi',
	            us: 'Scrivici'
	        },
	        skype: {
	            me: 'Chiamami',
	            us: 'Chiamaci'
	        },
	        linkedin: {
	            me: 'Connettiti con me',
	            us: 'Connettiti con noi'
	        },
	        github: {
	            me: 'Programma con me',
	            us: 'Programma con noi'
	        },
	        stackoverflow: {
	            me: 'Programma con me',
	            us: 'Programma con noi'
	        },
	        xing: {
	            me: 'Connettiti con me',
	            us: 'Connettiti con noi'
	        },
	        slack: {
	            me: 'Chatta con me',
	            us: 'Chatta con noi'
	        },
	        website: {
	            me: 'Visita il mio sito',
	            us: 'Visita il nostro sito'
	        },
	        kik: {
	            me: 'Chatta con me',
	            us: 'Chatta con noi'
	        },
	        producthunt: {
	            me: 'Caccia con me',
	            us: 'Caccia con noi'
	        },
	        indiegogo: {
	            me: 'Impegnati per me',
	            us: 'Impegnati per noi'
	        },
	        kickstarter: {
	            me: 'Investi su di me',
	            us: 'Investi su di noi'
	        },
	        snapchat: {
	            me: 'Snap con me',
	            us: 'Snap con noi'
	        },
	        youtube: {
	            me: 'Guarda insieme a me',
	            us: 'Guarda insieme a noi'
	        },
	        vimeo: {
	            me: 'Guarda insieme a me',
	            us: 'Guarda insieme a noi'
	        },
	        soundcloud: {
	            me: 'Ascolta insieme a me',
	            us: 'Ascolta insieme a noi'
	        },
	        medium: {
	            me: 'Leggi da me',
	            us: 'Leggi da noi'
	        }
	    }
	};

	var CHANNEL_URLS = {
	    facebook: 'https://www.facebook.com/VALUE',
	    messenger: 'https://m.me/VALUE',
	    telegram: 'https://telegram.me/VALUE',
	    email: 'mailto:VALUE',
	    twitter: 'https://twitter.com/VALUE',
	    instagram: 'https://www.instagram.com/VALUE/',
	    phone: 'tel:VALUE',
	    skype: 'skype:VALUE',
	    slack: 'https://VALUE.slack.com',
	    kik: 'https://kik.me/VALUE',
	    snapchat: 'https://www.snapchat.com/add/VALUE',
	    producthunt: 'https://www.producthunt.com/@VALUE',
	    vkontakte: 'https://vk.com/VALUE',
	    linkedin: 'VALUE',
	    xing: 'VALUE',
	    youtube: 'VALUE',
	    vimeo: 'https://vimeo.com/VALUE',
	    soundcloud: 'https://soundcloud.com/VALUE',
	    medium: 'https://medium.com/@VALUE',
	    whatsapp: 'intent://send/@VALUE#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end'
	};

	var listItem = function listItem(title, channel, baseUrl, value) {
	    var url = baseUrl.replace('VALUE', value).replace(/<\/?[^>]+(>|$)/g, "");
	    var urlWithoutProtocol = url.replace(/(https?:\/\/|mailto:|tel:|skype:|intent:)/, '').replace(/^www\./, '').replace(/#Intent;scheme=smsto;package=com\.whatsapp;action=android\.intent\.action\.SENDTO;end/, '').replace(/\/\/send\/@/, '');
	    var urlWithHttp = !url.match(/(https?:\/\/|mailto:|tel:|skype:|intent:)/) ? 'http://' + url : url;
	    return '\n    <li class="item is-' + channel + '">\n      <a class="link" onclick="window.open(\'' + urlWithHttp + '\', \'_top\'); return false;" target="_blank">\n        <div class="icon">\n          <img src="./assets/icons/' + channel + '.svg" alt="' + channel + '">\n        </div>\n        <div class="content">\n          <h3 class="title">' + title + '</h3>\n          <span class="target">' + urlWithoutProtocol + '</span>\n        </div>\n      </a>\n  </li>';
	};

	var queryString = document.location.search.replace('?', '');
	var queryStringHash = _querystring2.default.decode(queryString);
	var serializedConfiguration = queryStringHash.c;
	var configuration = (0, _serializer.deserialize)(serializedConfiguration);

	if (!queryStringHash.preview) {
	    (function (i, s, o, g, r, a, m) {
	        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	            (i[r].q = i[r].q || []).push(arguments);
	        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	    ga('create', 'UA-443751-64', 'auto');
	    ga('set', 'anonymizeIp', true);
	    ga('set', 'dimension1', queryStringHash.referral);
	    ga('send', 'pageview');
	}

	configuration.channels.forEach(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 3);

	    var channel = _ref2[0];
	    var value = _ref2[1];
	    var type = _ref2[2];

	    var translation = CHANNEL_TITLE[configuration.language || DEFAULT_LANGUAGE];
	    var url = CHANNEL_URLS[channel] || 'VALUE';
	    var title = translation[channel] || CHANNEL_TITLE[DEFAULT_LANGUAGE][channel];
	    var pronounedTitle = title[configuration.pronoun || DEFAULT_PRONOUN];
	    var renderedListItem = listItem(pronounedTitle, channel, url, value);

	    if (type === 'classic') {
	        (0, _npmZepto2.default)('.list.classic').append(renderedListItem);
	    } else {
	        (0, _npmZepto2.default)('.list.social').append(renderedListItem);
	    }

	    if ((0, _npmZepto2.default)('.list.social li').length) {
	        (0, _npmZepto2.default)('.group.social').show();
	    }

	    if ((0, _npmZepto2.default)('.list.classic li').length) {
	        (0, _npmZepto2.default)('.group.classic').show();
	    }
	});

	if (configuration.introText && configuration.introText !== '') {
	    (0, _npmZepto2.default)('.group.intro .group-body').text(configuration.introText);
	    (0, _npmZepto2.default)('.group.intro').show();
	}

	if (configuration.branded === false) {
	    (0, _npmZepto2.default)('.closure').hide();
	}

	if (configuration.position) {
	    (0, _npmZepto2.default)('.widget').addClass('widget-' + configuration.position);
	}

	var translation = TRANSLATION[configuration.language || DEFAULT_LANGUAGE];
	var translatedHtml = (0, _npmZepto2.default)('.widget').html().replace(/__\(('|")([^'|"]*)('|")\)/gm, function (match) {
	    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        keys[_key - 1] = arguments[_key];
	    }

	    return translation[keys[1]] || TRANSLATION[DEFAULT_LANGUAGE][keys[1]];
	});
	(0, _npmZepto2.default)('.widget').html(translatedHtml);

	(0, _npmZepto2.default)('body').show();

	window.addEventListener('message', function (event) {
	    if (event.data === 'heightReceived') {
	        clearTimeout(intervalHandle);
	        intervalHandle = null;
	    }
	});

	intervalHandle = setInterval(function () {
	    window.parent.postMessage({ height: (0, _npmZepto2.default)('.widget').height() }, '*');
	}, 10);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var serialize = function serialize(hash) {
	  return btoa(unescape(encodeURIComponent(JSON.stringify(hash))));
	};

	var deserialize = function deserialize(string) {
	  return JSON.parse(decodeURIComponent(escape(atob(string))));
	};

	exports.serialize = serialize;
	exports.deserialize = deserialize;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* Zepto 1.1.6 - zepto event ajax form ie - zeptojs.com/license */

	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,

	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }

	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }

	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }

	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }

	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }

	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }

	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }

	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }

	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container

	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'

	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }

	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }

	    return dom
	  }

	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }

	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }

	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }

	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }

	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }

	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }

	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	      slice.call(
	        isSimple && !maybeID ?
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }

	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }

	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }

	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }

	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }

	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined

	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }

	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }

	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject

	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }

	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }

	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }

	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }

	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }

	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }

	    return elements
	  }

	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }

	  if (window.JSON) $.parseJSON = JSON.parse

	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })

	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,

	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },

	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1

	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)

	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }

	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }

	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }

	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return

	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }

	  // for now
	  $.fn.detach = $.fn.remove

	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })

	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }

	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append

	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this

	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode

	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null

	        var parentInDocument = $.contains(document.documentElement, parent)

	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()

	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }

	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })

	  zepto.Z.prototype = $.fn

	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto

	  return $
	})()

	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)

	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }

	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }

	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }

	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }

	  $.event = { add: add, remove: remove }

	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }

	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }

	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }

	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)

	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })

	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }

	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

	    return compatible(proxy, event)
	  }

	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }

	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }

	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }

	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }

	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }

	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }

	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }

	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })

	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }

	})(Zepto)

	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')

	  originAnchor.href = window.location.href

	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }

	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }

	  // Number of active Ajax requests
	  $.active = 0

	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }

	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false

	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }

	  // Empty function, used as default callback
	  function empty() {}

	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)

	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout

	    if (deferred) deferred.promise(xhr)

	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()

	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }

	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])

	      originalCallback = responseData = undefined
	    })

	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }

	    window[callbackName] = function(){
	      responseData = arguments
	    }

	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)

	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)

	    return xhr
	  }

	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }

	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }

	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }

	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }

	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

	    ajaxStart(settings)

	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }

	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)

	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'

	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())

	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }

	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout

	    if (deferred) deferred.promise(xhr)

	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader

	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText

	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }

	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }

	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }

	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)

	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }

	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }

	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }

	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }

	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }

	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }

	  var escape = encodeURIComponent

	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }

	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)

	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }

	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }

	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }

	})(Zepto)

	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }

	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)
	;

	if (true) {
	  module.exports = Zepto;
	}


/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(8);
	exports.encode = exports.stringify = __webpack_require__(9);


/***/ },
/* 8 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./iframe.sass", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./iframe.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html {\n  box-sizing: border-box;\n  box-sizing: inherit; }\n\nbody, html {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #666;\n  font-family: 'Karla', sans-serif;\n  -webkit-font-smoothing: antialiased; }\n\n::selection {\n  background: rgba(0, 0, 0, 0.05); }\n\na {\n  color: #666;\n  text-decoration: underline; }\n\nimg {\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.widget {\n  position: relative;\n  padding: 20px; }\n  .widget:after {\n    bottom: 4px;\n    position: absolute;\n    content: \"\";\n    height: 16px;\n    width: 25px; }\n  .widget.widget-right .widget-body {\n    border-radius: 10px 10px 0 10px; }\n  .widget.widget-right:after {\n    right: 20px;\n    background: url('data:image/svg+xml;utf8,<svg width=\"25px\" height=\"16px\" viewBox=\"0 0 25 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#ffffff\" d=\"M25,12.5252018 C25,15.840387 22.8468765,16.9321633 20.1797485,14.9555147 L0,0 L25,0 L25,12.5252018 Z\"/></svg>') no-repeat; }\n  .widget.widget-left .widget-body {\n    border-radius: 10px 10px 10px 0; }\n  .widget.widget-left:after {\n    left: 20px;\n    background: url('data:image/svg+xml;utf8,<svg width=\"25px\" height=\"16px\" viewBox=\"0 0 25 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#ffffff\" d=\"M25,12.5252018 C25,15.840387 22.8468765,16.9321633 20.1797485,14.9555147 L0,0 L25,0 L25,12.5252018 L25,12.5252018 Z\" transform=\"translate(12.500000, 7.970410) scale(-1, 1) translate(-12.500000, -7.970410)\"/></svg>') no-repeat; }\n  .widget .widget-body {\n    width: 260px;\n    background-color: white;\n    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3); }\n\n.group {\n  display: none; }\n\n.group-title {\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n  margin: 0;\n  padding: 0 1rem;\n  color: #444;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #f3f3f3;\n  letter-spacing: 0.5px; }\n\n.group-body {\n  padding: 0.5rem 1rem; }\n\n.list {\n  margin: 0 -1rem;\n  padding: 0;\n  list-style: none; }\n\n.item {\n  margin: 0;\n  padding: 0; }\n\n.link {\n  display: flex;\n  padding: 0.35rem 1rem;\n  text-decoration: none;\n  cursor: pointer; }\n  .link:hover {\n    background-color: #fafafa; }\n\n.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px; }\n  .icon img {\n    max-width: 20px;\n    max-height: 20px; }\n  .icon + .content {\n    margin-left: 1rem; }\n\n.content {\n  min-width: 0; }\n\n.title {\n  display: block;\n  margin: 0;\n  color: #444;\n  font-size: 12px;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0.5px; }\n\n.target {\n  display: block;\n  margin: .1rem 0 0;\n  color: #666;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.closure {\n  text-align: center;\n  padding-bottom: .5rem; }\n  .closure a {\n    display: inline-block;\n    padding: .5rem; }\n", ""]);

	// exports


/***/ }
/******/ ]);