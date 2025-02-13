const pcParts = {
    cpu: [
        "Intel Core i9-14900K",
        "Intel Core i7-14700K",
        "Intel Core i5-14600K",
        "AMD Ryzen 9 7950X",
        "AMD Ryzen 9 7900X",
        "AMD Ryzen 7 7800X3D",
        "AMD Ryzen 5 7600X"
    ],
    gpu: [
        "NVIDIA RTX 4090",
        "NVIDIA RTX 4080 Super",
        "NVIDIA RTX 4070 Ti",
        "NVIDIA RTX 4060 Ti",
        "AMD Radeon RX 7900 XTX",
        "AMD Radeon RX 7800 XT",
        "AMD Radeon RX 7600",
        "Intel Arc A770",
        "Intel Arc A750"
    ],
    ram: [
        "16GB DDR5 6000MHz (Corsair Vengeance)",
        "32GB DDR5 6400MHz (G.Skill Trident Z5)",
        "64GB DDR5 6600MHz (Kingston Fury Beast)",
        "16GB DDR4 3200MHz (Corsair Vengeance LPX)",
        "32GB DDR4 3600MHz (G.Skill Ripjaws V)"
    ],
    storage: [
        "Samsung 990 Pro 1TB NVMe SSD",
        "WD Black SN850X 2TB NVMe SSD",
        "Crucial P3 500GB NVMe SSD",
        "Seagate Barracuda 4TB HDD",
        "Samsung 870 EVO 1TB SATA SSD"
    ],
    motherboard: [
        "ASUS ROG Strix Z790-E Gaming (Intel)",
        "MSI MAG B650 Tomahawk (AMD)",
        "Gigabyte X670 AORUS Elite (AMD)",
        "ASRock B760 Pro (Intel)",
        "ASUS TUF Gaming X570-Plus (AMD)"
    ],
    psu: [
        "Corsair RM1000e 1000W 80+ Gold",
        "EVGA SuperNOVA 850W 80+ Gold",
        "Seasonic Focus GX-750 750W 80+ Gold",
        "Cooler Master MWE 650W 80+ Bronze"
    ],
    case: [
        "Lian Li O11 Dynamic Evo",
        "NZXT H7 Flow",
        "Fractal Design Meshify C",
        "Corsair 4000D Airflow",
        "Cooler Master HAF 700"
    ]
};

// Function to populate dropdowns
function populateDropdowns() {
    Object.keys(pcParts).forEach(partType => {
        const selectElement = document.getElementById(partType);
        if (selectElement) {
            pcParts[partType].forEach(part => {
                let option = document.createElement("option");
                option.value = part;
                option.textContent = part;
                selectElement.appendChild(option);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", populateDropdowns);
