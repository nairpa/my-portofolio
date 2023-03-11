import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "puesto": "Front-end developer",
                    "sobreMi":"",
                    "experiencia" : "Experiences",
                    "pasatiempos" : "Hobbies",
                    "pasatiempoPrimero": "Role playing",
                    "pasatiempoPrimeroDescripcion": "",
                    "pasatiempoSegundo": "To travel",
                    "pasatiempoSegundoDescripcion": ""
                }
            },
            es: {
                translation: {
                    "puesto": "Desarrolladora Front-end",
                    "sobreMi": "",
                    "experiencia" : "Mi experiencia",
                    "pasatiempos" : "Pasatiempos",
                    "pasatiempoPrimero": "Juegos de Rol",
                    "pasatiempoPrimeroDescripcion": "",
                    "pasatiempoSegundo": "Viajar",
                    "pasatiempoSegundoDescripcion": ""
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })