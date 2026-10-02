/**
 * Canon Bible Project Master Data (66 Canonical Books)
 * Official verified Bible Project video IDs and high-reliability YouTube image server URLs.
 */

export interface CanonBookMeta {
  id: string; // e.g., 'genesis'
  title: string; // 'Genesis'
  testament: 'OT' | 'NT';
  order: number; // 1 to 66
  youtubeId: string; // Official Bible Project YouTube Video ID
  thumbnailUrl: string; // https://img.youtube.com/vi//hqdefault.jpg
  shortCode: string;
  colorGradient: string;
}

export const CANON_66_BOOKS: CanonBookMeta[] = [
  {
    "id": "genesis",
    "title": "Genesis",
    "testament": "OT",
    "order": 1,
    "shortCode": "GEN",
    "colorGradient": "from-amber-600 to-yellow-800",
    "youtubeId": "GQI72THyO5I",
    "thumbnailUrl": "https://img.youtube.com/vi/GQI72THyO5I/hqdefault.jpg"
  },
  {
    "id": "exodus",
    "title": "Exodus",
    "testament": "OT",
    "order": 2,
    "shortCode": "EXO",
    "colorGradient": "from-orange-600 to-amber-800",
    "youtubeId": "jH_aojNJM3E",
    "thumbnailUrl": "https://img.youtube.com/vi/jH_aojNJM3E/hqdefault.jpg"
  },
  {
    "id": "leviticus",
    "title": "Leviticus",
    "testament": "OT",
    "order": 3,
    "shortCode": "LEV",
    "colorGradient": "from-red-600 to-amber-900",
    "youtubeId": "IJ-FekWUZzE",
    "thumbnailUrl": "https://img.youtube.com/vi/IJ-FekWUZzE/hqdefault.jpg"
  },
  {
    "id": "numbers",
    "title": "Numbers",
    "testament": "OT",
    "order": 4,
    "shortCode": "NUM",
    "colorGradient": "from-yellow-600 to-orange-900",
    "youtubeId": "tp5MIrMZFqo",
    "thumbnailUrl": "https://img.youtube.com/vi/tp5MIrMZFqo/hqdefault.jpg"
  },
  {
    "id": "deuteronomy",
    "title": "Deuteronomy",
    "testament": "OT",
    "order": 5,
    "shortCode": "DEU",
    "colorGradient": "from-amber-700 to-stone-900",
    "youtubeId": "q5QEH9bH8AU",
    "thumbnailUrl": "https://img.youtube.com/vi/q5QEH9bH8AU/hqdefault.jpg"
  },
  {
    "id": "joshua",
    "title": "Joshua",
    "testament": "OT",
    "order": 6,
    "shortCode": "JOS",
    "colorGradient": "from-blue-600 to-indigo-900",
    "youtubeId": "JqOqJlFF_eU",
    "thumbnailUrl": "https://img.youtube.com/vi/JqOqJlFF_eU/hqdefault.jpg"
  },
  {
    "id": "judges",
    "title": "Judges",
    "testament": "OT",
    "order": 7,
    "shortCode": "JDG",
    "colorGradient": "from-red-700 to-slate-900",
    "youtubeId": "kOYy8iCfIJ4",
    "thumbnailUrl": "https://img.youtube.com/vi/kOYy8iCfIJ4/hqdefault.jpg"
  },
  {
    "id": "ruth",
    "title": "Ruth",
    "testament": "OT",
    "order": 8,
    "shortCode": "RUT",
    "colorGradient": "from-rose-500 to-amber-900",
    "youtubeId": "0h1eoBeR4Jk",
    "thumbnailUrl": "https://img.youtube.com/vi/0h1eoBeR4Jk/hqdefault.jpg"
  },
  {
    "id": "1samuel",
    "title": "1 Samuel",
    "testament": "OT",
    "order": 9,
    "shortCode": "1SA",
    "colorGradient": "from-slate-700 to-zinc-900",
    "youtubeId": "QJOju5Dw0V0",
    "thumbnailUrl": "https://img.youtube.com/vi/QJOju5Dw0V0/hqdefault.jpg"
  },
  {
    "id": "2samuel",
    "title": "2 Samuel",
    "testament": "OT",
    "order": 10,
    "shortCode": "2SA",
    "colorGradient": "from-purple-700 to-slate-900",
    "youtubeId": "YvoWDXNDJgs",
    "thumbnailUrl": "https://img.youtube.com/vi/YvoWDXNDJgs/hqdefault.jpg"
  },
  {
    "id": "1kings",
    "title": "1 Kings",
    "testament": "OT",
    "order": 11,
    "shortCode": "1KI",
    "colorGradient": "from-amber-600 to-slate-900",
    "youtubeId": "bVFW3wbi9pk",
    "thumbnailUrl": "https://img.youtube.com/vi/bVFW3wbi9pk/hqdefault.jpg"
  },
  {
    "id": "2kings",
    "title": "2 Kings",
    "testament": "OT",
    "order": 12,
    "shortCode": "2KI",
    "colorGradient": "from-orange-700 to-zinc-900",
    "youtubeId": "bVFW3wbi9pk",
    "thumbnailUrl": "https://img.youtube.com/vi/bVFW3wbi9pk/hqdefault.jpg"
  },
  {
    "id": "1chronicles",
    "title": "1 Chronicles",
    "testament": "OT",
    "order": 13,
    "shortCode": "1CH",
    "colorGradient": "from-indigo-700 to-slate-900",
    "youtubeId": "HR7xaHv3Ias",
    "thumbnailUrl": "https://img.youtube.com/vi/HR7xaHv3Ias/hqdefault.jpg"
  },
  {
    "id": "2chronicles",
    "title": "2 Chronicles",
    "testament": "OT",
    "order": 14,
    "shortCode": "2CH",
    "colorGradient": "from-violet-700 to-slate-900",
    "youtubeId": "HR7xaHv3Ias",
    "thumbnailUrl": "https://img.youtube.com/vi/HR7xaHv3Ias/hqdefault.jpg"
  },
  {
    "id": "ezra",
    "title": "Ezra",
    "testament": "OT",
    "order": 15,
    "shortCode": "EZR",
    "colorGradient": "from-teal-700 to-slate-900",
    "youtubeId": "MkETkRv9tG8",
    "thumbnailUrl": "https://img.youtube.com/vi/MkETkRv9tG8/hqdefault.jpg"
  },
  {
    "id": "nehemiah",
    "title": "Nehemiah",
    "testament": "OT",
    "order": 16,
    "shortCode": "NEH",
    "colorGradient": "from-cyan-700 to-slate-900",
    "youtubeId": "MkETkRv9tG8",
    "thumbnailUrl": "https://img.youtube.com/vi/MkETkRv9tG8/hqdefault.jpg"
  },
  {
    "id": "esther",
    "title": "Esther",
    "testament": "OT",
    "order": 17,
    "shortCode": "EST",
    "colorGradient": "from-pink-600 to-purple-900",
    "youtubeId": "JydNSlufRIs",
    "thumbnailUrl": "https://img.youtube.com/vi/JydNSlufRIs/hqdefault.jpg"
  },
  {
    "id": "job",
    "title": "Job",
    "testament": "OT",
    "order": 18,
    "shortCode": "JOB",
    "colorGradient": "from-stone-700 to-zinc-900",
    "youtubeId": "xQwnH8th_fs",
    "thumbnailUrl": "https://img.youtube.com/vi/xQwnH8th_fs/hqdefault.jpg"
  },
  {
    "id": "psalms",
    "title": "Psalms",
    "testament": "OT",
    "order": 19,
    "shortCode": "PSA",
    "colorGradient": "from-sky-600 to-blue-950",
    "youtubeId": "j9phNEaPrv8",
    "thumbnailUrl": "https://img.youtube.com/vi/j9phNEaPrv8/hqdefault.jpg"
  },
  {
    "id": "proverbs",
    "title": "Proverbs",
    "testament": "OT",
    "order": 20,
    "shortCode": "PRO",
    "colorGradient": "from-emerald-600 to-teal-950",
    "youtubeId": "AzmYV8GNAIM",
    "thumbnailUrl": "https://img.youtube.com/vi/AzmYV8GNAIM/hqdefault.jpg"
  },
  {
    "id": "ecclesiastes",
    "title": "Ecclesiastes",
    "testament": "OT",
    "order": 21,
    "shortCode": "ECC",
    "colorGradient": "from-amber-700 to-stone-900",
    "youtubeId": "lrsQ1tc-2wk",
    "thumbnailUrl": "https://img.youtube.com/vi/lrsQ1tc-2wk/hqdefault.jpg"
  },
  {
    "id": "songofsongs",
    "title": "Song of Songs",
    "testament": "OT",
    "order": 22,
    "shortCode": "SNG",
    "colorGradient": "from-rose-600 to-pink-950",
    "youtubeId": "4KC7xE4fgOw",
    "thumbnailUrl": "https://img.youtube.com/vi/4KC7xE4fgOw/hqdefault.jpg"
  },
  {
    "id": "isaiah",
    "title": "Isaiah",
    "testament": "OT",
    "order": 23,
    "shortCode": "ISA",
    "colorGradient": "from-red-600 to-purple-950",
    "youtubeId": "d0A6Uchb1F8",
    "thumbnailUrl": "https://img.youtube.com/vi/d0A6Uchb1F8/hqdefault.jpg"
  },
  {
    "id": "jeremiah",
    "title": "Jeremiah",
    "testament": "OT",
    "order": 24,
    "shortCode": "JER",
    "colorGradient": "from-blue-700 to-slate-950",
    "youtubeId": "RSK36cHbrk0",
    "thumbnailUrl": "https://img.youtube.com/vi/RSK36cHbrk0/hqdefault.jpg"
  },
  {
    "id": "lamentations",
    "title": "Lamentations",
    "testament": "OT",
    "order": 25,
    "shortCode": "LAM",
    "colorGradient": "from-slate-800 to-zinc-950",
    "youtubeId": "p8GDFPdaQZQ",
    "thumbnailUrl": "https://img.youtube.com/vi/p8GDFPdaQZQ/hqdefault.jpg"
  },
  {
    "id": "ezekiel",
    "title": "Ezekiel",
    "testament": "OT",
    "order": 26,
    "shortCode": "EZK",
    "colorGradient": "from-indigo-600 to-blue-950",
    "youtubeId": "R-CIPu1nko8",
    "thumbnailUrl": "https://img.youtube.com/vi/R-CIPu1nko8/hqdefault.jpg"
  },
  {
    "id": "daniel",
    "title": "Daniel",
    "testament": "OT",
    "order": 27,
    "shortCode": "DAN",
    "colorGradient": "from-cyan-600 to-slate-950",
    "youtubeId": "9cSC9uobtPM",
    "thumbnailUrl": "https://img.youtube.com/vi/9cSC9uobtPM/hqdefault.jpg"
  },
  {
    "id": "hosea",
    "title": "Hosea",
    "testament": "OT",
    "order": 28,
    "shortCode": "HOS",
    "colorGradient": "from-rose-600 to-slate-950",
    "youtubeId": "kE6SZ1ogOVU",
    "thumbnailUrl": "https://img.youtube.com/vi/kE6SZ1ogOVU/hqdefault.jpg"
  },
  {
    "id": "joel",
    "title": "Joel",
    "testament": "OT",
    "order": 29,
    "shortCode": "JOL",
    "colorGradient": "from-orange-600 to-amber-950",
    "youtubeId": "zQLazbgz90c",
    "thumbnailUrl": "https://img.youtube.com/vi/zQLazbgz90c/hqdefault.jpg"
  },
  {
    "id": "amos",
    "title": "Amos",
    "testament": "OT",
    "order": 30,
    "shortCode": "AMO",
    "colorGradient": "from-yellow-700 to-stone-950",
    "youtubeId": "mGgWaPGpGz4",
    "thumbnailUrl": "https://img.youtube.com/vi/mGgWaPGpGz4/hqdefault.jpg"
  },
  {
    "id": "obadiah",
    "title": "Obadiah",
    "testament": "OT",
    "order": 31,
    "shortCode": "OBA",
    "colorGradient": "from-red-700 to-zinc-950",
    "youtubeId": "i4ogCrEoG5s",
    "thumbnailUrl": "https://img.youtube.com/vi/i4ogCrEoG5s/hqdefault.jpg"
  },
  {
    "id": "jonah",
    "title": "Jonah",
    "testament": "OT",
    "order": 32,
    "shortCode": "JON",
    "colorGradient": "from-teal-600 to-cyan-950",
    "youtubeId": "dLIabZc0O4c",
    "thumbnailUrl": "https://img.youtube.com/vi/dLIabZc0O4c/hqdefault.jpg"
  },
  {
    "id": "micah",
    "title": "Micah",
    "testament": "OT",
    "order": 33,
    "shortCode": "MIC",
    "colorGradient": "from-emerald-700 to-slate-950",
    "youtubeId": "MFEUEcylwLc",
    "thumbnailUrl": "https://img.youtube.com/vi/MFEUEcylwLc/hqdefault.jpg"
  },
  {
    "id": "nahum",
    "title": "Nahum",
    "testament": "OT",
    "order": 34,
    "shortCode": "NAM",
    "colorGradient": "from-amber-800 to-stone-950",
    "youtubeId": "Y30DanA5EhU",
    "thumbnailUrl": "https://img.youtube.com/vi/Y30DanA5EhU/hqdefault.jpg"
  },
  {
    "id": "habakkuk",
    "title": "Habakkuk",
    "testament": "OT",
    "order": 35,
    "shortCode": "HAB",
    "colorGradient": "from-indigo-700 to-slate-950",
    "youtubeId": "OPMaRqGJPUU",
    "thumbnailUrl": "https://img.youtube.com/vi/OPMaRqGJPUU/hqdefault.jpg"
  },
  {
    "id": "zephaniah",
    "title": "Zephaniah",
    "testament": "OT",
    "order": 36,
    "shortCode": "ZEP",
    "colorGradient": "from-purple-800 to-zinc-950",
    "youtubeId": "oFZknKPNvz8",
    "thumbnailUrl": "https://img.youtube.com/vi/oFZknKPNvz8/hqdefault.jpg"
  },
  {
    "id": "haggai",
    "title": "Haggai",
    "testament": "OT",
    "order": 37,
    "shortCode": "HAG",
    "colorGradient": "from-yellow-600 to-slate-950",
    "youtubeId": "juPvv_xcX-U",
    "thumbnailUrl": "https://img.youtube.com/vi/juPvv_xcX-U/hqdefault.jpg"
  },
  {
    "id": "zechariah",
    "title": "Zechariah",
    "testament": "OT",
    "order": 38,
    "shortCode": "ZEC",
    "colorGradient": "from-blue-600 to-indigo-950",
    "youtubeId": "_106IfO6Kc0",
    "thumbnailUrl": "https://img.youtube.com/vi/_106IfO6Kc0/hqdefault.jpg"
  },
  {
    "id": "malachi",
    "title": "Malachi",
    "testament": "OT",
    "order": 39,
    "shortCode": "MAL",
    "colorGradient": "from-red-600 to-orange-950",
    "youtubeId": "HPGShWZ4Jvk",
    "thumbnailUrl": "https://img.youtube.com/vi/HPGShWZ4Jvk/hqdefault.jpg"
  },
  {
    "id": "matthew",
    "title": "Matthew",
    "testament": "NT",
    "order": 40,
    "shortCode": "MAT",
    "colorGradient": "from-amber-500 to-yellow-900",
    "youtubeId": "3Dv4-n6OYGI",
    "thumbnailUrl": "https://img.youtube.com/vi/3Dv4-n6OYGI/hqdefault.jpg"
  },
  {
    "id": "mark",
    "title": "Mark",
    "testament": "NT",
    "order": 41,
    "shortCode": "MRK",
    "colorGradient": "from-red-600 to-slate-950",
    "youtubeId": "HGHqu9-DtXk",
    "thumbnailUrl": "https://img.youtube.com/vi/HGHqu9-DtXk/hqdefault.jpg"
  },
  {
    "id": "luke",
    "title": "Luke",
    "testament": "NT",
    "order": 42,
    "shortCode": "LUK",
    "colorGradient": "from-blue-600 to-sky-950",
    "youtubeId": "XIb_dCIxzr0",
    "thumbnailUrl": "https://img.youtube.com/vi/XIb_dCIxzr0/hqdefault.jpg"
  },
  {
    "id": "john",
    "title": "John",
    "testament": "NT",
    "order": 43,
    "shortCode": "JHN",
    "colorGradient": "from-cyan-500 to-blue-950",
    "youtubeId": "G-2e9mMf7E8",
    "thumbnailUrl": "https://img.youtube.com/vi/G-2e9mMf7E8/hqdefault.jpg"
  },
  {
    "id": "acts",
    "title": "Acts",
    "testament": "NT",
    "order": 44,
    "shortCode": "ACT",
    "colorGradient": "from-orange-600 to-red-950",
    "youtubeId": "CGbNw855ksw",
    "thumbnailUrl": "https://img.youtube.com/vi/CGbNw855ksw/hqdefault.jpg"
  },
  {
    "id": "romans",
    "title": "Romans",
    "testament": "NT",
    "order": 45,
    "shortCode": "ROM",
    "colorGradient": "from-purple-600 to-indigo-950",
    "youtubeId": "ej_6dVdJSIU",
    "thumbnailUrl": "https://img.youtube.com/vi/ej_6dVdJSIU/hqdefault.jpg"
  },
  {
    "id": "1corinthians",
    "title": "1 Corinthians",
    "testament": "NT",
    "order": 46,
    "shortCode": "1CO",
    "colorGradient": "from-indigo-600 to-slate-950",
    "youtubeId": "yiHf8klCCc4",
    "thumbnailUrl": "https://img.youtube.com/vi/yiHf8klCCc4/hqdefault.jpg"
  },
  {
    "id": "2corinthians",
    "title": "2 Corinthians",
    "testament": "NT",
    "order": 47,
    "shortCode": "2CO",
    "colorGradient": "from-blue-600 to-indigo-950",
    "youtubeId": "3lfPK2vfC54",
    "thumbnailUrl": "https://img.youtube.com/vi/3lfPK2vfC54/hqdefault.jpg"
  },
  {
    "id": "galatians",
    "title": "Galatians",
    "testament": "NT",
    "order": 48,
    "shortCode": "GAL",
    "colorGradient": "from-emerald-600 to-teal-950",
    "youtubeId": "vmx4UjRFp0M",
    "thumbnailUrl": "https://img.youtube.com/vi/vmx4UjRFp0M/hqdefault.jpg"
  },
  {
    "id": "ephesians",
    "title": "Ephesians",
    "testament": "NT",
    "order": 49,
    "shortCode": "EPH",
    "colorGradient": "from-cyan-600 to-blue-950",
    "youtubeId": "Y71r-T98E2Q",
    "thumbnailUrl": "https://img.youtube.com/vi/Y71r-T98E2Q/hqdefault.jpg"
  },
  {
    "id": "philippians",
    "title": "Philippians",
    "testament": "NT",
    "order": 50,
    "shortCode": "PHP",
    "colorGradient": "from-pink-600 to-rose-950",
    "youtubeId": "oE9qqW1-BkU",
    "thumbnailUrl": "https://img.youtube.com/vi/oE9qqW1-BkU/hqdefault.jpg"
  },
  {
    "id": "colossians",
    "title": "Colossians",
    "testament": "NT",
    "order": 51,
    "shortCode": "COL",
    "colorGradient": "from-violet-600 to-purple-950",
    "youtubeId": "pXTXlDxQsvc",
    "thumbnailUrl": "https://img.youtube.com/vi/pXTXlDxQsvc/hqdefault.jpg"
  },
  {
    "id": "1thessalonians",
    "title": "1 Thessalonians",
    "testament": "NT",
    "order": 52,
    "shortCode": "1TH",
    "colorGradient": "from-sky-600 to-slate-950",
    "youtubeId": "No7Nq6IX23c",
    "thumbnailUrl": "https://img.youtube.com/vi/No7Nq6IX23c/hqdefault.jpg"
  },
  {
    "id": "2thessalonians",
    "title": "2 Thessalonians",
    "testament": "NT",
    "order": 53,
    "shortCode": "2TH",
    "colorGradient": "from-blue-700 to-slate-950",
    "youtubeId": "kbPBDKOn1cc",
    "thumbnailUrl": "https://img.youtube.com/vi/kbPBDKOn1cc/hqdefault.jpg"
  },
  {
    "id": "1timothy",
    "title": "1 Timothy",
    "testament": "NT",
    "order": 54,
    "shortCode": "1TI",
    "colorGradient": "from-amber-600 to-stone-950",
    "youtubeId": "7RoqnGcEjcs",
    "thumbnailUrl": "https://img.youtube.com/vi/7RoqnGcEjcs/hqdefault.jpg"
  },
  {
    "id": "2timothy",
    "title": "2 Timothy",
    "testament": "NT",
    "order": 55,
    "shortCode": "2TI",
    "colorGradient": "from-orange-700 to-zinc-950",
    "youtubeId": "urlvnxCaL00",
    "thumbnailUrl": "https://img.youtube.com/vi/urlvnxCaL00/hqdefault.jpg"
  },
  {
    "id": "titus",
    "title": "Titus",
    "testament": "NT",
    "order": 56,
    "shortCode": "TIT",
    "colorGradient": "from-yellow-700 to-slate-950",
    "youtubeId": "PUEYCVXJM3k",
    "thumbnailUrl": "https://img.youtube.com/vi/PUEYCVXJM3k/hqdefault.jpg"
  },
  {
    "id": "philemon",
    "title": "Philemon",
    "testament": "NT",
    "order": 57,
    "shortCode": "PHM",
    "colorGradient": "from-teal-600 to-zinc-950",
    "youtubeId": "aW9Q3Jt6Yvk",
    "thumbnailUrl": "https://img.youtube.com/vi/aW9Q3Jt6Yvk/hqdefault.jpg"
  },
  {
    "id": "hebrews",
    "title": "Hebrews",
    "testament": "NT",
    "order": 58,
    "shortCode": "HEB",
    "colorGradient": "from-amber-600 to-orange-950",
    "youtubeId": "1fNWTZZwgbs",
    "thumbnailUrl": "https://img.youtube.com/vi/1fNWTZZwgbs/hqdefault.jpg"
  },
  {
    "id": "james",
    "title": "James",
    "testament": "NT",
    "order": 59,
    "shortCode": "JAS",
    "colorGradient": "from-emerald-600 to-stone-950",
    "youtubeId": "qn-hLHWwRYY",
    "thumbnailUrl": "https://img.youtube.com/vi/qn-hLHWwRYY/hqdefault.jpg"
  },
  {
    "id": "1peter",
    "title": "1 Peter",
    "testament": "NT",
    "order": 60,
    "shortCode": "1PE",
    "colorGradient": "from-blue-600 to-slate-950",
    "youtubeId": "WhP7AZQlzCg",
    "thumbnailUrl": "https://img.youtube.com/vi/WhP7AZQlzCg/hqdefault.jpg"
  },
  {
    "id": "2peter",
    "title": "2 Peter",
    "testament": "NT",
    "order": 61,
    "shortCode": "2PE",
    "colorGradient": "from-indigo-600 to-zinc-950",
    "youtubeId": "wWLv_ITyKYc",
    "thumbnailUrl": "https://img.youtube.com/vi/wWLv_ITyKYc/hqdefault.jpg"
  },
  {
    "id": "1john",
    "title": "1 John",
    "testament": "NT",
    "order": 62,
    "shortCode": "1JN",
    "colorGradient": "from-rose-600 to-purple-950",
    "youtubeId": "l3QkE6nKylM",
    "thumbnailUrl": "https://img.youtube.com/vi/l3QkE6nKylM/hqdefault.jpg"
  },
  {
    "id": "2john",
    "title": "2 John",
    "testament": "NT",
    "order": 63,
    "shortCode": "2JN",
    "colorGradient": "from-pink-600 to-slate-950",
    "youtubeId": "RUfh_wOsauk",
    "thumbnailUrl": "https://img.youtube.com/vi/RUfh_wOsauk/hqdefault.jpg"
  },
  {
    "id": "3john",
    "title": "3 John",
    "testament": "NT",
    "order": 64,
    "shortCode": "3JN",
    "colorGradient": "from-purple-600 to-zinc-950",
    "youtubeId": "l3QkE6nKylM",
    "thumbnailUrl": "https://img.youtube.com/vi/l3QkE6nKylM/hqdefault.jpg"
  },
  {
    "id": "jude",
    "title": "Jude",
    "testament": "NT",
    "order": 65,
    "shortCode": "JUD",
    "colorGradient": "from-red-700 to-amber-950",
    "youtubeId": "6UoCmakZmys",
    "thumbnailUrl": "https://img.youtube.com/vi/6UoCmakZmys/hqdefault.jpg"
  },
  {
    "id": "revelation",
    "title": "Revelation",
    "testament": "NT",
    "order": 66,
    "shortCode": "REV",
    "colorGradient": "from-purple-600 to-red-950",
    "youtubeId": "5nvVVcYD-0w",
    "thumbnailUrl": "https://img.youtube.com/vi/5nvVVcYD-0w/hqdefault.jpg"
  }
];

export const getCanonBookById = (idOrTitle: string): CanonBookMeta | undefined => {
  const norm = idOrTitle.toLowerCase().replace(/\s+/g, '');
  return CANON_66_BOOKS.find(b => b.id === norm || b.title.toLowerCase().replace(/\s+/g, '') === norm || b.shortCode.toLowerCase() === norm);
};

export const getCanonBookByOrder = (order: number): CanonBookMeta | undefined => {
  return CANON_66_BOOKS.find(b => b.order === order);
};

export default CANON_66_BOOKS;
