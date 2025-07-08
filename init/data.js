const Artists = [
    {
      "Name": "Alice Morgan",
      "specializations": ["2D Animation", "Motion Graphics"],
      "location": "New York, USA",
      "Rate": 60,
      "availabilityStatus": "available",
      "description": "Experienced animator with 5+ years in digital media."
    },
    {
      "Name": "John Carter",
      "specializations": ["3D Modeling", "Concept Art"],
      "location": "London, UK",
      "Rate": 80,
      "availabilityStatus": "busy",
      "description": "3D generalist focusing on character design."
    },
    {
      "Name": "Priya Mehta",
      "specializations": ["Storyboarding", "Illustration"],
      "location": "Mumbai, India",
      "Rate": 40,
      "availabilityStatus": "available",
      "description": "Storyboarding expert for animation studios."
    },
    {
      "Name": "Carlos Rivas",
      "specializations": ["2D Animation"],
      "location": "Barcelona, Spain",
      "Rate": 55,
      "availabilityStatus": "on_leave",
      "description": "Freelance animator with background in TV and film."
    },
    {
      "Name": "Linda Zhang",
      "specializations": ["Character Animation", "Visual Effects"],
      "location": "Shanghai, China",
      "Rate": 75,
      "availabilityStatus": "available",
      "description": "Expert in motion design and VFX."
    },
    {
      "Name": "Ethan Kim",
      "specializations": ["3D Animation"],
      "location": "Seoul, South Korea",
      "Rate": 65,
      "availabilityStatus": "busy",
      "description": "3D animator with a focus on short films and commercials."
    },
    {
      "Name": "Emma Wilson",
      "specializations": ["2D Animation", "Digital Painting"],
      "location": "Sydney, Australia",
      "Rate": 50,
      "availabilityStatus": "available",
      "description": "Passionate about traditional and digital animation."
    },
    {
      "Name": "Ahmed Khan",
      "specializations": ["Rigging", "3D Modeling"],
      "location": "Dubai, UAE",
      "Rate": 70,
      "availabilityStatus": "busy",
      "description": "Tech artist with rigging and 3D modeling expertise."
    },
    {
      "Name": "Sara Lemoine",
      "specializations": ["Visual Effects"],
      "location": "Paris, France",
      "Rate": 85,
      "availabilityStatus": "on_leave",
      "description": "VFX specialist with experience in AAA games."
    },
    {
      "Name": "Liam O'Connor",
      "specializations": ["Motion Graphics", "Compositing"],
      "location": "Dublin, Ireland",
      "Rate": 58,
      "availabilityStatus": "available",
      "description": "Freelancer for media agencies and studios."
    },
    {
      "Name": "Nina Petrova",
      "specializations": ["2D Animation", "Character Design"],
      "location": "Moscow, Russia",
      "Rate": 62,
      "availabilityStatus": "available",
      "description": "Character animator with creative storytelling skills."
    },
    {
      "Name": "Mohammed Al-Farsi",
      "specializations": ["3D Modeling", "Environment Design"],
      "location": "Muscat, Oman",
      "Rate": 66,
      "availabilityStatus": "busy",
      "description": "Creates immersive 3D environments for games."
    },
    {
      "Name": "Julia Santos",
      "specializations": ["Motion Graphics", "2D Animation"],
      "location": "Lisbon, Portugal",
      "Rate": 53,
      "availabilityStatus": "available",
      "description": "Motion graphics expert for corporate branding."
    },
    {
      "Name": "Tom Muller",
      "specializations": ["3D Animation", "Lighting"],
      "location": "Berlin, Germany",
      "Rate": 90,
      "availabilityStatus": "busy",
      "description": "Senior 3D animator with lighting expertise."
    },
    {
      "Name": "Ananya Roy",
      "specializations": ["Storyboarding", "2D Animation"],
      "location": "Kolkata, India",
      "Rate": 42,
      "availabilityStatus": "on_leave",
      "description": "Experienced in story-driven animation projects."
    },
    {
      "Name": "James Brown",
      "specializations": ["Concept Art", "Character Design"],
      "location": "Toronto, Canada",
      "Rate": 78,
      "availabilityStatus": "available",
      "description": "Creative artist with concept-to-final experience."
    },
    {
      "Name": "Mei Lin",
      "specializations": ["2D Animation", "Cel Animation"],
      "location": "Beijing, China",
      "Rate": 48,
      "availabilityStatus": "busy",
      "description": "Old-school animator mixing traditional and modern."
    },
    {
      "Name": "Noah Davis",
      "specializations": ["Motion Design", "Editing"],
      "location": "Los Angeles, USA",
      "Rate": 95,
      "availabilityStatus": "available",
      "description": "Works with Hollywood studios on commercials."
    },
    {
      "Name": "Isabella Romano",
      "specializations": ["3D Modeling", "Product Rendering"],
      "location": "Rome, Italy",
      "Rate": 68,
      "availabilityStatus": "available",
      "description": "Product and architecture visualizer."
    },
    {
      "Name": "Ali Hassan",
      "specializations": ["Animation", "UI Motion Design"],
      "location": "Cairo, Egypt",
      "Rate": 54,
      "availabilityStatus": "busy",
      "description": "UI/UX animator with tech startup experience."
    },
    {
      "Name": "Sophia Nguyen",
      "specializations": ["Explainer Videos", "Whiteboard Animation"],
      "location": "Hanoi, Vietnam",
      "Rate": 47,
      "availabilityStatus": "available",
      "description": "Specialist in corporate explainer animations."
    },
    {
      "Name": "Ivan Horvat",
      "specializations": ["3D Animation", "Rendering"],
      "location": "Zagreb, Croatia",
      "Rate": 71,
      "availabilityStatus": "on_leave",
      "description": "Senior 3D artist working in the film industry."
    },
    {
      "Name": "Yuki Tanaka",
      "specializations": ["Anime-style Animation", "2D Effects"],
      "location": "Tokyo, Japan",
      "Rate": 60,
      "availabilityStatus": "available",
      "description": "Expert in anime and game animation sequences."
    },
    {
      "Name": "Marcus Johansson",
      "specializations": ["Character Rigging", "3D Modeling"],
      "location": "Stockholm, Sweden",
      "Rate": 73,
      "availabilityStatus": "busy",
      "description": "Focused on rigging for game-ready assets."
    },
    {
      "Name": "Fatima Zahra",
      "specializations": ["Storyboard", "Visual Storytelling"],
      "location": "Casablanca, Morocco",
      "Rate": 52,
      "availabilityStatus": "available",
      "description": "Bringing narratives to life with visual flow."
    },
    {
      "Name": "Brian Smith",
      "specializations": ["Explainer Videos", "Typography"],
      "location": "Chicago, USA",
      "Rate": 58,
      "availabilityStatus": "available",
      "description": "Animated presentations for SaaS companies."
    },
    {
      "Name": "Luisa Delgado",
      "specializations": ["2D Illustration", "Animation"],
      "location": "Buenos Aires, Argentina",
      "Rate": 44,
      "availabilityStatus": "on_leave",
      "description": "Combines art with animation storytelling."
    },
    {
      "Name": "Kiran Patel",
      "specializations": ["Technical Animation", "3D VFX"],
      "location": "Ahmedabad, India",
      "Rate": 61,
      "availabilityStatus": "available",
      "description": "Animation engineer blending art with physics."
    },
    {
      "Name": "Helena Skov",
      "specializations": ["Motion Graphics", "3D Titles"],
      "location": "Copenhagen, Denmark",
      "Rate": 86,
      "availabilityStatus": "busy",
      "description": "TV title designer with 10+ years experience."
    },
    {
      "Name": "Rajesh Verma",
      "specializations": ["3D Animation", "VR Content"],
      "location": "Bangalore, India",
      "Rate": 67,
      "availabilityStatus": "available",
      "description": "Creating immersive VR experiences."
    }
  ]
  
  module.exports = { data: Artists };