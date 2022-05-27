const data = [
  {
    id: 1,
    namaHotel: "Hotel Indonesia Kempinski",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "An 11-minute walk from Sudirman train station, this ritzy hotel is 2.1 km from the National Museum of Indonesia and 4 km from Istiqlal Mosque.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 2,
    namaHotel: "Hotel Tentrem",
    rating: "4.8",
    kota: "Yogyakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Among shops and restaurants, this lavish hotel is 2.9 km from the markets on buzzy Jalan Malioboro, and 5 km from Keraton Ngayogyakarta Hadiningrat palace.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 3,
    namaHotel: "Hard Rock Hotel",
    rating: "4.6",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the beach, this music-themed resort hotel with indigenous architecture is 2 km from the shops at Jalan Legian and 7 km from Waterbom Bali.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 4,
    namaHotel: "The Trans Luxury Hotel",
    rating: "4.7",
    kota: "Bandung",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the Trans Studio Mall Bandung, this polished hotel is 2 km from Cikudapateuh train station and 4 km from dining and shopping along lively Braga Street.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 5,
    namaHotel: "JW Marriott",
    rating: "4.7",
    kota: "Surabaya",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This high-end modern hotel is 2 km from the Heroes Monument and 19 km from Juanda International Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 6,
    namaHotel: "ASTON Bogor Hotel & Resort",
    rating: "4.7",
    kota: "Bogor",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This colorful, upscale hotel on landscaped gardens is a 9-minute walk from The Jungle Water Adventure park, and 6 km from Istana Bogor presidential palace and Kebun Raya Bogor botanical gardens.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 7,
    namaHotel: "Hotel Tugu",
    rating: "4.6",
    kota: "Malang",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Set in the old town, this striking hotel in a luxe building is a 3-minute walk from the Museum Malang Tempo Doeloe and a 5-minute walk from Malang train station.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 8,
    namaHotel: "DoubleTree by Hilton",
    rating: "4.6",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "A 6-minute walk from Cikini train station, this contemporary hotel in the central business district is 3.9 km from the National Monument and 4.4 km from Istiqlal Mosque.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 9,
    namaHotel: "Hotel Indonesia Kempinski",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "An 11-minute walk from Sudirman train station, this ritzy hotel is 2.1 km from the National Museum of Indonesia and 4 km from Istiqlal Mosque.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 10,
    namaHotel: "Hotel Tentrem",
    rating: "4.8",
    kota: "Yogyakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Among shops and restaurants, this lavish hotel is 2.9 km from the markets on buzzy Jalan Malioboro, and 5 km from Keraton Ngayogyakarta Hadiningrat palace.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 11,
    namaHotel: "Hard Rock Hotel",
    rating: "4.6",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the beach, this music-themed resort hotel with indigenous architecture is 2 km from the shops at Jalan Legian and 7 km from Waterbom Bali.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 12,
    namaHotel: "The Trans Luxury Hotel",
    rating: "4.7",
    kota: "Bandung",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the Trans Studio Mall Bandung, this polished hotel is 2 km from Cikudapateuh train station and 4 km from dining and shopping along lively Braga Street.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 13,
    namaHotel: "JW Marriott",
    rating: "4.7",
    kota: "Surabaya",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This high-end modern hotel is 2 km from the Heroes Monument and 19 km from Juanda International Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 14,
    namaHotel: "ASTON Bogor Hotel & Resort",
    rating: "4.7",
    kota: "Bogor",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This colorful, upscale hotel on landscaped gardens is a 9-minute walk from The Jungle Water Adventure park, and 6 km from Istana Bogor presidential palace and Kebun Raya Bogor botanical gardens.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 15,
    namaHotel: "Hotel Tugu",
    rating: "4.6",
    kota: "Malang",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Set in the old town, this striking hotel in a luxe building is a 3-minute walk from the Museum Malang Tempo Doeloe and a 5-minute walk from Malang train station.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },
];

module.exports = data;
