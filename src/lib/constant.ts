import RingsIcon from "./icons/rings.svelte";
import TrayIcon from "./icons/tray.svelte";
import FireworksIcon from "./icons/fireworks.svelte";

const weddingDay = "2025-07-05T19:00:00+02:00"
export const weddingDayDate = new Date(weddingDay)

export const googleMapsLink = 'https://maps.app.goo.gl/byZ9fAaE8vR1Wia96';
export const wazeLink =
    'https://www.waze.com/en/live-map/directions/es/md/majadahonda/c.-castano,-46?place=ChIJeRFx5GObQQ0Rm3-l6TgEjoc';

export const googleCalendarLink = 'https://calendar.app.google/5Uue9ed2NpcYZnU97';
export const stdCalendarLink = '/sara_y_jan.ics';

export const itinerary = [
    {
        name: 'Recepción',
        description: 'Estaremos encantados de daros la bienvenida.',
        start: new Date('2025-07-05T19:00:00+02:00'),
        end: new Date('2025-07-05T20:00:00+02:00'),
        icon: RingsIcon
    },
    {
        name: 'Cóctel',
        description: 'Compartirlo juntos hará esta noche especial.',
        start: new Date('2025-07-05T20:00:00+02:00'),
        end: new Date('2025-07-05T22:00:00+02:00'),
        icon: TrayIcon
    },
    {
        name: 'Fiesta',
        description: '!Hey, que no pare la fiesta!',
        start: new Date('2025-07-05T22:00:00+02:00'),
        end: new Date('2025-07-06T00:00:00+02:00'),
        icon: FireworksIcon
    }
]

export const gallery = [
    {
        src: 'images/foto1.avif',
        alt: '',
        caption: '2021'
    },
    {
        src: 'images/foto2.avif',
        alt: '',
        caption: '2022'
    },
    {
        src: 'images/foto3.avif',
        alt: '',
        caption: '2023'
    },
    {
        src: 'images/foto4.avif',
        alt: '',
        caption: '2024'
    },
    {
        src: 'images/foto5.avif',
        alt: '',
        caption: '2025'
    }
];