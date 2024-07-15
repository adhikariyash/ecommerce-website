const ProductData = {
    all:[
    { 
      "id": 1, 
      "img": "/assets/tv1.jpg", 
      "name": "Samsung QLED", 
      "price": 1200, 
      "discount": 0, 
      "slug": "Samsung QLED",
      "specs": {
        "resolution": "4K",
        "screenSize": "55 inch",
        "smartTV": "✅",
        "ports": ["HDMI", "USB", "Ethernet"],
        "refreshRate": "120Hz"
      }
    },
    { 
      "id": 2, 
      "img": "/assets/tv2.jpg", 
      "name": "LG OLED", 
      "price": 1500, 
      "discount": 0, 
      "slug": "LG OLED",
      "specs": {
        "resolution": "4K",
        "screenSize": "65 inch",
        "smartTV": "✅",
        "ports": ["HDMI", "USB", "Ethernet"],
        "refreshRate": "120Hz"
      }
    },
    { 
      "id": 3, 
      "img": "/assets/tv3.jpg", 
      "name": "Sony Bravia", 
      "price": 1300, 
      "discount": 0, 
      "slug": "Sony Bravia",
      "specs": {
        "resolution": "4K",
        "screenSize": "55 inch",
        "smartTV": "✅",
        "ports": ["HDMI", "USB", "Ethernet"],
        "refreshRate": "120Hz"
      }
    },
    { 
      "id": 4, 
      "img": "/assets/tv4.jpg", 
      "name": "TCL 6-Series", 
      "price": 900, 
      "discount": 0, 
      "slug": "TCL 6-Series",
      "specs": {
        "resolution": "4K",
        "screenSize": "55 inch",
        "smartTV": "✅",
        "ports": ["HDMI", "USB", "Ethernet"],
        "refreshRate": "60Hz"
      }
    },
    { 
      "id": 5, 
      "img": "/assets/tv5.jpg", 
      "name": "Vizio P-Series", 
      "price": 1000, 
      "discount": 0, 
      "slug": "Vizio P-Series",
      "specs": {
        "resolution": "4K",
        "screenSize": "65 inch",
        "smartTV":"✅",
        "ports": ["HDMI", "USB", "Ethernet"],
        "refreshRate": "120Hz"
      }
    },
    { 
      "id": 6, 
      "img": "/assets/tv6.jpg", 
      "name": "Hisense H9G", 
      "price": 800, 
      "discount": 0, 
      "slug": "Hisense H9G",
      "specs": {
        "resolution": "4K",
        "screenSize": "55 inch",
        "smartTV": "✅",
        "ports": ["HDMI", "USB", "Ethernet"],
        "refreshRate": "120Hz"
      }
    },
    { 
      "id": 7, 
      "img": "/assets/laptop1.jpg", 
      "name": "MacBook Pro", 
      "price": 2500, 
      "discount": 0, 
      "slug": "MacBook Pro",
      "specs": {
        "processor": "Apple M1",
        "ram": "16GB",
        "storage": "512GB SSD",
        "screenSize": "13 inch",
        "os": "macOS"
      }
    },
    { 
      "id": 8, 
      "img": "/assets/laptop2.jpg", 
      "name": "Dell XPS 13", 
      "price": 1200, 
      "discount": 0, 
      "slug": "Dell XPS 13",
      "specs": {
        "processor": "Intel Core i7",
        "ram": "16GB",
        "storage": "512GB SSD",
        "screenSize": "13 inch",
        "os": "Windows 10"
      }
    },
    { 
      "id": 9, 
      "img": "/assets/laptop3.jpg", 
      "name": "HP Spectre x360", 
      "price": 1400, 
      "discount": 0, 
      "slug": "HP Spectre x360",
      "specs": {
        "processor": "Intel Core i7",
        "ram": "16GB",
        "storage": "512GB SSD",
        "screenSize": "13 inch",
        "os": "Windows 10"
      }
    },
    { 
      "id": 10, 
      "img": "/assets/laptop4.jpg", 
      "name": "Lenovo ThinkPad X1", 
      "price": 1600, 
      "discount": 0, 
      "slug": "Lenovo ThinkPad X1",
      "specs": {
        "processor": "Intel Core i7",
        "ram": "16GB",
        "storage": "1TB SSD",
        "screenSize": "14 inch",
        "os": "Windows 10"
      }
    },
    { 
      "id": 11, 
      "img": "/assets/laptop5.jpg", 
      "name": "Asus ZenBook", 
      "price": 1100, 
      "discount": 0, 
      "slug": "Asus ZenBook",
      "specs": {
        "processor": "Intel Core i5",
        "ram": "8GB",
        "storage": "256GB SSD",
        "screenSize": "13 inch",
        "os": "Windows 10"
      }
    },
    { 
      "id": 12, 
      "img": "/assets/laptop6.jpg", 
      "name": "Microsoft Surface Laptop 4", 
      "price": 1300, 
      "discount": 0, 
      "slug": "Microsoft Surface Laptop 4",
      "specs": {
        "processor": "AMD Ryzen 5",
        "ram": "8GB",
        "storage": "256GB SSD",
        "screenSize": "13.5 inch",
        "os": "Windows 10"
      }
    },
    { 
      "id": 13, 
      "img": "/assets/phone1.jpg", 
      "name": "iPhone 12", 
      "price": 999, 
      "discount": 0, 
      "slug": "iPhone 12",
      "specs": {
        "processor": "A14 Bionic",
        "ram": "4GB",
        "storage": "128GB",
        "screenSize": "6.1 inch",
        "os": "iOS"
      }
    },
    { 
      "id": 14, 
      "img": "/assets/phone2.jpg", 
      "name": "Samsung Galaxy S21", 
      "price": 799, 
      "discount": 0, 
      "slug": "Samsung Galaxy S21",
      "specs": {
        "processor": "Exynos 2100",
        "ram": "8GB",
        "storage": "128GB",
        "screenSize": "6.2 inch",
        "os": "Android"
      }
    },
    { 
      "id": 15, 
      "img": "/assets/phone3.jpg", 
      "name": "Google Pixel 5", 
      "price": 699, 
      "discount": 0, 
      "slug": "Google Pixel 5",
      "specs": {
        "processor": "Snapdragon 765G",
        "ram": "8GB",
        "storage": "128GB",
        "screenSize": "6.0 inch",
        "os": "Android"
      }
    },
    { 
      "id": 16, 
      "img": "/assets/phone4.jpg", 
      "name": "OnePlus 9", 
      "price": 729, 
      "discount": 0, 
      "slug": "OnePlus 9",
      "specs": {
        "processor": "Snapdragon 888",
        "ram": "8GB",
        "storage": "128GB",
        "screenSize": "6.55 inch",
        "os": "Android"
      }
    },
    { 
      "id": 17, 
      "img": "/assets/phone5.jpg", 
      "name": "Sony Xperia 1", 
      "price": 949, 
      "discount": 0, 
      "slug": "Sony Xperia 1",
      "specs": {
        "processor": "Snapdragon 865",
        "ram": "8GB",
        "storage": "256GB",
        "screenSize": "6.5 inch",
        "os": "Android"
      }
    },
    { 
      "id": 18, 
      "img": "/assets/phone6.jpg", 
      "name": "Xiaomi Mi 11", 
      "price": 749, 
      "discount": 0, 
      "slug": "Xiaomi Mi 11",
      "specs": {
        "processor": "Snapdragon 888",
        "ram": "8GB",
        "storage": "128GB",
        "screenSize": "6.81 inch",
        "os": "Android"
      }
    },
    { 
      "id": 19, 
      "img": "/assets/cooler1.jpg", 
      "name": "Noctua NH-D15", 
      "price": 90, 
      "discount": 0, 
      "slug": "Noctua NH-D15",
      "specs": {
        "type": "Air Cooler",
        "compatibility": ["Intel", "AMD"],
        "fanSize": "140mm",
        "noiseLevel": "24.6 dB",
        "rpm": "1500 RPM"
      }
    },
    { 
      "id": 20, 
      "img": "/assets/cooler2.jpg", 
      "name": "Cooler Master Hyper 212 EVO", 
      "price": 35, 
      "discount": 0, 
      "slug": "Cooler Master Hyper 212 EVO",
      "specs": {
        "type": "Air Cooler",
        "compatibility": ["Intel", "AMD"],
        "fanSize": "120mm",
        "noiseLevel": "26.0 dB",
        "rpm": "2000 RPM"
      }
    },
    { 
      "id": 21, 
      "img": "/assets/cooler3.jpg", 
      "name": "be quiet! Dark Rock Pro 4", 
      "price": 80, 
      "discount": 0, 
      "slug": "be quiet! Dark Rock Pro 4",
      "specs": {
        "type": "Air Cooler",
        "compatibility": ["Intel", "AMD"],
        "fanSize": "120mm",
        "noiseLevel": "24.3 dB",
        "rpm": "1500 RPM"
      }
    },
    { 
      "id": 22, 
      "img": "/assets/cooler4.jpg", 
      "name": "Corsair H100i RGB Platinum", 
      "price": 160, 
      "discount": 0, 
      "slug": "Corsair H100i RGB Platinum",
      "specs": {
        "type": "Liquid Cooler",
        "compatibility": ["Intel", "AMD"],
        "fanSize": "120mm",
        "noiseLevel": "37.0 dB",
        "rpm": "2400 RPM"
      }
    },
    { 
      "id": 23, 
      "img": "/assets/cooler5.jpg", 
      "name": "NZXT Kraken X63", 
      "price": 150, 
      "discount": 0, 
      "slug": "NZXT Kraken X63",
      "specs": {
        "type": "Liquid Cooler",
        "compatibility": ["Intel", "AMD"],
        "fanSize": "140mm",
        "noiseLevel": "21.0 dB",
        "rpm": "1800 RPM"
      }
    },
    { 
      "id": 24, 
      "img": "/assets/cooler6.jpg", 
      "name": "Arctic Freezer 34 eSports DUO", 
      "price": 50, 
      "discount": 0, 
      "slug": "Arctic Freezer 34 eSports DUO",
      "specs": {
        "type": "Air Cooler",
        "compatibility": ["Intel", "AMD"],
        "fanSize": "120mm",
        "noiseLevel": "24.0 dB",
        "rpm": "2100 RPM"
      }
    },
    { 
      "id": 25, 
      "img": "/assets/headset1.jpg", 
      "name": "HyperX Cloud II", 
      "price": 100, 
      "discount": 0, 
      "slug": "HyperX Cloud II",
      "specs": {
        "type": "Over-Ear",
        "connectivity": "Wired",
        "frequencyResponse": "15Hz-25kHz",
        "impedance": "60 Ohms",
        "microphone": "Detachable"
      }
    },
    { 
      "id": 26, 
      "img": "/assets/headset2.jpg", 
      "name": "SteelSeries Arctis 7", 
      "price": 150, 
      "discount": 0, 
      "slug": "SteelSeries Arctis 7",
      "specs": {
        "type": "Over-Ear",
        "connectivity": "Wireless",
        "frequencyResponse": "20Hz-20kHz",
        "impedance": "32 Ohms",
        "microphone": "Retractable"
      }
    },
    { 
      "id": 27, 
      "img": "/assets/headset3.jpg", 
      "name": "Logitech G Pro X", 
      "price": 130, 
      "discount": 0, 
      "slug": "Logitech G Pro X",
      "specs": {
        "type": "Over-Ear",
        "connectivity": "Wired",
        "frequencyResponse": "20Hz-20kHz",
        "impedance": "35 Ohms",
        "microphone": "Detachable"
      }
    },
    { 
      "id": 28, 
      "img": "/assets/headset4.jpg", 
      "name": "Razer Kraken X", 
      "price": 50, 
      "discount": 0, 
      "slug": "Razer Kraken X",
      "specs": {
        "type": "Over-Ear",
        "connectivity": "Wired",
        "frequencyResponse": "12Hz-28kHz",
        "impedance": "32 Ohms",
        "microphone": "Fixed"
      }
    },
    { 
      "id": 29, 
      "img": "/assets/headset5.jpg", 
      "name": "Corsair HS60 Pro", 
      "price": 70, 
      "discount": 0, 
      "slug": "Corsair HS60 Pro",
      "specs": {
        "type": "Over-Ear",
        "connectivity": "Wired",
        "frequencyResponse": "20Hz-20kHz",
        "impedance": "32 Ohms",
        "microphone": "Detachable"
      }
    },
    { 
      "id": 30, 
      "img": "/assets/headset6.jpg", 
      "name": "Astro A50", 
      "price": 300, 
      "discount": 0, 
      "slug": "Astro A50",
      "specs": {
        "type": "Over-Ear",
        "connectivity": "Wireless",
        "frequencyResponse": "20Hz-20kHz",
        "impedance": "48 Ohms",
        "microphone": "Flip-to-mute"
      }
    },
    { 
      "id": 31, 
      "img": "/assets/pc1.jpg", 
      "name": "Alienware Aurora R12", 
      "price": 2000, 
      "discount": 0, 
      "slug": "Alienware Aurora R12",
      "specs": {
        "processor": "Intel Core i7",
        "ram": "16GB",
        "storage": "1TB SSD",
        "graphicsCard": "NVIDIA GeForce RTX 3070",
        "os": "Windows 10"
      }
    },
    { 
      "id": 32, 
      "img": "/assets/pc2.jpg", 
      "name": "HP Omen 30L", 
      "price": 1800, 
      "discount": 0, 
      "slug": "HP Omen 30L",
      "specs": {
        "processor": "AMD Ryzen 7",
        "ram": "16GB",
        "storage": "1TB SSD",
        "graphicsCard": "NVIDIA GeForce RTX 3060",
        "os": "Windows 10"
      }
    },
    { 
      "id": 33, 
      "img": "/assets/pc3.jpg", 
      "name": "CyberPowerPC Gamer Supreme", 
      "price": 1600, 
      "discount": 0, 
      "slug": "CyberPowerPC Gamer Supreme",
      "specs": {
        "processor": "AMD Ryzen 9",
        "ram": "16GB",
        "storage": "1TB SSD",
        "graphicsCard": "NVIDIA GeForce RTX 3080",
        "os": "Windows 10"
      }
    },
    { 
      "id": 34, 
      "img": "/assets/pc4.jpg", 
      "name": "MSI MEG Trident X", 
      "price": 2200, 
      "discount": 0, 
      "slug": "MSI MEG Trident X",
      "specs": {
        "processor": "Intel Core i9",
        "ram": "32GB",
        "storage": "2TB SSD",
        "graphicsCard": "NVIDIA GeForce RTX 3090",
        "os": "Windows 10"
      }
    },
    { 
      "id": 35, 
      "img": "/assets/pc5.jpg", 
      "name": "Corsair One Pro i200", 
      "price": 2500, 
      "discount": 0, 
      "slug": "Corsair One Pro i200",
      "specs": {
        "processor": "Intel Core i9",
        "ram": "32GB",
        "storage": "2TB SSD",
        "graphicsCard": "NVIDIA Quadro RTX 5000",
        "os": "Windows 10"
      }
    },
    { 
      "id": 36, 
      "img": "/assets/pc6.jpg", 
      "name": "ASUS ROG Strix GA15", 
      "price": 1500, 
      "discount": 0, 
      "slug": "ASUS ROG Strix GA15",
      "specs": {
        "processor": "AMD Ryzen 7",
        "ram": "16GB",
        "storage": "1TB SSD",
        "graphicsCard": "NVIDIA GeForce RTX 3060",
        "os": "Windows 10"
      }
    }
  ]}
  export default ProductData
  