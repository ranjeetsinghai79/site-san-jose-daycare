import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "San Jose Daycare 中文幼儿园",
    tagline: "Nurturing Young Minds Daily",
    phone: "(408) 318-8811",
    phoneHref: "tel:+14083188811",
    email: "info@sanjosedaycare.com",
    address: "4029 Payne Ave, San Jose, CA 95117, USA",
    city: "San Jose",
    serviceAreas: ["San Jose", "Santa Clara", "Campbell", "Cupertino", "Saratoga"],
    license: "CA State Licensed #430709384",
    since: "2005",
    google_rating: "4.9",
    review_count: "150",
    emergency: false,
    theme: "navy",
    niche: "daycare",
  },

  services: [
    { icon: "heart", title: "Infant Care", desc: "Gentle, attentive care for your baby's first crucial months.", urgent: false },
    { icon: "sparkles", title: "Toddler Program", desc: "Engaging activities to foster curiosity and early development.", urgent: false },
    { icon: "home", title: "Pre-K Curriculum", desc: "Preparing children for kindergarten with a comprehensive learning plan.", urgent: false },
    { icon: "clock", title: "After-School Care", desc: "Safe and stimulating environment for school-aged children.", urgent: false },
    { icon: "sun", title: "Summer Camp", desc: "Fun-filled themed weeks with educational and recreational activities.", urgent: false },
    { icon: "briefcase", title: "Drop-In Care", desc: "Flexible care options for your occasional needs.", urgent: false }
  ],

  testimonials: [
    { name: "Emily R.", location: "San Jose, CA", stars: 5, text: "San Jose Daycare has been a blessing for our family. Our daughter, Lily, started in the Toddler Program last year, and she absolutely loves it. The teachers are incredibly warm and attentive, and we've seen such a positive change in her social skills and language development. Worth every penny!" },
    { name: "David L.", location: "Santa Clara, CA", stars: 5, text: "We enrolled our son in the Pre-K Curriculum, and he's thriving! The bilingual environment is fantastic, and he's picking up Mandarin so quickly. The staff kept us informed about his progress, and we felt completely confident in their care. Highly recommend for any parent looking for quality education." },
    { name: "Sarah K.", location: "Campbell, CA", stars: 5, text: "Finding reliable infant care was a huge stress, but San Jose Daycare exceeded all our expectations. Our baby, Noah, was always happy and well-cared for. The facility is clean, and the communication from the caregivers was excellent. It gave us peace of mind knowing he was in such good hands." }
  ],

  trustBadges: [
    "CA State Licensed", "Experienced Educators", "Bilingual Program", "Safe & Nurturing Environment", "CPR & First Aid Certified"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 15, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 100, label: "Happy Families", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Educators", desc: "Our staff are highly qualified and passionate about early childhood education." },
    { icon: "shield-check", title: "Safe Environment", desc: "We prioritize safety with secure facilities and strict protocols." },
    { icon: "heart", title: "Nurturing Care", desc: "Providing a warm, supportive, and loving atmosphere for every child." },
    { icon: "home", title: "Bilingual Learning", desc: "Exposure to both English and Mandarin for enhanced cognitive development." },
    { icon: "sparkles", title: "Engaging Curriculum", desc: "Age-appropriate activities designed to stimulate growth and curiosity." },
    { icon: "phone", title: "Open Communication", desc: "We maintain clear and consistent communication with parents." }
  ],

  formServiceOptions: ["Infant Care", "Toddler Program", "Pre-K Curriculum", "After-School Care", "Summer Camp", "Drop-In Care"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!