export const Langs = {
    eng: {
        capButStart: "goto Start Page",
        capButTable: "goto Table Page",
        capButAbout: "goto About Page",
        msgMainPage: "This is START PAGE of site",
        msgAboutPage: "This is ABOUT PAGE of site. More info wait plese",
        msgTablePage: "This is TABLE PAGE of site. Table app will be here soon.",
    },
    ukr: {
        capButStart: "Стартова Сторінка",
        capButTable: "Таблична Сторінка",
        capButAbout: "Розповідна Сторінка",
        msgMainPage: "Це СТАРТОВА СТОРІІНКА сайту",
        msgAboutPage: "Це сторінка сайту про автора. далі буде більше інформації.",
        msgTablePage: "Це сторинка сайту де буде інформация про додаток. У скорому майбутньому",
    },
    getLang(lang) {
        return this[lang];
    }
}