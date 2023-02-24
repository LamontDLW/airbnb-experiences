import img1 from "./assets/card-hero-1.png"
import img2 from "./assets/card-hero-2.png"
import img3 from "./assets/card-hero-3.png"
import img4 from "./assets/card-hero-4.png"
import img5 from "./assets/card-hero-5.png"
import img6 from "./assets/card-hero-6.png"


export default [
    {
        id: 1,
        title: "Little Knows Spots In Toronto",
        description: "Now is the perfect time to discover the lesser-known hidden Toronto gems that might not get as much hype but are just as good.",
        price: 45,
        coverImg: img1,
        stats: {
            rating: 5.0,
            reviewCount: 603
        },
        location: "Toronto, ON",
        openSpots: 0,
    },
    {
        id: 2,
        title: "National Parks in the Big Apple",
        price: 105,
        coverImg: img2,
        stats: {
            rating: 4.3,
            reviewCount: 326
        },
        location: "Manhattan, NY",
        openSpots: 20,
    },
    {
        id: 3,
        title: "Chicago West Loop",
        price: 75,
        coverImg: img3,
        stats: {
            rating: 4.9,
            reviewCount: 221
        },
        location: "Chicago, IL",
        openSpots: 3,
    },

    {
        id: 4,
        title: "Taste of LA",
        price: 250,
        coverImg: img4,
        stats: {
            rating: 4.8,
            reviewCount: 2203
        },
        location: "Los Angeles, CA",
        openSpots: 0,
    },

    {
        id: 5,
        title: "Group Mountain Biking",
         price: 50,
        coverImg: img5,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    },

    {
        id: 6,
        title: "Hidden Wonders of Miami",
        price: 80,
        coverImg: img6,
        stats: {
            rating: 4.8,
            reviewCount: 24
        },
        location: "Miami, FL",
        openSpots: 3,
    },
]