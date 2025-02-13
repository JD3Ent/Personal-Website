const pcParts = {
    const pcParts = {
    cpu: [
        "Ryzen 9 7950X3D", "Ryzen 9 7950X", "Ryzen 9 7900X3D", "Ryzen 9 7900X",
        "Ryzen 9 7900", "Ryzen 7 7800X3D", "Ryzen 7 7700X", "Ryzen 7 7700",
        "Ryzen 5 7600X", "Ryzen 5 7600", "Ryzen 9 5950X", "Ryzen 9 5900X",
        "Ryzen 7 5800X3D", "Ryzen 7 5800X", "Ryzen 7 5700X", "Ryzen 5 5600X",
        "Ryzen 5 5600", "Ryzen 5 5500", "Ryzen 3 5300G", "Ryzen 9 3950X",
        "Core i9-14900K", "Core i9-14900KF", "Core i9-13900K", "Core i9-13900KF",
        "Core i9-12900K", "Core i9-12900KF", "Core i7-14700K", "Core i7-14700KF",
        "Core i7-13700K", "Core i7-13700KF", "Core i7-12700K", "Core i7-12700KF",
        "Core i5-14600K", "Core i5-14600KF", "Core i5-13600K", "Core i5-13600KF",
        "Core i5-12600K", "Core i5-12600KF", "Core i5-12400", "Core i3-14100",
        "Core i3-13100", "Core i3-12100", "Core i3-10100", "Core i9-9900K",
        "Core i7-9700K"
    ],
    gpu: [
    "RTX 5090", "RTX 5080", "RTX 5070 Ti", "RTX 5070",
    "RTX 4090", "RTX 4080 SUPER", "RTX 4080", "RTX 4070 Ti SUPER",
    "RTX 4070 Ti", "RTX 4070 SUPER", "RTX 4070", "RTX 4060 Ti 16GB",
    "RTX 4060 Ti 8GB", "RTX 4060", "RTX 4050", "RTX 3090 Ti",
    "RTX 3090", "RTX 3080 Ti", "RTX 3080 12GB", "RTX 3080 10GB",
    "RTX 3070 Ti", "RTX 3070", "RTX 3060 Ti", "RTX 3060 12GB",
    "RTX 3060 8GB", "RTX 3050", "GTX 1660 Ti", "GTX 1660 SUPER",
    "GTX 1660", "GTX 1650 SUPER", "GTX 1650", "GTX 1080 Ti",
    "GTX 1080", "GTX 1070 Ti", "GTX 1070", "GTX 1060 6GB",
    "GTX 1060 3GB", "GTX 1050 Ti", "GTX 1050", "RX 7900 XTX",
    "RX 7900 XT", "RX 7800 XT", "RX 7700 XT", "RX 7600 XT",
    "RX 7600", "RX 6950 XT", "RX 6900 XT", "RX 6800 XT",
    "RX 6800", "RX 6750 XT", "RX 6700 XT", "RX 6600 XT",
    "RX 6600", "RX 6500 XT", "Arc A770 16GB", "Arc A770 8GB",
    "Arc A750 8GB", "Arc A580 8GB", "Arc A380 6GB"
],
    ram: [
    "G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5-7200 CL34",
    "G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5-6800 CL32",
    "G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5-6400 CL32",
    "G.Skill Trident Z5 Neo RGB 64GB (2x32GB) DDR5-6000 CL30",
    "Corsair Dominator Platinum RGB 64GB (2x32GB) DDR5-6600 CL32",
    "Corsair Vengeance RGB 64GB (2x32GB) DDR5-6400 CL32",
    "Corsair Vengeance RGB 64GB (2x32GB) DDR5-6000 CL30",
    "Kingston Fury Renegade 64GB (2x32GB) DDR5-7200 CL38",
    "Kingston Fury Beast 64GB (2x32GB) DDR5-6000 CL36",
    "Crucial Pro 64GB (2x32GB) DDR5-5600 CL46",
    "Teamgroup T-Force Delta RGB 64GB (2x32GB) DDR5-6400 CL40",
    "Teamgroup T-Force Vulcan 64GB (2x32GB) DDR5-6000 CL38",
    "G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5-7200 CL34",
    "G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5-6800 CL32",
    "G.Skill Trident Z5 Neo 32GB (2x16GB) DDR5-6400 CL32",
    "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR5-6600 CL32",
    "Corsair Vengeance 32GB (2x16GB) DDR5-6000 CL30",
    "Kingston Fury Renegade 32GB (2x16GB) DDR5-7200 CL38",
    "Kingston Fury Beast 32GB (2x16GB) DDR5-6000 CL36",
    "Crucial Pro 32GB (2x16GB) DDR5-5600 CL46",
    "Teamgroup T-Force Delta RGB 32GB (2x16GB) DDR5-6400 CL40",
    "Teamgroup T-Force Vulcan 32GB (2x16GB) DDR5-6000 CL38",
    "G.Skill Ripjaws S5 32GB (2x16GB) DDR5-5200 CL36",
    "G.Skill Ripjaws S5 32GB (2x16GB) DDR5-4800 CL40",
    "Corsair Vengeance 32GB (2x16GB) DDR5-5200 CL40",
    "Kingston Fury Beast 32GB (2x16GB) DDR5-5200 CL40",
    "Crucial RAM 32GB (2x16GB) DDR5-4800 CL40",
    "G.Skill Trident Z RGB 32GB (2x16GB) DDR4-4000 CL18",
    "G.Skill Trident Z Neo 32GB (2x16GB) DDR4-3600 CL16",
    "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR4-4000 CL18",
    "Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4-3600 CL16",
    "Kingston Fury Renegade 32GB (2x16GB) DDR4-4000 CL18",
    "Kingston Fury Beast 32GB (2x16GB) DDR4-3600 CL18",
    "Crucial Ballistix 32GB (2x16GB) DDR4-3600 CL16",
    "Teamgroup T-Force Delta RGB 32GB (2x16GB) DDR4-4000 CL18",
    "Teamgroup T-Force Vulcan Z 32GB (2x16GB) DDR4-3600 CL18",
    "G.Skill Trident Z RGB 16GB (2x8GB) DDR4-4000 CL18",
    "G.Skill Ripjaws V 16GB (2x8GB) DDR4-3600 CL16",
    "Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4-3600 CL18",
    "Kingston Fury Beast 16GB (2x8GB) DDR4-3600 CL18",
    "Crucial Ballistix 16GB (2x8GB) DDR4-3600 CL16",
    "Teamgroup T-Force Delta RGB 16GB (2x8GB) DDR4-4000 CL18",
    "Teamgroup T-Force Vulcan Z 16GB (2x8GB) DDR4-3200 CL16",
    "G.Skill Ripjaws V 16GB (2x8GB) DDR4-3200 CL16",
    "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200 CL16",
    "Kingston Fury Beast 16GB (2x8GB) DDR4-3200 CL16",
    "Crucial RAM 16GB (2x8GB) DDR4-3200 CL22",
    "Teamgroup Elite 16GB (2x8GB) DDR4-2666 CL19"
],
    psu: [
    "Corsair AX1600i 1600W Titanium",
    "EVGA SuperNOVA 1600 P+ Platinum",
    "Seasonic Prime TX-1600 Titanium",
    "Cooler Master V1600 Platinum",
    "ASUS ROG Thor 1200W Platinum",
    "Corsair HX1500i 1500W Platinum",
    "MSI MEG Ai1300P 1300W Platinum",
    "EVGA SuperNOVA 1300 GT Gold",
    "Seasonic Prime PX-1300 Platinum",
    "Thermaltake Toughpower GF3 1200W Gold",
    "ASUS ROG Loki SFX-L 1000W Platinum",
    "EVGA SuperNOVA 1000 P6 Platinum",
    "Seasonic Prime TX-1000 Titanium",
    "MSI MPG A1000G PCIe 5 Gold",
    "Cooler Master V1000 Platinum",
    "NZXT C1000 Gold",
    "Be Quiet! Dark Power 13 1000W Platinum",
    "Thermaltake Toughpower GF3 1000W Gold",
    "ASUS ROG Strix 850W Gold",
    "EVGA SuperNOVA 850 P5 Platinum",
    "Seasonic Focus GX-850 Gold",
    "MSI MPG A850G PCIe 5 Gold",
    "Cooler Master V850 SFX Gold",
    "NZXT C850 Gold",
    "Be Quiet! Straight Power 12 850W Platinum",
    "Thermaltake Toughpower GF1 850W Gold",
    "Corsair RM850x 850W Gold",
    "ASUS TUF Gaming 750W Gold",
    "EVGA SuperNOVA 750 GT Gold",
    "Seasonic Focus GX-750 Gold",
    "MSI MAG A750GL PCIe 5 Gold",
    "Cooler Master MWE 750W Gold V2",
    "NZXT C750 Gold",
    "Be Quiet! Pure Power 12 M 750W Gold",
    "Thermaltake Toughpower GX1 750W Gold",
    "Corsair RM750e 750W Gold",
    "ASUS ROG Strix 650W Gold",
    "EVGA 650 BQ Bronze",
    "Seasonic Focus GX-650 Gold",
    "MSI MAG A650BN Bronze",
    "Cooler Master MWE 650W Bronze V2",
    "NZXT C650 Gold",
    "Be Quiet! System Power 10 650W Bronze",
    "Thermaltake Smart BX1 650W Bronze",
    "Corsair CV650 Bronze",
    "ASUS TUF Gaming 550W Bronze",
    "EVGA 550 GT Gold",
    "Seasonic S12III 550W Bronze",
    "MSI MAG A550BN Bronze",
    "Cooler Master MWE 550W Bronze V2"
],
    storage: [
    "Samsung 990 PRO 2TB NVMe",
    "Samsung 990 PRO 1TB NVMe",
    "Samsung 980 PRO 2TB NVMe",
    "Samsung 980 PRO 1TB NVMe",
    "Samsung 970 EVO Plus 2TB NVMe",
    "Samsung 970 EVO Plus 1TB NVMe",
    "Samsung 970 PRO 1TB NVMe",
    "WD Black SN850X 2TB NVMe",
    "WD Black SN850X 1TB NVMe",
    "WD Black SN770 2TB NVMe",
    "WD Black SN770 1TB NVMe",
    "WD Black SN850 2TB NVMe",
    "WD Black SN850 1TB NVMe",
    "WD Blue SN580 2TB NVMe",
    "WD Blue SN580 1TB NVMe",
    "WD Blue SN570 1TB NVMe",
    "WD Blue SN550 1TB NVMe",
    "Crucial T700 2TB NVMe",
    "Crucial T700 1TB NVMe",
    "Crucial P5 Plus 2TB NVMe",
    "Crucial P5 Plus 1TB NVMe",
    "Crucial P3 Plus 2TB NVMe",
    "Crucial P3 Plus 1TB NVMe",
    "Seagate FireCuda 530 2TB NVMe",
    "Seagate FireCuda 530 1TB NVMe",
    "Seagate FireCuda 520 2TB NVMe",
    "Seagate FireCuda 520 1TB NVMe",
    "Kingston KC3000 2TB NVMe",
    "Kingston KC3000 1TB NVMe",
    "Kingston NV2 2TB NVMe",
    "Kingston NV2 1TB NVMe",
    "ADATA XPG Gammix S70 Blade 2TB NVMe",
    "ADATA XPG Gammix S70 Blade 1TB NVMe",
    "ADATA XPG SX8200 Pro 2TB NVMe",
    "ADATA XPG SX8200 Pro 1TB NVMe",
    "TeamGroup MP44 2TB NVMe",
    "TeamGroup MP44 1TB NVMe",
    "Lexar NM790 2TB NVMe",
    "Lexar NM790 1TB NVMe",
    "Samsung 870 EVO 4TB SATA SSD",
    "Samsung 870 EVO 2TB SATA SSD",
    "Samsung 870 EVO 1TB SATA SSD",
    "Crucial MX500 2TB SATA SSD",
    "Crucial MX500 1TB SATA SSD",
    "WD Blue 2TB SATA SSD",
    "WD Blue 1TB SATA SSD",
    "Seagate FireCuda 4TB SSHD",
    "Seagate Barracuda 8TB HDD",
    "WD Black 10TB HDD",
    "WD Red 14TB HDD"
],
motherboard: [
    "ASUS ROG Crosshair X670E Hero",
    "ASUS ROG Crosshair X670E Extreme",
    "ASUS ROG Strix X670E-F Gaming WiFi",
    "ASUS TUF Gaming X670E-Plus WiFi",
    "MSI MEG X670E Godlike",
    "MSI MEG X670E Ace",
    "MSI MPG X670E Carbon WiFi",
    "Gigabyte X670E AORUS Xtreme",
    "Gigabyte X670 AORUS Elite AX",
    "ASRock X670E Taichi",
    "ASRock X670E Steel Legend",
    "ASUS ROG Strix B650E-F Gaming WiFi",
    "ASUS TUF Gaming B650-Plus WiFi",
    "MSI MAG B650 Tomahawk WiFi",
    "MSI PRO B650-P WiFi",
    "Gigabyte B650 AORUS Elite AX",
    "ASRock B650E Taichi",
    "ASRock B650 PG Lightning",
    "ASUS ROG Crosshair VIII Dark Hero",
    "ASUS ROG Strix B550-F Gaming WiFi II",
    "ASUS TUF Gaming B550-Plus WiFi II",
    "MSI MPG B550 Gaming Edge WiFi",
    "Gigabyte B550 AORUS Master",
    "ASRock B550 Taichi",
    "ASRock B550 Phantom Gaming-ITX/AX",
    "ASUS ROG Maximus Z790 Hero",
    "ASUS ROG Maximus Z790 Extreme",
    "ASUS ROG Strix Z790-E Gaming WiFi",
    "ASUS ROG Strix Z790-F Gaming WiFi",
    "MSI MEG Z790 Godlike",
    "MSI MPG Z790 Carbon WiFi",
    "MSI MAG Z790 Tomahawk WiFi",
    "Gigabyte Z790 AORUS Master",
    "Gigabyte Z790 AORUS Elite AX",
    "ASRock Z790 Taichi Carrara",
    "ASUS ROG Strix Z690-E Gaming WiFi",
    "ASUS TUF Gaming Z690-Plus WiFi D4",
    "MSI MEG Z690 Unify-X",
    "MSI MPG Z690 Carbon WiFi",
    "Gigabyte Z690 AORUS Elite AX DDR4",
    "ASRock Z690 Taichi",
    "ASUS ROG Strix B760-F Gaming WiFi",
    "ASUS TUF Gaming B760-Plus WiFi",
    "MSI MAG B760 Tomahawk WiFi",
    "Gigabyte B760 AORUS Elite AX",
    "ASRock B760 Pro RS",
    "ASUS Prime H770-Plus D4",
    "MSI PRO H770-P WiFi",
    "Gigabyte H770 AORUS Elite AX",
    "ASRock H770 PG Lightning"
],
case: [
    "Lian Li O11 Dynamic EVO",
    "Lian Li O11 Dynamic XL",
    "Lian Li Lancool III",
    "Lian Li Lancool 216",
    "Lian Li PC-O11 Air",
    "Fractal Design North",
    "Fractal Design Torrent",
    "Fractal Design Torrent Compact",
    "Fractal Design Meshify 2",
    "Fractal Design Define 7",
    "Fractal Design Pop Air",
    "Fractal Design Define 7 Compact",
    "NZXT H9 Flow",
    "NZXT H9 Elite",
    "NZXT H7 Flow",
    "NZXT H7 Elite",
    "NZXT H5 Flow",
    "NZXT H5 Elite",
    "NZXT H510 Flow",
    "NZXT H510 Elite",
    "Corsair 5000D Airflow",
    "Corsair 4000D Airflow",
    "Corsair iCUE 5000X RGB",
    "Corsair iCUE 7000X RGB",
    "Corsair 275R Airflow",
    "Cooler Master HAF 700 EVO",
    "Cooler Master NR200P",
    "Cooler Master MasterBox TD500 Mesh",
    "Cooler Master H500M",
    "Cooler Master MasterBox NR600",
    "Phanteks Eclipse G500A",
    "Phanteks Eclipse P500A",
    "Phanteks Eclipse P400A",
    "Phanteks Enthoo Pro 2",
    "Phanteks Evolv X",
    "Thermaltake Tower 500",
    "Thermaltake Core P3 TG Pro",
    "Thermaltake Divider 500 TG Air",
    "Thermaltake View 51 TG ARGB",
    "Be Quiet! Pure Base 500DX",
    "Be Quiet! Silent Base 802",
    "Be Quiet! Dark Base 900",
    "Hyte Y60",
    "Hyte Y40",
    "SilverStone Alta F1",
    "SilverStone SUGO 14",
    "Antec DF700 Flux",
    "Antec NX800",
    "Montech Air 100 ARGB",
    "DeepCool CH560 Digital"
]
};

// ✅ Optimized function to populate dropdowns
function populateDropdowns() {
    Object.keys(pcParts).forEach((partType, index) => {
        setTimeout(() => { // ✅ Prevents page freezing for large lists
            const selectElement = document.getElementById(partType);
            if (selectElement) {
                selectElement.innerHTML = ""; // ✅ Clears old options

                // ✅ Create and add default "Select an option" choice
                let defaultOption = document.createElement("option");
                defaultOption.textContent = `Select ${partType.toUpperCase()}...`;
                defaultOption.disabled = true;
                defaultOption.selected = true;
                selectElement.appendChild(defaultOption);

                pcParts[partType].forEach(part => {
                    let option = document.createElement("option");
                    option.value = part;
                    option.textContent = part;
                    selectElement.appendChild(option);
                });
            }
        }, index * 50); // ✅ Adds a small delay for better performance
    });
}

// ✅ Ensures dropdowns are populated when the page loads
document.addEventListener("DOMContentLoaded", populateDropdowns);
    gpu: [
        "RTX 5090", "RTX 5080", "RTX 5070 Ti", "RTX 5070",  
        "RTX 4090", "RTX 4080 SUPER", "RTX 4080", "RTX 4070 Ti SUPER",
        "RTX 4070 Ti", "RTX 4070 SUPER", "RTX 4070", "RTX 4060 Ti 16GB",
        "RX 7900 XTX", "RX 7900 XT", "RX 7800 XT", "RX 7700 XT", 
        "RX 7600 XT", "RX 7600", "RX 6950 XT", "RX 6900 XT",
        "Arc A770 16GB", "Arc A770 8GB", "Arc A750 8GB", "Arc A580 8GB"
    ],
    ram: [
        "G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5-7200 CL34",
        "Corsair Dominator Platinum RGB 64GB (2x32GB) DDR5-6600 CL32",
        "Kingston Fury Renegade 64GB (2x32GB) DDR5-7200 CL38",
        "Crucial Pro 64GB (2x32GB) DDR5-5600 CL46",
        "Teamgroup T-Force Delta RGB 64GB (2x32GB) DDR5-6400 CL40"
    ],
    psu: [
        "Corsair AX1600i 1600W Titanium", "EVGA SuperNOVA 1600 P+ Platinum",
        "Seasonic Prime TX-1600 Titanium", "Cooler Master V1600 Platinum",
        "ASUS ROG Thor 1200W Platinum", "Corsair HX1500i 1500W Platinum"
    ],
    storage: [
        "Samsung 990 PRO 2TB NVMe", "Samsung 990 PRO 1TB NVMe",
        "Samsung 980 PRO 2TB NVMe", "Samsung 980 PRO 1TB NVMe",
        "WD Black SN850X 2TB NVMe", "WD Black SN850X 1TB NVMe"
    ],
    motherboard: [
        "ASUS ROG Crosshair X670E Hero", "ASUS ROG Crosshair X670E Extreme",
        "MSI MEG X670E Godlike", "MSI MEG X670E Ace",
        "Gigabyte X670E AORUS Xtreme", "ASRock X670E Taichi"
    ],
    case: [
        "Lian Li O11 Dynamic EVO", "Lian Li O11 Dynamic XL",
        "Fractal Design North", "Fractal Design Torrent",
        "NZXT H9 Flow", "NZXT H9 Elite", "NZXT H7 Flow"
    ]
};

// ✅ Optimized function to populate dropdowns
function populateDropdowns() {
    Object.keys(pcParts).forEach((partType, index) => {
        setTimeout(() => { // ✅ Prevents page freezing for large lists
            const selectElement = document.getElementById(partType);
            if (selectElement) {
                selectElement.innerHTML = ""; // ✅ Clears old options

                // ✅ Create and add default "Select an option" choice
                let defaultOption = document.createElement("option");
                defaultOption.textContent = `Select ${partType.toUpperCase()}...`;
                defaultOption.disabled = true;
                defaultOption.selected = true;
                selectElement.appendChild(defaultOption);

                pcParts[partType].forEach(part => {
                    let option = document.createElement("option");
                    option.value = part;
                    option.textContent = part;
                    selectElement.appendChild(option);
                });
            }
        }, index * 50); // ✅ Adds a small delay for better performance
    });
}

// ✅ Ensures dropdowns are populated when the page loads
document.addEventListener("DOMContentLoaded", populateDropdowns);