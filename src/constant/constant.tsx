import HeadGear from '../assets/head-gear.png'
import ComputerTick from '../assets/computer-with-tick.png'
import BarGraph from '../assets/graph.png'
import SecureIcon from '../assets/secure.png'
import CardImg from '../assets/card-sort.png'
import Nback from '../assets/Nback.png'
import TrailMarketing from '../assets/trail-marketing.png'
import SyllogismsImg from '../assets/syllogisms-tes.png'
import StroopImg from '../assets/stroop-effect.png'
import TOIimg from '../assets/TOL-test.png'

export const fiveHours = [
    '0 To 5 Hours',
    '6 To 10 Hours',
    '11 To 15 Hours',
    '16 To 20 Hours',
    'More Than 20 Hours',
];

export const oneHours = [
    '0 To 1 Hours',
    '2 To 3 Hours',
    '4 To 5 Hours',
    '6 To 7 Hours',
    '8 To 9 Hours',
];

export const selfEsteemRate = [
    "Low",
    "Below Average",
    "Average",
    "Above Average",
    "High"
]

export const healthRate = [
    "Poor",
    "Below Average",
    "Average",
    "Above Average",
    "Excellent"
]



export const educations = [
    "Preschool",
    'Elementary School',
    'Middle School',
    'High School',
    'Vocational School',
    'College/University',
];

export const levelOfIncomes = [
    "Less than 10,000",
    "10,000 to 30,000",
    "More than 30,000"
]

export const ethnicityList = [
    "White/Non-Hispanic",
    "Black/Non-Hispanic",
    "Asian/Non-Hispanic",
    "Hispanic"
]

export const initialCheckBoxObjects = [
    {

        id: 1,
        title: "Is English your first language?",
        name:"firtsLangEng",
        options: [
            { label: 'Yes', selected: false },
            { label: 'No', selected: false },
        ]
    },
    {

        id: 2,
        title: "Gender",
        name:"gender",
        options: [
            { label: 'Male', selected: false },
            { label: 'Female', selected: false },
        ]
    },
    {

        id: 3,
        title: "Are you currently taking any medications?",
        name:"anyMedication",
        options: [
            { label: 'Yes', selected: false },
            { label: 'No', selected: false },
        ]
    },
    {

        id: 4,
        title: "Have you ever had a head injury?",
        name:"anyHeadInjury",
        options: [
            { label: 'Yes', selected: false },
            { label: 'No', selected: false },
        ]
    }
]


export const paidTest = [
    { id: 1, date: "26/11/2024", name: "Trails", step: "Start" },
    { id: 2, date: "26/11/2024", name: "Tower Of London	", step: "Start" },
    { id: 3, date: "26/11/2024", name: "Nback", step: "Start" },
    { id: 4, date: "26/11/2024", name: "Syllogisms", step: "Start" }
  ]
  
  export const finishedTest = [
    { id: 1, date: "26/11/2024", name: "Trails", step: "View" },
    { id: 2, date: "26/11/2024", name: "Tower Of London", step: "View" },
    { id: 3, date: "26/11/2024", name: "Nback", step: "View" },
    { id: 4, date: "26/11/2024", name: "Syllogisms", step: "View" },
  ]

  export const carouselData = [
    {
        id: 1,
        title: "Single Test",
        content: "Are you a practitioner, clinition, medical profressional or researcher in need of a specific test? We can make it for you within a two weeks, end-2-end."
    },
    {
        id: 2,
        title: "Research Environment",
        content: "We will make software for you based off of your needs. Neuropsychological testing is our specialty. If you are looking for custom software that is maluable and configurable for multiple tests, can keep a track of participants, store results, we are your best option."
    },
    {
        id: 3,
        title: "Software and Hosting",
        content: "We create the software, and we will host it for you too. We take the worrying out of Hipaa regulations and data integrity. We design and develop Cloud based and Desktop applications."
    },
    {
        id: 4,
        title: "Research Environment",
        content: "We will make software for you based off of your needs. Neuropsychological testing is our specialty. If you are looking for custom software that is maluable and configurable for multiple tests, can keep a track of participants, store results, we are your best option."
    },
]


export const constantData = [
    {
        id: 1,
        img: HeadGear,
        title: "The CogQuiz General Philosophy",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    },
    {
        id: 2,
        img: ComputerTick,
        title: "History and Validating Data",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    },
    {
        id: 3,
        img: BarGraph,
        title: "Large Norm Base",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    },
    {
        id: 4,
        img: SecureIcon,
        title: "Centralized Secure Database",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    }
]


export const AllTestAvailable = [
    {
        id: 1,
        title: "Card Sort Test",
        img: CardImg,
        category: "Executive"
    },
    {
        id: 2,
        title: "Nback Test",
        img: Nback,
        category: "Memory"
    },
    {
        id: 3,
        title: "trail making test",
        img: TrailMarketing,
        category: "Processing"
    },
    {
        id: 4,
        title: "Syllogisms Test",
        img: SyllogismsImg,
        category: "Processing"
    },
    {
        id: 5,
        title: "Stroop Effect",
        img: StroopImg,
        category: "Memory"
    },
    {
        id: 6,
        title: "Tower of London test",
        img: TOIimg,
        category: "Executive"
    }
]