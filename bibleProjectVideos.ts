export interface ScriptureCircleBook {
  id: string;
  name: string;
  shortCode: string;
  category: string;
  bibleProjectVideoId: string;
  colorGradient: string;
  youtubeUrl?: string;
}

export const SCRIPTURE_66_BOOKS: ScriptureCircleBook[] = [
  // Pentateuch (Law)
  { id: 'GEN', name: 'Genesis', shortCode: 'GEN', category: 'Pentateuch', bibleProjectVideoId: 'GQI72THyO5I', colorGradient: 'from-amber-600 to-yellow-800' },
  { id: 'EXO', name: 'Exodus', shortCode: 'EXO', category: 'Pentateuch', bibleProjectVideoId: 'jH_aojNJM3E', colorGradient: 'from-orange-600 to-amber-800' },
  { id: 'LEV', name: 'Leviticus', shortCode: 'LEV', category: 'Pentateuch', bibleProjectVideoId: 'IJ-FekWUZzE', colorGradient: 'from-red-600 to-amber-900' },
  { id: 'NUM', name: 'Numbers', shortCode: 'NUM', category: 'Pentateuch', bibleProjectVideoId: 'tp5MIrMZFqo', colorGradient: 'from-yellow-600 to-orange-900' },
  { id: 'DEU', name: 'Deuteronomy', shortCode: 'DEU', category: 'Pentateuch', bibleProjectVideoId: 'q5QEH9bH8AU', colorGradient: 'from-amber-700 to-stone-900' },

  // Historical Books
  { id: 'JOS', name: 'Joshua', shortCode: 'JOS', category: 'Historical', bibleProjectVideoId: 'JqOqJlFF_eU', colorGradient: 'from-blue-600 to-indigo-900' },
  { id: 'JDG', name: 'Judges', shortCode: 'JDG', category: 'Historical', bibleProjectVideoId: 'kOYy8iCfIJ4', colorGradient: 'from-red-700 to-slate-900' },
  { id: 'RUT', name: 'Ruth', shortCode: 'RUT', category: 'Historical', bibleProjectVideoId: '0h1eoBeR4Jk', colorGradient: 'from-rose-500 to-amber-900' },
  { id: '1SA', name: '1 Samuel', shortCode: '1SA', category: 'Historical', bibleProjectVideoId: 'QJOju5Dw0V0', colorGradient: 'from-slate-700 to-zinc-900' },
  { id: '2SA', name: '2 Samuel', shortCode: '2SA', category: 'Historical', bibleProjectVideoId: 'YvoWDXNDJgs', colorGradient: 'from-purple-700 to-slate-900' },
  { id: '1KI', name: '1 Kings', shortCode: '1KI', category: 'Historical', bibleProjectVideoId: 'bVFW3wbi9pk', colorGradient: 'from-amber-600 to-slate-900' },
  { id: '2KI', name: '2 Kings', shortCode: '2KI', category: 'Historical', bibleProjectVideoId: 'bVFW3wbi9pk', colorGradient: 'from-orange-700 to-zinc-900' },
  { id: '1CH', name: '1 Chronicles', shortCode: '1CH', category: 'Historical', bibleProjectVideoId: 'HR7xaHv3Ias', colorGradient: 'from-indigo-700 to-slate-900' },
  { id: '2CH', name: '2 Chronicles', shortCode: '2CH', category: 'Historical', bibleProjectVideoId: 'HR7xaHv3Ias', colorGradient: 'from-violet-700 to-slate-900' },
  { id: 'EZR', name: 'Ezra', shortCode: 'EZR', category: 'Historical', bibleProjectVideoId: 'MkETkRv9tG8', colorGradient: 'from-teal-700 to-slate-900' },
  { id: 'NEH', name: 'Nehemiah', shortCode: 'NEH', category: 'Historical', bibleProjectVideoId: 'MkETkRv9tG8', colorGradient: 'from-cyan-700 to-slate-900' },
  { id: 'EST', name: 'Esther', shortCode: 'EST', category: 'Historical', bibleProjectVideoId: 'JydNSlufRIs', colorGradient: 'from-pink-600 to-purple-900' },

  // Wisdom & Poetry
  { id: 'JOB', name: 'Job', shortCode: 'JOB', category: 'Poetry', bibleProjectVideoId: 'xQwnH8th_fs', colorGradient: 'from-stone-700 to-zinc-900' },
  { id: 'PSA', name: 'Psalms', shortCode: 'PSA', category: 'Poetry', bibleProjectVideoId: 'j9phNEaPrv8', colorGradient: 'from-sky-600 to-blue-950' },
  { id: 'PRO', name: 'Proverbs', shortCode: 'PRO', category: 'Poetry', bibleProjectVideoId: 'AzmYV8GNAIM', colorGradient: 'from-emerald-600 to-teal-950' },
  { id: 'ECC', name: 'Ecclesiastes', shortCode: 'ECC', category: 'Poetry', bibleProjectVideoId: 'lrsQ1tc-2wk', colorGradient: 'from-amber-700 to-stone-900' },
  { id: 'SNG', name: 'Song of Solomon', shortCode: 'SNG', category: 'Poetry', bibleProjectVideoId: '4KC7xE4fgOw', colorGradient: 'from-rose-600 to-pink-950' },

  // Major Prophets
  { id: 'ISA', name: 'Isaiah', shortCode: 'ISA', category: 'Major Prophets', bibleProjectVideoId: 'd0A6Uchb1F8', colorGradient: 'from-red-600 to-purple-950' },
  { id: 'JER', name: 'Jeremiah', shortCode: 'JER', category: 'Major Prophets', bibleProjectVideoId: 'RSK36cHbrk0', colorGradient: 'from-blue-700 to-slate-950' },
  { id: 'LAM', name: 'Lamentations', shortCode: 'LAM', category: 'Major Prophets', bibleProjectVideoId: 'p8GDFPdaQZQ', colorGradient: 'from-slate-800 to-zinc-950' },
  { id: 'EZK', name: 'Ezekiel', shortCode: 'EZK', category: 'Major Prophets', bibleProjectVideoId: 'R-CIPu1nko8', colorGradient: 'from-indigo-600 to-blue-950' },
  { id: 'DAN', name: 'Daniel', shortCode: 'DAN', category: 'Major Prophets', bibleProjectVideoId: '9cSC9uobtPM', colorGradient: 'from-cyan-600 to-slate-950' },

  // Minor Prophets
  { id: 'HOS', name: 'Hosea', shortCode: 'HOS', category: 'Minor Prophets', bibleProjectVideoId: 'kE6SZ1ogOVU', colorGradient: 'from-rose-600 to-slate-950' },
  { id: 'JOL', name: 'Joel', shortCode: 'JOL', category: 'Minor Prophets', bibleProjectVideoId: 'zQLazbgz90c', colorGradient: 'from-orange-600 to-amber-950' },
  { id: 'AMO', name: 'Amos', shortCode: 'AMO', category: 'Minor Prophets', bibleProjectVideoId: 'mGgWaPGpGz4', colorGradient: 'from-yellow-700 to-stone-950' },
  { id: 'OBA', name: 'Obadiah', shortCode: 'OBA', category: 'Minor Prophets', bibleProjectVideoId: 'i4ogCrEoG5s', colorGradient: 'from-red-700 to-zinc-950' },
  { id: 'JON', name: 'Jonah', shortCode: 'JON', category: 'Minor Prophets', bibleProjectVideoId: 'dLIabZc0O4c', colorGradient: 'from-teal-600 to-cyan-950' },
  { id: 'MIC', name: 'Micah', shortCode: 'MIC', category: 'Minor Prophets', bibleProjectVideoId: 'MFEUEcylwLc', colorGradient: 'from-emerald-700 to-slate-950' },
  { id: 'NAM', name: 'Nahum', shortCode: 'NAM', category: 'Minor Prophets', bibleProjectVideoId: 'Y30DanA5EhU', colorGradient: 'from-amber-800 to-stone-950' },
  { id: 'HAB', name: 'Habakkuk', shortCode: 'HAB', category: 'Minor Prophets', bibleProjectVideoId: 'OPMaRqGJPUU', colorGradient: 'from-indigo-700 to-slate-950' },
  { id: 'ZEP', name: 'Zephaniah', shortCode: 'ZEP', category: 'Minor Prophets', bibleProjectVideoId: 'oFZknKPNvz8', colorGradient: 'from-purple-800 to-zinc-950' },
  { id: 'HAG', name: 'Haggai', shortCode: 'HAG', category: 'Minor Prophets', bibleProjectVideoId: 'juPvv_xcX-U', colorGradient: 'from-yellow-600 to-slate-950' },
  { id: 'ZEC', name: 'Zechariah', shortCode: 'ZEC', category: 'Minor Prophets', bibleProjectVideoId: '_106IfO6Kc0', colorGradient: 'from-blue-600 to-indigo-950' },
  { id: 'MAL', name: 'Malachi', shortCode: 'MAL', category: 'Minor Prophets', bibleProjectVideoId: 'HPGShWZ4Jvk', colorGradient: 'from-red-600 to-orange-950' },

  // Gospels & Acts
  { id: 'MAT', name: 'Matthew', shortCode: 'MAT', category: 'Gospels', bibleProjectVideoId: '3Dv4-n6OYGI', colorGradient: 'from-amber-500 to-yellow-900' },
  { id: 'MRK', name: 'Mark', shortCode: 'MRK', category: 'Gospels', bibleProjectVideoId: 'HGHqu9-DtXk', colorGradient: 'from-red-600 to-slate-950' },
  { id: 'LUK', name: 'Luke', shortCode: 'LUK', category: 'Gospels', bibleProjectVideoId: 'XIb_dCIxzr0', colorGradient: 'from-blue-600 to-sky-950' },
  { id: 'JHN', name: 'John', shortCode: 'JHN', category: 'Gospels', bibleProjectVideoId: 'G-2e9mMf7E8', colorGradient: 'from-cyan-500 to-blue-950' },
  { id: 'ACT', name: 'Acts', shortCode: 'ACT', category: 'History', bibleProjectVideoId: 'CGbNw855ksw', colorGradient: 'from-orange-600 to-red-950' },

  // Pauline Epistles
  { id: 'ROM', name: 'Romans', shortCode: 'ROM', category: 'Epistles', bibleProjectVideoId: 'ej_6dVdJSIU', colorGradient: 'from-purple-600 to-indigo-950' },
  { id: '1CO', name: '1 Corinthians', shortCode: '1CO', category: 'Epistles', bibleProjectVideoId: 'yiHf8klCCc4', colorGradient: 'from-indigo-600 to-slate-950' },
  { id: '2CO', name: '2 Corinthians', shortCode: '2CO', category: 'Epistles', bibleProjectVideoId: '3lfPK2vfC54', colorGradient: 'from-blue-600 to-indigo-950' },
  { id: 'GAL', name: 'Galatians', shortCode: 'GAL', category: 'Epistles', bibleProjectVideoId: 'vmx4UjRFp0M', colorGradient: 'from-emerald-600 to-teal-950' },
  { id: 'EPH', name: 'Ephesians', shortCode: 'EPH', category: 'Epistles', bibleProjectVideoId: 'Y71r-T98E2Q', colorGradient: 'from-cyan-600 to-blue-950' },
  { id: 'PHP', name: 'Philippians', shortCode: 'PHP', category: 'Epistles', bibleProjectVideoId: 'oE9qqW1-BkU', colorGradient: 'from-pink-600 to-rose-950' },
  { id: 'COL', name: 'Colossians', shortCode: 'COL', category: 'Epistles', bibleProjectVideoId: 'pXTXlDxQsvc', colorGradient: 'from-violet-600 to-purple-950' },
  { id: '1TH', name: '1 Thessalonians', shortCode: '1TH', category: 'Epistles', bibleProjectVideoId: 'No7Nq6IX23c', colorGradient: 'from-sky-600 to-slate-950' },
  { id: '2TH', name: '2 Thessalonians', shortCode: '2TH', category: 'Epistles', bibleProjectVideoId: 'kbPBDKOn1cc', colorGradient: 'from-blue-700 to-slate-950' },
  { id: '1TI', name: '1 Timothy', shortCode: '1TI', category: 'Epistles', bibleProjectVideoId: '7RoqnGcEjcs', colorGradient: 'from-amber-600 to-stone-950' },
  { id: '2TI', name: '2 Timothy', shortCode: '2TI', category: 'Epistles', bibleProjectVideoId: 'urlvnxCaL00', colorGradient: 'from-orange-700 to-zinc-950' },
  { id: 'TIT', name: 'Titus', shortCode: 'TIT', category: 'Epistles', bibleProjectVideoId: 'PUEYCVXJM3k', colorGradient: 'from-yellow-700 to-slate-950' },
  { id: 'PHM', name: 'Philemon', shortCode: 'PHM', category: 'Epistles', bibleProjectVideoId: 'aW9Q3Jt6Yvk', colorGradient: 'from-teal-600 to-zinc-950' },

  // General Epistles & Revelation
  { id: 'HEB', name: 'Hebrews', shortCode: 'HEB', category: 'Epistles', bibleProjectVideoId: '1fNWTZZwgbs', colorGradient: 'from-amber-600 to-orange-950' },
  { id: 'JAS', name: 'James', shortCode: 'JAS', category: 'Epistles', bibleProjectVideoId: 'qn-hLHWwRYY', colorGradient: 'from-emerald-600 to-stone-950' },
  { id: '1PE', name: '1 Peter', shortCode: '1PE', category: 'Epistles', bibleProjectVideoId: 'WhP7AZQlzCg', colorGradient: 'from-blue-600 to-slate-950' },
  { id: '2PE', name: '2 Peter', shortCode: '2PE', category: 'Epistles', bibleProjectVideoId: 'wWLv_ITyKYc', colorGradient: 'from-indigo-600 to-zinc-950' },
  { id: '1JN', name: '1 John', shortCode: '1JN', category: 'Epistles', bibleProjectVideoId: 'l3QkE6nKylM', colorGradient: 'from-rose-600 to-purple-950' },
  { id: '2JN', name: '2 John', shortCode: '2JN', category: 'Epistles', bibleProjectVideoId: 'RUfh_wOsauk', colorGradient: 'from-pink-600 to-slate-950' },
  { id: '3JN', name: '3 John', shortCode: '3JN', category: 'Epistles', bibleProjectVideoId: 'l3QkE6nKylM', colorGradient: 'from-purple-600 to-zinc-950' },
  { id: 'JUD', name: 'Jude', shortCode: 'JUD', category: 'Epistles', bibleProjectVideoId: '6UoCmakZmys', colorGradient: 'from-red-700 to-amber-950' },
  { id: 'REV', name: 'Revelation', shortCode: 'REV', category: 'Prophecy', bibleProjectVideoId: '5nvVVcYD-0w', colorGradient: 'from-purple-600 to-red-950' }
];

export const getBibleProjectUrl = (bookOrId: ScriptureCircleBook | string): string => {
  if (typeof bookOrId === 'string') {
    const book = SCRIPTURE_66_BOOKS.find(b => b.id === bookOrId || b.name.toLowerCase() === bookOrId.toLowerCase() || b.shortCode.toLowerCase() === bookOrId.toLowerCase());
    return book ? `https://www.youtube.com/watch?v=${book.bibleProjectVideoId}` : `https://www.youtube.com/results?search_query=The+Bible+Project+${encodeURIComponent(bookOrId)}+Overview`;
  }
  return `https://www.youtube.com/watch?v=${bookOrId.bibleProjectVideoId}`;
};
