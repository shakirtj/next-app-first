export const TRACTOR_JUNCTION = "tractor";
export const BIKE_JUNCTION = "bike";
export const TRUCK_JUNCTION = "truck";
export const INFRA_JUNCTION = "infra";
export const CURRENT_APP = process.env.NEXT_PUBLIC_APP;
export const WEB_SMALL = 1024;
export const INPUT_TYPE = "input";
export const SELECT_TYPE = "select";
export const SEARCH_SUGGESTION_TYPE = "searchSuggestion";
export const LONG_TEXT_TYPE = "textarea";
export const CTA_ACTION_POST_TYPE = "post";
export const CTA_ACTION_REDIRECT_TYPE = "redirect";
export const CMS_LEAD_PUSH = "cmsPost";
export const EMICALCULATOR_REDIRECT_PATHNAME = "/en/bike-loan-emi-calculator";
export const DEALERSHOWROOM_REDIRECT_PATHNAME = "/en/bike-dealer-showrooms";
export const S3_BUCKET_URL =
  "https://centralization-images.s3.ap-south-1.amazonaws.com";

   export const BikeTopMenu = [
    {
      title: "BIKES",
      children: [
        {
          title: "LATEST BIKES",
          children: [],
          url: "#",
        },
        {
          title: "BEST BIKES",
          children: [],
          url: "#",
        },
        {
          title: "UPCOMING BIKES",
          children: [],
          url: "#",
        },
        {
          title: "BEST MILAGE BIKES",
          children: [],
          url: "#",
        },
        {
          title: "POPULAR BRANDS BIKES",
          children: [
            { title: "HONDA", url: "#", children: [] },
            { title: "HERO", url: "#", children: [] },
            { title: "TVS", url: "#", children: [] },
            { title: "YAMAHA", url: "#", children: [] },
            { title: "KTM", url: "#", children: [] },
            { title: "ROYAL ENFIELD", url: "#", children: [] },
          ],
          url: "#",
        },
        {
          title: "BIKES BY BUDGET",
          children: [
            { title: "UNDER 1 LAKH", url: "#", children: [] },
            { title: "UNDER 2 LAKH", url: "#", children: [] },
            { title: "UNDER 3 LAKH", url: "#", children: [] },
            { title: "UNDER 4 LAKH", url: "#", children: [] },
            { title: "UNDER 5 LAKH", url: "#", children: [] },
            { title: "UNDER 6 LAKH", url: "#", children: [] },
          ],
          url: 16,
        },
        {
          title: "BIKES BY MILAGE",
          children: [
            { title: "30 KM/L", url: "#", children: [] },
            { title: "35 KM/L", url: "#", children: [] },
            { title: "40 KM/L", url: "#", children: [] },
            { title: "45 KM/L", url: "#", children: [] },
            { title: "50 KM/L", url: "#", children: [] },
            { title: "55 KM/L", url: "#", children: [] },
          ],
          url: "#",
        },
      ],
      url: "#",
    },
    {
      title: "SCOOTERS",
      children: [
        {
          title: "LATEST SCOOTERS",
          children: [],
          url: "#",
        },
        {
          title: "BEST SCOOTERS",
          children: [],
          url: "#",
        },
        {
          title: "UPCOMING SCOOTERS",
          children: [],
          url: "#",
        },
        {
          title: "BEST MILAGE SCOOTERS",
          children: [],
          url: "#",
        },
        {
          title: "POPULAR BRANDS SCOOTERS",
          children: [
            { title: "HONDA", url: "#", children: [] },
            { title: "HERO", url: "#", children: [] },
            { title: "TVS", url: "#", children: [] },
            { title: "YAMAHA", url: "#", children: [] },
            { title: "KTM", url: "#", children: [] },
          ],
          url: "#",
        },
        {
          title: "SCOOTERS BY BUDGET",
          children: [
            { title: "UNDER 1 LAKH", url: "#", children: [] },
            { title: "UNDER 2 LAKH", url: "#", children: [] },
            { title: "UNDER 3 LAKH", url: "#", children: [] },
            { title: "UNDER 4 LAKH", url: "#", children: [] },
            { title: "UNDER 5 LAKH", url: "#", children: [] },
            { title: "UNDER 6 LAKH", url: "#", children: [] },
          ],
          url: 26,
        },
        {
          title: "SCOOTERS BY MILAGE",
          children: [
            { title: "30 KM/L", url: "#", children: [] },
            { title: "35 KM/L", url: "#", children: [] },
            { title: "40 KM/L", url: "#", children: [] },
            { title: "45 KM/L", url: "#", children: [] },
            { title: "50 KM/L", url: "#", children: [] },
            { title: "55 KM/L", url: "#", children: [] },
          ],
          url: "#",
        },
      ],
      url: "#",
    },
    {
      title: "ELECTRIC VEHICLES",
      children: [
        {
          title: "ELECTRIC BIKES",
          children: [
            {
              title: "ELECTRIC BIKE BRANDS",
              children: [
                { title: "MATTER", url: "#", children: [] },
                { title: "REVOLT", url: "#", children: [] },
                { title: "TORK", url: "#", children: [] },
                { title: "HOP", url: "#", children: [] },
              ],
              url: "#",
            },
            { title: "LATEST ELECTRIC BIKES", url: "#", children: [] },
            { title: "BEST ELECTRIC BIKES", url: "#", children: [] },
            { title: "BEST ELECTRIC BIKES", url: "#", children: [] },
          ],
          url: "#",
        },
        {
          title: "ELECTRIC SCOOTERS",
          children: [
            {
              title: "ELECTRIC SCOOTERS BRANDS",
              children: [
                { title: "MATTER", url: "#", children: [] },
                { title: "REVOLT", url: "#", children: [] },
                { title: "TORK", url: "#", children: [] },
                { title: "HOP", url: "#", children: [] },
              ],
              url: "#",
            },
            { title: "LATEST ELECTRIC SCOOTERS", url: "#", children: [] },
            { title: "BEST ELECTRIC SCOOTERS", url: "#", children: [] },
            { title: "BEST ELECTRIC SCOOTERS", url: "#", children: [] },
          ],
          url: "#",
        },
      ],
      url: "#",
    },
    {
      title: "COMPARE BIKES",
      children: [],
      url: "#",
    },
    {
      title: "DEALERS & SHOWROOMS",
      children: [],
      url: "#",
    },
    {
      title: "2-WHEELER LOAN & EMI",
      children: [
        {
          title: "2-WHEELER LOAN",
          url: "#",
          children: [],
        },
        {
          title: "2-WHEELER LOAN EMI CALCULATOR",
          url: "#",
          children: [],
        },
      ],
      url: "#",
    },
    {
      title: "MORE",
      children: [
        {
          title: "WEB STORY",
          url: "#",
          children: [],
        },
        {
          title: "NEWS",
          url: "#",
          children: [],
        },
        {
          title: "GET ON-ROAD PRICE",
          url: "#",
          children: [],
        },
      ],
      url: "#",
    },
  ];
  
   export const QuickMenu = [
    { title:"New Bikes", url:"/new-bikes" },
    { title:"Apply For Loan", url:"/new-bikes" },
    { title:"EMI Calculator", url:"/new-bikes" },
    { title:"Compare Bike", url:"/new-bikes" },
    { title:"Find Showroom", url:"/new-bikes" },
  ]
  
  export const CompanyMenu = [
    { title:"About Us", url:"/new-bikes" },
    { title:"Privacy Policy", url:"/new-bikes" },
    { title:"Contact Us", url:"/new-bikes" },
  ]

  export const ContactDetails = [
    { title:"A-23, 3rd floor, A Block, Sector 9,Noida, Uttar Pradesh 201301", url:"", imagePath:"/assets/images/location_icon.webp"  },
    { title:"info@bikejunction.in", url:"mailto:info@bikejunction.in", imagePath:"/assets/images/email_icon.webp" },
    { title:"+91-9770-974-974", url:"tel:+919770974974", imagePath:"/assets/images/phone_icon.webp" },
  ]