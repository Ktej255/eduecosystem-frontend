export const SPACE_TECH_CONTENT = {
    title: "Space Technology",
    description: "Launch Vehicles, Orbit Mechanics, and ISRO's Roadmap.",
    sections: [
        {
            id: 'orbits',
            title: "Types of Orbits",
            content: `
### 1. Low Earth Orbit (LEO)
- **Altitude**: 160 km to 2,000 km.
- **Use**: Remote Sensing, Spy Satellites, ISS (400 km).
- **Speed**: ~7.8 km/s (Period: ~90 mins).

### 2. Geostationary Orbit (GEO)
- **Altitude**: ~35,786 km above the equator.
- **Feature**: Period matches Earth's rotation (24 hrs). Satellite appears 'stationary' from ground.
- **Use**: Communication, Broadcasting.

### 3. Medium Earth Orbit (MEO)
- **Altitude**: Between LEO and GEO (~20,000 km).
- **Use**: GPS, GLONASS, Galileo (Navigation Satellites).
            `
        },
        {
            id: 'launch-vehicles',
            title: "Launch Vehicles",
            content: `
### PSLV (Polar Satellite Launch Vehicle)
- **Workhorse of ISRO**.
- **Stages**: 4 Stages (Solid-Liquid-Solid-Liquid).
- **Capacity**: ~1,750 kg to Sun-Synchronous Orbit (SSO).
- **Missions**: Chandrayaan-1, Mars Orbiter Mission (MOM).

### GSLV Mk III (LVM3)
- **Heavy Lift Vehicle**.
- **Stages**: 3 Stages (Solid Boosters, Liquid Core, Cryogenic Upper).
- **Capacity**: ~4,000 kg to GTO, ~8,000 kg to LEO.
- **Missions**: Chandrayaan-3, Gaganyaan (Human Rated).
            `
        },
        {
            id: 'isro-missions',
            title: "Major ISRO Missions",
            content: `
### Aditya L1 (Solar Mission)
- **Destination**: Lagrange Point 1 (L1) - 1.5 million km from Earth.
- **Goal**: Observe Solar Corona, Chromosphere, and Photosphere.

### Gaganyaan
- **Goal**: Human Spaceflight Programme.
- **Crew**: 3 members to LEO for 3 days.
- **Tech**: Human Rated LVM3, Crew Escape System (CES).

### Chandrayaan-3
- **Achievement**: Soft landing near Lunar South Pole.
- **Payloads**: Vikram Lander (ChaSTE, RAMBHA), Pragyan Rover (LIBS, APXS).
            `
        }
    ]
};
