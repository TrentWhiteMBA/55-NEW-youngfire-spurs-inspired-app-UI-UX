export interface RadioStation {
  id: string;
  name: string;
  genre: string;
  streamUrl: string;
  accentColor: string;
  location?: string;
  description?: string;
  logo?: string;
}

export const GOSPEL_STATIONS: RadioStation[] = [
  {
    id: 'worship-air1',
    name: 'Air1 Worship Network',
    genre: 'Contemporary Praise & Worship',
    streamUrl: 'https://maestro.emfcdn.com/stream_for/air1/airable/aac',
    accentColor: '#F59E0B',
    location: 'National Sanctuary Network',
    description: 'Premier 24/7 contemporary Christian worship, elevating the Name of Jesus with nonstop praise.'
  },
  {
    id: 'praise-247',
    name: '24/7 Praise & Worship Radio',
    genre: 'High Praise & Altar Adoration',
    streamUrl: 'https://s4.radio.co/s7bd982a3e/listen',
    accentColor: '#EA580C',
    location: 'San Antonio, TX',
    description: 'Non-stop holy encounter, anthems of devotion, and passionate congregational worship.'
  },
  {
    id: 'gospel-worldwide',
    name: 'Gospel Worldwide 24/7',
    genre: 'Traditional & Modern Gospel',
    streamUrl: 'https://stream.0nlineradio.com/gospel',
    accentColor: '#D97706',
    location: 'Global Gospel Broadcast',
    description: 'Authentic gospel praise, powerhouse choir vocals, and timeless sanctuary soul.'
  },
  {
    id: 'positive-life',
    name: 'Positive Life Christian Radio',
    genre: 'Christian Contemporary & Praise',
    streamUrl: 'https://ice10.securenetsystems.net/PLR',
    accentColor: '#FBBF24',
    location: 'Sanctuary Airwaves',
    description: 'Christ-centered music, hope, encouragement, and daily uplifting spiritual strength.'
  },
  {
    id: 'equip-worship',
    name: 'Equip FM Christian Worship',
    genre: 'Expository Word & Worship',
    streamUrl: 'https://ice66.securenetsystems.net/EQUIPFM',
    accentColor: '#E2E8F0',
    location: 'Joshua House Broadcast',
    description: 'Sound biblical teaching, worship anthems, and apostolic discipleship exhortation.'
  },
  {
    id: 'ambient-prayer',
    name: 'Ambient Prayer & Intercession',
    genre: 'Instrumental Soaking & Warfare',
    streamUrl: 'https://s3.radio.co/s97f38db97/listen',
    accentColor: '#FFFFFF',
    location: 'Intercession Altar',
    description: 'Calming prophetic pads, piano, and soaking prayer chords for deep communion and scripture study.'
  },
  {
    id: 'urban-gospel-1fm',
    name: '1.FM All Times & Urban Gospel',
    genre: 'Urban Gospel & Golden Classics',
    streamUrl: 'http://strm112.1.fm/gospel_mobile_mp3',
    accentColor: '#D97706',
    location: 'Sanctuary Vault',
    description: 'Classic quartet harmonies, golden era gospel legends, and powerful testimonies.'
  },
  {
    id: 'acappella-sacred',
    name: '1.FM Sacred & Acappella Praise',
    genre: 'Sacred Hymnology & Choral',
    streamUrl: 'http://strm112.1.fm/acpl_mobile_mp3',
    accentColor: '#F59E0B',
    location: 'Sacred Choral Hall',
    description: 'Timeless doctrinal acappella harmonies, sacred choral arrangements, and holy devotionals.'
  }
];

export default GOSPEL_STATIONS;
