/**
 * YoungFire Ministry Discipleship Reading Plans
 * Joshua House of Worship
 */

export interface ReadingPlanDay {
  dayNumber: number;
  title: string;
  scriptureReference: string;
  bookId: string;
  chapter: number;
  devotionalFocus: string;
  keyVerse: string;
  reflectionPrompt: string;
  practicalAction?: string;
}

export interface ReadingPlan {
  id: string;
  title: string;
  subtitle: string;
  category: 'men' | 'women' | 'general' | 'custom';
  durationDays: number;
  badge?: string;
  description: string;
  accentColor?: string;
  themeScripture?: string;
  days: ReadingPlanDay[];
}

export const getCompletedDays = (planId: string): number[] => {
  try {
    const key = 'yf_reading_plan_' + planId + '_completed';
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const toggleDayCompleted = (planId: string, dayNumber: number): number[] => {
  try {
    const key = 'yf_reading_plan_' + planId + '_completed';
    const current = getCompletedDays(planId);
    let updated: number[];
    if (current.includes(dayNumber)) {
      updated = current.filter(d => d !== dayNumber);
    } else {
      updated = [...current, dayNumber].sort((a, b) => a - b);
    }
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
};

export const resetPlanProgress = (planId: string): void => {
  try {
    const key = 'yf_reading_plan_' + planId + '_completed';
    localStorage.removeItem(key);
  } catch {}
};

export const READING_PLANS: ReadingPlan[] = [
  {
    id: 'men-iron-and-fire',
    title: 'Men On Fire: 7-Day Iron & Armor',
    subtitle: '7-Day Brotherhood Consecration & Spiritual Warfare',
    category: 'men',
    durationDays: 7,
    badge: '7-DAY BROTHERHOOD',
    accentColor: 'orange',
    themeScripture: 'Proverbs 27:17 — Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.',
    description: 'A 7-day battle-tested devotional journey for the brothers of YoungFire Ministry to anchor their minds in purity, leadership, prayer, and kingdom courage.',
    days: [
      {
        dayNumber: 1,
        title: 'Sharpening the Sword',
        scriptureReference: 'Proverbs 27',
        bookId: 'PRO',
        chapter: 27,
        devotionalFocus: 'Authentic brotherhood means sharpening one another without ego or compromise.',
        keyVerse: 'Proverbs 27:17 — Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.',
        reflectionPrompt: 'Who in your circle are you actively sharpening, and who holds you accountable?',
        practicalAction: 'Reach out to one brother in YoungFire today with a scripture of encouragement.'
      },
      {
        dayNumber: 2,
        title: 'The Whole Armor of God',
        scriptureReference: 'Ephesians 6',
        bookId: 'EPH',
        chapter: 6,
        devotionalFocus: 'Standing firm against the stratagems of darkness requires total spiritual armor daily.',
        keyVerse: 'Ephesians 6:11 — Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
        reflectionPrompt: 'Which piece of armor do you find yourself forgetting most frequently?',
        practicalAction: 'Pray through the belt of truth and shield of faith before leaving your door.'
      },
      {
        dayNumber: 3,
        title: 'The Good Fight of Faith',
        scriptureReference: '1 Timothy 6',
        bookId: '1TI',
        chapter: 6,
        devotionalFocus: 'Fleeing youthful lusts and laying hold on eternal life through disciplined godliness.',
        keyVerse: '1 Timothy 6:12 — Fight the good fight of faith, lay hold on eternal life...',
        reflectionPrompt: 'What worldly distractions or traps are you being called to flee from this season?',
        practicalAction: 'Fast from social media or unnecessary screens for 3 hours today.'
      },
      {
        dayNumber: 4,
        title: 'Strong and Courageous',
        scriptureReference: 'Joshua 1',
        bookId: 'JOS',
        chapter: 1,
        devotionalFocus: 'Joshua was commanded not to fear because the Lord God is with him whithersoever he goeth.',
        keyVerse: 'Joshua 1:9 — Be strong and of a good courage; be not afraid, neither be thou dismayed...',
        reflectionPrompt: 'Where is fear holding back your spiritual authority or obedience?',
        practicalAction: 'Step into one difficult conversation with calm boldness and grace.'
      },
      {
        dayNumber: 5,
        title: 'A Living Sacrifice',
        scriptureReference: 'Romans 12',
        bookId: 'ROM',
        chapter: 12,
        devotionalFocus: 'Do not be conformed to this world, but be transformed by the renewing of your mind.',
        keyVerse: 'Romans 12:2 — And be not conformed to this world: but be ye transformed by the renewing of your mind...',
        reflectionPrompt: 'How are you guarding your eyes, ears, and thoughts against cultural corruption?',
        practicalAction: 'Spend 15 minutes in silent contemplation and scripture memorization.'
      },
      {
        dayNumber: 6,
        title: 'The Power of the Secret Place',
        scriptureReference: 'Psalm 91',
        bookId: 'PSA',
        chapter: 91,
        devotionalFocus: 'Abiding in the shadow of the Almighty provides unmatched protection and divine peace.',
        keyVerse: 'Psalm 91:1 — He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.',
        reflectionPrompt: 'Is your relationship with God public only, or is it forged in secret intercession?',
        practicalAction: 'Kneel in private prayer for 10 uninterrupted minutes for your family and church.'
      },
      {
        dayNumber: 7,
        title: 'Watch Ye, Stand Fast',
        scriptureReference: '1 Corinthians 16',
        bookId: '1CO',
        chapter: 16,
        devotionalFocus: 'Watch ye, stand fast in the faith, quit you like men, be strong. Let all things be done with charity.',
        keyVerse: '1 Corinthians 16:13-14 — Watch ye, stand fast in the faith, quit you like men, be strong. Let all your things be done with charity.',
        reflectionPrompt: 'How does true strength express itself through Christ-like love and humility?',
        practicalAction: 'Share your testimony or a takeaway from this week with the YoungFire Men on Fire channel.'
      }
    ]
  },
  {
    id: 'women-ignited-grace',
    title: 'Women Ignited: 7-Day Esther\'s Courage & Grace',
    subtitle: '7-Day Consecration in Dignity, Faith, and Kingdom Purpose',
    category: 'women',
    durationDays: 7,
    badge: '7-DAY SISTERHOOD',
    accentColor: 'rose',
    themeScripture: 'Proverbs 31:25 — Strength and honour are her clothing; and she shall rejoice in time to come.',
    description: 'A 7-day devotion designed for the sisters of YoungFire Ministry to rise in purity, divine wisdom, intercessory power, and quiet strength.',
    days: [
      {
        dayNumber: 1,
        title: 'For Such a Time as This',
        scriptureReference: 'Esther 4',
        bookId: 'EST',
        chapter: 4,
        devotionalFocus: 'You were placed in this generation on purpose for divine kingdom impact.',
        keyVerse: 'Esther 4:14 — ...and who knoweth whether thou art come to the kingdom for such a time as this?',
        reflectionPrompt: 'What assignments or seasons of influence has God entrusted to you right now?',
        practicalAction: 'Write down three gifts God gave you and commit them back to His sanctuary.'
      },
      {
        dayNumber: 2,
        title: 'Clothed in Strength & Honour',
        scriptureReference: 'Proverbs 31',
        bookId: 'PRO',
        chapter: 31,
        devotionalFocus: 'True beauty radiates from reverence for the Lord and inner godly excellence.',
        keyVerse: 'Proverbs 31:30 — Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised.',
        reflectionPrompt: 'How can you shift focus from external metrics to internal character and holiness?',
        practicalAction: 'Speak words of life and affirmation over two younger sisters today.'
      },
      {
        dayNumber: 3,
        title: 'Faithful Companionship',
        scriptureReference: 'Ruth 1',
        bookId: 'RUT',
        chapter: 1,
        devotionalFocus: 'Ruth\'s unwavering covenant loyalty reveals God\'s heart for divine sisterhood.',
        keyVerse: 'Ruth 1:16 — ...whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God.',
        reflectionPrompt: 'Are you a loyal sister and friend who walks through valleys with others?',
        practicalAction: 'Send a note or prayer of gratitude to a faithful spiritual mother or sister.'
      },
      {
        dayNumber: 4,
        title: 'The Fragrance of Worship',
        scriptureReference: 'Luke 7',
        bookId: 'LUK',
        chapter: 7,
        devotionalFocus: 'Worship that breaks the alabaster box touches the heart of Christ deeply.',
        keyVerse: 'Luke 7:47 — Wherefore I say unto thee, Her sins, which are many, are forgiven; for she loved much...',
        reflectionPrompt: 'What costly offering of worship or surrender is Jesus asking of you?',
        practicalAction: 'Spend quiet time worshipping at the feet of Jesus with wholehearted praise.'
      },
      {
        dayNumber: 5,
        title: 'The Ornament of a Meek Spirit',
        scriptureReference: '1 Peter 3',
        bookId: '1PE',
        chapter: 3,
        devotionalFocus: 'A gentle and quiet spirit is in the sight of God of great price.',
        keyVerse: '1 Peter 3:4 — But let it be the hidden man of the heart... even the ornament of a meek and quiet spirit...',
        reflectionPrompt: 'How can you maintain calm dignity when stressed or misunderstood?',
        practicalAction: 'Practice slow speech and active listening in every conversation today.'
      },
      {
        dayNumber: 6,
        title: 'Filled with the Spirit',
        scriptureReference: 'Acts 2',
        bookId: 'ACT',
        chapter: 2,
        devotionalFocus: 'In the last days, God pours out His Spirit upon daughters and handmaidens to prophesy.',
        keyVerse: 'Acts 2:17 — ...I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy...',
        reflectionPrompt: 'Are you walking in the daily overflow and boldness of the Holy Spirit?',
        practicalAction: 'Pray in the Spirit and ask the Lord for spiritual discernment and words of wisdom.'
      },
      {
        dayNumber: 7,
        title: 'The Overcoming Sister',
        scriptureReference: 'Revelation 12',
        bookId: 'REV',
        chapter: 12,
        devotionalFocus: 'Overcoming by the blood of the Lamb and by the word of our testimony.',
        keyVerse: 'Revelation 12:11 — And they overcame him by the blood of the Lamb, and by the word of their testimony...',
        reflectionPrompt: 'How has God delivered you, and how can your testimony break chains for others?',
        practicalAction: 'Share one victory testimony in the Women Ignited community space.'
      }
    ]
  },
  {
    id: 'youngfire-foundations-14',
    title: 'YoungFire Core: 14-Day Foundations of Fire',
    subtitle: '14-Day Discipleship Journey into Word, Prayer, and Covenant',
    category: 'general',
    durationDays: 14,
    badge: '14-DAY CURRICULUM',
    accentColor: 'amber',
    themeScripture: 'Acts 2:38–39 — Repent, and be baptized every one of you in the name of Jesus Christ...',
    description: 'The canonical 14-day small group curriculum for YoungFire Ministry at Joshua House of Worship, establishing believers in sound doctrine, holy living, and evangelism.',
    days: [
      {
        dayNumber: 1,
        title: 'Repentance and Rebirth',
        scriptureReference: 'Acts 2',
        bookId: 'ACT',
        chapter: 2,
        devotionalFocus: 'Repentance is a turn of the whole heart toward God, receiving remission of sins.',
        keyVerse: 'Acts 2:38 — Repent, and be baptized every one of you in the name of Jesus Christ...',
        reflectionPrompt: 'What old mindsets have you recently crucified?',
        practicalAction: 'Confess and surrender any hidden weight to Jesus.'
      },
      {
        dayNumber: 2,
        title: 'The Uncompromised Word',
        scriptureReference: '2 Timothy 3',
        bookId: '2TI',
        chapter: 3,
        devotionalFocus: 'All scripture is given by inspiration of God and is profitable for doctrine and correction.',
        keyVerse: '2 Timothy 3:16 — All scripture is given by inspiration of God...',
        reflectionPrompt: 'Is the Bible your supreme authority or merely a reference guide?',
        practicalAction: 'Read your physical Bible for 20 minutes with note-taking.'
      },
      {
        dayNumber: 3,
        title: 'Forgiveness and Healing',
        scriptureReference: 'Ephesians 4',
        bookId: 'EPH',
        chapter: 4,
        devotionalFocus: 'Be ye kind one to another, tenderhearted, forgiving one another.',
        keyVerse: 'Ephesians 4:32 — And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you.',
        reflectionPrompt: 'Who do you need to release from an emotional debt?',
        practicalAction: 'Release forgiveness unconditionally before the sun goes down.'
      },
      {
        dayNumber: 4,
        title: 'Walking in the Spirit',
        scriptureReference: 'Galatians 5',
        bookId: 'GAL',
        chapter: 5,
        devotionalFocus: 'Walk in the Spirit, and ye shall not fulfil the lust of the flesh.',
        keyVerse: 'Galatians 5:16 — This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.',
        reflectionPrompt: 'Which fruit of the Spirit is ripening in your life right now?',
        practicalAction: 'Demonstrate patience in a difficult moment today.'
      },
      {
        dayNumber: 5,
        title: 'The Great Commission',
        scriptureReference: 'Matthew 28',
        bookId: 'MAT',
        chapter: 28,
        devotionalFocus: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.',
        keyVerse: 'Matthew 28:19 — Go ye therefore, and teach all nations...',
        reflectionPrompt: 'When was the last time you shared the gospel with a stranger or coworker?',
        practicalAction: 'Plant a seed of the gospel in someone\'s day.'
      },
      {
        dayNumber: 6,
        title: 'The Sanctity of the Temple',
        scriptureReference: '1 Corinthians 6',
        bookId: '1CO',
        chapter: 6,
        devotionalFocus: 'Your body is the temple of the Holy Ghost which is in you.',
        keyVerse: '1 Corinthians 6:19 — What? know ye not that your body is the temple of the Holy Ghost...',
        reflectionPrompt: 'How are you honouring God with your physical vessel and habits?',
        practicalAction: 'Drink pure water, exercise, and consecrate your diet today.'
      },
      {
        dayNumber: 7,
        title: 'The Authority of the Believer',
        scriptureReference: 'Luke 10',
        bookId: 'LUK',
        chapter: 10,
        devotionalFocus: 'Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy.',
        keyVerse: 'Luke 10:19 — Behold, I give unto you power to tread on serpents and scorpions...',
        reflectionPrompt: 'Are you speaking with heavenly authority against trials in your home?',
        practicalAction: 'Speak the name of Jesus over your atmosphere.'
      },
      {
        dayNumber: 8,
        title: 'Covenant Relationships',
        scriptureReference: 'Ecclesiastes 4',
        bookId: 'ECC',
        chapter: 4,
        devotionalFocus: 'Two are better than one; and a threefold cord is not quickly broken.',
        keyVerse: 'Ecclesiastes 4:12 — ...a threefold cord is not quickly broken.',
        reflectionPrompt: 'Who forms your spiritual threefold cord?',
        practicalAction: 'Invite a brother or sister to join you in prayer.'
      },
      {
        dayNumber: 9,
        title: 'Giving & Stewardship',
        scriptureReference: 'Malachi 3',
        bookId: 'MAL',
        chapter: 3,
        devotionalFocus: 'Honor the Lord with the firstfruits of all thine increase.',
        keyVerse: 'Malachi 3:10 — Bring ye all the tithes into the storehouse...',
        reflectionPrompt: 'Is God first in your finances, time, and creative talents?',
        practicalAction: 'Bless someone in need anonymously.'
      },
      {
        dayNumber: 10,
        title: 'Praise as a Weapon',
        scriptureReference: 'Psalm 149',
        bookId: 'PSA',
        chapter: 149,
        devotionalFocus: 'Let the high praises of God be in their mouth, and a two-edged sword in their hand.',
        keyVerse: 'Psalm 149:6 — Let the high praises of God be in their mouth...',
        reflectionPrompt: 'Does praise arise when things are challenging?',
        practicalAction: 'Listen to 30 minutes of high praise gospel music.'
      },
      {
        dayNumber: 11,
        title: 'Kingdom Fasting',
        scriptureReference: 'Isaiah 58',
        bookId: 'ISA',
        chapter: 58,
        devotionalFocus: 'Is not this the fast that I have chosen? to loose the bands of wickedness...',
        keyVerse: 'Isaiah 58:6 — Is not this the fast that I have chosen? to loose the bands of wickedness...',
        reflectionPrompt: 'What breakthrough needs to be birthed through fasting?',
        practicalAction: 'Dedicate a meal or half-day to consecration and prayer.'
      },
      {
        dayNumber: 12,
        title: 'Boldness in Witness',
        scriptureReference: 'Acts 4',
        bookId: 'ACT',
        chapter: 4,
        devotionalFocus: 'And when they had prayed, the place was shaken... and they spake the word of God with boldness.',
        keyVerse: 'Acts 4:31 — ...they were all filled with the Holy Ghost, and they spake the word of God with boldness.',
        reflectionPrompt: 'Are you unashamed of the gospel of Christ?',
        practicalAction: 'Share a scripture on your status or with a peer.'
      },
      {
        dayNumber: 13,
        title: 'The Blessed Hope',
        scriptureReference: 'Titus 2',
        bookId: 'TIT',
        chapter: 2,
        devotionalFocus: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.',
        keyVerse: 'Titus 2:13 — Looking for that blessed hope, and the glorious appearing...',
        reflectionPrompt: 'Are you living in expectation of Christ\'s return?',
        practicalAction: 'Live with eternity in mind throughout your workday.'
      },
      {
        dayNumber: 14,
        title: 'The Burning Altar',
        scriptureReference: 'Leviticus 6',
        bookId: 'LEV',
        chapter: 6,
        devotionalFocus: 'The fire shall ever be burning upon the altar; it shall never go out.',
        keyVerse: 'Leviticus 6:13 — The fire shall ever be burning upon the altar; it shall never go out.',
        reflectionPrompt: 'How will you keep the holy fire of God burning in your daily walk?',
        practicalAction: 'Make a covenant commitment to continuous prayer and fellowship with YoungFire.'
      }
    ]
  }
];
