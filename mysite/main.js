const hobbies = {
    "Skating": {
        image: "images/skating.jpg",
        description: "The thrill of landing a new trick.",
        details: `
            <p><strong>Why It’s Awesome:</strong><br>
            Skateboarding is a mix of skill, creativity, and persistence. It teaches balance, patience, and how to get back up after falling (a lot).</p>
            <p><strong>Tricks to Try:</strong><br>
            🏁 Beginner: Ollie, Shuvit<br>
            🏆 Intermediate: Kickflip, Heelflip<br>
            🎯 Advanced: Tre Flip, Hardflip</p>
            <p><strong>Skate Culture:</strong><br>
            Skateboarding is more than just tricks—it’s about style, self-expression, and community. Skateparks are like second homes for skaters, and competitions like the X Games showcase the best talent in the world.</p>
            <p><strong>Fun Fact:</strong> Skateboarding will be an official Olympic sport again in 2028!</p>
        `
    },
    "Gaming": {
        image: "images/gaming.jpg",
        description: "The best way to unwind and challenge myself.",
        details: `
            <p><strong>Why It’s Awesome:</strong><br>
            Gaming isn’t just a hobby—it’s a culture! Whether you love fast-paced shooters, open-world RPGs, or strategy games, there's something for everyone. Games help develop problem-solving skills, teamwork, and quick reflexes.</p>
            <p><strong>Popular Genres:</strong><br>
            🎯 FPS (First-Person Shooter): Call of Duty, Halo<br>
            🛡️ RPG (Role-Playing Game): The Witcher, Skyrim<br>
            ⚽ Sports: FIFA, NBA 2K<br>
            🏗️ Sandbox: Minecraft, Terraria</p>
            <p><strong>Fun Fact:</strong> The best-selling game of all time is Minecraft, with over 300 million copies sold!</p>
        `
    },
    "Coding": {
        image: "images/coding.jpg",
        description: "Turning ideas into reality with tech.",
        details: `
            <p><strong>Why It’s Awesome:</strong><br>
            Coding is like solving puzzles but with endless possibilities! Whether you're building websites, creating video games, or automating tasks, programming gives you the power to turn ideas into reality.</p>
            <p><strong>Getting Started:</strong><br>
            - Learn a beginner-friendly language like Python or JavaScript.<br>
            - Build small projects like a to-do list, a calculator, or a simple game.<br>
            - Practice on sites like LeetCode, CodeWars, or FreeCodeCamp.</p>
            <p><strong>Fun Fact:</strong> Did you know the first programmer was Ada Lovelace? She wrote the first algorithm for a theoretical computer in the 1800s!</p>
        `
    },
    "Singing": {
        image: "images/singing.jpg",
        description: "Expressing creativity through music.",
        details: `
            <p><strong>Why It’s Awesome:</strong><br>
            Singing isn’t just fun—it’s great for your mental health, breathing, and confidence. Whether you're performing on stage or just jamming in the shower, singing helps express emotions and connect with people.</p>
            <p><strong>How to Improve:</strong><br>
            🎶 Warm-ups: Start with vocal exercises to protect your voice.<br>
            🎙️ Breathing Control: Use deep breaths from your diaphragm.<br>
            🎵 Practice with Songs: Sing along with your favorite artists to improve tone and pitch.</p>
            <p><strong>Fun Fact:</strong> Your voice is completely unique—even identical twins have different vocal tones!</p>
        `
    },
    "Dancing": {
        image: "images/dancing.jpg",
        description: "Moving to the rhythm and having fun.",
        details: `
            <p><strong>Why It’s Awesome:</strong><br>
            Dancing is an art form, a workout, and a social activity all in one. Whether it’s hip-hop, ballroom, breakdancing, or freestyle, dancing improves rhythm, coordination, and confidence.</p>
            <p><strong>Popular Dance Styles:</strong><br>
            🎤 Hip-Hop: Freestyle moves, popping, and locking<br>
            💃 Salsa & Latin: High-energy, partnered dance<br>
            🔥 Breakdancing: Dynamic footwork and spins<br>
            🕺 Ballroom: Waltz, Tango, Foxtrot</p>
            <p><strong>Fun Fact:</strong> Dancing releases endorphins, which help boost your mood and reduce stress!</p>
        `
    },
    "Cars": {
        image: "images/cars.jpg",
        description: "The power and beauty of engineering.",
        details: `
            <p><strong>Why It’s Awesome:</strong><br>
            Cars are more than just transportation—they’re about speed, engineering, and design. Whether you love muscle cars, JDM tuners, or off-road beasts, there’s always something new to learn.</p>
            <p><strong>Car Categories:</strong><br>
            🚗 Sports Cars: Fast & stylish (Mustang, Supra)<br>
            🏎️ Supercars: High-performance machines (Ferrari, McLaren)<br>
            🛻 Trucks & Off-Roaders: Built for adventure (Jeep Wrangler, Ford Raptor)</p>
            <p><strong>Basic Car Maintenance Tips:</strong><br>
            🔧 Check oil levels regularly.<br>
            🔋 Keep your battery terminals clean.<br>
            🏎️ Maintain tire pressure for better fuel efficiency.</p>
            <p><strong>Fun Fact:</strong> The Bugatti Chiron is one of the fastest cars in the world, hitting 304 mph!</p>
        `
    }
};

function showHobby(hobbyName) {
    const hobby = hobbies[hobbyName];
    document.getElementById("hobby-title").textContent = hobbyName;
    document.getElementById("hobby-image").src = hobby.image;
    document.getElementById("hobby-image").alt = hobbyName;
    document.getElementById("hobby-description").textContent = hobby.description;
    document.getElementById("hobby-details").innerHTML = hobby.details;
}

function showRandomHobby() {
    const hobbyNames = Object.keys(hobbies);
    const randomHobby = hobbyNames[Math.floor(Math.random() * hobbyNames.length)];
    showHobby(randomHobby);
}

window.onload = showRandomHobby;
