const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const albums = {
    "2016": [
        {
            "artist": "Solange",
            "album": "A Seat at the Table",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/5929be4b5e6ef95969323215/master/w_1600%2Cc_limit/f4b40c2b.jpg"
        },
        {
            "artist": "Frank Ocean",
            "album": "Blonde",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/5d8907371f868e00096102c5/master/w_1600%2Cc_limit/Frank-Ocean-Blonde.jpg"
        },
        {
            "artist": "Beyoncé",
            "album": "Lemonade",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/5d7bceb78699b30008f1b037/master/w_1600%2Cc_limit/Beyonce%25CC%2581-Lemonade.jpg"
        },
        {
            "artist": "David Bowie",
            "album": "Blackstar",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/651d80751fe20d67109f7bd1/master/w_1600%2Cc_limit/Blackstar.jpeg"
        },
        {
            "artist": "Kanye West",
            "album": "The Life of Pablo",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/65cd1c31c57e150876097abb/master/w_1600%2Cc_limit/Kanye-West-The-Life-of-Pablo.jpg"
        },
        {
            "artist": "Chance the Rapper",
            "album": "Coloring Book",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/64b801159c2f3e82807c0a55/master/w_1600%2Cc_limit/Chance-the-Rapper-Coloring-Book.jpg"
        },
        {
            "artist": "A Tribe Called Quest",
            "album": "We got it from Here... Thank You 4 Your service",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/5929bf695e6ef959693233cc/master/w_1600%2Cc_limit/98b81f8d.jpeg"
        },
        {
            "artist": "ANOHNI",
            "album": "Hopelessness",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/5d7bc2a20db1d10008f200c5/master/w_1600%2Cc_limit/ANOHNI-Hopelessness.jpg"
        },
        {
            "artist": "Angel Olsen",
            "album": "My Woman",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/5929bc97abf31b7dc7155d62/master/w_1600%2Cc_limit/b536a49e.jpg"
        },
        {
            "artist": "Radiohead",
            "album": "A Moon Shaped Pool",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/5d76ae9d6eee70000829f356/master/w_1600%2Cc_limit/Radiohead-A-Moon-Shaped-Pool.jpg"
        },
        {
            "artist": "Danny Brown",
            "album": "Atrocity Exhibition",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/5929be325e6ef959693231f5/master/w_1600%2Cc_limit/7d68020e.jpg"
        },
        {
            "artist": "Bon Iver",
            "album": "22, A Million",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/5d7801fcfd34990009cf8bff/master/w_1600%2Cc_limit/Bon-Iver-22-A-Million.jpg"
        },
        {
            "artist": "Anderson .Paak",
            "album": "Malibu",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/5929b2ca5e6ef9596932235b/master/w_1600%2Cc_limit/0e1836c9.jpg"
        },
        {
            "artist": "Blood Orange",
            "album": "Freetown Sound",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/5929c55313d197565213bfb0/master/w_1600%2Cc_limit/eacc2030.jpg"
        },
        {
            "artist": "Nick Cave & the Bad Seeds",
            "album": "Skeleton Tree",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/6539233709b3de4c3ac8699d/master/w_1600%2Cc_limit/Nick-Cave-and-the-Bad-Seeds-Skeleton-Tree.jpg"
        },
        {
            "artist": "Kendrick Lamar",
            "album": "untitled unmastered.",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/5929b49e9d034d5c69bf4ec7/master/w_1600%2Cc_limit/1bcdfd6b.jpg"
        },
        {
            "artist": "Leonard Cohen",
            "album": "You Want It Darker",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/5929f5ded7a71d1ea569b130/master/w_1600%2Cc_limit/df53b5a0.jpg"
        },
        {
            "artist": "Mitski",
            "album": "Puberty 2",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/5d7bf3984bc65100086999c6/master/w_1600%2Cc_limit/Mitski-Puberty-2.jpg"
        },
        {
            "artist": "Rihanna",
            "album": "ANTI",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/63e51ebc725c82f71c84ac13/master/w_1600%2Cc_limit/anti-riri.jpeg"
        },
        {
            "artist": "Nicolas Jaar",
            "album": "Sirens",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/5929bdf5eb335119a49ecfb9/master/w_1600%2Cc_limit/53fdc12f.jpg"
        },
        {
            "artist": "Young Thug",
            "album": "JEFFERY",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/5929bcf85e6ef95969322f72/master/w_1600%2Cc_limit/7f0be354.jpg"
        },
        {
            "artist": "YG",
            "album": "Still Brazy",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/5929b62313d197565213ada5/master/w_1600%2Cc_limit/e308ca36.jpg"
        },
        {
            "artist": "Jenny Hval",
            "album": "Blood Bitch",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/5929bcdcc0084474cd0c2b98/master/w_1600%2Cc_limit/4171f275.jpg"
        },
        {
            "artist": "Car Seat Headrest",
            "album": "Teens of Denial",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/5d76af692073fe00084eb238/master/w_1600%2Cc_limit/Car-Seat-Headrest-Teens-of-Denial.jpg"
        },
        {
            "artist": "Kaytranada",
            "album": "99.9%",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/5d77b89bfd34990009cf8be3/master/w_1600%2Cc_limit/Kaytranada-99.9.jpg"
        },
        {
            "artist": "Parquet Courts",
            "album": "Human Performance",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/5929f8170c2bba1b7de03b3f/master/w_1600%2Cc_limit/d5a30e2e.jpg"
        },
        {
            "artist": "Noname",
            "album": "Telefone",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/5929bc37abf31b7dc7155c84/master/w_1600%2Cc_limit/1c0dfe78.jpg"
        },
        {
            "artist": "NxWorries",
            "album": "Yes Lawd!",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/5929bd6ceb335119a49ece94/master/w_1600%2Cc_limit/6f69af23.jpg"
        },
        {
            "artist": "Kaitlyn Aurelia Smith",
            "album": "EARS",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/5929b3b5c0084474cd0c2187/master/w_1600%2Cc_limit/e4b15a72.jpg"
        },
        {
            "artist": "Esperanza Spalding",
            "album": "Emily's D+Evolution",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/5929b3c813d197565213a9cb/master/w_1600%2Cc_limit/31d39fa4.jpg"
        },
        {
            "artist": "Whitney",
            "album": "Light Upon the Lake",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/5929b585c0084474cd0c242e/master/w_1600%2Cc_limit/ad25691c.jpg"
        },
        {
            "artist": "Elza Soares",
            "album": "A Mulher do Fim do Mundo (The Woman at the End of the World)",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/5929bbe0c0084474cd0c2967/master/w_1600%2Cc_limit/5510766a.jpg"
        },
        {
            "artist": "Maxwell",
            "album": "blackSUMMERS'night",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/5929c558eb335119a49ed9ac/master/w_1600%2Cc_limit/09fa1333.jpg"
        },
        {
            "artist": "Kevin Morby",
            "album": "Singing Saw",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/5929b46ac0084474cd0c228f/master/w_1600%2Cc_limit/8ded819b.jpeg"
        },
        {
            "artist": "Rostam / Hamilton Leithauser",
            "album": "I Had a Dream That You Were Mine",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/5929bcdaeb335119a49ecd67/master/w_1600%2Cc_limit/b4d4b6b1.jpg"
        },
        {
            "artist": "Jamila Woods",
            "album": "HEAVN",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/5929bbcac0084474cd0c2937/master/w_1600%2Cc_limit/261a7f48.jpg"
        },
        {
            "artist": "KING",
            "album": "We Are KING",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/5929b33fea9e61561daa6a6d/master/w_1600%2Cc_limit/9a724c28.jpg"
        },
        {
            "artist": "Schoolboy Q",
            "album": "Blank Face LP",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/65d7b494e6db9b2c4c2b13e3/master/w_1600%2Cc_limit/Schoolboy-Q-Blank-Face-LP.jpg"
        },
        {
            "artist": "Moodymann",
            "album": "DJ-Kicks",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/5929b3ce5e6ef959693224f4/master/w_1600%2Cc_limit/eaeea878.jpg"
        },
        {
            "artist": "Wadada Leo Smith / Vijay Iyer",
            "album": "A Cosmic Rhythm With Each Stroke",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/5929b37ac0084474cd0c2125/master/w_1600%2Cc_limit/07bbdbe9.jpg"
        },
        {
            "artist": "Huerco S.",
            "album": "For Those of You Who Have Never (And Also Those Who Have)",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/5929b59fea9e61561daa6e31/master/w_1600%2Cc_limit/c2ae4352.jpg"
        },
        {
            "artist": "Vince Staples",
            "album": "Prima Donna",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/5929bcb713d197565213b3a4/master/w_1600%2Cc_limit/88a25161.jpg"
        },
        {
            "artist": "Weyes Blood",
            "album": "Front Row Seat to Earth",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/5929be1f5e6ef959693231dc/master/w_1600%2Cc_limit/084883fd.jpg"
        },
        {
            "artist": "Kevin Gates",
            "album": "Islah",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/5929b2409d034d5c69bf4b3a/master/w_1600%2Cc_limit/d1a46c97.jpg"
        },
        {
            "artist": "William Tyler",
            "album": "Modern Country",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/5929b5c5b1335d7bf169a95e/master/w_1600%2Cc_limit/8e780eab.jpg"
        },
        {
            "artist": "Pinegrove",
            "album": "Cardinal",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/65fae98a939f6937e6900a62/master/w_1600%2Cc_limit/Pinegrove%2520-%2520Cardinal.jpeg"
        },
        {
            "artist": "Kamaiyah",
            "album": "A Good Night in the Ghetto",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/5929b4ab9d034d5c69bf4eda/master/w_1600%2Cc_limit/9682145a.jpg"
        },
        {
            "artist": "Frankie Cosmos",
            "album": "Next Thing",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/5929b4f513d197565213abb6/master/w_1600%2Cc_limit/e6f8e4d7.jpg"
        },
        {
            "artist": "Porches",
            "album": "Pool",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/65fae8c89bcec340595b52e3/master/w_1600%2Cc_limit/Porches%2520-%2520Pool.jpeg"
        },
        {
            "artist": "Metro Boomin / 21 Savage",
            "album": "Savage Mode",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/5d72d38cfd34990009cf8a1d/master/w_1600%2Cc_limit/21-Savage-Metro-Boomin-Savage-Mode.jpg"
        }
    ],
    "2017": [
        {
            "artist": "Kendrick Lamar",
            "album": "DAMN.",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/5d7a63a8256a0a0009483358/master/w_1600%2Cc_limit/Kendrick-Lamar-DAMN.jpg"
        },
        {
            "artist": "SZA",
            "album": "Ctrl",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/593ed23cf6f585756595affa/master/w_1600%2Cc_limit/b24dfb11.jpg"
        },
        {
            "artist": "King Krule",
            "album": "The OOZ",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/59d6ab987855fa6c9a16f2f1/master/w_1600%2Cc_limit/the%2520ooz_king%2520krule.jpg"
        },
        {
            "artist": "Kelela",
            "album": "Take Me Apart",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/59d6839ba161ef1828a4b3b9/master/w_1600%2Cc_limit/kelela_take.jpg"
        },
        {
            "artist": "Lorde",
            "album": "Melodrama",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/5d8904320480b10008ffa260/master/w_1600%2Cc_limit/Lorde-Melodrama.jpeg"
        },
        {
            "artist": "Moses Sumney",
            "album": "Aromanticism",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/5d77b9946eee70000829f3fe/master/w_1600%2Cc_limit/Moses-Sumney-Aromanticism.jpg"
        },
        {
            "artist": "Vince Staples",
            "album": "Big Fish Theory",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/594c1ddad3993f4ad30b94c4/master/w_1600%2Cc_limit/vince%2520staples%2520big%2520fish%2520theory.jpg"
        },
        {
            "artist": "Tyler, the Creator",
            "album": "Flower Boy",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/5d76b30053e80c0008f43815/master/w_1600%2Cc_limit/Tyler-the-Creator-Flower-Boy.jpg"
        },
        {
            "artist": "Fever Ray",
            "album": "Plunge",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/651c7f028d07c4e0b46f71aa/master/w_1600%2Cc_limit/Fever%2520Ray%2520Plunge.jpg"
        },
        {
            "artist": "Jlin",
            "album": "Black Origami",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/5d7a67038699b30008f1aeae/master/w_1600%2Cc_limit/Jlin-Black-Origami.jpg"
        },
        {
            "artist": "The War on Drugs",
            "album": "A Deeper Understanding",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/651c7e73bfd513aedb130ad2/master/w_1600%2Cc_limit/War%2520on%2520Drugs%2520A%2520Deeper%2520Understanding.jpg"
        },
        {
            "artist": "LCD Soundsystem",
            "album": "American Dream",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/639b2b714a2538c4055b0e80/master/w_1600%2Cc_limit/LCD-Soundsystem-American-Dream.jpg"
        },
        {
            "artist": "JAY-Z",
            "album": "4:44",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/651c7e189accbbeca9f91a1d/master/w_1600%2Cc_limit/JAY-Z%25204%252044.jpg"
        },
        {
            "artist": "Mount Eerie",
            "album": "A Crow Looked at Me",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/5d7bc57053e80c0008f43b26/master/w_1600%2Cc_limit/Mount-Eerie-A-Crow-Looked-at-Me.jpg"
        },
        {
            "artist": "Sampha",
            "album": "Process",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/5d76b6799ce93e0008382265/master/w_1600%2Cc_limit/Sampha-Process.jpg"
        },
        {
            "artist": "Perfume Genius",
            "album": "No Shape",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/5d7950a24bc6510008699749/master/w_1600%2Cc_limit/Perfume-Genius-No-Shape.jpg"
        },
        {
            "artist": "Charlotte Gainsbourg",
            "album": "Rest",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/651c7d460fec390851441fdc/master/w_1600%2Cc_limit/Charlotte%2520Gainsbourg%2520Rest.jpg"
        },
        {
            "artist": "Julien Baker",
            "album": "Turn Out the Lights",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/59df8df69fc4f92030bb5c58/master/w_1600%2Cc_limit/turn%2520out%2520the%2520lights_julien%2520baker.jpg"
        },
        {
            "artist": "Migos",
            "album": "Culture",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/651c7ce4fce6fefcd169023c/master/w_1600%2Cc_limit/Migos%2520Culture.jpg"
        },
        {
            "artist": "Björk",
            "album": "Utopia",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/5a0c61a753d2ec32119336b3/master/w_1600%2Cc_limit/bjork%2520utopia.jpg"
        },
        {
            "artist": "Arca",
            "album": "Arca",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/5929f36beb335119a49ef99d/master/w_1600%2Cc_limit/658a3645.jpg"
        },
        {
            "artist": "St. Vincent",
            "album": "Masseduction",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/59d3d5948e7d4e2f3d4da52a/master/w_1600%2Cc_limit/masseduction_st%2520vincent.jpg"
        },
        {
            "artist": "Big Thief",
            "album": "Capacity",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/651c7c093776bf8149410db8/master/w_1600%2Cc_limit/Big%2520Thief%2520Capacity.jpg"
        },
        {
            "artist": "Thundercat",
            "album": "Drunk",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/651c7bc5fce6fefcd1690238/master/w_1600%2Cc_limit/Thundercat%2520Drunk.jpg"
        },
        {
            "artist": "Priests",
            "album": "Nothing Feels Natural",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/5929c059abf31b7dc715644a/master/w_1600%2Cc_limit/cebb0744.jpg"
        },
        {
            "artist": "Jay Som",
            "album": "Everybody Works",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/5d72b91f0db1d10008f1faa6/master/w_1600%2Cc_limit/Jay-Som-Everybody-Works.jpg"
        },
        {
            "artist": "Future",
            "album": "HNDRXX",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/5929c1e6c0084474cd0c33dc/master/w_1600%2Cc_limit/d2f1a76e.jpg"
        },
        {
            "artist": "Ibeyi",
            "album": "Ash",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/59a8696fc6078536656ece52/master/w_1600%2Cc_limit/ibeyi%2520ash%2520ash%2520cover.jpg"
        },
        {
            "artist": "Run the Jewels",
            "album": "Run the Jewels 3",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/5929c06d5e6ef95969323550/master/w_1600%2Cc_limit/f50f99fa.jpg"
        },
        {
            "artist": "Slowdive",
            "album": "Slowdive",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/651c7a903776bf8149410db6/master/w_1600%2Cc_limit/Slowdive%2520Slowdive.jpg"
        },
        {
            "artist": "Kamasi Washington",
            "album": "Harmony of Difference EP",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/651c79e367d8e58d2fbdfd2e/master/w_1600%2Cc_limit/Kamasi%2520Washington%2520Harrmony%2520of%2520Difference.jpg"
        },
        {
            "artist": "Lana Del Rey",
            "album": "Lust for Life",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/63ed45f2589919a844be73f0/master/w_1600%2Cc_limit/Lana-Del-Rey-Lust-for-Life.jpg"
        },
        {
            "artist": "Kelly Lee Owens",
            "album": "Kelly Lee Owens",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/5929c235c0084474cd0c341f/master/w_1600%2Cc_limit/4722dfb8.jpg"
        },
        {
            "artist": "Mount Kimbie",
            "album": "Love What Survives",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/651c79398d07c4e0b46f71a8/master/w_1600%2Cc_limit/Mount%2520Kimbie%2520Love%2520What%2520Survives.jpg"
        },
        {
            "artist": "Playboi Carti",
            "album": "Playboi Carti",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/5d766c7a0db1d10008f1fb22/master/w_1600%2Cc_limit/Playboi-Carti.jpeg"
        },
        {
            "artist": "Syd",
            "album": "Fin",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/651c78c1ba9d1afe4e9a89ed/master/w_1600%2Cc_limit/Syd%2520Fin.jpg"
        },
        {
            "artist": "Julie Byrne",
            "album": "Not Even Happiness",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/5929c063abf31b7dc7156454/master/w_1600%2Cc_limit/f0a6f4e4.jpg"
        },
        {
            "artist": "Drake",
            "album": "More Life",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/5929c24b13d197565213bce1/master/w_1600%2Cc_limit/ae52c98d.jpg"
        },
        {
            "artist": "Fleet Foxes",
            "album": "Crack-Up",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/593efe6acbfb4235e8b872c4/master/w_1600%2Cc_limit/crack-up.jpg"
        },
        {
            "artist": "The xx",
            "album": "I See You",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/651c7244b87d59c47a3234b3/master/w_1600%2Cc_limit/The%2520xx%2520I%2520See%2520You.jpg"
        },
        {
            "artist": "Zola Jesus",
            "album": "Okovi",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/651c3ad7d7a6fde3614c14c2/master/w_1600%2Cc_limit/Zola%2520Jesus%2520Okovi.jpg"
        },
        {
            "artist": "Vagabon",
            "album": "Infinite Worlds",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/5929c18dc0084474cd0c336a/master/w_1600%2Cc_limit/8c0e76c5.jpg"
        },
        {
            "artist": "Lil B",
            "album": "Black Ken",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/5996017707b7060c23525ddb/master/w_1600%2Cc_limit/lil%2520b%2520black%2520ken%2520cover.jpg"
        },
        {
            "artist": "Kaitlyn Aurelia Smith",
            "album": "The Kid",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/651c3a66d7a6fde3614c14c0/master/w_1600%2Cc_limit/Kaitlyn%2520Aurelia%2520Smith%2520The%2520Kid.jpg"
        },
        {
            "artist": "Girlpool",
            "album": "Powerplant",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/592f54dce972aa38417255ad/master/w_1600%2Cc_limit/file"
        },
        {
            "artist": "Laurel Halo",
            "album": "Dust",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/651c3a0230b9a568d0e2c102/master/w_1600%2Cc_limit/Laurel%2520Halo%2520Dust.jpg"
        },
        {
            "artist": "Kehlani",
            "album": "SweetSexySavage",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/5929c0b5ea9e61561daa7c79/master/w_1600%2Cc_limit/e5a744de.jpg"
        },
        {
            "artist": "(Sandy) Alex G",
            "album": "Rocket",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/5929c3c4eb335119a49ed7bc/master/w_1600%2Cc_limit/cf2c3c90.jpg"
        },
        {
            "artist": "Open Mike Eagle",
            "album": "Brick Body Kids Still Daydream",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/597f8fa5452fd16aaaeaa71a/master/w_1600%2Cc_limit/open%2520mike%2520eagle%2520cover.jpg"
        },
        {
            "artist": "Yaeji",
            "album": "EP/EP2",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/5929c225eb335119a49ed676/master/w_1600%2Cc_limit/d661b15c.jpg"
        }
    ],
    "2018": [
        {
            "artist": "Mitski",
            "album": "Be the Cowboy",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/645d40634f4e20edab39a90b/master/w_1600%2Cc_limit/Mitski-Be-the-Cowboy.jpg"
        },
        {
            "artist": "Kacey Musgraves",
            "album": "Golden Hour",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/641deb27aef545723eec5e31/master/w_1600%2Cc_limit/Kacey-Musgraves-Golden-Hour.jpg"
        },
        {
            "artist": "DJ Koze",
            "album": "Knock Knock",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/5d7a68484bc6510008699895/master/w_1600%2Cc_limit/DJ-Koze-Knock-Knock.jpg"
        },
        {
            "artist": "Robyn",
            "album": "Honey",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/5d7950016eee70000829f66d/master/w_1600%2Cc_limit/Robyn-Honey.jpg"
        },
        {
            "artist": "Snail Mail",
            "album": "Lush",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/647df852fc45260b788763db/master/w_1600%2Cc_limit/Snail-Mail-Lush.png"
        },
        {
            "artist": "Rosalía",
            "album": "El Mal Querer",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/64b194c24d755736fe4b0d2a/master/w_1600%2Cc_limit/Rosalia-El-Mal-Querer.jpg"
        },
        {
            "artist": "Earl Sweatshirt",
            "album": "Some Rap Songs",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/650510a6b07566d3ac5f7ccc/master/w_1600%2Cc_limit/Earl-Sweatshirt-Some-Rap-Songs.jpg"
        },
        {
            "artist": "Low",
            "album": "Double Negative",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/650220357571b6377545f3bb/master/w_1600%2Cc_limit/Low-Double-Negative.jpg"
        },
        {
            "artist": "Tierra Whack",
            "album": "Whack World",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/5d7be9588699b30008f1b039/master/w_1600%2Cc_limit/Tierra-Whack-Whack-World.jpg"
        },
        {
            "artist": "Yves Tumor",
            "album": "Safe in the Hands of Love",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/5d76b0acfd34990009cf8b43/master/w_1600%2Cc_limit/Yves-Tumor-Safe-in-the-Hands-of-Love.jpg"
        },
        {
            "artist": "Ariana Grande",
            "album": "Sweetener",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/64b1973a37e30e506f0416db/master/w_1600%2Cc_limit/Ariana-Grande-Sweetener.jpg"
        },
        {
            "artist": "CupcakKe",
            "album": "Ephorize",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/5a4bfe210c1ab40a8ff883ce/master/w_1600%2Cc_limit/Cupcakke.jpg"
        },
        {
            "artist": "Tirzah",
            "album": "Devotion",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/5d78009f0db1d10008f1fcb5/master/w_1600%2Cc_limit/Tirzah-Devotion.jpg"
        },
        {
            "artist": "Amen Dunes",
            "album": "Freedom",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/5d76ac1e9ce93e000838225b/master/w_1600%2Cc_limit/Amen-Dunes-Freedom.jpg"
        },
        {
            "artist": "Noname",
            "album": "Room 25",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/5d72c6f5fd34990009cf89e5/master/w_1600%2Cc_limit/Noname-Room-25.jpg"
        },
        {
            "artist": "Jon Hopkins",
            "album": "Singularity",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/5a9ffd01340a1c29ad6d710e/master/w_1600%2Cc_limit/jon%2520hopkins%2520singularity.jpg"
        },
        {
            "artist": "Pusha T",
            "album": "Daytona",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/5d728cf29ce93e00083820d1/master/w_1600%2Cc_limit/Pusha-T-Daytona.jpg"
        },
        {
            "artist": "SOPHIE",
            "album": "OIL OF EVERY PEARL's UN-INSIDES",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/648747aaaed875e699bc73ed/master/w_1600%2Cc_limit/Sophie.jpg"
        },
        {
            "artist": "Cardi B",
            "album": "Invasion of Privacy",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/5d794ea24bc6510008699745/master/w_1600%2Cc_limit/Cardi-B-Invasion-of-Privacy.jpg"
        },
        {
            "artist": "Beach House",
            "album": "7",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/641dc5859100843f4510a9d3/master/w_1600%2Cc_limit/Beach-House-7.jpg"
        },
        {
            "artist": "The 1975",
            "album": "A Brief Inquiry Into Online Relationships",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/65172788d3932f6eb7938b42/master/w_1600%2Cc_limit/The%25201975-%2520A%2520Brief%2520Inquiry%2520Into%2520Online%2520Relationships.png"
        },
        {
            "artist": "U.S. Girls",
            "album": "In a Poem Unlimited",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/5d76b63e6eee70000829f38e/master/w_1600%2Cc_limit/US-Girls-In-a-Poem-Unlimited.jpg"
        },
        {
            "artist": "Travis Scott",
            "album": "Astroworld",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/5b60c32dc50e6c2e339b99fe/master/w_1600%2Cc_limit/Travis%2520Scott_Astroworld.jpg"
        },
        {
            "artist": "Julia Holter",
            "album": "Aviary",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/5d77b83a9ce93e000838237d/master/w_1600%2Cc_limit/Julia-Holter-Aviary.jpg"
        },
        {
            "artist": "Playboi Carti",
            "album": "Die Lit",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/5af9eeb1e36af94c779017da/master/w_1600%2Cc_limit/playboi%2520carti%2520_%2520die%2520lit%2520_%2520cover.jpg"
        },
        {
            "artist": "Vince Staples",
            "album": "FM!",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/6517250c6ca93883ed139827/master/w_1600%2Cc_limit/Vince%2520Staples-%2520FM!.jpg"
        },
        {
            "artist": "Soccer Mommy",
            "album": "Clean",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/651724315569c29d27877422/master/w_1600%2Cc_limit/Soccer%2520Mommy-%2520Clean.jpg"
        },
        {
            "artist": "Deafheaven",
            "album": "Ordinary Corrupt Human Love",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/5ad75e758bec5b23c2139e25/master/w_1600%2Cc_limit/deafheaven%2520cover.jpg"
        },
        {
            "artist": "boygenius",
            "album": "boygenius EP",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/63f917c696cce0f3266685cd/master/w_1600%2Cc_limit/Boygenius.jpg"
        },
        {
            "artist": "Christine and the Queens",
            "album": "Chris",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/650b442b075611b11337fc63/master/w_1600%2Cc_limit/Christine-and-the-Queens-Chris.jpg"
        },
        {
            "artist": "Arctic Monkeys",
            "album": "Tranquility Base Hotel & Casino",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/6349cba2a7846fb4be7fe018/master/w_1600%2Cc_limit/Arctic-Monkeys.jpg"
        },
        {
            "artist": "Let's Eat Grandma",
            "album": "I'm All Ears",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/5ae0a4228bec5b23c213a2f5/master/w_1600%2Cc_limit/Let%25E2%2580%2599s%2520Eat%2520Grandma:%2520I'm%2520All%2520Ears.jpg"
        },
        {
            "artist": "Sheck Wes",
            "album": "MUDBOY",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/5bb7afe526c20b7bcebf0f89/master/w_1600%2Cc_limit/mudboy.jpg"
        },
        {
            "artist": "Neneh Cherry",
            "album": "Broken Politics",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/5bbcdb78b5a62d2d54af6561/master/w_1600%2Cc_limit/neneh%2520cherry_broken%2520politics.jpg"
        },
        {
            "artist": "A.A.L (Against All Logic)",
            "album": "2012 - 2017",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/5a95787fd63bda1b0a702f15/master/w_1600%2Cc_limit/2012%2520-%25202017.jpg"
        },
        {
            "artist": "Rico Nasty",
            "album": "Nasty",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/5b27c372eded5567e42607da/master/w_1600%2Cc_limit/100000x100000-999.jpg"
        },
        {
            "artist": "JPEGMAFIA",
            "album": "Veteran",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/5d72ad6f6eee70000829f2c0/master/w_1600%2Cc_limit/JPEGMAFIA-Veteran.jpg"
        },
        {
            "artist": "Kali Uchis",
            "album": "Isolation",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/642aff786b6881a134712104/master/w_1600%2Cc_limit/Kali-Uchis-Isolation.jpg"
        },
        {
            "artist": "The Internet",
            "album": "Hive Mind",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/5b0ec423fdfb234f26101366/master/w_1600%2Cc_limit/The-Internet-Hive-Mind.jpg"
        },
        {
            "artist": "Iceage",
            "album": "Beyondless",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/5aa8112b0a1d724145f45aec/master/w_1600%2Cc_limit/Iceage_Beyondless.jpg"
        },
        {
            "artist": "Ty Dolla $ign / Jeremih",
            "album": "MihTy",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/5bd0a75ae5dd5125e7f6bd47/master/w_1600%2Cc_limit/mihty.jpg"
        },
        {
            "artist": "Adrianne Lenker",
            "album": "abysskiss",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/6511d4d52608271ae68b0a66/master/w_1600%2Cc_limit/Adrianne-Lenker-Abysskiss.jpg"
        },
        {
            "artist": "Sleep",
            "album": "The Sciences",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/5ada126b2c39e92029a3ae90/master/w_1600%2Cc_limit/sleep-the-sciences-1524167366-compressed1-1524186011-compressed.jpg"
        },
        {
            "artist": "Camp Cope",
            "album": "How to Socialise & Make Friends",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/5a902b2bb8c3f77d9ba046f7/master/w_1600%2Cc_limit/Camp%2520Cope:%2520How%2520to%2520Socialise%2520&%2520Make%2520Friends.jpg"
        },
        {
            "artist": "Cat Power",
            "album": "Wanderer",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/5b746c3361613f18abb1b4a5/master/w_1600%2Cc_limit/Cat%2520Power%2520_%2520Wanderer%2520Cover.jpg"
        },
        {
            "artist": "Blood Orange",
            "album": "Negro Swan",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/5b5a0f4e4242b82d1866a549/master/w_1600%2Cc_limit/negro%2520swan%2520cover%2520art.jpg"
        },
        {
            "artist": "Skee Mask",
            "album": "Compro",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/5d72aea79ce93e00083820d5/master/w_1600%2Cc_limit/Skee-Mask-Compro.jpg"
        },
        {
            "artist": "Kamasi Washington",
            "album": "Heaven and Earth",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/5b04265ed8a22521f9d48121/master/w_1600%2Cc_limit/Kamasi%2520Washington:%2520Heaven%2520and%2520Earth.jpg"
        },
        {
            "artist": "Georgia Anne Muldrow",
            "album": "Overload",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/5be09cd2855e410f812a907a/master/w_1600%2Cc_limit/overload.jpg"
        },
        {
            "artist": "SOB X RBE",
            "album": "Gangin",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/5a834ab0aed392225cc0d9fb/master/w_1600%2Cc_limit/SOBxRBE_Gangin.jpg"
        }
    ],
    "2019": [
        {
            "artist": "Lana Del Rey",
            "album": "Norman Fucking Rockwell!",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/5de7e2b8b517ce000899efb6/master/w_1600%2Cc_limit/Lana-Del-Rey-The-Greatest.jpg"
        },
        {
            "artist": "FKA twigs",
            "album": "MAGDALENE",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/5de6c6d19eef880008cd118f/master/w_1600%2Cc_limit/FKA-twigs-sad-day.jpg"
        },
        {
            "artist": "Big Thief",
            "album": "U.F.O.F.",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/5de6e37e9669180008bb646d/master/w_1600%2Cc_limit/Big-Thief-Cattails.jpg"
        },
        {
            "artist": "Angel Olsen",
            "album": "All Mirrors",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/5de7d8a64072b600087744e1/master/w_1600%2Cc_limit/Angel-Olsen-All-Mirrors.jpg"
        },
        {
            "artist": "Solange",
            "album": "When I Get Home",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/5de7de65b517ce000899efad/master/w_1600%2Cc_limit/Solange-Binz.jpg"
        },
        {
            "artist": "Bad Bunny",
            "album": "X 100PRE",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/65771142a9bb8a8b8b679dc2/master/w_1600%2Cc_limit/Bad-Bunny-X-100pre.jpg"
        },
        {
            "artist": "Helado Negro",
            "album": "This Is How You Smile",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/5de7d90b238c6f0008bc0e13/master/w_1600%2Cc_limit/Helado-Negro-Running.jpg"
        },
        {
            "artist": "Fennesz",
            "album": "Agora",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/5dee84a8fca3b800088ab0fa/master/w_1600%2Cc_limit/Fennesz.jpg"
        },
        {
            "artist": "Weyes Blood",
            "album": "Titanic Rising",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/5dee843d29131e0008fba7c6/master/w_1600%2Cc_limit/Weyes-Blood.jpg"
        },
        {
            "artist": "Purple Mountains",
            "album": "Purple Mountains",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/5de7dbe84072b600087744e5/master/w_1600%2Cc_limit/Purple-Mountains-Snow-Is-Falling.jpg"
        },
        {
            "artist": "Jamila Woods",
            "album": "LEGACY! LEGACY!",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/5dee83befca3b800088ab0f8/master/w_1600%2Cc_limit/Jamila-Woods.jpg"
        },
        {
            "artist": "Brittany Howard",
            "album": "Jaime",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/5de68e6bb517ce000899ee8a/master/w_1600%2Cc_limit/Brittany-Howard-13th-Century-Metal.jpg"
        },
        {
            "artist": "Big Thief",
            "album": "Two Hands",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/5de7df284072b600087744e9/master/w_1600%2Cc_limit/Big-Thief-Not.jpg"
        },
        {
            "artist": "Beyoncé",
            "album": "Homecoming",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/5dee7ed3fca3b800088ab0f6/master/w_1600%2Cc_limit/Beyonce%25CC%2581.jpg"
        },
        {
            "artist": "Bill Callahan",
            "album": "Shepherd in a Sheepskin Vest",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/5de6e0269669180008bb6469/master/w_1600%2Cc_limit/Bill-Callahan-747.jpg"
        },
        {
            "artist": "Bon Iver",
            "album": "i,i",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/5dee7e62cade48000818ed7d/master/w_1600%2Cc_limit/Bon-Iver.jpg"
        },
        {
            "artist": "(Sandy) Alex G",
            "album": "House of Sugar",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/5de7da069669180008bb651b/master/w_1600%2Cc_limit/Sandy-Alex-G-Gretel.jpg"
        },
        {
            "artist": "Clairo",
            "album": "Immunity",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/5de7e278b517ce000899efb4/master/w_1600%2Cc_limit/Clairo-Bags.jpg"
        },
        {
            "artist": "Jessica Pratt",
            "album": "Quiet Signs",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/5dee7af429131e0008fba759/master/w_1600%2Cc_limit/Jessica-Pratt.jpg"
        },
        {
            "artist": "Jenny Hval",
            "album": "The Practice of Love",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/5dee7aaf795ff5000938f8de/master/w_1600%2Cc_limit/Jenny-Hval.jpg"
        },
        {
            "artist": "Billie Eilish",
            "album": "When We All Fall Asleep, Where Do We Go?",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/65f9e40316c62f3e7a54ad0e/master/w_1600%2Cc_limit/Billie-Eilish.jpg"
        },
        {
            "artist": "Cate Le Bon",
            "album": "Reward",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/5dee78ba29131e0008fba757/master/w_1600%2Cc_limit/Cate-Le-Bon.jpg"
        },
        {
            "artist": "Tyler, the Creator",
            "album": "IGOR",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/5dee7818c573b80009766dbe/master/w_1600%2Cc_limit/Tyler-the-Creator.jpg"
        },
        {
            "artist": "Kim Gordon",
            "album": "No Home Record",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/5dee77c5fca3b800088ab0f2/master/w_1600%2Cc_limit/Kim-Gordon.jpg"
        },
        {
            "artist": "Vampire Weekend",
            "album": "Father of the Bride",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/657de10038037dc729423b37/master/w_1600%2Cc_limit/Vampire-Weekend-Father-of-the-Bride.jpg"
        },
        {
            "artist": "Burna Boy",
            "album": "African Giant",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/5de7ed974072b600087744ef/master/w_1600%2Cc_limit/Burna-Boy.jpg"
        },
        {
            "artist": "Florist",
            "album": "Emily Alone",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/5de7ed6cb517ce000899eff8/master/w_1600%2Cc_limit/Florist.jpg"
        },
        {
            "artist": "Nick Cave & the Bad Seeds",
            "album": "Ghosteen",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/5de7ed1db517ce000899eff6/master/w_1600%2Cc_limit/Nick-Cave-and-the-Bad-Seeds.jpg"
        },
        {
            "artist": "Ariana Grande",
            "album": "thank u, next",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/659eeae17d0116424c2fda2a/master/w_1600%2Cc_limit/Ariana-Grande-Thank-U-Next.jpg"
        },
        {
            "artist": "Oso Oso",
            "album": "Basking in the Glow",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/5de6c0ba9eef880008cd118b/master/w_1600%2Cc_limit/Oso-Oso-One-Sick-Plan.jpg"
        },
        {
            "artist": "MIKE",
            "album": "Tears of Joy",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/5de7ec974072b600087744ed/master/w_1600%2Cc_limit/MIKE.jpg"
        },
        {
            "artist": "Sharon Van Etten",
            "album": "Remind Me Tomorrow",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/5de7dffe238c6f0008bc0e19/master/w_1600%2Cc_limit/Sharon-Van-Etten-Seventeen.jpg"
        },
        {
            "artist": "Polo G",
            "album": "Die a Legend",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/5de7e91bb517ce000899efc0/master/w_1600%2Cc_limit/Polo-G.jpg"
        },
        {
            "artist": "slowthai",
            "album": "Nothing Great About Britain",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/5de7e8e9b9e6f50008a3066c/master/w_1600%2Cc_limit/Slowthai.jpg"
        },
        {
            "artist": "Mannequin Pussy",
            "album": "Patience",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/5de7dc3f4072b600087744e7/master/w_1600%2Cc_limit/Mannequin-Pussy-Drunk-II.jpg"
        },
        {
            "artist": "Denzel Curry",
            "album": "ZUU",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/5de7e7e5b9e6f50008a3066a/master/w_1600%2Cc_limit/Denzel-Curry.jpg"
        },
        {
            "artist": "Nilüfer Yanya",
            "album": "Miss Universe",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/5de7e7ab238c6f0008bc0e1d/master/w_1600%2Cc_limit/Nilu%25CC%2588fer-Yanya.jpg"
        },
        {
            "artist": "RAP",
            "album": "EXPORT",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/5de7e783b517ce000899efbe/master/w_1600%2Cc_limit/RAP.jpg"
        },
        {
            "artist": "Aldous Harding",
            "album": "Designer",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/5de7e754b9e6f50008a30668/master/w_1600%2Cc_limit/Aldous-Harding.jpg"
        },
        {
            "artist": "Thom Yorke",
            "album": "ANIMA",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/5de7dfcbb517ce000899efb1/master/w_1600%2Cc_limit/Thom-Yorke-Dawn-Chorus.jpg"
        },
        {
            "artist": "Blood Incantation",
            "album": "Hidden History of the Human Race",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/5de7e6fa9669180008bb651f/master/w_1600%2Cc_limit/Blood-Incantation.jpg"
        },
        {
            "artist": "100 gecs",
            "album": "1000 gecs",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/5de6ca7c4072b60008774464/master/w_1600%2Cc_limit/100-gecs-money-machine.jpg"
        },
        {
            "artist": "Rico Nasty / Kenny Beats",
            "album": "Anger Management",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/5de7e5b9b517ce000899efbc/master/w_1600%2Cc_limit/Rico-Nasty.jpg"
        },
        {
            "artist": "Holly Herndon",
            "album": "PROTO",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/5de7e586b517ce000899efba/master/w_1600%2Cc_limit/Holly-Herndon.jpg"
        },
        {
            "artist": "DaBaby",
            "album": "Baby on Baby",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/5de7da90238c6f0008bc0e15/master/w_1600%2Cc_limit/DaBaby-Suge.jpg"
        },
        {
            "artist": "Chai",
            "album": "PUNK",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/5de68476b517ce000899ee53/master/w_1600%2Cc_limit/CHAI.jpg"
        },
        {
            "artist": "Barker",
            "album": "Utility",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/5de6851ab9e6f50008a304dc/master/w_1600%2Cc_limit/Barker.jpg"
        },
        {
            "artist": "Danny Brown",
            "album": "uknowhatimsayin¿",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/5de6851a9eef880008cd114e/master/w_1600%2Cc_limit/Danny-Brown.jpeg"
        },
        {
            "artist": "Faye Webster",
            "album": "Atlanta Millionaires Club",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/5de6851b238c6f0008bc0d12/master/w_1600%2Cc_limit/Faye-Webster.jpg"
        },
        {
            "artist": "Floating Points",
            "album": "Crush",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/5de6851b9669180008bb63ef/master/w_1600%2Cc_limit/Floating-Points.jpg"
        }
    ],
    "2020": [
        {
            "artist": "Fiona Apple",
            "album": "Fetch the Bolt Cutters",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/5fc902c696ab91ca523e2c33/master/w_1600%2Cc_limit/Fiona-Apple.jpg"
        },
        {
            "artist": "Waxahatchee",
            "album": "Saint Cloud",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/5fc80202d4d3a13a6758a456/master/w_1600%2Cc_limit/Waxahatchee.jpg"
        },
        {
            "artist": "Moses Sumney",
            "album": "græ",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/5fca82007fe6799d0d822bb8/master/w_1600%2Cc_limit/Moses-Sumney.jpg"
        },
        {
            "artist": "Phoebe Bridgers",
            "album": "Punisher",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/5fc7fde0d4d3a13a6758a452/master/w_1600%2Cc_limit/Phoebe-Bridgers.jpg"
        },
        {
            "artist": "Perfume Genius",
            "album": "Set My Heart on Fire Immediately",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/5fca80211ef00c5e1192c91c/master/w_1600%2Cc_limit/Perfume-Genius.jpg"
        },
        {
            "artist": "Bob Dylan",
            "album": "Rough and Rowdy Ways",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/5fca7f63c61c34a7841b1f64/master/w_1600%2Cc_limit/Bob-Dylan.jpg"
        },
        {
            "artist": "Yves Tumor",
            "album": "Heaven to a Tortured Mind",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/5fca7ec80f9ba652bdb99304/master/w_1600%2Cc_limit/Yves-Tumor.jpg"
        },
        {
            "artist": "Haim",
            "album": "Women in Music Pt. III",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/5fc7f5fb75014cd2f75cc550/master/w_1600%2Cc_limit/Haim.jpg"
        },
        {
            "artist": "Jessie Ware",
            "album": "What's Your Pleasure?",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/5fca7d6796ab91ca523e2d1d/master/w_1600%2Cc_limit/Jessie-Ware.jpg"
        },
        {
            "artist": "Bad Bunny",
            "album": "YHLQMDLG",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/5fc7f16b0f9ba652bdb9913a/master/w_1600%2Cc_limit/Bad-Bunny.jpg"
        },
        {
            "artist": "Adrianne Lenker",
            "album": "songs / instrumentals",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/5fc9017cd3d904fb4b7bc6c6/master/w_1600%2Cc_limit/Adrianne-Lenker.jpg"
        },
        {
            "artist": "Lil Uzi Vert",
            "album": "Eternal Atake",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/5fc806bde7768c9556990913/master/w_1600%2Cc_limit/Lil-Uzi-Vert.jpg"
        },
        {
            "artist": "The Microphones",
            "album": "Microphones in 2020",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/5fca79c40f9ba652bdb99302/master/w_1600%2Cc_limit/Microphones.jpg"
        },
        {
            "artist": "Jay Electronica",
            "album": "Act II",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/5fca7975e7768c95569909d2/master/w_1600%2Cc_limit/Jay-Electronica.jpg"
        },
        {
            "artist": "U.S. Girls",
            "album": "Heavy Light",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/5fc90414e7768c955699091f/master/w_1600%2Cc_limit/US-Girls.jpg"
        },
        {
            "artist": "Run the Jewels",
            "album": "RTJ4",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/5fc7ec5d96ab91ca523e2bc0/master/w_1600%2Cc_limit/RTJ.jpg"
        },
        {
            "artist": "Róisín Murphy",
            "album": "Róisín Machine",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/5fca77b696ab91ca523e2d1b/master/w_1600%2Cc_limit/Roisin-Murphy.jpg"
        },
        {
            "artist": "Destroyer",
            "album": "Have We Met",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/5fc7f39696ab91ca523e2bc2/master/w_1600%2Cc_limit/Destroyer.jpg"
        },
        {
            "artist": "Amaarae",
            "album": "The Angel You Don't Know",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/5fca76451ef00c5e1192c91a/master/w_1600%2Cc_limit/Amaarae.jpg"
        },
        {
            "artist": "Fleet Foxes",
            "album": "Shore",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/5fc7c7ec4d02be8489d3c897/master/w_1600%2Cc_limit/Fleet-Foxes.jpg"
        },
        {
            "artist": "Dua Lipa",
            "album": "Future Nostalgia",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/5fca74b02e107fe5db3a1cfd/master/w_1600%2Cc_limit/Dua-Lipa.jpg"
        },
        {
            "artist": "KeiyaA",
            "album": "Forever, Ya Girl",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/5fca735064866991b824b1c2/master/w_1600%2Cc_limit/KeiyaA.jpg"
        },
        {
            "artist": "Porridge Radio",
            "album": "Every Bad",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/5fc7f2db75014cd2f75cc54d/master/w_1600%2Cc_limit/Porridge-Radio.jpg"
        },
        {
            "artist": "Grimes",
            "album": "Miss Anthropocene",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/5fca71710aaaf18ca02870f5/master/w_1600%2Cc_limit/Grimes.jpg"
        },
        {
            "artist": "Nubya Garcia",
            "album": "Source",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/5fc9551c0f9ba652bdb99227/master/w_1600%2Cc_limit/Nubya-Garcia.jpg"
        },
        {
            "artist": "Soccer Mommy",
            "album": "color theory",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/5fc9048396ab91ca523e2c38/master/w_1600%2Cc_limit/Soccer-Mommy.jpg"
        },
        {
            "artist": "Kelly Lee Owens",
            "album": "Inner Song",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/5fc9539cd4d3a13a6758a506/master/w_1600%2Cc_limit/KLO.jpg"
        },
        {
            "artist": "Chloe x Halle",
            "album": "Ungodly Hour",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/5fc952970f9ba652bdb99225/master/w_1600%2Cc_limit/Chloe-x-Halle.jpg"
        },
        {
            "artist": "Taylor Swift",
            "album": "folklore",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/5fc7ceddc61c34a7841b1e70/master/w_1600%2Cc_limit/Taylor-Swift.jpg"
        },
        {
            "artist": "Bartees Strange",
            "album": "Live Forever",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/5fc9509de7768c955699095d/master/w_1600%2Cc_limit/Bartees-Strange.jpg"
        },
        {
            "artist": "The Soft Pink Truth",
            "album": "Shall We Go on Sinning So That Grace May Increase?",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/5fc94f780f9ba652bdb99223/master/w_1600%2Cc_limit/The-Soft-Pink-Truth.jpg"
        },
        {
            "artist": "Drakeo the Ruler / JoogSzn",
            "album": "Thank You for Using GTL",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/64f100b962097041dd8c63ff/master/w_1600%2Cc_limit/Drakeo-the-Ruler-GTL.jpg"
        },
        {
            "artist": "Beatrice Dillon",
            "album": "Workaround",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/5fc94e6e0f9ba652bdb99221/master/w_1600%2Cc_limit/Beatrice-Dillon.jpg"
        },
        {
            "artist": "Dogleg",
            "album": "Melee",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/5fc94dd7ee65027d9ed931de/master/w_1600%2Cc_limit/Dogleg.jpg"
        },
        {
            "artist": "Ka",
            "album": "Descendants of Cain",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/5fc7edbb0f9ba652bdb99136/master/w_1600%2Cc_limit/Ka.jpg"
        },
        {
            "artist": "Special Interest",
            "album": "The Passion Of",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/5fc94cc9dcf8ebd9e69c4443/master/w_1600%2Cc_limit/Special-Interest.jpg"
        },
        {
            "artist": "Lomelda",
            "album": "Hannah",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/5fc7b59a526a629411e3e86e/master/w_1600%2Cc_limit/Lomelda.jpg"
        },
        {
            "artist": "Duval Timothy",
            "album": "Help",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/5fc948f11ef00c5e1192c7a6/master/w_1600%2Cc_limit/Duval-Timothy.jpg"
        },
        {
            "artist": "Dehd",
            "album": "Flower of Devotion",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/5fc807aa1ef00c5e1192c727/master/w_1600%2Cc_limit/Dehd.jpg"
        },
        {
            "artist": "Arca",
            "album": "KiCk i",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/5fc7eb6cdcf8ebd9e69c42c7/master/w_1600%2Cc_limit/Arca.jpg"
        },
        {
            "artist": "Rina Sawayama",
            "album": "SAWAYAMA",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/5fc7fe6fd4d3a13a6758a454/master/w_1600%2Cc_limit/Rina-Sawayama.jpg"
        },
        {
            "artist": "Kate NV",
            "album": "Room for the Moon",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/5fc945b7ee65027d9ed931dc/master/w_1600%2Cc_limit/Kate-NV.jpg"
        },
        {
            "artist": "Megan Thee Stallion",
            "album": "Good News",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/5fc9451bd4d3a13a6758a502/master/w_1600%2Cc_limit/Megan-Thee-Stallion.png"
        },
        {
            "artist": "Freddie Gibbs / The Alchemist",
            "album": "Alfredo",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/5fc7cfb20aaaf18ca0286f3b/master/w_1600%2Cc_limit/Freddie-Gibbs-Alchemist.jpg"
        },
        {
            "artist": "Lyra Pramuk",
            "album": "Fountain",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/5fc9439f1ef00c5e1192c7a4/master/w_1600%2Cc_limit/Lyra-Pramuk.jpg"
        },
        {
            "artist": "Burna Boy",
            "album": "Twice as Tall",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/5fc7f208c61c34a7841b1ead/master/w_1600%2Cc_limit/Burna-Boy.jpg"
        },
        {
            "artist": "Lil Baby",
            "album": "My Turn (Deluxe)",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/5fc7fb590f9ba652bdb99140/master/w_1600%2Cc_limit/Lil-Baby.png"
        },
        {
            "artist": "Charli XCX",
            "album": "how i'm feeling now",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/5fc9423c6bb9744db02a9eff/master/w_1600%2Cc_limit/Charli-XCX.jpg"
        },
        {
            "artist": "Yaeji",
            "album": "What We Drew",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/5fc941896bb9744db02a9efd/master/w_1600%2Cc_limit/Yaeji.jpg"
        },
        {
            "artist": "Mary Lattimore",
            "album": "Silver Ladders",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/5fc940ede7768c955699095b/master/w_1600%2Cc_limit/Mary-Lattimore.jpg"
        }
    ],
    "2021": [
        {
            "artist": "Jazmine Sullivan",
            "album": "Heaux Tales",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/61aa4b94c506646422ab9d71/master/w_1600%2Cc_limit/Jazmine-Sullivan.jpeg"
        },
        {
            "artist": "L'Rain",
            "album": "Fatigue",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/61aa4ae014c6f0e2df9a330b/master/w_1600%2Cc_limit/L_Rain.jpeg"
        },
        {
            "artist": "Tyler, the Creator",
            "album": "Call Me If You Get Lost",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/61aa4a694301dc152b2ab83c/master/w_1600%2Cc_limit/Tyler-the-Creator.jpeg"
        },
        {
            "artist": "Floating Points / Pharoah Sanders / The London Symphony Orchestra",
            "album": "Promises",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/61aa4a2d14c6f0e2df9a3309/master/w_1600%2Cc_limit/Floating-Points.jpeg"
        },
        {
            "artist": "Low",
            "album": "HEY WHAT",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/61aa492cc506646422ab9d6e/master/w_1600%2Cc_limit/Low.jpeg"
        },
        {
            "artist": "Turnstile",
            "album": "Glow On",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/61aa48bac506646422ab9d6c/master/w_1600%2Cc_limit/Turnstile.jpeg"
        },
        {
            "artist": "The Weather Station",
            "album": "Ignorance",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/61aa481445c013baf49b7f59/master/w_1600%2Cc_limit/The-Weather-Station.jpeg"
        },
        {
            "artist": "Mdou Moctar",
            "album": "Afrique Victime",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/61aa4758c506646422ab9d6a/master/w_1600%2Cc_limit/Mdou-Moctar.jpeg"
        },
        {
            "artist": "Playboi Carti",
            "album": "Whole Lotta Red",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/61aa46ae52913e02bbab357c/master/w_1600%2Cc_limit/Playboi-Carti.jpeg"
        },
        {
            "artist": "Dry Cleaning",
            "album": "New Long Leg",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/61aa463834f90bf3123000e9/master/w_1600%2Cc_limit/Dry-Cleaning.jpeg"
        },
        {
            "artist": "Faye Webster",
            "album": "I Know I'm Funny haha",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/61aa4568e2c7c1ae7d724086/master/w_1600%2Cc_limit/Faye-Webster.jpeg"
        },
        {
            "artist": "Arooj Aftab",
            "album": "Vulture Prince",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/61aa44de34f90bf3123000e7/master/w_1600%2Cc_limit/Arooj-Aftab.jpeg"
        },
        {
            "artist": "Tirzah",
            "album": "Colourgrade",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/61aa446b482c9acdf0ddc370/master/w_1600%2Cc_limit/Tirzah.jpeg"
        },
        {
            "artist": "Japanese Breakfast",
            "album": "Jubilee",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/61aa440534f90bf3123000e5/master/w_1600%2Cc_limit/Japanese-Breakfast.jpeg"
        },
        {
            "artist": "Snail Mail",
            "album": "Valentine",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/61aa4348e2c7c1ae7d724084/master/w_1600%2Cc_limit/Snail-Mail.jpeg"
        },
        {
            "artist": "MIKE",
            "album": "Disco!",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/61aa42d814c6f0e2df9a32d5/master/w_1600%2Cc_limit/MIKE.jpeg"
        },
        {
            "artist": "Cassandra Jenkins",
            "album": "An Overview on Phenomenal Nature",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/61aa4225e300dbbaf1abae9e/master/w_1600%2Cc_limit/Cassandra-Jenkins.jpeg"
        },
        {
            "artist": "Grouper",
            "album": "Shade",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/61aa41fa4301dc152b2ab839/master/w_1600%2Cc_limit/Grouper.jpeg"
        },
        {
            "artist": "Dean Blunt",
            "album": "Black Metal 2",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/61aa413f45c013baf49b7f57/master/w_1600%2Cc_limit/Dean-Blunt.jpeg"
        },
        {
            "artist": "Mach-Hommy",
            "album": "Pray for Haiti",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/61aa40931e7d848580e76ac4/master/w_1600%2Cc_limit/Mach-Hommy.jpeg"
        },
        {
            "artist": "Olivia Rodrigo",
            "album": "SOUR",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/61aa401014c6f0e2df9a32d2/master/w_1600%2Cc_limit/Olivia-Rodrigo.jpeg"
        },
        {
            "artist": "Dawn Richard",
            "album": "Second Line",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/61aa3fc8c506646422ab9d68/master/w_1600%2Cc_limit/Dawn-Richard.jpeg"
        },
        {
            "artist": "black midi",
            "album": "Cavalcade",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/61aa3f0a482c9acdf0ddc36d/master/w_1600%2Cc_limit/black-midi.jpeg"
        },
        {
            "artist": "Nala Sinephro",
            "album": "Space 1.8",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/61aa33dd78731ac7095ec511/master/w_1600%2Cc_limit/Nala-Sinephro.jpeg"
        },
        {
            "artist": "Indigo De Souza",
            "album": "Any Shape You Take",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/61aa32b914c6f0e2df9a32ce/master/w_1600%2Cc_limit/Indigo-De-Souza.jpeg"
        },
        {
            "artist": "Armand Hammer and the Alchemist",
            "album": "Haram",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/61aa321d45c013baf49b7ef1/master/w_1600%2Cc_limit/Armand-Hammer.jpeg"
        },
        {
            "artist": "Moor Mother",
            "album": "Black Encyclopedia of the Air",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/61aa318a34f90bf3123000b0/master/w_1600%2Cc_limit/Moor-Mother.jpeg"
        },
        {
            "artist": "Spirit of the Beehive",
            "album": "ENTERTAINMENT, DEATH",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/61aa309614c6f0e2df9a32cc/master/w_1600%2Cc_limit/Spirit-of-the-Beehive.jpeg"
        },
        {
            "artist": "Little Simz",
            "album": "Sometimes I Might Be Introvert",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/61aa3040c506646422ab9d64/master/w_1600%2Cc_limit/Little-Simz.jpeg"
        },
        {
            "artist": "Claire Rousay",
            "album": "a softer focus",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/61aa2f674301dc152b2ab804/master/w_1600%2Cc_limit/Claire-Rousay.jpeg"
        },
        {
            "artist": "Wiki",
            "album": "Half God",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/61aa2efe4301dc152b2ab802/master/w_1600%2Cc_limit/Wiki.jpeg"
        },
        {
            "artist": "Adele",
            "album": "30",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/61aa2e9645c013baf49b7eef/master/w_1600%2Cc_limit/Adele.jpeg"
        },
        {
            "artist": "Xenia Rubinos",
            "album": "Una Rosa",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/61aa2e1114c6f0e2df9a32ca/master/w_1600%2Cc_limit/Xenia-Rubinos.jpeg"
        },
        {
            "artist": "The War on Drugs",
            "album": "I Don't Live Here Anymore",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/61aa2d5414c6f0e2df9a32c8/master/w_1600%2Cc_limit/The-War-on-Drugs.jpeg"
        },
        {
            "artist": "Illuminati Hotties",
            "album": "Let Me Do One More",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/61aa2c6334f90bf3123000ae/master/w_1600%2Cc_limit/illuminati-hotties.jpeg"
        },
        {
            "artist": "Lost Girls",
            "album": "Menneskekollektivet",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/61aa2bf04301dc152b2ab800/master/w_1600%2Cc_limit/Lost-Girls.jpeg"
        },
        {
            "artist": "RP Boo",
            "album": "Established!",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/61aa2b6945c013baf49b7eed/master/w_1600%2Cc_limit/RP-Boo.jpeg"
        },
        {
            "artist": "Navy Blue",
            "album": "Song of Sage",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/61aa27a234f90bf3123000aa/master/w_1600%2Cc_limit/Navy-Blue.gif"
        },
        {
            "artist": "Loraine James",
            "album": "Reflection",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/61aa270778731ac7095ec50d/master/w_1600%2Cc_limit/Loraine-James.jpeg"
        },
        {
            "artist": "Erika de Casier",
            "album": "Sensational",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/61a9417a45c013baf49b7ee7/master/w_1600%2Cc_limit/Erika-de-Casier.jpeg"
        },
        {
            "artist": "Lingua Ignota",
            "album": "Sinner Get Ready",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/61a93cfb45c013baf49b7ee5/master/w_1600%2Cc_limit/Lingua-Ignota.jpeg"
        },
        {
            "artist": "Vijay Iyer / Linda May Han Oh / Tyshawn Sorey",
            "album": "Uneasy",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/61a93c8278731ac7095ec4d9/master/w_1600%2Cc_limit/Vijay-Iyer.jpeg"
        },
        {
            "artist": "Hand Habits",
            "album": "Fun House",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/61a9399814c6f0e2df9a3291/master/w_1600%2Cc_limit/Hand-Habits.jpeg"
        },
        {
            "artist": "Sofia Kourtesis",
            "album": "Fresia Magdalena EP",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/61a938e4c506646422ab9c93/master/w_1600%2Cc_limit/Sofia-Kourtesis.jpeg"
        },
        {
            "artist": "aya",
            "album": "im hole",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/61a9345345c013baf49b7eb1/master/w_1600%2Cc_limit/aya.jpeg"
        },
        {
            "artist": "Helado Negro",
            "album": "Far In",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/61a933c7e300dbbaf1abae32/master/w_1600%2Cc_limit/Helado-Negro.jpeg"
        },
        {
            "artist": "dltzk",
            "album": "Frailty",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/61a932edc506646422ab9c91/master/w_1600%2Cc_limit/dltzk.jpeg"
        },
        {
            "artist": "Ka",
            "album": "A Martyr's Reward",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/61a9323834f90bf312300073/master/w_1600%2Cc_limit/Ka.jpeg"
        },
        {
            "artist": "Magdalena Bay",
            "album": "Mercurial World",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/61a93149c506646422ab9c8f/master/w_1600%2Cc_limit/Magdalena-Bay.jpeg"
        },
        {
            "artist": "Yasmin Williams",
            "album": "Urban Driftwood",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/61a92fcde2c7c1ae7d723fe8/master/w_1600%2Cc_limit/Yasmin-Williams.jpeg"
        }
    ],
    "2022": [
        {
            "artist": "Beyoncé",
            "album": "Renaissance",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/62bdd2cb9e0c39ec09d73fd7/master/w_1600%2Cc_limit/Beyonce-Renaissance.jpg"
        },
        {
            "artist": "Sudan Archives",
            "album": "Natural Brown Prom Queen",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/62c4fff81175d2d0f5fee1ff/master/w_1600%2Cc_limit/Sudan-Archives-Natural-Brown-Prom-Queen-STH2449.jpg"
        },
        {
            "artist": "Alvvays",
            "album": "Blue Rev",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/62c4df04d645ed2828d096ce/master/w_1600%2Cc_limit/alvvays-blue-rev.jpg"
        },
        {
            "artist": "Special Interest",
            "album": "Endure",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/630f5d18303785c05396f2d2/master/w_1600%2Cc_limit/special-interest-endure.jpg"
        },
        {
            "artist": "Bad Bunny",
            "album": "Un Verano Sin Ti",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/627425dbc85171592b8a6e6a/master/w_1600%2Cc_limit/Bad-Bunny-Un-Verano-Sin-Ti.jpg"
        },
        {
            "artist": "Rosalía",
            "album": "Motomami",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/61f86f77c5f6f514db2af019/master/w_1600%2Cc_limit/MTMM%2520Cover%252010x10.jpg"
        },
        {
            "artist": "Big Thief",
            "album": "Dragon New Warm Mountain I Believe in You",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/6192b1f87d518c1b374471fc/master/w_1600%2Cc_limit/Big-Thief-Dragon-New-Warm-Mountain-I-Believe-in-You.jpg"
        },
        {
            "artist": "Lucrecia Dalt",
            "album": "¡Ay!",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/62b2038d0e4ba2763e0755d9/master/w_1600%2Cc_limit/Lucrecia-Dalt-Ay-2022.jpg"
        },
        {
            "artist": "Yaya Bey",
            "album": "Remember Your North Star",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/62315d88f9a7bf4f83d2d08f/master/w_1600%2Cc_limit/BD304_PACKSHOT_3000.jpg"
        },
        {
            "artist": "Alex G",
            "album": "God Save the Animals",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/62af3a8f6c8f0240e138567f/master/w_1600%2Cc_limit/AlexG_GodSaveTheAnimals_3000pxCVR.jpg"
        },
        {
            "artist": "The Weeknd",
            "album": "Dawn FM",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/61d5fa911b710fb5ce48ed9f/master/w_1600%2Cc_limit/The-Weeknd-Dawn-FM.jpg"
        },
        {
            "artist": "Björk",
            "album": "Fossora",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/630f5a82d81b4a1c03943188/master/w_1600%2Cc_limit/Bjork-Fossora.jpg"
        },
        {
            "artist": "Kendrick Lamar",
            "album": "Mr. Morale & the Big Steppers",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/658d8c80f3c653a4dd7f73df/master/w_1600%2Cc_limit/Kendrick-Lamar-Mr-Morale-and-the-Big-Steppers.jpg"
        },
        {
            "artist": "Grace Ives",
            "album": "Janky Star",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/624d02dd2afbc1aa4dab0f56/master/w_1600%2Cc_limit/Grace%2520Ives%2520Album%2520Cover.jpg"
        },
        {
            "artist": "Jockstrap",
            "album": "I Love You Jennifer B",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/62a7f8fa478224c02b50ad2c/master/w_1600%2Cc_limit/CD%2520+%2520DSP%2520Cover%2520Jockstrap%2520album%2520artwork.jpeg"
        },
        {
            "artist": "Nilüfer Yanya",
            "album": "PAINLESS",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/618abe7ee84dd4adabc70e51/master/w_1600%2Cc_limit/Nilufer-Yanya-Painless.jpeg"
        },
        {
            "artist": "Earl Sweatshirt",
            "album": "Sick!",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/61b36f85542d8cbcee346351/master/w_1600%2Cc_limit/Earl-Sweatshirt-Sick.jpeg"
        },
        {
            "artist": "Makaya McCraven",
            "album": "In These Times",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/62b1d96d0529c199415f5c8b/master/w_1600%2Cc_limit/Makaya-McCraven-In-These-Times-2022.jpg"
        },
        {
            "artist": "Charli XCX",
            "album": "Crash",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/6183f064ebc21d2eb6916d29/master/w_1600%2Cc_limit/Charli-XCX-Crash.jpg"
        },
        {
            "artist": "Cate Le Bon",
            "album": "Pompeii",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/61fab74a8041ff7093f61f5e/master/w_1600%2Cc_limit/0027499618_16.jpeg"
        },
        {
            "artist": "The Smile",
            "album": "A Light for Attracting Attention",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/62601e65a110f14cd83778cb/master/w_1600%2Cc_limit/The-Smile.jpeg"
        },
        {
            "artist": "Charlotte Adigéry / Bolis Pupul",
            "album": "Topical Dancer",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/6183e9c86e2d11a8436b3121/master/w_1600%2Cc_limit/Topical-Dancer.jpeg"
        },
        {
            "artist": "Beth Orton",
            "album": "Weather Alive",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/6294c1285e91fc7ba8d4a0ef/master/w_1600%2Cc_limit/BETH_ORTON_1000px.jpg"
        },
        {
            "artist": "FKA twigs",
            "album": "CAPRISONGS",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/61d740b79a8903a73574e2a5/master/w_1600%2Cc_limit/FKA-twigs-Caprisongs.jpg"
        },
        {
            "artist": "Daphni",
            "album": "Cherry",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/62bda6a4803e32780b932fc6/master/w_1600%2Cc_limit/Daphni-Cherry.jpg"
        },
        {
            "artist": "Perfume Genius",
            "album": "Ugly Season",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/623c91fa2aacf5efe8e654c9/master/w_1600%2Cc_limit/Perfume-Genius-Ugly-Season.jpeg"
        },
        {
            "artist": "Florist",
            "album": "Florist",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/624bc66216f9d676c9c13655/master/w_1600%2Cc_limit/Florist%2520-%2520Florist%2520_%2520Album%2520Art.jpg"
        },
        {
            "artist": "billy woods",
            "album": "Aethiopes",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/622eb47edd123e9e0e460c96/master/w_1600%2Cc_limit/AETHIOPES_COVER_1200.jpg"
        },
        {
            "artist": "Rachika Nayar",
            "album": "Heaven Come Crashing",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/62cf124011f264f564531162/master/w_1600%2Cc_limit/Album%2520Art%2520(Digital%2520-%2520Full%2520Bleed).jpg"
        },
        {
            "artist": "Destroyer",
            "album": "Labyrinthitis",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/61dc60f7e5e3cbd18cf32d15/master/w_1600%2Cc_limit/MRG789_destroyer_LABYRINTHITIS_900.jpg"
        },
        {
            "artist": "Hikaru Utada",
            "album": "BADモード",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/620a8ee91038e82f029e3a5d/master/w_1600%2Cc_limit/100000x100000-999.jpeg"
        },
        {
            "artist": "Ravyn Lenae",
            "album": "HYPNOS",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/62850e3ac27f1a4486dc20a7/master/w_1600%2Cc_limit/Ravyn-Lenae-Hypnos.jpg"
        },
        {
            "artist": "The 1975",
            "album": "Being Funny in a Foreign Language",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/62c64ec74807e30a5dfd2fde/master/w_1600%2Cc_limit/1975%2520-%2520Being%2520Funny%2520In%2520A%2520Foreign%2520Language.jpg"
        },
        {
            "artist": "Mavi",
            "album": "Laughing So Hard, It Hurts",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/6323309510c581ffac68ce4e/master/w_1600%2Cc_limit/Mavi.jpg"
        },
        {
            "artist": "MJ Lenderman",
            "album": "Boat Songs",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/6272c286c75302f40c14a3f0/master/w_1600%2Cc_limit/BoatSongs.jpeg"
        },
        {
            "artist": "Soul Glo",
            "album": "Diaspora Problems",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/61ddd19b2cf2308e8ce0210a/master/w_1600%2Cc_limit/87853_SoulGlo_DiasporaProblems.jpg"
        },
        {
            "artist": "Weyes Blood",
            "album": "And in the Darkness, Hearts Aglow",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/631f595a8f0d7ac40b58d7e4/master/w_1600%2Cc_limit/Weyes-Blood.jpg"
        },
        {
            "artist": "Huerco S.",
            "album": "Plonk",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/619510f8c9938cf9ade4be88/master/w_1600%2Cc_limit/Huerco-S-Plonk.jpg"
        },
        {
            "artist": "Chat Pile",
            "album": "God's Country",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/62e16ddcd957e7e2565b5d7f/master/w_1600%2Cc_limit/Chat-Pile-Gods-Country.jpg"
        },
        {
            "artist": "Jenny Hval",
            "album": "Classic Objects",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/6231fc7a288d216b2733d8eb/master/w_1600%2Cc_limit/jenny-hval-classic-objects.jpg"
        },
        {
            "artist": "Oren Ambarchi",
            "album": "Shebang",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/63349abb16901d53be466529/master/w_1600%2Cc_limit/Oren-Ambarchi-Shebang.jpg"
        },
        {
            "artist": "700 Bliss",
            "album": "Nothing to Declare",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/62338f06edfeddd7a4e5f17e/master/w_1600%2Cc_limit/700-Bliss.jpeg"
        },
        {
            "artist": "Mitski",
            "album": "Laurel Hell",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/61898887cbc65810d2fd19c9/master/w_1600%2Cc_limit/Mitski-Laurel-Hell.jpg"
        },
        {
            "artist": "Amber Mark",
            "album": "Three Dimensions Deep",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/618d74fb7909bb4eadeda3cb/master/w_1600%2Cc_limit/Amber-Mark.jpeg"
        },
        {
            "artist": "Soccer Mommy",
            "album": "Sometimes, Forever",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/623a998d60d2cf2d46d41a2d/master/w_1600%2Cc_limit/Soccer%2520Mommy%2520-%2520'Sometimes%2C%2520Forever'%2520-%2520Album%2520Art.jpg"
        },
        {
            "artist": "Arca",
            "album": "KicK iii",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/6189f68636c111e66e6b0e0a/master/w_1600%2Cc_limit/Arca_K3_1200x1200.jpg"
        },
        {
            "artist": "The Beths",
            "album": "Expert in a Dying Field",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/63220e886c02b22c1de0acd2/master/w_1600%2Cc_limit/The%2520Beths-%2520Expert%2520in%2520a%2520Dying%2520Field.png"
        },
        {
            "artist": "Jeff Parker",
            "album": "Forfolks",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/6192b5aa2d3c89da090b8c36/master/w_1600%2Cc_limit/Jeff-Parker-Forfolks.jpeg"
        },
        {
            "artist": "Black Country, New Road",
            "album": "Ants From Up There",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/61649694110e7cd222907396/master/w_1600%2Cc_limit/Black-Country-New-Road.jpg"
        },
        {
            "artist": "Marina Herlop",
            "album": "Pripyat",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/628b90cf1e68e9c4338516e7/master/w_1600%2Cc_limit/marina_herlop_pripyat.jpeg"
        }
    ],
    "2023": [
        {
            "artist": "SZA",
            "album": "SOS",
            "rank": 1,
            "album-cover": "https://media.pitchfork.com/photos/638902d2e5592afa444298b9/master/w_1600%2Cc_limit/SZA-SOS.jpg"
        },
        {
            "artist": "Caroline Polachek",
            "album": "Desire, I Want to Turn Into You",
            "rank": 2,
            "album-cover": "https://media.pitchfork.com/photos/638e25b9050dcbdc83fd7926/master/w_1600%2Cc_limit/Caroline-Polachek.jpg"
        },
        {
            "artist": "billy woods / Kenny Segal",
            "album": "Maps",
            "rank": 3,
            "album-cover": "https://media.pitchfork.com/photos/64219eea733db37471fda995/master/w_1600%2Cc_limit/billy-woods-Kenny-Segal-Maps.jpg"
        },
        {
            "artist": "Wednesday",
            "album": "Rat Saw God",
            "rank": 4,
            "album-cover": "https://media.pitchfork.com/photos/63c80eec4f0ee627e3ea1c90/master/w_1600%2Cc_limit/Wednesday-Rat-Saw-God.jpg"
        },
        {
            "artist": "Nourished by Time",
            "album": "Erotic Probiotic 2",
            "rank": 5,
            "album-cover": "https://media.pitchfork.com/photos/6440085078c097a089685f10/master/w_1600%2Cc_limit/Nourished-by-Time.jpg"
        },
        {
            "artist": "Sufjan Stevens",
            "album": "Javelin",
            "rank": 6,
            "album-cover": "https://media.pitchfork.com/photos/64da26788c7859bd272cc6df/master/w_1600%2Cc_limit/Sufjan-Stevens-Javelin.jpg"
        },
        {
            "artist": "Amaarae",
            "album": "Fountain Baby",
            "rank": 7,
            "album-cover": "https://media.pitchfork.com/photos/647f7dd3fc45260b78876539/master/w_1600%2Cc_limit/Amaarae-Fountain-Baby.jpg"
        },
        {
            "artist": "Fever Ray",
            "album": "Radical Romantics",
            "rank": 8,
            "album-cover": "https://media.pitchfork.com/photos/636be48b3f76865ebf39cef9/master/w_1600%2Cc_limit/Fever-Ray-Radical-Romantics.jpg"
        },
        {
            "artist": "ANOHNI and the Johnsons",
            "album": "My Back Was a Bridge for You to Cross",
            "rank": 9,
            "album-cover": "https://media.pitchfork.com/photos/64637f49cf439109f97df401/master/w_1600%2Cc_limit/Anohni.jpg"
        },
        {
            "artist": "yeule",
            "album": "softscars",
            "rank": 10,
            "album-cover": "https://media.pitchfork.com/photos/64aed34788ee50644a417143/master/w_1600%2Cc_limit/Yeule-Softscars.jpg"
        },
        {
            "artist": "Lana Del Rey",
            "album": "Did you know that there's a tunnel under Ocean Blvd",
            "rank": 11,
            "album-cover": "https://media.pitchfork.com/photos/641c76f8717af22dc39c1ea2/master/w_1600%2Cc_limit/Lana-Del-Rey.jpg"
        },
        {
            "artist": "L'Rain",
            "album": "I Killed Your Dog",
            "rank": 12,
            "album-cover": "https://media.pitchfork.com/photos/64e56ecff3405f6aaf587659/master/w_1600%2Cc_limit/lrain-i-killed-your-dog.jpg"
        },
        {
            "artist": "Noname",
            "album": "Sundial",
            "rank": 13,
            "album-cover": "https://media.pitchfork.com/photos/64d622ec94b0ef4633cc836c/master/w_1600%2Cc_limit/Noname-Sundial.jpg"
        },
        {
            "artist": "Olivia Rodrigo",
            "album": "GUTS",
            "rank": 14,
            "album-cover": "https://media.pitchfork.com/photos/649ebfec61f08c20acc0827d/master/w_1600%2Cc_limit/Olivia-Rodrigo-Guts.jpg"
        },
        {
            "artist": "Yaeji",
            "album": "With a Hammer",
            "rank": 15,
            "album-cover": "https://media.pitchfork.com/photos/63bf096b1851475eeb5a4a74/master/w_1600%2Cc_limit/Yaeji%2520-%2520Album%2520-%2520WAH%2520-%2520PACKSHOT.jpg"
        },
        {
            "artist": "boygenius",
            "album": "the record",
            "rank": 16,
            "album-cover": "https://media.pitchfork.com/photos/63c826f176d4f76c2b0784c8/master/w_1600%2Cc_limit/Boygenius-The-Record.jpg"
        },
        {
            "artist": "Kelela",
            "album": "Raven",
            "rank": 17,
            "album-cover": "https://media.pitchfork.com/photos/6373a6527e5580f69600d789/master/w_1600%2Cc_limit/WARP320_Packshot_3000.jpg"
        },
        {
            "artist": "100 gecs",
            "album": "10,000 gecs",
            "rank": 18,
            "album-cover": "https://media.pitchfork.com/photos/638a0bd8daa32cc586a2c841/master/w_1600%2Cc_limit/10000-gecs.jpg"
        },
        {
            "artist": "Kara Jackson",
            "album": "Why Does the Earth Give Us People to Love?",
            "rank": 19,
            "album-cover": "https://media.pitchfork.com/photos/63f77cd1bf5a7e7985f22ee6/master/w_1600%2Cc_limit/Kara-Jackson.jpg"
        },
        {
            "artist": "Mandy, Indiana",
            "album": "i've seen a way",
            "rank": 20,
            "album-cover": "https://media.pitchfork.com/photos/63ff5f0c91f5aaca85d72deb/master/w_1600%2Cc_limit/Mandy-Indiana.jpg"
        },
        {
            "artist": "Julie Byrne",
            "album": "The Greater Wings",
            "rank": 21,
            "album-cover": "https://media.pitchfork.com/photos/644678723749aeb5b27f03af/master/w_1600%2Cc_limit/Julie-Byrne-The-Greater-Wings.jpg"
        },
        {
            "artist": "Jessie Ware",
            "album": "That! Feels Good!",
            "rank": 22,
            "album-cover": "https://media.pitchfork.com/photos/63e86295fa5c2bd42fc3e936/master/w_1600%2Cc_limit/Jessie-Ware-That-Feels-Good.jpg"
        },
        {
            "artist": "Mitski",
            "album": "The Land Is Inhospitable and So Are We",
            "rank": 23,
            "album-cover": "https://media.pitchfork.com/photos/64c03880f653299579f89e96/master/w_1600%2Cc_limit/mitski-TheLandIsInhospitableAndSoAreWe.jpg"
        },
        {
            "artist": "Sofia Kourtesis",
            "album": "Madres",
            "rank": 24,
            "album-cover": "https://media.pitchfork.com/photos/64c10c8d88ee50644a417426/master/w_1600%2Cc_limit/unnamed%2520(32).jpg"
        },
        {
            "artist": "Arooj Aftab / Vijay Iyer / Shahzad Ismaily",
            "album": "Love in Exile",
            "rank": 25,
            "album-cover": "https://media.pitchfork.com/photos/63f65d57fa5c2bd42fc3ec7c/master/w_1600%2Cc_limit/Love-in-Exile.jpg"
        },
        {
            "artist": "Laurel Halo",
            "album": "Atlas",
            "rank": 26,
            "album-cover": "https://media.pitchfork.com/photos/64ad9259999bee4ec19d99e1/master/w_1600%2Cc_limit/Laurel-Halo.jpg"
        },
        {
            "artist": "Water From Your Eyes",
            "album": "Everyone's Crushed",
            "rank": 27,
            "album-cover": "https://media.pitchfork.com/photos/63fcdcc4f530dec2c4f62820/master/w_1600%2Cc_limit/Water-From-Your-Eyes-Everyones-Crushed.jpg"
        },
        {
            "artist": "jaimie branch",
            "album": "Fly or Die Fly or Die Fly or Die ((world war))",
            "rank": 28,
            "album-cover": "https://media.pitchfork.com/photos/649064ae32ef0bc7a4f1a919/master/w_1600%2Cc_limit/jaimie-branch-Fly-or-Die.jpg"
        },
        {
            "artist": "HiTech",
            "album": "Détwat",
            "rank": 29,
            "album-cover": "https://media.pitchfork.com/photos/646f5df2c68c240e48c0a07f/master/w_1600%2Cc_limit/HiTech-Detwat.jpg"
        },
        {
            "artist": "Avalon Emerson",
            "album": "& the Charm",
            "rank": 30,
            "album-cover": "https://media.pitchfork.com/photos/63ff5f23fd62a0e462ee81b3/master/w_1600%2Cc_limit/Avalon-Emerson-and-the-Charm.jpg"
        },
        {
            "artist": "Yves Tumor",
            "album": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
            "rank": 31,
            "album-cover": "https://media.pitchfork.com/photos/63d7f02e29ae57679db5f698/master/w_1600%2Cc_limit/Yves-Tumor.jpg"
        },
        {
            "artist": "Ice Spice",
            "album": "Like..? EP",
            "rank": 32,
            "album-cover": "https://media.pitchfork.com/photos/63c9c30abd7796bda791d2c6/master/w_1600%2Cc_limit/Ice%2520Spice-%2520Like.."
        },
        {
            "artist": "Model/Actriz",
            "album": "Dogsbody",
            "rank": 33,
            "album-cover": "https://media.pitchfork.com/photos/63c562f0688dbc4c5e3383bc/master/w_1600%2Cc_limit/Model-Actriz-Dogsbody.jpg"
        },
        {
            "artist": "Joanna Sternberg",
            "album": "I've Got Me",
            "rank": 34,
            "album-cover": "https://media.pitchfork.com/photos/640897d5632b87694bd03e47/master/w_1600%2Cc_limit/Joanna-Sternberg.jpg"
        },
        {
            "artist": "Veeze",
            "album": "Ganger",
            "rank": 35,
            "album-cover": "https://media.pitchfork.com/photos/6499a323efe6e8e960f8f48a/master/w_1600%2Cc_limit/Veeze-Ganger.jpg"
        },
        {
            "artist": "Pangaea",
            "album": "Changing Channels",
            "rank": 36,
            "album-cover": "https://media.pitchfork.com/photos/651d6f3de49c3b231475b253/master/w_1600%2Cc_limit/Pangaea-Changing-Channels.jpg"
        },
        {
            "artist": "Lonnie Holley",
            "album": "Oh Me Oh My",
            "rank": 37,
            "album-cover": "https://media.pitchfork.com/photos/63bddb42e3ac94f9b35daed7/master/w_1600%2Cc_limit/Lonnie-Holley.jpg"
        },
        {
            "artist": "Yo La Tengo",
            "album": "This Stupid World",
            "rank": 38,
            "album-cover": "https://media.pitchfork.com/photos/636277ecdc5d82c6ee0367d0/master/w_1600%2Cc_limit/Yo-La-Tengo.jpg"
        },
        {
            "artist": "Liv.e",
            "album": "Girl in the Half Pearl",
            "rank": 39,
            "album-cover": "https://media.pitchfork.com/photos/63b85a20198393ca23dbcc96/master/w_1600%2Cc_limit/Liv.e-Girl-in-the-Half-Pearl.jpeg"
        },
        {
            "artist": "Ryuichi Sakamoto",
            "album": "12",
            "rank": 40,
            "album-cover": "https://media.pitchfork.com/photos/637b8e5958b97458ff15f346/master/w_1600%2Cc_limit/Ryuichi-Sakamoto-12.jpg"
        },
        {
            "artist": "Sexyy Red",
            "album": "Hood Hottest Princess",
            "rank": 41,
            "album-cover": "https://media.pitchfork.com/photos/6481cbaffc45260b78876574/master/w_1600%2Cc_limit/Sexyy-Red-Hood-Hottest-Princess.jpg"
        },
        {
            "artist": "Youth Lagoon",
            "album": "Heaven Is a Junkyard",
            "rank": 42,
            "album-cover": "https://media.pitchfork.com/photos/63fe065a91f5aaca85d72d7e/master/w_1600%2Cc_limit/Youth-Lagoon-Heaven-Is-a-Junkyard.jpg"
        },
        {
            "artist": "Kali Uchis",
            "album": "Red Moon in Venus",
            "rank": 43,
            "album-cover": "https://media.pitchfork.com/photos/63cece0fa5957e2471744d13/master/w_1600%2Cc_limit/Kali-Uchis-Red-Moon-in-Venus.jpg"
        },
        {
            "artist": "Jess Williamson",
            "album": "Time Ain't Accidental",
            "rank": 44,
            "album-cover": "https://media.pitchfork.com/photos/6421e5c88d090ba076117057/master/w_1600%2Cc_limit/Jess-Williamson-Time-Aint-Accidental.jpg"
        },
        {
            "artist": "Tomb Mold",
            "album": "The Enduring Spirit",
            "rank": 45,
            "album-cover": "https://media.pitchfork.com/photos/64ff3e42e24d07d4740b850e/master/w_1600%2Cc_limit/Tomb-Mold-The-Enduring-Spirit.jpg"
        },
        {
            "artist": "Blue Lake",
            "album": "Sun Arcs",
            "rank": 46,
            "album-cover": "https://media.pitchfork.com/photos/648c7a80b9ec4da09fa9da4e/master/w_1600%2Cc_limit/Blue%2520Lake-%2520Sun%2520Arcs.jpeg"
        },
        {
            "artist": "파란노을 (Parannoul)",
            "album": "After the Magic",
            "rank": 47,
            "album-cover": "https://media.pitchfork.com/photos/63d4551997fa621ce5fdfb12/master/w_1600%2Cc_limit/cover%2520art.jpg"
        },
        {
            "artist": "Purelink",
            "album": "Signs",
            "rank": 48,
            "album-cover": "https://media.pitchfork.com/photos/64dd45dcc3a9dafe5b12e0fc/master/w_1600%2Cc_limit/purelink.jpeg"
        },
        {
            "artist": "Sweeping Promises",
            "album": "Good Living Is Coming for You",
            "rank": 49,
            "album-cover": "https://media.pitchfork.com/photos/6499a72ac789a3a5fc5f4b93/master/w_1600%2Cc_limit/Sweeping%2520Promises-%2520Good%2520Living%2520Is%2520Coming%2520For%2520You%2520.jpeg"
        },
        {
            "artist": "André 3000",
            "album": "New Blue Sun",
            "rank": 50,
            "album-cover": "https://media.pitchfork.com/photos/65537cbc3cc93f9b90ee453e/master/w_1600%2Cc_limit/Andre-3000-New-Blue-Sun.jpg"
        }
    ]
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/all', (req, res) => {
    res.json(albums)
  })

app.get('/:year', (req, res) => {
    const year = req.params.year
    const limit = req.query.limit

    if (!albums[year] && !isNaN(+year)) {
        res.status(404).json({error: 'Year unavailable. Please choose another year.'})
    } else if (!albums[year] && isNaN(+year)) {
        res.status(404).json({error: 'Page not found.'})
    } else if (limit && +limit < 50) {
        res.json(albums[year].filter((entry, ind) => (ind + 1) <= limit)) 
    } else {
        res.json(albums[year])
    }
})

app.get('/all/:artist', (req, res) => {
    const artist = req.params.artist
    const result = {}

    for (let year in albums) {
      albums[year].forEach(entry => {
          if (entry['artist'] === artist) {
              result[year] = entry
          }
      })
    }

    if (Object.keys(result).length === 0) {
       return res.status(400).json({error: 'Artist not found. Please check for spelling or try another artist.'})
    }

    res.json(result)
    
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})