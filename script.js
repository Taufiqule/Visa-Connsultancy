function goToPage(page) {
    window.location.href = page + '.html';
}

const universities = [

{
    id: 1,
    name: "Harvard University",
    country: "USA",
    rating: 4.9,
    fees: "50000",
    scholarship: "Up to 80% scholarship available",
    intake: "Fall & Spring",
    course: "Computer Science",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    details: "Top ranked university with excellent research facilities.",
    img: "🏛️"
},

{
    id: 2,
    name: "University of Oxford",
    country: "UK",
    rating: 4.8,
    fees: "35000",
    scholarship: "Merit scholarships available",
    intake: "September",
    course: "Engineering",
    image: "download.jpeg",
    details: "One of the oldest universities in the world.",
    img: "🎓"
},
{
    id: 3,
    name: "University of Toronto",
    country: "Canada",
    rating: 4.7,
    fees: "45000",
    scholarship: "International entrance scholarships",
    intake: "January & September",
    course: "Business",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    details: "Famous Canadian university for international students.",
    img: "📚"
},

{
    id: 4,
    name: "University of Melbourne",
    country: "Australia",
    rating: 4.6,
    fees: "42000",
    scholarship: "Research scholarships available",
    intake: "February & July",
    course: "Medical Science",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
    details: "Top Australian university with modern campus.",
    img: "🏫"
},

{
    id: 5,
    name: "ETH Zurich",
    country: "Switzerland",
    rating: 4.9,
    fees: "1500",
    scholarship: "Swiss Government Excellence Scholarship",
    intake: "September",
    course: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    details: "Leading technology and science university.",
    img: "🔬"
},
{
    id: 6,
    name: "Stanford University",
    country: "USA",
    rating: 4.8,
    fees: "55000",
    scholarship: "Need based scholarships",
    intake: "Fall",
    course: "Software Engineering",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200&auto=format&fit=crop",
    details: "Famous for innovation and Silicon Valley connection.",
    img: "💻"
},

{
    id: 7,
    name: "University of Tokyo",
    country: "Japan",
    rating: 4.7,
    fees: "12000",
    scholarship: "MEXT Scholarship",
    intake: "April",
    course: "Robotics",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop",
    details: "Japan's leading research university.",
    img: "🇯🇵"
},

{
    id: 8,
    name: "National University of Singapore",
    country: "Singapore",
    rating: 4.8,
    fees: "38000",
    scholarship: "ASEAN scholarships",
    intake: "August",
    course: "Cyber Security",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    details: "Best university in Asia region.",
    img: "🌏"
},

{
    id: 9,
    name: "Technical University of Munich",
    country: "Germany",
    rating: 4.7,
    fees: "3000",
    scholarship: "DAAD Scholarships",
    intake: "Winter Semester",
    course: "Mechanical Engineering",
    image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1200&auto=format&fit=crop",
    details: "Excellent engineering and technology programs.",
    img: "🇩🇪"
},

{
    id: 10,
    name: "Sorbonne University",
    country: "France",
    rating: 4.6,
    fees: "2770",
    scholarship: "Eiffel Scholarship",
    intake: "September",
    course: "Humanities",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    details: "Historic university in Paris.",
    img: "🇫🇷"
},

{
    id: 11,
    name: "Seoul National University",
    country: "South Korea",
    rating: 4.7,
    fees: "6000",
    scholarship: "Global Korea Scholarship",
    intake: "Spring & Fall",
    course: "Electronics Engineering",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1200&auto=format&fit=crop",
    details: "South Korea's top university.",
    img: "🇰🇷"
},

{
    id: 12,
    name: "University of Amsterdam",
    country: "Netherlands",
    rating: 4.6,
    fees: "12000",
    scholarship: "Amsterdam Merit Scholarship",
    intake: "September",
    course: "Data Science",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200&auto=format&fit=crop",
    details: "Popular among international students.",
    img: "🇳🇱"
},

{
    id: 13,
    name: "Tsinghua University",
    country: "China",
    rating: 4.8,
    fees: "30000",
    scholarship: "Chinese Government Scholarship",
    intake: "September",
    course: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
    details: "China's leading technology university.",
    img: "🇨🇳"
},

{
    id: 14,
    name: "University of Auckland",
    country: "New Zealand",
    rating: 4.5,
    fees: "32000",
    scholarship: "International Student Excellence Scholarship",
    intake: "February",
    course: "Architecture",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    details: "Top university in New Zealand.",
    img: "🇳🇿"
},

{
    id: 15,
    name: "University of Copenhagen",
    country: "Denmark",
    rating: 4.6,
    fees: "10000",
    scholarship: "Danish Government Scholarship",
    intake: "September",
    course: "Biotechnology",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    details: "Excellent European research university.",
    img: "🇩🇰"
}


];

const countries = [

{
    name: "USA",
    visaType: "F1 Student Visa",
    processingTime: "3-6 Months",
    scholarship: "Many fully funded scholarships available",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop",
    details: "World's top universities and research opportunities.",
    img: "🇺🇸"
},

{
    name: "UK",
    visaType: "Tier 4 Visa",
    processingTime: "3-6 Weeks",
    scholarship: "Chevening Scholarship",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    details: "Famous for globally ranked universities.",
    img: "🇬🇧"
},
{
    name: "Canada",
    visaType: "Study Permit",
    processingTime: "4-8 Weeks",
    scholarship: "Government scholarships available",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56cd42d?q=80&w=1200&auto=format&fit=crop",
    details: "Best destination for PR opportunities.",
    img: "🇨🇦"
},

{
    name: "Australia",
    visaType: "Subclass 500",
    processingTime: "1-3 Months",
    scholarship: "International merit scholarships",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
    details: "Top universities and work opportunities.",
    img: "🇦🇺"
},

{
    name: "Germany",
    visaType: "Student Visa",
    processingTime: "6-12 Weeks",
    scholarship: "DAAD Scholarship",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
    details: "Low tuition fees and excellent engineering education.",
    img: "🇩🇪"
},

{
    name: "Japan",
    visaType: "Student Visa",
    processingTime: "2-4 Weeks",
    scholarship: "MEXT Scholarship",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    details: "Advanced technology and innovation.",
    img: "🇯🇵"
},

{
    name: "Switzerland",
    visaType: "Student Visa",
    processingTime: "6-12 Weeks",
    scholarship: "Swiss Government Scholarship",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    details: "High quality education and research.",
    img: "🇨🇭"
},

{
    name: "Singapore",
    visaType: "Student Pass",
    processingTime: "2-6 Weeks",
    scholarship: "ASEAN Scholarships",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
    details: "Top Asian universities and global education.",
    img: "🇸🇬"
},

{
    name: "France",
    visaType: "Student Visa",
    processingTime: "2-6 Weeks",
    scholarship: "Eiffel Scholarship",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    details: "Affordable education and rich culture.",
    img: "🇫🇷"
},

{
    name: "South Korea",
    visaType: "D-2 Student Visa",
    processingTime: "2-4 Weeks",
    scholarship: "Global Korea Scholarship",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1200&auto=format&fit=crop",
    details: "Modern technology and quality education.",
    img: "🇰🇷"
},

{
    name: "Netherlands",
    visaType: "MVV Student Visa",
    processingTime: "2-8 Weeks",
    scholarship: "Orange Tulip Scholarship",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200&auto=format&fit=crop",
    details: "Popular for English-taught programs.",
    img: "🇳🇱"
},

{
    name: "China",
    visaType: "X1 Student Visa",
    processingTime: "1-3 Weeks",
    scholarship: "Chinese Government Scholarship",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
    details: "Affordable and globally growing education system.",
    img: "🇨🇳"
},

{
    name: "Denmark",
    visaType: "Residence Permit",
    processingTime: "2 Months",
    scholarship: "Danish Government Scholarship",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1200&auto=format&fit=crop",
    details: "High quality European education.",
    img: "🇩🇰"
},

{
    name: "Portugal",
    visaType: "Student Visa",
    processingTime: "1-4 Weeks",
    scholarship: "University Scholarships",
    image: "https://images.unsplash.com/photo-1513735492246-483525079686?q=80&w=1200&auto=format&fit=crop",
    details: "Affordable education and beautiful environment.",
    img: "🇵🇹"
},

{
    name: "Hungary",
    visaType: "Student Visa",
    processingTime: "1-3 Weeks",
    scholarship: "Stipendium Hungaricum Scholarship",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200&auto=format&fit=crop",
    details: "Popular low-cost European study destination.",
    img: "🇭🇺"
}


];

function searchUniversities() {

    const searchTerm =
        document.getElementById('uniSearch')?.value.toLowerCase() || '';

    const countryValue =
        document.getElementById('countryFilter')?.value || '';

    const ratingValue =
        document.getElementById('ratingFilter')?.value || '';

    const feesValue =
        document.getElementById('feesFilter')?.value || '';

    const filtered = universities.filter(uni => {

        return (

            (
                uni.name.toLowerCase().includes(searchTerm)
                ||
                uni.country.toLowerCase().includes(searchTerm)
            )

            &&

            (
                countryValue === ''
                ||
                uni.country === countryValue
            )

            &&

            (
                ratingValue === ''
                ||
                uni.rating >= parseFloat(ratingValue)
            )

            &&

            (
                feesValue === ''
                ||
                parseInt(uni.fees) <= parseInt(feesValue)
            )

        );

    });

    displayUniversities(filtered);
}

function searchCountries() {

    const value =
        document.getElementById('countrySearch')?.value.toLowerCase() || '';

    const filtered = countries.filter(c =>
        c.name.toLowerCase().includes(value)
    );

    displayCountries(filtered);
}

function displayUniversities(unis) {

    const container =
        document.getElementById('uniResults');

    const resultCount =
        document.getElementById('resultCount');

    if (!container) return;

    container.innerHTML = '';

    if (resultCount) {

        resultCount.innerHTML =
            `Found ${unis.length} Universities`;
    }

    if (unis.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h2>No Universities Found</h2>

                <p>Try changing your filters</p>

            </div>

        `;

        return;
    }

    unis.forEach(uni => {

        const card =
            document.createElement('div');

        card.className =
            'result-card card';

        card.innerHTML = `

            <img
                src="${uni.image}"
                alt="${uni.name}"
            >

            <div class="result-badge">
                ⭐ ${uni.rating}
            </div>

            <div class="result-card-content">

                <h3>
                    ${uni.img} ${uni.name}
                </h3>

                <p>
                    <strong>Country:</strong>
                    ${uni.country}
                </p>

                <p>
                    <strong>Course:</strong>
                    ${uni.course}
                </p>

                <p>
                    <strong>Fees:</strong>
                    $${uni.fees}
                </p>

                <p>
                    <strong>Scholarship:</strong>
                    ${uni.scholarship}
                </p>

                <p>
                    <strong>Intake:</strong>
                    ${uni.intake}
                </p>

                <p>
                    ${uni.details}
                </p>

                <button
                    class="btn btn-primary"
                    onclick="goToPage('chat')"
                >
                    Apply Consultation
                </button>

            </div>

        `;

        container.appendChild(card);

    });
}

function displayCountries(list) {

    const container =
        document.getElementById('countryResults');

    if (!container) return;

    container.innerHTML = '';

    list.forEach(country => {

        const card =
            document.createElement('div');

        card.className =
            'result-card card';

        card.innerHTML = `

            <img
                src="${country.image}"
                style="width:100%;height:220px;object-fit:cover;"
            >

            <div class="result-card-content">

                <h3>
                    ${country.img} ${country.name}
                </h3>

                <p>
                    <strong>Visa:</strong>
                    ${country.visaType}
                </p>

                <p>
                    <strong>Processing:</strong>
                    ${country.processingTime}
                </p>

                <p>
                    <strong>Scholarship:</strong>
                    ${country.scholarship}
                </p>

                <p>
                    ${country.details}
                </p>

                <button
                    class="btn btn-primary"
                    onclick="goToPage('chat')"
                >
                    Get Consultation
                </button>

            </div>

        `;

        container.appendChild(card);

    });
}



function sendMessage() {

    const input = document.getElementById('chatInput');

    if (!input) return;

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, 'user');

    input.value = '';

    setTimeout(() => {

        const responses = [

            "Great choice! We can help you with university admission and visa processing.",

            "Which country are you interested in for studying abroad?",

            "Do you need scholarship information or visa guidance?",

            "Our consultants can help you with IELTS, admission, and visa support.",

            "Please tell me your preferred subject or university.",

            "We have excellent success rates for USA, UK, Canada, and Australia visas."

        ];

        const response =
            responses[Math.floor(Math.random() * responses.length)];

        addMessage(response, 'bot');

    }, 800);
}

function addMessage(text, sender) {

    const messages = document.getElementById('chatMessages');

    if (!messages) return;

    const messageDiv = document.createElement('div');

    messageDiv.className = `message ${sender}`;

    messageDiv.innerHTML = `
        <strong>${sender === 'user' ? 'You' : 'Visa Expert'}:</strong> ${text}
    `;

    messages.appendChild(messageDiv);

    messages.scrollTop = messages.scrollHeight;
}



document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('countryResults')) {
        displayCountries(countries);
    }

    const countrySearch =
        document.getElementById('countrySearch');

    if (countrySearch) {
        countrySearch.addEventListener('input', searchCountries);
    }

    if (document.getElementById('uniResults')) {
        displayUniversities(universities);
    }

    const uniSearch =
        document.getElementById('uniSearch');

    const countryFilter =
        document.getElementById('countryFilter');

    const ratingFilter =
        document.getElementById('ratingFilter');

    const feesFilter =
        document.getElementById('feesFilter');

    if (uniSearch) {
        uniSearch.addEventListener('input', searchUniversities);
    }

    if (countryFilter) {
        countryFilter.addEventListener('change', searchUniversities);
    }

    if (ratingFilter) {
        ratingFilter.addEventListener('change', searchUniversities);
    }

    if (feesFilter) {
        feesFilter.addEventListener('change', searchUniversities);
    }

});