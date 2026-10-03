export type Chapter = { id: string; hiTitle: string; title: string; hi: string; en: string; accent: string; orb: [number, number]; drone: number; art: string; ar: number; pal: [string, string, string, string]; place: string; mood: number; amb: string; book?: "ram" | "han" };
const ram: Chapter[] = [
  { id: "birth", ar: 1.0, pal: ["#eddcca", "#d8baa1", "#281b23", "#431b17"], amb: "birds", place: "Ayodhya", hiTitle: "जन्म", title: "The Birth of Shri Rama", accent: "#e8892b", orb: [0.3, 0.55], drone: 110, mood: 0, art: "/img/birth.webp",
    hi: "अयोध्या नगरी में राजा दशरथ को पुत्र की चाह थी। पवित्र यज्ञ की अग्नि से वरदान मिला, और चार राजकुमारों का जन्म हुआ। सबसे बड़े श्री राम अपने भीतर वह प्रकाश लिए थे, जिसे कोई राज्य समेट नहीं सकता था।",
    en: "In golden Ayodhya, King Dasharatha longed for a son. From the sacred fire came a gift, and four princes were born. The eldest, Shri Rama, carried a light no kingdom could hold." },
  { id: "sage", ar: 1.0, pal: ["#e8ddcf", "#d6bca3", "#28191d", "#431e16"], amb: "fire", place: "Siddhashrama", hiTitle: "यज्ञ-रक्षा", title: "The Sage's Call", accent: "#d9781e", orb: [0.65, 0.5], drone: 104, mood: 0, art: "/img/sage.webp",
    hi: "ऋषि विश्वामित्र श्री राम और लक्ष्मण को अपने यज्ञ की रक्षा के लिए वन ले गए। श्री राम ने यज्ञ बचाया और शिला बनी अहिल्या को अपने चरणों के स्पर्श से मुक्त किया।",
    en: "Sage Vishwamitra led Shri Rama and Lakshmana into the forest to guard his sacred rite. Shri Rama protected it, and freed Ahalya from her long stone sleep with a touch of his feet." },
  { id: "bow", ar: 1.0, pal: ["#efdac8", "#d9baa1", "#281921", "#431c18"], amb: "birds", place: "Mithila", hiTitle: "स्वयंवर", title: "The Bow of Shiva", accent: "#e0603a", orb: [0.35, 0.4], drone: 116, mood: 3, art: "/img/bow.webp",
    hi: "मिथिला में राजा जनक ने स्वयंवर रखा। श्री राम ने शिवजी का विशाल धनुष उठाया और वह बीच से टूट गया। सीता ने उन्हें वरमाला पहनाई।",
    en: "In Mithila, King Janaka held a great contest. Shri Rama lifted Shiva's mighty bow and it broke in two. Sita placed the garland around his neck." },
  { id: "exile", ar: 1.0, pal: ["#ebddcb", "#d6bda3", "#281d24", "#432118"], amb: "birds", place: "Dandaka Forest", hiTitle: "वनवास", title: "The Exile", accent: "#3f9a5a", orb: [0.75, 0.3], drone: 98, mood: 1, art: "/img/exile.webp",
    hi: "राज्याभिषेक की पूर्व-संध्या पर, वर्षों पुराना एक वचन माँगा गया। श्री राम ने बिना एक शब्द कहे राजपाट त्याग दिया, और सीता व लक्ष्मण के साथ चौदह वर्ष के लिए वन को चल पड़े।",
    en: "On the eve of his crowning, an old promise was called due. Shri Rama gave up the throne without a word and walked into the forest for fourteen years, with Sita and Lakshmana." },
  { id: "bharata", ar: 1.0, pal: ["#e9ddce", "#d7bda2", "#281e24", "#43211a"], amb: "water", place: "Chitrakoot", hiTitle: "भरत मिलाप", title: "Bharata and the Sandals", accent: "#c7771f", orb: [0.4, 0.6], drone: 92, mood: 1, art: "/img/bharata.webp",
    hi: "भरत वन में श्री राम से मिलने पहुँचे और लौटने की विनती की। श्री राम ने वचन नहीं तोड़ा। भरत उनकी चरण-पादुकाएँ ले गए और उन्हें सिंहासन पर रखकर राज चलाया।",
    en: "Bharata found Shri Rama in the forest and begged him to return. Shri Rama would not break his word, so Bharata carried home his sandals and ruled in their name." },
  { id: "deer", ar: 1.0, pal: ["#e7dbd0", "#d6bea4", "#28171e", "#432116"], amb: "birds", place: "Panchavati", hiTitle: "स्वर्ण मृग", title: "The Golden Deer", accent: "#e59a1f", orb: [0.3, 0.7], drone: 87, mood: 2, art: "/img/deer.webp",
    hi: "वन में एक सोने का हिरण चमका। सीता ने उसे माँगा, और श्री राम उसके पीछे गए। सीता अकेली रह गईं, तभी लंका के दस सिरों वाले राजा रावण ने उन्हें आकाश मार्ग से हर लिया।",
    en: "A golden deer shimmered through the trees. Sita asked for it and Shri Rama followed. While she stood alone, Ravana, the ten-headed king of Lanka, carried her across the sky." },
  { id: "shabari", ar: 1.0, pal: ["#e7dccf", "#d5bca4", "#28191f", "#431f1a"], amb: "birds", place: "Dandaka to Pampa", hiTitle: "जटायु और शबरी", title: "Jatayu and Shabari", accent: "#c0622a", orb: [0.7, 0.55], drone: 82, mood: 1, art: "/img/shabari.webp",
    hi: "घायल जटायु ने बताया कि रावण सीता को दक्षिण ले गया। आगे शबरी ने प्रेम से चखे हुए बेर खिलाए और श्री राम को सुग्रीव से मित्रता का मार्ग दिखाया।",
    en: "Dying Jatayu told Shri Rama which way Ravana had flown. Then Shabari offered berries she had tasted with love, and pointed him toward an ally, Sugriva." },
  { id: "friends", ar: 1.0, pal: ["#e7dccf", "#d7bca2", "#281c25", "#431f18"], amb: "fire", place: "Kishkindha", hiTitle: "किष्किंधा", title: "Friends in Kishkindha", accent: "#d9792a", orb: [0.3, 0.45], drone: 108, mood: 4, art: "/img/friends.webp",
    hi: "ऋष्यमूक पर श्री राम की भेंट हनुमान और सुग्रीव से हुई। अग्नि को साक्षी मानकर मित्रता हुई, और श्री राम ने सुग्रीव को उसका राज्य दिलाया।",
    en: "On Mount Rishyamukha, Shri Rama met Hanuman and Sugriva. Their friendship was sworn before fire, and Shri Rama helped Sugriva win back his kingdom." },
  { id: "hanuman", ar: 1.0, pal: ["#eedbc8", "#d2bfa8", "#281b24", "#432821"], amb: "wind", place: "Kishkindha to Lanka", hiTitle: "हनुमान", title: "Hanuman Leaps", accent: "#f08a2e", orb: [0.7, 0.4], drone: 123, mood: 3, art: "/img/hanuman.webp",
    hi: "पवनपुत्र हनुमान एक ही छलांग में सागर लाँघ गए। अशोक वाटिका में उन्होंने सीता को खोजा और श्री राम की अंगूठी दी। लगभग बुझ चुकी आशा फिर जल उठी।",
    en: "Hanuman, son of the wind, crossed the ocean in one leap. In Lanka's garden he found Sita and gave her Shri Rama's ring. Her nearly extinguished hope lit again." },
  { id: "bridge", ar: 1.0, pal: ["#dfddd8", "#d2bda7", "#192036", "#432321"], amb: "water", place: "Rameswaram", hiTitle: "सेतु", title: "The Bridge of Stones", accent: "#2a8fa8", orb: [0.25, 0.35], drone: 104, mood: 4, art: "/img/bridge.webp",
    hi: "समुद्र के तट पर वानर सेना ने पत्थरों पर श्री राम का नाम लिखा। पत्थर तैरने लगे। कदम दर कदम, लंका की ओर जल पर एक सेतु बनता गया।",
    en: "At the sea's edge, an army of vanaras wrote Shri Rama's name on stones. The stones floated. Step by step, a bridge grew across the water toward Lanka." },
  { id: "war", ar: 1.0, pal: ["#ead9cc", "#d7bba2", "#28151d", "#431c17"], amb: "fire", place: "Lanka", hiTitle: "युद्ध", title: "The War of Lanka", accent: "#e04a1e", orb: [0.6, 0.65], drone: 73, mood: 5, art: "/img/war.webp",
    hi: "दस दिन तक घमासान हुआ। बाण धूमकेतु की तरह जले। अंत में श्री राम ने रावण का सामना किया, और देवताओं के आशीर्वाद से एक बाण ने अंधकार को चीर दिया।",
    en: "Ten days of thunder. Arrows burned like comets. At last Shri Rama faced Ravana, and one arrow, blessed by the gods, broke the darkness apart." },
  { id: "return", ar: 1.5013, pal: ["#e7dbd0", "#dcb99d", "#281923", "#431b16"], amb: "fire", place: "Ayodhya", hiTitle: "दीपावली", title: "The Return of Light", accent: "#f2a516", orb: [0.5, 0.5], drone: 130, mood: 6, art: "/img/return.webp",
    hi: "चौदह वर्ष बाद श्री राम अयोध्या लौटे। नगरवासियों ने उनके स्वागत में लाखों दीप जलाए। उसी प्रकाश की रात को हम हर वर्ष दिवाली के रूप में याद करते हैं।",
    en: "After fourteen years, Shri Rama returned to Ayodhya. The people lit a million lamps to guide him home. We remember that night of light every year as Diwali." },
];

// ───── Part two: the story of Hanuman ─────
const han: Chapter[] = [
  { id: "h-birth", ar: 1.7778, pal: ["#e8dbcf", "#d6bda4", "#281a25", "#43231e"], book: "han", amb: "wind", place: "Anjana's Hill", hiTitle: "पवन-पुत्र", title: "Son of the Wind", accent: "#ff8a3d", orb: [0.35, 0.5], drone: 98, mood: 7, art: "/img/h-birth.webp",
    hi: "वानरराज केसरी और माता अंजना के घर एक तेजस्वी बालक जन्मा। पवनदेव के आशीर्वाद से वह वायु की गति और अपार बल लेकर आया था।",
    en: "To Kesari and Anjana was born a radiant child, blessed by Vayu, the wind god, with the speed of the wind and strength without measure." },
  { id: "h-sun", ar: 1.7778, pal: ["#edddca", "#dfbc9a", "#281c22", "#43241f"], book: "han", amb: "wind", place: "The Dawn Sky", hiTitle: "सूर्य-फल", title: "The Fruit in the Sky", accent: "#ffa51f", orb: [0.5, 0.35], drone: 104, mood: 3, art: "/img/h-sun.webp",
    hi: "भोर में उगते सूर्य को मीठा फल समझकर बालक हनुमान उसे पकड़ने आकाश में उछल पड़े। इंद्र के वज्र से उनकी ठोड़ी (हनु) पर चोट लगी, और तभी उनका नाम पड़ा हनुमान।",
    en: "Mistaking the rising sun for a sweet fruit, the child Hanuman leapt into the sky to catch it. Indra's thunderbolt struck his jaw, hanu, and so he was named Hanuman." },
  { id: "h-meet", ar: 1.0, pal: ["#eadccd", "#d7bea2", "#281c24", "#432219"], book: "han", amb: "birds", place: "Rishyamukha", hiTitle: "प्रथम भेंट", title: "The First Meeting", accent: "#ee7f3a", orb: [0.6, 0.55], drone: 110, mood: 7, art: "/img/h-meet.webp",
    hi: "ऋष्यमूक पर्वत पर हनुमान ने पहली बार श्री राम और लक्ष्मण को देखा। उसी क्षण उनका हृदय झुक गया, और वे जीवन भर के लिए श्री राम के सेवक हो गए।",
    en: "On Mount Rishyamukha, Hanuman first saw Shri Rama and Lakshmana. In that moment his heart bowed, and he became Rama's servant for all time." },
  { id: "h-leap", ar: 1.7778, pal: ["#dddcda", "#c8bfb1", "#171d36", "#27273c"], book: "han", amb: "water", place: "The Southern Sea", hiTitle: "सागर-लंघन", title: "The Great Leap", accent: "#46a8e0", orb: [0.45, 0.45], drone: 92, mood: 4, art: "/img/h-leap.webp",
    hi: "जाम्बवान ने उन्हें उनकी भूली हुई शक्ति याद दिलाई। हनुमान ने श्री राम का नाम लिया और सौ योजन का विशाल सागर एक ही छलाँग में पार करने निकल पड़े।",
    en: "Jambavan reminded him of the strength he had forgotten. Speaking Shri Rama's name, Hanuman rose and leapt across the hundred-league ocean." },
  { id: "h-ashoka", ar: 1.7778, pal: ["#e3dbd3", "#d1bca8", "#281925", "#431f1b"], book: "han", amb: "birds", place: "Ashoka Vatika", hiTitle: "आशा की अँगूठी", title: "A Ring of Hope", accent: "#d65a9a", orb: [0.6, 0.5], drone: 87, mood: 1, art: "/img/h-ashoka.webp",
    hi: "अशोक वाटिका में माता सीता शोक में बैठी थीं। हनुमान ने श्री राम की मुद्रिका उनके सामने रखी, और बहुत दिनों बाद सीता के मुख पर आशा की मुस्कान लौटी।",
    en: "In the Ashoka grove Mother Sita sat in sorrow. Hanuman laid Shri Rama's ring before her, and after many days hope returned to her face." },
  { id: "h-lanka", ar: 1.7778, pal: ["#e8d9ce", "#d8baa1", "#28121c", "#431a15"], book: "han", amb: "fire", place: "Lanka", hiTitle: "लंका-दहन", title: "Lanka Burns", accent: "#ff5a1f", orb: [0.5, 0.6], drone: 82, mood: 5, art: "/img/h-lanka.webp",
    hi: "रावण ने हनुमान की पूँछ में आग लगवा दी। उसी अग्नि से हनुमान ने अहंकार की नगरी लंका को जला दिया, और माता सीता का स्थान सुरक्षित रहा।",
    en: "Ravana set Hanuman's tail alight. With that very fire he burned the city of pride, while the grove where Sita sat was left untouched." },
  { id: "h-sanjeevani", ar: 1.7778, pal: ["#deded9", "#c8bfb2", "#192336", "#272b3c"], book: "han", amb: "wind", place: "Dronagiri", hiTitle: "संजीवनी", title: "The Mountain of Herbs", accent: "#6fe0b0", orb: [0.4, 0.5], drone: 116, mood: 2, art: "/img/h-sanjeevani.webp",
    hi: "युद्ध में लक्ष्मण मूर्छित हो गए। जड़ी-बूटी पहचान न पाने पर हनुमान पूरा द्रोणागिरि पर्वत ही उठा लाए और रात बीतने से पहले लक्ष्मण को जीवन मिल गया।",
    en: "Lakshmana fell unconscious in battle. Unable to tell the herb from the rest, Hanuman lifted the whole mountain and brought it before the night was over." },
  { id: "h-heart", ar: 1.0, pal: ["#e7dcd0", "#d9baa1", "#28181c", "#431a15"], book: "han", amb: "birds", place: "Ayodhya", hiTitle: "हृदय में राम", title: "Rama in His Heart", accent: "#ffcf5a", orb: [0.5, 0.5], drone: 110, mood: 6, art: "/img/h-heart.webp",
    hi: "जब पूछा गया कि उनके लिए श्री राम क्या हैं, तो हनुमान ने अपना हृदय खोलकर दिखाया। वहाँ श्री राम और माता सीता विराजमान थे। यही सच्ची भक्ति है।",
    en: "Asked what Shri Rama was to him, Hanuman opened his chest. There, within his heart, sat Rama and Sita. This is devotion in its purest form." },
];
export const chapters: Chapter[] = [...ram.map(c => ({ ...c, book: "ram" as const })), ...han];
export const HAN_START = ram.length;
export const BOOKS = { ram: { from: 0, to: ram.length, name: "रामायण" }, han: { from: ram.length, to: ram.length + han.length, name: "हनुमान" } } as const;

// Photo art lives in /img/<id>.webp with a 560px thumbnail in /img/t/<id>.webp. Chapters still on the old SVG art
// (sanjeevani, heart) fall back to it until their photos are added; drop <id>.webp into both folders to switch.
export const isPhoto = (c: Chapter) => c.art.startsWith("/img/");
export const thumbOf = (c: Chapter) => (isPhoto(c) ? c.art.replace("/img/", "/img/t/") : c.art);
