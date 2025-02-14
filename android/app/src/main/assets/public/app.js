// Validate name input
function isValidName(name) {
    const trimmedName = name.trim();
    const nameRegex = /^[A-Za-z\s]+$/; // Allow only letters and spaces
    return nameRegex.test(trimmedName) && trimmedName.length >= 3;
}

// Convert name to binary using ASCII encoding
function nameToBinary(name) {
    if (!isValidName(name)) return null;
    return name
        .toUpperCase()
        .split("")
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(" ");
}

// Calculate compatibility percentage based on binary comparison
function calculateCompatibility(binary1, binary2) {
    const length = Math.min(binary1.length, binary2.length);
    let matches = 0;
    for (let i = 0; i < length; i++) {
        if (binary1[i] === binary2[i]) matches++;
    }
    return Math.round((matches / length) * 100);
}

// Determine the best platform for a post
function suggestPlatform(description) {
    const keywords = description.toLowerCase().split(" ");
    if (keywords.includes("video")) return "YouTube";
    if (keywords.includes("photo") || keywords.includes("image")) return "Instagram";
    if (keywords.includes("professional")) return "LinkedIn";
    if (keywords.includes("news")) return "Twitter";
    return "Facebook";
}

// Generate insights for different goals
function generateGoalInsights(goal, name1, name2, compatibility, description) {
    if (goal === "social_media_post") {
        const platform = suggestPlatform(description);
        return `
            <p><strong>Post Description:</strong> ${description}</p>
            <p><strong>Recommended Platform:</strong> ${platform}</p>
            <p>${platform} is the best platform based on your post's description and intent. Focus on engaging content that resonates with the platform's audience.</p>
        `;
    }

    if (goal === "self_discovery") {
        return `${name1}, your energy indicates growth potential. Reflect on your unique traits to achieve self-awareness.`;
    }

    if (goal === "relationship") {
        return `${name1} and ${name2} have a compatibility score of ${compatibility}%. This indicates a strong connection. Open communication is key to deepening your bond.`;
    }

    if (goal === "career") {
        return `${name1} and ${name2} share ${compatibility}% compatibility in a professional setting. Collaboration and respect will lead to success.`;
    }

    if (goal === "friendship") {
        return `${name1} and ${name2} have ${compatibility}% compatibility as friends. Shared interests will strengthen your connection.`;
    }

    if (goal === "team") {
        return `${name1} and ${name2} are ${compatibility}% compatible as team members. Complementary skills will drive teamwork.`;
    }

    return "No insights available.";
}

// Main function to generate insights
function generateInsights() {
    const goal = document.getElementById("goal").value;
    const outputDiv = document.getElementById("output");

    // Handle social media post case
    if (goal === "social_media_post") {
        const description = document.getElementById("postDescription").value.trim();
        if (!description) {
            outputDiv.innerHTML = "Please enter a description of your post.";
            return;
        }
        const insights = generateGoalInsights(goal, null, null, null, description);
        outputDiv.innerHTML = insights;
        return;
    }

    // Handle name-based goals
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (!isValidName(name1)) {
        outputDiv.innerHTML = "Invalid Name 1. Please enter a valid name.";
        return;
    }

    const binary1 = nameToBinary(name1);
    let binary2 = null;
    let compatibility = null;

    if (name2) {
        if (!isValidName(name2)) {
            outputDiv.innerHTML = "Invalid Name 2. Please enter a valid name.";
            return;
        }
        binary2 = nameToBinary(name2);
        compatibility = calculateCompatibility(binary1, binary2);
    }

    const insights = generateGoalInsights(goal, name1, name2, compatibility, null);
    let output = `<p><strong>${name1}:</strong> Binary Representation: ${binary1}</p>`;
    if (binary2) {
        output += `<p><strong>${name2}:</strong> Binary Representation: ${binary2}</p>`;
        output += `<p><strong>Compatibility Score:</strong> ${compatibility}%</p>`;
    }
    output += `<p><strong>Insights:</strong> ${insights}</p>`;
    outputDiv.innerHTML = output;
}

// Dynamically update form inputs
function updateForm() {
    const goal = document.getElementById("goal").value;
    const nameInputs = document.getElementById("nameInputs");
    const postInputs = document.getElementById("postInputs");

    if (goal === "social_media_post") {
        nameInputs.style.display = "none";
        postInputs.style.display = "block";
    } else {
        nameInputs.style.display = "block";
        postInputs.style.display = "none";
    }
}

// Reset the app
function resetApp() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("postDescription").value = "";
    document.getElementById("goal").value = "self_discovery";
    document.getElementById("output").innerHTML = "Insights: Insights will appear here based on your selection.";
    updateForm();
}function isValidName(name) {
    const trimmedName = name.trim();
    const nameRegex = /^[A-Za-z\s]+$/; // Allow only letters and spaces
    return nameRegex.test(trimmedName) && trimmedName.length >= 3;
}

function nameToBinary(name) {
    if (!isValidName(name)) return null;
    return name
        .toUpperCase()
        .split("")
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(" ");
}

function calculateCompatibility(binary1, binary2) {
    const length = Math.min(binary1.length, binary2.length);
    let matches = 0;
    for (let i = 0; i < length; i++) {
        if (binary1[i] === binary2[i]) matches++;
    }
    return Math.round((matches / length) * 100);
}

function suggestPlatform(description) {
    const keywords = description.toLowerCase().split(" ");
    if (keywords.includes("video")) return "YouTube";
    if (keywords.includes("photo") || keywords.includes("image")) return "Instagram";
    if (keywords.includes("professional")) return "LinkedIn";
    if (keywords.includes("news")) return "Twitter";
    return "Facebook";
}

function generateGoalInsights(goal, name1, name2, compatibility, description) {
    if (goal === "social_media_post") {
        const platform = suggestPlatform(description);
        return `
            <p><strong>Post Description:</strong> ${description}</p>
            <p><strong>Recommended Platform:</strong> ${platform}</p>
            <p>${platform} is ideal for your content. Focus on matching your tone to its audience.</p>
        `;
    }

    if (goal === "self_discovery") {
        return `${name1}, embrace self-discovery by exploring your unique traits.`;
    }

    if (goal === "relationship") {
        return `${name1} and ${name2} are ${compatibility}% compatible. Communication will enhance your bond.`;
    }

    return "Insights unavailable.";
}

function generateInsights() {
    const goal = document.getElementById("goal").value;
    const outputDiv = document.getElementById("output");

    if (goal === "social_media_post") {
        const description = document.getElementById("postDescription").value.trim();
        if (!description) {
            outputDiv.innerHTML = "Please provide a post description.";
            return;
        }
        outputDiv.innerHTML = generateGoalInsights(goal, null, null, null, description);
        return;
    }

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (!isValidName(name1)) {
        outputDiv.innerHTML = "Invalid Name 1.";
        return;
    }

    const binary1 = nameToBinary(name1);
    let compatibility = null;

    if (name2) {
        const binary2 = nameToBinary(name2);
        compatibility = calculateCompatibility(binary1, binary2);
    }

    outputDiv.innerHTML = generateGoalInsights(goal, name1, name2, compatibility, null);
}

function updateForm() {
    const goal = document.getElementById("goal").value;
    document.getElementById("nameInputs").style.display = goal === "social_media_post" ? "none" : "block";
    document.getElementById("postInputs").style.display = goal === "social_media_post" ? "block" : "none";
}function generateEnhancedInsights(goal, name1, name2, compatibility) {
    const traits = calculateTraits(name1, name2); // Dynamically calculate key traits
    const auraColor = determineAuraColor(compatibility);
    const outfitSuggestion = suggestOutfitColor(auraColor);

    let insights = `<p><strong>Aura Color:</strong> ${auraColor}</p>`;
    insights += `<p><strong>Outfit Suggestion:</strong> ${outfitSuggestion}</p>`;
    insights += `<p><strong>Key Traits:</strong> ${traits}</p>`;

    switch (goal) {
        case "relationship":
            insights += `
                <p>${name1} and ${name2} have a compatibility score of ${compatibility}%. ${
                compatibility >= 80
                    ? "This suggests a strong connection and alignment of values."
                    : compatibility >= 50
                    ? "Some effort will be needed to align your energies and foster a deeper connection."
                    : "Significant differences may pose challenges, but communication can bridge gaps."
            }</p>
                <p>Consider planning a date in a place that aligns with your shared interests. Wearing ${outfitSuggestion} will help foster a positive vibe.</p>`;
            break;

        case "career":
            insights += `
                <p>${name1} and ${name2} have ${compatibility}% compatibility in a professional setting. ${
                compatibility >= 80
                    ? "You are highly aligned for collaboration, with potential for innovation and growth."
                    : compatibility >= 50
                    ? "Aligning your strategies and clarifying roles will enhance collaboration."
                    : "Your energies differ significantly; focus on shared goals to succeed."
            }</p>
                <p>Wear ${outfitSuggestion} for confidence and focus in meetings. Leveraging your strengths (${traits}) can boost professional outcomes.</p>`;
            break;

        case "friendship":
            insights += `
                <p>${name1} and ${name2} share a compatibility score of ${compatibility}%. ${
                compatibility >= 80
                    ? "This indicates a strong potential for a deep and lasting friendship."
                    : compatibility >= 50
                    ? "Shared activities can strengthen your bond."
                    : "Differences in energy may require more effort to connect."
            }</p>
                <p>Plan an activity that encourages mutual interests. Wearing ${outfitSuggestion} can enhance your connection.</p>`;
            break;

        case "team":
            insights += `
                <p>As teammates, ${name1} and ${name2} show ${compatibility}% compatibility. ${
                compatibility >= 80
                    ? "Your complementary skills create a dynamic team."
                    : compatibility >= 50
                    ? "Clear communication and role alignment will enhance team collaboration."
                    : "Diverging perspectives may require effort to synchronize."
            }</p>
                <p>Wear ${outfitSuggestion} to promote focus and team synergy. Focus on mutual goals and shared responsibilities.</p>`;
            break;

        case "self_discovery":
            insights += `
                <p>${name1}, your binary alignment suggests a journey of personal growth. Explore your traits (${traits}) to unlock potential.</p>
                <p>Engage in reflective practices like journaling or meditation while wearing ${outfitSuggestion} for a calming effect.</p>`;
            break;

        case "reflection":
            insights += `
                <p>${name1}, this is a time to reflect on your energy patterns. ${
                name2 ? `${name2} acts as a mirror for your growth journey.` : ""
            }</p>
                <p>Understanding your traits (${traits}) and wearing ${outfitSuggestion} can aid in finding clarity.</p>`;
            break;

        default:
            insights += `<p>${name1}, explore this connection further for deeper insights. Experiment with colors that resonate with your mood and goals.</p>`;
            break;
    }

    return insights;
}function determineAuraColor(compatibility) {
    const colorPalettes = [
        { hex: "#4eccc6", description: "Calm and trust" },
        { hex: "#96bd62", description: "Inspiration and creativity" },
        { hex: "#e1f4c1", description: "Growth and positivity" },
        { hex: "#ddc1be", description: "Balance and warmth" },
        { hex: "#b31d94", description: "Confidence and passion" },
        // Add more colors dynamically...
    ];

    const index = compatibility % colorPalettes.length;
    return `${colorPalettes[index].hex} (${colorPalettes[index].description})`;
}

function suggestOutfitColor(auraColor) {
    if (auraColor.includes("Calm")) return "shades of blue or teal";
    if (auraColor.includes("Inspiration")) return "earth tones like green or brown";
    if (auraColor.includes("Passion")) return "bold colors like red or purple";
    return "neutral tones for balance";
}// Function to convert name to binary
function nameToBinary(name) {
    return name
        .toUpperCase()
        .split("")
        .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
}

// Function to calculate compatibility based on binary match
function calculateCompatibility(binary1, binary2) {
    const length = Math.min(binary1.length, binary2.length);
    let matches = 0;

    for (let i = 0; i < length; i++) {
        if (binary1[i] === binary2[i]) matches++;
    }

    return Math.round((matches / length) * 100);
}

// Generate color palettes based on binary patterns
function generateColorPalette(binary) {
    const binaryChunks = binary.match(/.{1,8}/g) || [];
    return binaryChunks.map(chunk => {
        const hexValue = "#" + parseInt(chunk, 2).toString(16).padStart(6, "0").slice(0, 6);
        return {
            hex: hexValue,
            description: `Dynamic Color (${hexValue}) - Unique and vibrant.`,
        };
    });
}

// Determine traits based on binary patterns
function getTraitsFromBinary(binary) {
    const traitsList = [
        "Ambitious",
        "Creative",
        "Resilient",
        "Empathetic",
        "Confident",
        "Analytical",
        "Charismatic",
        "Optimistic",
        "Introspective",
        "Practical",
    ];
    const binaryChunks = binary.match(/.{1,8}/g) || [];
    return binaryChunks
        .map(chunk => traitsList[parseInt(chunk, 2) % traitsList.length])
        .filter((value, index, self) => self.indexOf(value) === index)
        .join(", ");
}

// Generate insights based on goal and binary data
function generateEnhancedInsights(goal, name1, name2, binary1, binary2, compatibility) {
    const colors = generateColorPalette(binary1);
    const traits1 = getTraitsFromBinary(binary1);
    const traits2 = binary2 ? getTraitsFromBinary(binary2) : null;

    let insights = `<p><strong>Binary Representation:</strong></p>`;
    insights += `<p>${name1}: ${binary1}</p>`;
    if (binary2) insights += `<p>${name2}: ${binary2}</p>`;

    insights += `<p><strong>Compatibility Score:</strong> ${compatibility}%</p>`;
    insights += `<p><strong>Colors:</strong> ${colors.map(c => c.hex).join(", ")}</p>`;
    insights += `<p><strong>Traits:</strong> ${name1} (${traits1}) ${
        traits2 ? `, ${name2} (${traits2})` : ""
    }</p>`;

    switch (goal) {
        case "relationship":
            insights += `<p>In a relationship, focus on shared traits like ${traits1}. The colors ${
                colors[0].hex
            } and ${colors[1].hex} can enhance emotional connection.</p>`;
            break;

        case "career":
            insights += `<p>Professional compatibility shows alignment in traits such as ${traits1}. Use colors ${
                colors[0].hex
            } for confidence during presentations.</p>`;
            break;

        case "social_media_post":
            const platform = suggestPlatformFromBinary(binary1);
            insights += `<p>Based on your binary energy, the best platform for your post is ${platform}. Focus on ${
                platform === "Instagram" ? "visual storytelling" : "clear, concise messaging"
            }.</p>`;
            break;

        default:
            insights += `<p>Explore your journey of growth using the traits ${traits1} and colors ${
                colors[0].hex
            } and ${colors[1].hex}.</p>`;
            break;
    }

    return insights;
}

// Suggest a social media platform based on binary patterns
function suggestPlatformFromBinary(binary) {
    const keywords = [
        { key: "01001001", platform: "Instagram" },
        { key: "01010100", platform: "TikTok" },
        { key: "01001100", platform: "LinkedIn" },
        { key: "01000110", platform: "Facebook" },
    ];
    for (const keyword of keywords) {
        if (binary.includes(keyword.key)) return keyword.platform;
    }
    return "Twitter";
}

// Main function to generate and display insights
function generateInsights() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const goal = document.getElementById("goal").value;
    const outputDiv = document.getElementById("output");

    if (!name1) {
        outputDiv.innerHTML = "Please enter a valid name for Name 1.";
        return;
    }

    const binary1 = nameToBinary(name1);
    const binary2 = name2 ? nameToBinary(name2) : null;
    const compatibility = binary2 ? calculateCompatibility(binary1, binary2) : null;

    const insights = generateEnhancedInsights(goal, name1, name2, binary1, binary2, compatibility);
    outputDiv.innerHTML = insights;
}