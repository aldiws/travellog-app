'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Destinations', [{
        name: 'Kelingking Beach',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Nusapenida',
        description: 'A secret point beach on Nusapenida',
        photo: 'img_1517387185997_kelingking_beach.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Nusa Penida',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Nusa Penida',
        description: 'Nusa Penida is an island southeast of Indonesia\'s island Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan.',
        photo: 'img_1517387185997_nusa_penida.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Tirta Gangga',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Karang Asam',
        description: 'Tirta Gangga is a former royal palace in eastern Bali, Indonesia, about 5 kilometres from Karangasem, near Abang.',
        photo: 'img_1517387185997_tirta_gangga.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Ubud Monkey Forest',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Ubud',
        description: 'The Ubud Monkey Forest is a nature reserve and Hindu temple complex in Ubud, Bali, Indonesia.',
        photo: 'img_1517387185997_sacred_monkey_forest.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Potato Head',
        category: 'Activites',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'North Kuta',
        description: 'Potato Head is an Indonesian lifestyle hospitality brand expressed through a collective of dynamic dining and drinking venues in Bali.',
        photo: 'img_1517387185997_potato_head.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Waterboom',
        category: 'Activites',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Kuta',
        description: 'Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.',
        photo: 'img_1517387185997_waterboom_bali.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Quad Discovery Bike',
        category: 'Activites',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Gianyar',
        description: 'Adventurous things to do in Bali Gianyar.',
        photo: 'img_1517387185997_waterboom_bali.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Whitewater Rafting on Ayung River',
        category: 'Activites',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Ubud',
        description: 'Best rafting in Bali with Sobek Bali Adventure! Good instructor, good boat, great start and end meeting point, clean restaurant. Had so much fun!.',
        photo: 'img_1517387185997_bali_rafting.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Dive USS Liberty',
        category: 'Activites',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Tulamben',
        description: 'USAT Liberty was a United States Army cargo ship torpedoed by Japanese submarine I-166 in January 1942 and beached on the island of Bali.',
        photo: 'img_1517387185997_uss_liberty.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Brahma Vihara',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Buleleng',
        description: 'Brahmavihara-Arama also known as Vihara Buddha Banjar due to its location in the Banjar District of Buleleng is a buddhist Temple Monastery in the mountains near Lovina in North Bali.',
        photo: 'img_1517387185997_brahma_vihara.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Saraswati Temple',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Gianyar',
        description: 'A pathway over a scenic lotus pond leads to this Hindu temple with ornate architectural details.',
        photo: 'img_1517387185997_saraswati_temple.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Tanah Lot',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Beraban',
        description: 'Tanah Lot is a rock formation off the Indonesian island of Bali. It is home to the ancient Hindu pilgrimage temple Pura Tanah Lot, a popular tourist and cultural icon for photography.',
        photo: 'img_1517387185997_tanah_lot.png',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Pura Ulun Danu Bratan',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Tabanan',
        description: 'Pura Ulun Danu Beratan, or Pura Bratan, is a major Shaivite water temple on Bali, Indonesia. The temple complex is located on the shores of Lake Bratan in the mountains near Bedugul.',
        photo: 'img_1517387185997_ulun_danu_bratan.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Neka Art Museum',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Bali',
        specificLocation: 'Gianyar',
        description: 'The Neka Art Museum is a museum located in Ubud on Bali, Indonesia, Established by Suteja Neka, a Balinese teacher who collected Balinese art with the advice and help of and advice from the painters.',
        photo: 'img_1517387185997_neka_art_museum.jpeg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Jomblang Cave',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Gunung Kidul',
        description: 'Goa Jomblang is one of hundreds of cave complex in Gunungkidul (40 km from Yogya city) that becomes well known because of its uniqueness. Goa Jomblang is a vertical cave with dense ancient forest below. The haracteristics which diametrically 50 m wide with vertical sides varies between 60-80 meters.',
        photo: 'img_1517387185997_jomblang_cave.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Merapi Volcano',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: '""',
        description: 'Mount Merapi, Gunung Merapi, is an active stratovolcano located on the border between Central Java and Yogyakarta, Indonesia.',
        photo: 'img_1517387185997_merapi_volcano.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Pinus Pengger',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Dlingo-Patuk',
        description: 'Pengus Pine Forest becomes the right tourist alternative for you who want to enjoy the beautiful nature of pine forest is beautiful and natural.',
        photo: 'img_1517387185997_pinus_pengger.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Timang Beach',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Gunung Kidul',
        description: 'Timang beach is a beach attraction is a region at the boundary between the sea and the land that is located in Gunungkidul, Yogyakarta, Indonesia.',
        photo: 'img_1517387185997_timang_beach.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Wediombo Beach',
        category: 'Nature and Parks',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Jepitu',
        description: 'Wedi Ombo located in Jepitu village, about 40 km southeast of Wonosari, Gunung Kidul, Yogyakarta, Indonesia. Wedi Ombo Beach enclosed bays wide with soft white sand overlooking the sea and surrounded by limestone hills.',
        photo: 'img_1517387185997_wediombo_beach.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Candi Prambanan',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Prambanan',
        description: 'Prambanan or Rara Jonggrang is a 9th-century Hindu temple compound in Central Java, Indonesia, dedicated to the Trimurti, the expression of God as the Creator, the Preserver and the Destroyer.',
        photo: 'img_1517387185997_candi_prambanan.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Gumuling Well',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Kadipaten Lor Kraton',
        description: 'Sumur Gumuling or Gumuling Well is a round building that having some chambers inside the building, that was functioned as a mosque at the time of Yogyakarta Palace. The leader of the prayer did not need a speaker since the circular construction, because the echoes that make his voice heard louder.',
        photo: 'img_1517387185997_gumuling_well.jpeg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Kalasan Temple',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Danurejan',
        description: 'Kalasan, also known as Candi Kalibening, is an 8th-century Buddhist temple in Java, Indonesia. It is located 13 km east of Yogyakarta on the way to Prambanan temple, on the south side of the main road \'Jalan Solo\' between Yogyakarta and Surakarta.',
        photo: 'img_1517387185997_kalasan_temple.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Plaosan Temple',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Candi Plaosan',
        description: 'Candi Plaosan, also known as the \'Plaosan Complex\', is one of the Buddhist temples located in Bugisan village, Prambanan district, Klaten Regency, Central Java, Indonesia, about a kilometer to the northwest of the renowned Hindu Prambanan Temple.',
        photo: 'img_1517387185997_plaosan_temple.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
      {
        name: 'Sewu Temple',
        category: 'Historic',
        country: 'Indonesia',
        province: 'Jogja',
        specificLocation: 'Kalasan',
        description: 'Sewu is an eighth century Mahayana Buddhist temple located 800 meters north of Prambanan in Central Java, Indonesia. The word for a Hindu or Buddhist temple in Indonesian is candi, hence the common name is Candi Sewu.',
        photo: 'img_1517387185997_sewu_temple.jpg',
        createdAt: '2018-01-29 13:03:27.587+07',
        updatedAt: '2018-01-29 13:03:27.587+07'
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};