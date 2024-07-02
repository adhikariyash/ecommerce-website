
const Data = {
  tv: [
    { id: 1, img: '/public/assets/tv1.jpg', name: 'Samsung QLED', price: '$1200' },
    { id: 2, img:'/public/assets/tv2.jpg', name: 'LG OLED', price: '$1500' },
    { id: 3, img: '/public/assets/tv3.jpg', name: 'Sony Bravia', price: '$1300' },
    { id: 4, img: '/public/assets/tv4.jpg', name: 'TCL 6-Series', price: '$900' },
    { id: 5, img: '/public/assets/tv5.jpg', name: 'Vizio P-Series', price: '$1000' },
    { id: 6, img: '/public/assets/tv6.jpg', name: 'Hisense H9G', price: '$800' },
  ],
  laptops: [
    { id: 1, img: '/public/assets/laptop1.jpg', name: 'MacBook Pro', price: '$2500' },
    { id: 2, img: '/public/assets/laptop2.jpg', name: 'Dell XPS 13', price: '$1200' },
    { id: 3, img: '/public/assets/laptop3.jpg', name: 'HP Spectre x360', price: '$1400' },
    { id: 4, img: '/public/assets/laptop4.jpg', name: 'Lenovo ThinkPad X1', price: '$1600' },
    { id: 5, img: '/public/assets/laptop5.jpg', name: 'Asus ZenBook', price: '$1100' },
    { id: 6, img: '/public/assets/laptop6.jpg', name: 'Microsoft Surface Laptop 4', price: '$1300' },
  ],
  phones: [
    { id: 1, img: '/public/assets/phone1.jpg', name: 'iPhone 12', price: '$999' },
    { id: 2, img: '/public/assets/phone2.jpg', name: 'Samsung Galaxy S21', price: '$799' },
    { id: 3, img: '/public/assets/phone3.jpg', name: 'Google Pixel 5', price: '$699' },
    { id: 4, img: '/public/assets/phone4.jpg', name: 'OnePlus 9', price: '$729' },
    { id: 5, img: '/public/assets/phone5.jpg', name: 'Sony Xperia 1', price: '$949' },
    { id: 6, img: '/public/assets/phone6.jpg', name: 'Xiaomi Mi 11', price: '$749'}
  ],
  cpuCoolers: [
    { id: 1, img: '/public/assets/cooler1.jpg', name: 'Noctua NH-D15', price: '$90' },
    { id: 2, img: '/public/assets/cooler2.jpg', name: 'Cooler Master Hyper 212 EVO', price: '$35' },
    { id: 3, img: '/public/assets/cooler3.jpg', name: 'be quiet! Dark Rock Pro 4', price: '$80' },
    { id: 4, img: '/public/assets/cooler4.jpg', name: 'Corsair H100i RGB Platinum', price: '$160' },
    { id: 5, img: '/public/assets/cooler5.jpg', name: 'NZXT Kraken X63', price: '$150' },
    { id: 6, img: '/public/assets/cooler6.jpg', name: 'Arctic Freezer 34 eSports DUO', price: '$50' },
  ],
  headsets: [
    { id: 1, img: '/public/assets/headset1.jpg', name: 'HyperX Cloud II', price: '$100' },
    { id: 2, img: '/public/assets/headset2.jpg', name: 'SteelSeries Arctis 7', price: '$150' },
    { id: 3, img: '/public/assets/headset3.jpg', name: 'Logitech G Pro X', price: '$130' },
    { id: 4, img: '/public/assets/headset4.jpg', name: 'Razer Kraken X', price: '$50' },
    { id: 5, img: '/public/assets/headset5.jpg', name: 'Corsair HS60 Pro', price: '$70' },
    { id: 6, img: '/public/assets/headset6.jpg', name: 'Astro A50', price: '$300' },
  ],
  pcs: [
    { id: 1, img: '/public/assets/pc1.jpg', name: 'Alienware Aurora R12', price: 2000 },
    { id: 2, img: '/public/assets/pc2.jpg', name: 'HP Omen 30L', price: 1800 },
    { id: 3, img: '/public/assets/pc3.jpg', name: 'CyberPowerPC Gamer Supreme', price: 1600 },
    { id: 4, img: '/public/assets/pc4.jpg', name: 'MSI MEG Trident X', price: 2200 },
    { id: 5, img: '/public/assets/pc5.jpg', name: 'Corsair One Pro i200', price: 2500 },
    { id: 6, img: '/public/assets/pc6.jpg', name: 'ASUS ROG Strix GA15', price: 1500 },
  ],
  todaysDeals: [
    { id: 1, img: '/public/assets/tv2.jpg', name: 'LG OLED', price: 1500, discount: 20 },
    { id: 2, img: '/public/assets/laptop3.jpg', name:'HP Spectre x360', price: 1400, discount: 15 },
    { id: 3, img: '/public/assets/phone1.jpg', name: 'iPhone 12', price: 999, discount: 25 },
    { id: 4, img: '/public/assets/cooler1.jpg', name: 'Noctua NH-D15', price: 90, discount: 30 },
    { id: 5, img: '/public/assets/headset2.jpg', name: 'SteelSeries Arctis 7', price: 150, discount: 10 },
    { id: 6, img: '/public/assets/pc3.jpg', name: 'CyberPowerPC Gamer Supreme', price: 1600, discount: 20 },
  ],
  seasonalOffers: [
    { id: 1, img: '/public/assets/tv1.jpg', name: 'Samsung QLED', price: 1200, discount: 30 },
    { id: 2, img: '/public/assets/laptop1.jpg', name: 'MacBook Pro', price: 2500, discount: 20 },
    { id: 3, img: '/public/assets/phone2.jpg', name: 'Samsung Galaxy S21', price: 799, discount: 35 },
    { id: 4, img: '/public/assets/cooler3.jpg', name: 'be quiet! Dark Rock Pro 4', price: 80, discount: 40},
    { id: 5, img: '/public/assets/headset1.jpg', name: 'HyperX Cloud II', price: 100, discount: 25},
    { id: 6, img: '/public/assets/pc1.jpg', name: 'Alienware Aurora R12', price: 2000, discount: 30},
  ],
  topSellers: [
    { id: 1, img: '/public/assets/tv2.jpg', name: 'LG OLED', price: 1500, discount: 15, rating: 4.8 },
    { id: 2, img: '/public/assets/laptop1.jpg', name: 'MacBook Pro', price: 2500, discount: 10, rating: 4.7 },
    { id: 3, img: '/public/assets/phone1.jpg', name: 'iPhone 12', price: 999, discount: 20, rating: 4.9 },
    { id: 4, img: '/public/assets/cooler1.jpg', name: 'Noctua NH-D15', price: 90, discount: 25, rating: 4.8 },
    { id: 5, img: '/public/assets/headset2.jpg', name: 'SteelSeries Arctis 7', price: 150, discount: 10, rating: 4.6 },
    { id: 6, img: '/public/assets/pc3.jpg', name: 'CyberPowerPC Gamer Supreme', price: 1600, discount: 15, rating: 4.6 },
  ],
};

export default Data