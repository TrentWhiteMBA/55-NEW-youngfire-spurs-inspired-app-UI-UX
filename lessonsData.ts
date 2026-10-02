import { MinistryLesson, IntercessionRequest, DiscipleshipLesson, LessonAttachment } from '../types';

export type { DiscipleshipLesson, LessonAttachment };

export const INTERCESSION_REGISTRY: IntercessionRequest[] = [];

export const INITIAL_AUTHENTIC_LESSONS: MinistryLesson[] = [];

export const ARCHIVED_LESSONS: MinistryLesson[] = [
  // Canonical 14 Lessons Curriculum
  {
    id: 'lesson_1_forgiveness',
    seriesTitle: 'Young Fire Small Groups: Foundation 1',
    lessonTitle: 'Forgiveness, Confession & The Spiritual Handicap',
    dateOrSeason: 'YoungFire Lesson 1',
    status: 'live',
    primaryPassage: 'Ephesians 4:31–32, Mark 11:25–26 & Luke 17:3',
    bookId: 'EPH',
    chapter: 4,
    teachers: 'Ministers of YoungFire',
    theme: 'Unforgiveness as a Spiritual Handicap & The Altar Exchange',
    summary: 'Unforgiveness acts as a severe spiritual handicap that blocks prayers and paralyzes growth. Bring offenses to the altar and release bitterness completely.',
    keyPoints: [
      '1. Harboring unforgiveness creates an ongoing barrier in your walk with God.',
      '2. Bitterness is drinking poison and expecting the other person to die.',
      '3. When we sin against or harbor malice toward a brother, we sin against God.',
      '4. The altar is the place to leave anger, offense, and sorrow at Christ’s feet.'
    ],
    selfReflectionAudit: [
      'Is there anyone you are currently refusing to forgive?',
      'Have you brought your hidden hurt to the altar or are you nursing the offense?'
    ],
    discussionQuestions: [
      'Why does unforgiveness handicap our prayers and praise?',
      'How does Ephesians 4:32 help settle relationship fractures?'
    ],
    challenge: 'Take every offense to the altar and forgive as Christ forgave you.'
  },
  {
    id: 'lesson_2_community',
    seriesTitle: 'Young Fire Small Groups: Foundation 2',
    lessonTitle: 'The Blessing of a Community: Personal Faith is Never Private',
    dateOrSeason: 'YoungFire Lesson 2',
    primaryPassage: 'Matthew 28:16–20 & Acts 1:8',
    bookId: 'MAT',
    chapter: 28,
    teachers: 'Ministers of YoungFire',
    theme: 'Rejecting Isolation & Fulfilling the Commission Together',
    summary: 'Faith in Christ is personal, but was never intended to be private. Reject spiritual isolation and bless the community more than you receive.',
    keyPoints: [
      '1. Secluded Christianity contradicts the New Testament pattern.',
      '2. Christ commissioned the disciples together on the mountain—no one finishes the race alone.',
      '3. Growth accelerates when you become an "all hands on deck" servant.'
    ],
    selfReflectionAudit: [
      'Are you living as an isolated spectator or an active participant in community?'
    ],
    discussionQuestions: [
      'Why did Jesus gather the whole group before giving the Great Commission?'
    ],
    challenge: 'Find one practical way to bless a brother or sister in YoungFire this week.'
  },
  {
    id: 'lesson_3_perfect_church',
    seriesTitle: 'Young Fire Small Groups: Foundation 3',
    lessonTitle: 'The Perfect Church: Truth, Hurt & Healing',
    dateOrSeason: '1/29/24',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Acts 2:42–47 & Luke 5:1–11',
    bookId: 'ACT',
    chapter: 2,
    teachers: 'Trent & Whitney White',
    theme: 'Church Hurt, Unity & The 7-Question Self Audit',
    summary: 'Does the perfect church exist? If so where? Heaven. If not, what are we doing to get close to that? Unity and transparency: A church divided cannot stand.',
    keyPoints: [
      '1. Downfalls of churches today: Confusing your vision with God’s vision, Clicks/Cliques, Young adults leading church without spiritual maturity, Money.',
      '2. Church Hurt: What makes church hurt so bad to where we would not want to go back? Healing comes when we realize we are imperfect people making up an imperfect room.',
      '3. What role do I play in a church’s imperfection? If everyone prayed, praised, read, and served like me, what condition would the body be in?',
      '4. Life or Death in speech: Negativity and curse words vs. edification.',
      '5. Clicks or favoritism vs. unconditional love and encouragement.',
      '6. Core Discipleship Principle: I can’t expect to be served if I’m not willing to serve.'
    ],
    selfReflectionAudit: [
      'If everyone prayed like me, how would the church be?',
      'If the church praised and worshipped like me?',
      'What if the church read the Bible like me?',
      'What if the church served like me?',
      'What if the church spoke like me? (Life or death, negativity, curse words)',
      'If the church listened like me?',
      'If the church loved like me? (Clicks or favoritism vs. love and encouragement)'
    ],
    discussionQuestions: [
      'What makes church hurt cut deeper than worldly hurt, and how do we bring that pain to the altar?',
      'How do we combat cliques and favoritism in our own small group circle?',
      'How do we avoid confusing our personal vision with God’s sovereign vision?'
    ],
    challenge: 'I can’t expect to be served if I’m not willing to serve. Serve one person this week anonymously.'
  },
  {
    id: 'lesson_once_saved',
    seriesTitle: 'Young Fire Small Groups: Historical Archive',
    lessonTitle: 'Once Saved Always Saved: Enduring Faith vs. False Security',
    dateOrSeason: '6/6/22',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Hebrews 6:4–6, John 10:27–29 & Matthew 24:13',
    bookId: 'HEB',
    chapter: 6,
    teachers: 'Trent & Whitney White',
    theme: 'Eternal Security, Abiding in the Vine & Enduring to the End',
    summary: 'An honest, scriptural examination of eternal security versus carnal presumption. He who endures to the end will be saved.',
    keyPoints: [
      '1. Salvation is not a cheap fire insurance policy; it is a vital union with Jesus Christ.',
      '2. "My sheep hear My voice, and I know them, and they follow Me" (John 10:27). Follow is an active present-tense verb.',
      '3. True grace produces holiness and repentance, never a license to practice unrepentant sin.',
      '4. Abiding in Christ guarantees the fruit of perseverance.'
    ],
    selfReflectionAudit: [
      'Are you trusting in a past emotional event or a living, daily walk with Jesus?',
      'Does your daily conduct show evidence of the Holy Spirit’s convicting work?'
    ],
    discussionQuestions: [
      'How do we balance assurance of salvation with the biblical call to work out our salvation with fear and trembling?',
      'What is the difference between falling into a sin and living in deliberate rebellion?'
    ],
    challenge: 'Examine yourself whether you are in the faith (2 Cor 13:5); renew your commitment to follow Christ daily.'
  },
  {
    id: 'lesson_no_pimps',
    seriesTitle: 'Young Fire Small Groups: Historical Archive',
    lessonTitle: 'No P.I.M.P.’s Allowed: Purity, Integrity, Ministry & Protection',
    dateOrSeason: '8/15/22',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: '1 Peter 5:1–4, 2 Corinthians 2:17 & 1 Thessalonians 2:4–8',
    bookId: '1PE',
    chapter: 5,
    teachers: 'Trent & Whitney White',
    theme: 'Rejecting Exploitation, Spiritual Manipulation & Walking in Sincere Love',
    summary: 'Guarding the flock against spiritual manipulation and selfish ambition. Ministry is never about using people for personal gain or platform.',
    keyPoints: [
      '1. No Peddling the Word of God for personal profit or ego (2 Cor 2:17).',
      '2. Shepherding the flock not for dishonest gain, but eagerly with a servant’s heart.',
      '3. Purity in motives, Integrity in finances, Ministry through humility, Protection for the vulnerable.',
      '4. Young adult leadership requires spiritual maturity, accountability, and fatherly/motherly care.'
    ],
    selfReflectionAudit: [
      'Are your ministry motives pure, or do you seek recognition and clout?',
      'Are you protecting newer believers from toxic culture and spiritual exploitation?'
    ],
    discussionQuestions: [
      'What are the warning signs of manipulative leadership in contemporary YoungFire culture?',
      'How does authentic biblical discipleship guard against spiritual abuse?'
    ],
    challenge: 'Examine your personal ambitions and lay any desire for platform at the altar of Christ.'
  },
  {
    id: 'lesson_what_church_sardis_philly_laodicea',
    seriesTitle: 'Young Fire Small Groups: Historical Archive',
    lessonTitle: 'What Church Do You Belong To? Sardis, Philadelphia & Laodicea',
    dateOrSeason: 'Fall 2022',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Revelation 3:1–22, 2 Corinthians 4:14–18 & Matthew 7:13–14',
    bookId: 'REV',
    chapter: 3,
    teachers: 'Trent & Whitney White',
    theme: 'Sardis, Philadelphia, Laodicea & The 4 Questions of Effectiveness',
    summary: 'An intense exegesis of Sardis (living off former glory, spiritually asleep), Philadelphia (faithful in weakness, kept God\'s Word), and Laodicea (lukewarm, affluent self-sufficiency). Features the 4 diagnostic questions to know if you are effective: Where do I serve? What does my relationship with God look like? What does my relationship with people look like? Do I share about God?',
    keyPoints: [
      '1. Revelation 3:1–6 Sardis: Has a reputation of being alive, but is dead. Fell asleep in comfortable faith.',
      '2. 4 Questions to Know If You Are Effective: 1. Where do I serve? 2. What does my relationship with God look like? 3. What does my relationship with people look like? 4. Do I share about God?',
      '3. Revelation 3:7–13 Philadelphia: Faithful endurance with little worldly power. God opens a door no man can shut. (2 Cor 4:14–18: The size of our faith determines the quality of our impact).',
      '4. Revelation 3:14–22 Laodicea: Lukewarm water aqueduct. Affluent self-sufficiency ("I need nothing"). Jesus knocks outside the church door (Rev 3:20). Narrow vs broad road (Matt 7:13–14).',
      '5. Practical Action: Choose 1 tangible spiritual discipline to stir your affection for Christ this week.'
    ],
    selfReflectionAudit: [
      'Where am I currently serving in the body of Christ, or am I only consuming?',
      'What does my secret communion with God look like when nobody is watching?',
      'How do I treat people who cannot offer me any advantage or status?',
      'When was the last time I shared the testimony of Jesus with an unbeliever?'
    ],
    discussionQuestions: [
      'Why is Jesus more disgusted by lukewarm self-sufficiency (Laodicea) than being cold?',
      'What made Philadelphia powerful despite having "little strength"?',
      'How does an active YoungFire prayer call protect our small group from falling into a spiritual coma?'
    ],
    challenge: 'Take 1 practical step to stir your affection for Christ: dedicate 20 minutes to fasting prayer or sow secretly into someone in need.'
  },
  {
    id: 'lesson_draw_the_line',
    seriesTitle: 'Young Fire Small Groups: Foundation Series',
    lessonTitle: 'Draw the Line: Where Do You Draw the Line?',
    dateOrSeason: 'Winter 2023',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Luke 9:23, 2 Corinthians 5:21 & Matthew 6:24',
    bookId: 'LUK',
    chapter: 9,
    teachers: 'Trent & Whitney White',
    theme: 'Denying Self, The Americanized Gospel & Sins of Omission',
    summary: 'Jesus commands: "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me." We reject the Americanized "Subway or Burger King - Have it your way" gospel where people cut, paste, and pick only what is comfortable.',
    keyPoints: [
      '1. Luke 9:23: Self-denial is not optional; daily cross-bearing is the baseline of following Jesus.',
      '2. The Americanized Gospel: "We have got just enough Jesus to be informed, but not enough to be transformed."',
      '3. Sins of Commission vs. Sins of Omission: The Rich Young Ruler did nothing overtly scandalous, but still did nothing right for the kingdom of God.',
      '4. Matthew 6:24: You cannot serve two masters. Drawing the line means deciding who sits on the throne of your heart.',
      '5. "Accumulate experiences with Jesus and eternal kingdom fruit, not perishable worldly things."'
    ],
    selfReflectionAudit: [
      'Where have you treated Jesus like a fast-food menu—picking what you like and rejecting what confronts your flesh?',
      'Are you guilty of sins of omission—knowing the good you ought to do and failing to do it?'
    ],
    discussionQuestions: [
      'What does "taking up your cross daily" look like in young adult life (dating, career, money)?',
      'Why is being "informed" about Jesus dangerous if it doesn\'t lead to being "transformed" by Jesus?'
    ],
    challenge: 'Identify one area where culture has blurred your moral lines and redraw the boundary according to Scripture.'
  },
  {
    id: 'lesson_success_inside_job',
    seriesTitle: 'Young Fire Small Groups: Foundation Series',
    lessonTitle: 'Success Is an Inside Job: The Iceberg Principle of Leadership',
    dateOrSeason: 'Spring 2023',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Matthew 25:35, 1 Samuel 16:7 & 2 Corinthians 4:7',
    bookId: 'MAT',
    chapter: 25,
    teachers: 'Trent & Whitney White',
    theme: 'Character Under the Surface, Chabod Glory & Stage vs. Platform',
    summary: 'The part of the iceberg that sank the Titanic was the mass below the water surface. Ministerial longevity depends on unseen character. Saul had an external anointing, but David had a heart after God. Leaders are not measured—they are weighed!',
    keyPoints: [
      '1. The Iceberg Principle: Your public gifts are the tip of the iceberg; your private character is the 90% below the waterline.',
      '2. Chabod (The Full Weight of God\'s Glory): Human eyes look on external charisma, but God weighs the heart.',
      '3. "The difference between victory and defeat is I (pride and self-promotion)."',
      '4. "Broken crayons can still color. God uses fractured vessels when they are surrendered."',
      '5. "A passion to preach without a burden to pray and study is only a desire to perform. A stage is for performance; a platform is for influence."',
      '6. Ministry Team Evolution: Forming, Storming, Norming, Performing.'
    ],
    selfReflectionAudit: [
      'If your private spiritual character were exposed publicly today, would it support your public platform?',
      'Are you seeking a stage to be seen, or a platform to lift up Jesus?'
    ],
    discussionQuestions: [
      'Why did God reject Saul\'s charismatic exterior while choosing David in the sheep pasture?',
      'How do we navigate the "storming" stage of small group relationships into healthy "performing" unity?'
    ],
    challenge: 'Spend 30 minutes in private prayer building the unseen portion of your spiritual iceberg.'
  },
  {
    id: 'lesson_christmas_five_gifts',
    seriesTitle: 'Young Fire Small Groups: Special Series',
    lessonTitle: 'Christmas Is Coming: The Five Unwrapped Gifts of the King',
    dateOrSeason: 'Christmas Season',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Isaiah 7:14, Isaiah 9:6, Isaiah 55:1–3 & John 13:1–17',
    bookId: 'ISA',
    chapter: 9,
    teachers: 'Trent & Whitney White',
    theme: 'Instead of Shopping for Savings, Look at the One Who Saves',
    summary: 'Five eternal spiritual gifts Christ brings to every believer: Salvation, Service, Sense (Spiritual Wisdom), Spirit (Enthusiasm & Resilience), and Stability (Single-minded devotion).',
    keyPoints: [
      '1. Salvation: God loved you enough to come down into human flesh (Immanuel - God with us).',
      '2. Service: John 13 foot washing. We are saved to serve, not to be served.',
      '3. Sense: Sound judgment and discernment in a foolish and deceptive generation.',
      '4. Spirit: Supernatural joy and enthusiasm that rises again after every trial.',
      '5. Stability: James 1:8 freedom from double-mindedness; dependable in church, school, and friendships.'
    ],
    selfReflectionAudit: [
      'Are you more caught up in seasonal consumerism than in adoring the Savior?',
      'How dependable are you when ministry or family responsibilities get difficult?'
    ],
    discussionQuestions: [
      'Which of the five gifts (Salvation, Service, Sense, Spirit, Stability) do you need most this season?',
      'How does washing each other’s feet model Christlike humility in young adult relationships?'
    ],
    challenge: 'Offer an anonymous act of service to someone in your family or small group this week.'
  },
  {
    id: 'lesson_be_on_defense_not_defensive',
    seriesTitle: 'Young Fire Small Groups: Foundation Series',
    lessonTitle: 'Be on Defense, Not Defensive: Spiritual Warfare in 2 Corinthians',
    dateOrSeason: 'Fall 2023',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: '2 Corinthians 1:1–24 & Ephesians 6:10–18',
    bookId: '2CO',
    chapter: 1,
    teachers: 'Trent & Whitney White',
    theme: 'Vigilant Defense vs. Fragile Defensiveness',
    summary: 'There is a massive biblical difference between being on Defense (vigilant protection of the flock and truth) versus being Defensive (thin-skinned, easily provoked, and obsessed with self-justification). Paul models apostolic resilience under attack.',
    keyPoints: [
      '1. Principle 1: Know your credentials—know who you represent in Jesus Christ (2 Cor 1:1–2).',
      '2. Principle 2: Understand that ministry suffering produces supernatural comfort for others (2 Cor 1:3–7).',
      '3. Principle 3: Rely completely on the Lord, not on your own strength or intellect (2 Cor 1:8–11).',
      '4. Principle 4: Be real and transparent—godly sincerity over worldly political posturing (2 Cor 1:12–14).',
      '5. Principle 5: Let your actions speak for themselves; remain faithful in promises and relationships (2 Cor 1:15–24).'
    ],
    selfReflectionAudit: [
      'Do you get defensive and angry when receiving constructive feedback or loving correction?',
      'Are you resting in Christ’s validation or constantly trying to prove your worth to peers?'
    ],
    discussionQuestions: [
      'Why is defensiveness a sign of pride rather than spiritual authority?',
      'How does Paul’s transparency in 2 Corinthians give us permission to be vulnerable in YoungFire?'
    ],
    challenge: 'When corrected or criticized this week, pause, thank the person, and take the matter to God before replying.'
  },
  {
    id: 'lesson_lgbtq_and_controversial_series',
    seriesTitle: 'Young Fire Small Groups: Cultural Apologetics',
    lessonTitle: 'Biblical Truth in a Shifting Culture: Controversial Questions Series',
    dateOrSeason: 'Cultural Series',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Genesis 1:26–27, Jeremiah 1:5, 1 Corinthians 6:9–20 & Romans 8:1–4',
    bookId: '1CO',
    chapter: 6,
    teachers: 'Trent & Whitney White',
    theme: 'Sanctity of Life, Divine Design, Purity & Uncompromising Grace',
    summary: 'Standing anchored in biblical truth while extending Christlike compassion: the sanctity of life in the womb, God\'s intentional design for gender and marriage, sober-mindedness vs escapism, and walking in radical purity in an age of confusion.',
    keyPoints: [
      '1. Sanctity of Life: Jeremiah 1:5 "Before I formed you in the womb I knew you." Every human life bears infinite dignity.',
      '2. God\'s Design for Identity & Marriage: Genesis 1:26–27 Male and female created in the image of God; marriage as a sacred mystery reflecting Christ and the Church (Ephesians 5).',
      '3. Body as the Temple of the Holy Spirit: 1 Corinthians 6:19–20 "You were bought with a price; therefore glorify God in your body."',
      '4. Sobriety & Discernment: 1 Corinthians 6:12 "All things are lawful for me, but I will not be mastered by anything." Rejecting substance escapism (Proverbs 20:1, Ephesians 5:18).',
      '5. Grace and Truth: Jesus welcomed broken sinners without ever compromising or rewriting holy commandments.'
    ],
    selfReflectionAudit: [
      'Do you surrender cultural consensus to the authority of Scripture or bend Scripture to fit modern opinions?',
      'Are your conversations marked by both unwavering truth and deep Christlike compassion?'
    ],
    discussionQuestions: [
      'How did Jesus hold together perfect grace and uncompromising truth in John 8?',
      'How can YoungFire be a refuge for people seeking healing from sexual brokenness and identity confusion?'
    ],
    challenge: 'Memorize 1 Corinthians 6:19–20 and pray for courage to uphold biblical truth with kindness.'
  },
  {
    id: 'lesson_altar_of_forgiveness',
    seriesTitle: 'Young Fire Small Groups: Wednesday Archive',
    lessonTitle: 'Wednesday Bible Study: The Altar of Forgiveness & Complete Release',
    dateOrSeason: 'Wednesday Study',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: '2 Chronicles 7:14, Mark 11:25–26, Luke 17:3–4 & Ephesians 4:31–32',
    bookId: 'MRK',
    chapter: 11,
    teachers: 'Trent & Whitney White',
    theme: 'The Altar Exchange, The Thief on the Cross & Overcoming Bitterness',
    summary: 'Going to the altar to eliminate bitterness, anger, and hidden grief. The lesson of the thief on the cross who looked upon Jesus and received instantaneous paradise. Unforgiveness blocks our worship and prayers.',
    keyPoints: [
      '1. 2 Chronicles 7:14: Humble ourselves, pray, seek His face, and turn from our wicked ways.',
      '2. The Thief on the Cross (Luke 23:42–43): No theological pedigree, no good works—only humble, repentant faith looking at the King.',
      '3. Mark 11:25–26: "When you stand praying, if you have anything against anyone, forgive him, that your Father in heaven may also forgive you."',
      '4. Luke 17:3–4: Forgiving repeatedly when repentance is sought; releasing offenses before they turn into roots of bitterness.',
      '5. Leave it at the altar: Unforgiveness is an anchor dragging your praise into the mud.'
    ],
    selfReflectionAudit: [
      'Who is the one person you still flinch at when their name is mentioned? Have you truly released them?',
      'Are you waiting for the other person to apologize before you obey God\'s command to forgive?'
    ],
    discussionQuestions: [
      'Why is forgiveness an act of the will rather than an emotion?',
      'What happens to a church fellowship when bitterness is allowed to take root in small groups?'
    ],
    challenge: 'Name the person who hurt you most, pray for their salvation and blessing out loud, and leave the offense at the altar.'
  },
  {
    id: 'lesson_soli_deo_gloria_staff',
    seriesTitle: 'Young Fire Small Groups: Foundation Series',
    lessonTitle: 'All In: Soli Deo Gloria & Throw Down Your Staff',
    dateOrSeason: 'YoungFire Flagship',
    status: 'live',
    location: 'The Whites Residence',
    primaryPassage: 'Colossians 3:23–24, Exodus 4:1–3, Job 1:21 & John 17:4–5',
    bookId: 'COL',
    chapter: 3,
    teachers: 'Trent & Whitney White',
    theme: 'Soli Deo Gloria, Living for an Audience of One & Surrendering Control',
    summary: 'Soli Deo Gloria ("Glory to God Alone"). Living solely for an Audience of One. Whatever prayers (Colossians 3:23). Job 1:21 ("The Lord gave and the Lord has taken away; blessed be the name of the Lord"). The Kingdom Equation: Everything - Jesus = Nothing; Jesus + Nothing = Everything. Exodus 4:1–3: Moses had to throw down his shepherd\'s staff (his identity, security, and livelihood) before God could turn it into the Rod of God that split the Red Sea.',
    keyPoints: [
      '1. Soli Deo Gloria: Living for the applause of nail-scarred hands, not likes, retweets, or peer approval.',
      '2. "Whatever Prayers" (Colossians 3:23–24): Whatever you do, work heartily as for the Lord and not for human masters.',
      '3. The Kingdom Equation: Everything minus Jesus equals Nothing; Jesus plus Nothing equals Everything.',
      '4. Exodus 4:1–3: Moses’ staff represented his livelihood, safety, and identity. When he threw it down, it became God’s supernatural instrument.',
      '5. "Without a crucifixion there can be no resurrection. When you have a setback, God is already preparing your comeback."'
    ],
    selfReflectionAudit: [
      'What "staff" of personal ambition, control, or pride are you refusing to lay down at Christ’s feet?',
      'Are you working, studying, and serving for the glory of God or for personal glory?'
    ],
    discussionQuestions: [
      'What makes "Soli Deo Gloria" such a revolutionary counter-cultural standard for young adults?',
      'Why must our natural strength be broken before God’s supernatural power can operate through us?'
    ],
    challenge: 'Take one personal goal or possession you have held onto tightly and surrender ownership to Jesus in prayer today.'
  },
  {
    id: 'lesson_4_soli_deo_gloria',
    seriesTitle: 'Young Fire Small Groups: Foundation 4',
    lessonTitle: 'Soli Deo Gloria: Throw Down Your Staff & Surrender Control',
    dateOrSeason: 'YoungFire Lesson 4',
    primaryPassage: 'Colossians 3:23–24 & Exodus 4:1–3',
    bookId: 'COL',
    chapter: 3,
    teachers: 'Ministers of YoungFire',
    theme: 'Living for an Audience of One & Laying Down Self-Reliance',
    summary: 'Living for an Audience of One (SDG). Doing even everyday work as worship and surrendering the staff of self-reliance.',
    keyPoints: [
      '1. Soli Deo Gloria means seeking only the applause of nail-scarred hands.',
      '2. Moses’ staff represented his livelihood and security; dropping it allowed God to display His power.',
      '3. God wants company in His mission—we are in co-mission together.'
    ],
    selfReflectionAudit: [
      'What staff of security or control are you gripping too tightly?'
    ],
    discussionQuestions: [
      'Why is it impossible to retain control and step out in faith at the same time?'
    ],
    challenge: 'Identify your personal staff and release control to Jesus today.'
  },
  {
    id: 'lesson_5_sword_of_word',
    seriesTitle: 'Young Fire Small Groups: Foundation 5',
    lessonTitle: 'The Weapon of the Word: The Living Sword in Daily Combat',
    dateOrSeason: 'YoungFire Lesson 5',
    primaryPassage: 'Hebrews 4:12 & Ephesians 6:10–18',
    bookId: 'HEB',
    chapter: 4,
    teachers: 'YoungFire Discipleship Ministry Leaders',
    theme: 'The Living Word of God as an Offensive Spiritual Weapon',
    summary: 'Scripture is not dead literature; it is living, sharper than any two-edged sword. Learn how Jesus fought temptation in the wilderness using the written Word.',
    keyPoints: [
      '1. You cannot fight spiritual battles with physical emotions or worldly logic.',
      '2. Jesus responded to every demonic temptation with "It is written."',
      '3. Memorizing Scripture puts ammunition in your spiritual magazine.',
      '4. The Word pierces soul and spirit to discern the real motives of the heart.'
    ],
    selfReflectionAudit: [
      'How much time do you spend scrolling vs. meditating on God’s Word?',
      'When attacked by anxiety or lust, what specific scriptures do you speak out loud?'
    ],
    discussionQuestions: [
      'Why is the Word called a sword rather than a shield?',
      'How can we make scripture memorization a fun team habit in our small group?'
    ],
    challenge: 'Memorize Hebrews 4:12 this week and quote it whenever anxious thoughts arise.'
  },
  {
    id: 'lesson_6_holy_fire_integrity',
    seriesTitle: 'Young Fire Small Groups: Foundation 6',
    lessonTitle: 'Holy Fire: Walking in Integrity & Fleeing Carnal Passions',
    dateOrSeason: 'YoungFire Lesson 6',
    primaryPassage: '2 Timothy 2:20–22 & 1 Corinthians 6:18–20',
    bookId: '2TI',
    chapter: 2,
    teachers: 'YoungFire Ministers',
    theme: 'Vessels of Honor, Moral Purity & Guarding the Eye Gate',
    summary: 'In a great house there are vessels of gold, silver, wood, and clay. To be useful to the Master, we must cleanse ourselves and flee worldly passions alongside those who call on the Lord with a pure heart.',
    keyPoints: [
      '1. Fleeing is not cowardice; fleeing carnal lust is tactical spiritual wisdom.',
      '2. Your body was bought with a price—the shed blood of the Lamb.',
      '3. What enters your eyes directly fuels the fire on the altar of your heart.',
      '4. Purity is not just saying no to sin; it is saying a higher yes to Jesus.'
    ],
    selfReflectionAudit: [
      'What apps, accounts, or late-night habits are pulling you into compromise?',
      'Do you have a trusted brother or sister who can see your screen time and search history?'
    ],
    discussionQuestions: [
      'Why does 2 Timothy say to flee lust WITH those who call on the Lord from a pure heart?',
      'How can we remove the stigma around confessing struggles in small groups?'
    ],
    challenge: 'Delete any app or bookmark that causes you to stumble and set up an accountability partner.'
  },
  {
    id: 'lesson_7_holy_spirit_power',
    seriesTitle: 'Young Fire Small Groups: Foundation 7',
    lessonTitle: 'The Fire That Never Goes Out: Holy Spirit Baptism & Power',
    dateOrSeason: 'YoungFire Lesson 7',
    primaryPassage: 'Acts 1:8, Acts 2:1–4 & Leviticus 6:12–13',
    bookId: 'ACT',
    chapter: 1,
    teachers: 'Ministry Leaders & Small Group Facilitators',
    theme: 'Supernatural Dunamis Power & Keeping the Altar Ablaze',
    summary: 'The fire shall ever be burning upon the altar; it shall never go out. The Holy Spirit is not an abstract force; He is God Himself empowering YoungFire with bold apostolic authority.',
    keyPoints: [
      '1. Dunamis power is given specifically so you can be witnesses in hard places.',
      '2. Daily prayer and surrender is the wood that keeps the Holy Spirit fire burning.',
      '3. The Holy Spirit comforts, guides into all truth, and convicts of righteousness.',
      '4. Expect the supernatural in your everyday life, not just at YoungFire conferences.'
    ],
    selfReflectionAudit: [
      'Is the fire of God roaring or smoldering to embers in your personal prayer life?',
      'Are you relying on your charisma or the power of the Holy Spirit?'
    ],
    discussionQuestions: [
      'What difference did Pentecost make in the lives of terrified disciples?',
      'How do we practically lay wood on the altar each day?'
    ],
    challenge: 'Wake up 20 minutes early for three consecutive days for dedicated altar prayer in the Spirit.'
  },
  {
    id: 'lesson_8_lifestyle_worship',
    seriesTitle: 'Young Fire Small Groups: Foundation 8',
    lessonTitle: 'Worship as a Lifestyle: Spirit & Truth Beyond Sunday Morning',
    dateOrSeason: 'YoungFire Lesson 8',
    primaryPassage: 'John 4:23–24 & Romans 12:1–2',
    bookId: 'JHN',
    chapter: 4,
    teachers: 'YoungFire Worship Team & Ministers',
    theme: 'True Worshippers & Presenting Your Body as a Living Sacrifice',
    summary: 'True worship is not a 20-minute slow song before the sermon. It is the surrender of your intellect, desires, relationships, and time as an agreeable offering to the Father.',
    keyPoints: [
      '1. God seeks worshippers who worship in spirit (authentic heart) and truth (scriptural reality).',
      '2. Offering your daily life is your reasonable act of spiritual worship.',
      '3. Do not be conformed to this world, but be transformed by the renewing of your mind.',
      '4. Worship is warfare: praising in pain breaks chains just like Paul and Silas in Philippi.'
    ],
    selfReflectionAudit: [
      'Do you worship differently when no one is watching than when on a church stage?',
      'What music or cultural media competes with God for your highest adoration?'
    ],
    discussionQuestions: [
      'How does Romans 12 define living sacrifice?',
      'What does worship in truth mean when our feelings are chaotic?'
    ],
    challenge: 'Set aside a 30-minute praise walk this week without asking God for anything—only thanking and adoring Him.'
  },
  {
    id: 'lesson_9_iron_sharpens_iron',
    seriesTitle: 'Young Fire Small Groups: Foundation 9',
    lessonTitle: 'Covenant Brotherhood & Sisterhood: Iron Sharpens Iron',
    dateOrSeason: 'YoungFire Lesson 9',
    primaryPassage: 'Proverbs 27:17 & Ecclesiastes 4:9–12',
    bookId: 'PRO',
    chapter: 27,
    teachers: 'YoungFire Mentors',
    theme: 'Threefold Cord, Authentic Vulnerability & True Loyalty',
    summary: 'As iron sharpens iron, so one person sharpens another. Superficial friendships leave you vulnerable to enemy ambushes; covenant friendships guard your back and elevate your calling.',
    keyPoints: [
      '1. Iron sharpening iron involves friction, heat, and mutual refinement.',
      '2. A three-fold cord with Christ at the center is not quickly broken.',
      '3. Faithful are the wounds of a friend; deceitful are the kisses of an enemy.',
      '4. Guarding your brother or sister in prayer instead of talking behind their back.'
    ],
    selfReflectionAudit: [
      'Do your closest friends pull you toward Jesus or excuse your carnality?',
      'Can you receive loving correction from a small group peer without becoming defensive?'
    ],
    discussionQuestions: [
      'What makes true biblical accountability different from judgmental criticism?',
      'How can we deepen our small group from surface banter into life-transforming brotherhood and sisterhood?'
    ],
    challenge: 'Have a heart-to-heart with one small group peer and share a real struggle you have never voiced before.'
  },
  {
    id: 'lesson_10_bold_evangelism',
    seriesTitle: 'Young Fire Small Groups: Foundation 10',
    lessonTitle: 'Unashamed: The Bold Witness on Campus & Social Platforms',
    dateOrSeason: 'YoungFire Lesson 10',
    primaryPassage: 'Romans 1:16 & 1 Peter 3:15',
    bookId: 'ROM',
    chapter: 1,
    teachers: 'Outreach & Missions Leaders',
    theme: 'Not Ashamed of the Gospel & Ready to Give an Answer',
    summary: 'The gospel is the power of God for salvation to everyone who believes. Step out of timid silence and learn how to share your testimony with gentle boldness and conviction.',
    keyPoints: [
      '1. People aren’t looking for religious arguments; they are hungry for authentic encounters with Jesus.',
      '2. Always be prepared to give an answer for the hope that is within you with gentleness and respect.',
      '3. Your personal story of how Jesus delivered you is an unshakeable testimony.',
      '4. Fear of rejection diminishes when love for the lost overflows.'
    ],
    selfReflectionAudit: [
      'When was the last time you initiated a spiritual conversation with an unbelieving friend?',
      'Are you afraid of losing social status or being labeled for naming Jesus?'
    ],
    discussionQuestions: [
      'How did Jesus converse with the Samaritan woman at the well in John 4?',
      'What simple question can open the door to a gospel conversation at lunch or after practice?'
    ],
    challenge: 'Write down a 2-minute version of your salvation testimony and practice sharing it with your small group.'
  },
  {
    id: 'lesson_11_altar_of_prayer',
    seriesTitle: 'Young Fire Small Groups: Foundation 11',
    lessonTitle: 'The Secret Place: Intercession, Warfare & The Altar of Prayer',
    dateOrSeason: 'YoungFire Lesson 11',
    primaryPassage: 'Matthew 6:5–13 & James 5:16',
    bookId: 'MAT',
    chapter: 6,
    teachers: 'Prayer Ministry Intercessors',
    theme: 'Moving Mountains from the Secret Place of Communion',
    summary: 'When you pray, go into your closet and shut the door. The public authority of Jesus was born in midnight hours of solitude before the Father. Discover the secrets of fervent intercession.',
    keyPoints: [
      '1. God does nothing on earth except in response to the believing prayers of His saints.',
      '2. Fervent, heartfelt prayer of a righteous person accomplishes much.',
      '3. The model prayer: Hallowing God’s name, advancing His kingdom, seeking daily provision and deliverance.',
      '4. Fasting breaks stubborn spiritual strongholds and aligns the flesh with the Spirit.'
    ],
    selfReflectionAudit: [
      'Does your prayer life only activate during emergencies or is it steady communion?',
      'Who are the specific five people you are storming heaven for in intercession?'
    ],
    discussionQuestions: [
      'Why does God reward what is done in secret?',
      'How can our small group pray corporately with greater passion and faith?'
    ],
    challenge: 'Pick one day this week to fast one meal and spend that time in targeted prayer for our city.'
  },
  {
    id: 'lesson_12_kingdom_economy',
    seriesTitle: 'Young Fire Small Groups: Foundation 12',
    lessonTitle: 'Kingdom Economy: Stewardship, Sowing & Freedom from Greed',
    dateOrSeason: 'YoungFire Lesson 12',
    primaryPassage: '2 Corinthians 9:6–8 & Malachi 3:10',
    bookId: '2CO',
    chapter: 9,
    teachers: 'Ministry Stewardship Counselors',
    theme: 'Firstfruits, Sowing Sparingly vs. Bountifully & Breaking Mammon',
    summary: 'Whoever sows sparingly will also reap sparingly; whoever sows bountifully will reap bountifully. True kingdom riches start in your YoungFire season by mastering stewardship of time, talents, and treasure.',
    keyPoints: [
      '1. You cannot serve both God and Mammon (the spirit of greed).',
      '2. God loves a cheerful giver who trusts His supernatural supply.',
      '3. Faithfulness with five dollars in your YoungFire walk prepares you for faithfulness with thousands as an adult.',
      '4. Every dollar you spend or invest is a vote for what kingdom you treasure.'
    ],
    selfReflectionAudit: [
      'Are you generous with what you currently have or waiting until you "make more money"?',
      'Do you tithe and sow into the local house of God with gratitude?'
    ],
    discussionQuestions: [
      'Why is money one of the greatest tests of spiritual maturity in the Bible?',
      'How does understanding God as Provider eliminate scarcity mindset?'
    ],
    challenge: 'Dedicate your next paycheck or allowance firstfruits to God and sow into someone in need.'
  },
  {
    id: 'lesson_13_unshaken_in_culture',
    seriesTitle: 'Young Fire Small Groups: Foundation 13',
    lessonTitle: 'Standing Unshaken: The Daniel Standard in a Babylon Culture',
    dateOrSeason: 'YoungFire Lesson 13',
    primaryPassage: 'Daniel 1:8, Daniel 3:16–18 & Romans 12:2',
    bookId: 'DAN',
    chapter: 1,
    teachers: 'YoungFire Ministers',
    theme: 'Resolve in the Heart, The Fiery Furnace & Unbowed Knees',
    summary: 'Daniel resolved in his heart that he would not defile himself with the king’s delicacies. Shadrach, Meshach, and Abednego stood tall when everyone else bowed. Discover courage to stand against the tide.',
    keyPoints: [
      '1. Compromise doesn’t start with grand rebellion; it starts with subtle allowances.',
      '2. "Our God is able to deliver us, but even if He does not, we will not bow."',
      '3. When you stand for Christ in the furnace, the Fourth Man appears right beside you.',
      '4. The world will respect your convictions long before it respects your compromises.'
    ],
    selfReflectionAudit: [
      'Are you secretly bowing to cultural idols of popularity, sexuality, or cynicism?',
      'Have you resolved beforehand how you will react when pressured to compromise?'
    ],
    discussionQuestions: [
      'Why is pre-deciding your boundaries critical before entering temptation?',
      'How does the presence of the Fourth Man in the fire give us peace today?'
    ],
    challenge: 'Take a stand on one clear biblical conviction this week among friends or online without apology.'
  },
  {
    id: 'lesson_14_sent_torches',
    seriesTitle: 'Young Fire Small Groups: Foundation 14',
    lessonTitle: 'Living Torches: The Apostolic Sendoff & Commission',
    dateOrSeason: 'YoungFire Lesson 14',
    primaryPassage: 'Isaiah 6:8, Matthew 28:18–20 & Mark 16:15–18',
    bookId: 'ISA',
    chapter: 6,
    teachers: 'Founding Overseers & YoungFire Leaders',
    theme: 'Here Am I, Send Me! The Multi-Generational Harvest',
    summary: 'Then I heard the voice of the Lord saying, "Whom shall I send? And who will go for us?" And I said, "Here am I. Send me!" You are not the church of tomorrow; you are the firebrand of today.',
    keyPoints: [
      '1. Discipleship is not complete until you are actively making disciples of others.',
      '2. All authority in heaven and on earth has been given to Christ—and He sends us.',
      '3. These signs follow those who believe: healing the sick, casting out darkness, speaking truth.',
      '4. The torch has been passed to this generation to finish the Great Commission.'
    ],
    selfReflectionAudit: [
      'Are you ready to say "Here am I, send me" without attaching your own terms and conditions?',
      'Who are you pouring into and discipling right now?'
    ],
    discussionQuestions: [
      'What does it mean that YoungFire disciples are not just consumers of church, but sent ministers?',
      'How will our lives look different 5 years from now if we walk out this 14-part calling?'
    ],
    challenge: 'Commit to mentoring or walking with one younger believer throughout this year.'
  }
];

// Provide populated canonical lessons
INITIAL_AUTHENTIC_LESSONS.push(...ARCHIVED_LESSONS);

