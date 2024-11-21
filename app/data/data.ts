export type Reckon = {
  id: number;
  type: "image",
  status: "new" | "active" | "completed" | "ignored"
  createdAt: Date;
  updatedAt: Date;
  tag: ("Possibly Pixilated" | "Missing Alt Tag" | "Poor quaility Alt Tag" | "Not Retina Ready" | "Off brand")[]
  imageUrl: string
  pageUrl: string
}

export const data: Reckon[] = [
  {
    id: 1,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
    tag: ["Missing Alt Tag", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon1/800/600",
    pageUrl: "https://www.spark.co.nz/mobile-plans"
  },
  {
    id: 2,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon2/800/600",
    pageUrl: "https://www.spark.co.nz/broadband"
  },
  {
    id: 3,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-02"),
    updatedAt: new Date("2024-03-02"),
    tag: ["Possibly Pixilated", "Missing Alt Tag", "Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon3/800/600",
    pageUrl: "https://www.spark.co.nz/help/account"
  },
  {
    id: 4,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-02"),
    updatedAt: new Date("2024-03-02"),
    tag: ["Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon4/800/600",
    pageUrl: "https://www.spark.co.nz/shop/phones"
  },
  {
    id: 5,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-03"),
    updatedAt: new Date("2024-03-03"),
    tag: ["Not Retina Ready", "Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon5/800/600",
    pageUrl: "https://www.spark.co.nz/business"
  },
  {
    id: 6,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-03"),
    updatedAt: new Date("2024-03-03"),
    tag: ["Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon6/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment"
  },
  {
    id: 7,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-04"),
    updatedAt: new Date("2024-03-04"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon7/800/600",
    pageUrl: "https://www.spark.co.nz/about-us"
  },
  {
    id: 8,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-04"),
    updatedAt: new Date("2024-03-04"),
    tag: ["Possibly Pixilated", "Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon8/800/600",
    pageUrl: "https://www.spark.co.nz/contact"
  },
  {
    id: 9,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
    tag: ["Off brand", "Not Retina Ready", "Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon9/800/600",
    pageUrl: "https://www.spark.co.nz/shop/accessories"
  },
  {
    id: 10,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
    tag: ["Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon10/800/600",
    pageUrl: "https://www.spark.co.nz/help/mobile"
  },
  {
    id: 11,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-06"),
    updatedAt: new Date("2024-03-06"),
    tag: ["Possibly Pixilated"],
    imageUrl: "https://picsum.photos/seed/reckon11/800/600",
    pageUrl: "https://www.spark.co.nz/business/solutions"
  },
  {
    id: 12,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-06"),
    updatedAt: new Date("2024-03-06"),
    tag: ["Missing Alt Tag", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon12/800/600",
    pageUrl: "https://www.spark.co.nz/shop/tablets"
  },
  {
    id: 13,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-07"),
    updatedAt: new Date("2024-03-07"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon13/800/600",
    pageUrl: "https://www.spark.co.nz/help/broadband"
  },
  {
    id: 14,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-07"),
    updatedAt: new Date("2024-03-07"),
    tag: ["Off brand", "Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon14/800/600",
    pageUrl: "https://www.spark.co.nz/business/mobile"
  },
  {
    id: 15,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-08"),
    updatedAt: new Date("2024-03-08"),
    tag: ["Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon15/800/600",
    pageUrl: "https://www.spark.co.nz/shop/wearables"
  },
  {
    id: 16,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-08"),
    updatedAt: new Date("2024-03-08"),
    tag: ["Missing Alt Tag", "Possibly Pixilated", "Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon16/800/600",
    pageUrl: "https://www.spark.co.nz/help/apps"
  },
  {
    id: 17,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-09"),
    updatedAt: new Date("2024-03-09"),
    tag: ["Poor quaility Alt Tag", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon17/800/600",
    pageUrl: "https://www.spark.co.nz/business/broadband"
  },
  {
    id: 18,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-09"),
    updatedAt: new Date("2024-03-09"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon18/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/spotify"
  },
  {
    id: 19,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
    tag: ["Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon19/800/600",
    pageUrl: "https://www.spark.co.nz/shop/gaming"
  },
  {
    id: 20,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
    tag: ["Missing Alt Tag", "Possibly Pixilated"],
    imageUrl: "https://picsum.photos/seed/reckon20/800/600",
    pageUrl: "https://www.spark.co.nz/help/billing"
  },
  {
    id: 21,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-11"),
    updatedAt: new Date("2024-03-11"),
    tag: ["Not Retina Ready", "Poor quaility Alt Tag", "Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon21/800/600",
    pageUrl: "https://www.spark.co.nz/business/cloud"
  },
  {
    id: 22,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-11"),
    updatedAt: new Date("2024-03-11"),
    tag: ["Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon22/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/netflix"
  },
  {
    id: 23,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-12"),
    updatedAt: new Date("2024-03-12"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon23/800/600",
    pageUrl: "https://www.spark.co.nz/shop/smart-home"
  },
  {
    id: 24,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-12"),
    updatedAt: new Date("2024-03-12"),
    tag: ["Possibly Pixilated", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon24/800/600",
    pageUrl: "https://www.spark.co.nz/help/roaming"
  },
  {
    id: 25,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-13"),
    updatedAt: new Date("2024-03-13"),
    tag: ["Poor quaility Alt Tag", "Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon25/800/600",
    pageUrl: "https://www.spark.co.nz/business/security"
  },
  {
    id: 26,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-13"),
    updatedAt: new Date("2024-03-13"),
    tag: ["Missing Alt Tag", "Not Retina Ready", "Possibly Pixilated"],
    imageUrl: "https://picsum.photos/seed/reckon26/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/sport"
  },
  {
    id: 27,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-13"),
    updatedAt: new Date("2024-03-13"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon27/800/600",
    pageUrl: "https://www.spark.co.nz/shop/deals"
  },
  {
    id: 28,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-13"),
    updatedAt: new Date("2024-03-13"),
    tag: ["Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon28/800/600",
    pageUrl: "https://www.spark.co.nz/help/moving"
  },
  {
    id: 29,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-13"),
    updatedAt: new Date("2024-03-13"),
    tag: ["Poor quaility Alt Tag", "Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon29/800/600",
    pageUrl: "https://www.spark.co.nz/business/iot"
  },
  {
    id: 30,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-13"),
    updatedAt: new Date("2024-03-13"),
    tag: ["Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon30/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/disney"
  },
  {
    id: 31,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
    tag: ["Possibly Pixilated", "Off brand", "Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon31/800/600",
    pageUrl: "https://www.spark.co.nz/shop/prepaid"
  },
  {
    id: 32,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon32/800/600",
    pageUrl: "https://www.spark.co.nz/help/support"
  },
  {
    id: 33,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
    tag: ["Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon33/800/600",
    pageUrl: "https://www.spark.co.nz/business/digital"
  },
  {
    id: 34,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
    tag: ["Not Retina Ready", "Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon34/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/gaming"
  },
  {
    id: 35,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
    tag: ["Off brand", "Possibly Pixilated"],
    imageUrl: "https://picsum.photos/seed/reckon35/800/600",
    pageUrl: "https://www.spark.co.nz/shop/broadband"
  },
  {
    id: 36,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon36/800/600",
    pageUrl: "https://www.spark.co.nz/help/technical"
  },
  {
    id: 37,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Poor quaility Alt Tag", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon37/800/600",
    pageUrl: "https://www.spark.co.nz/business/voice"
  },
  {
    id: 38,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Missing Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon38/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/music"
  },
  {
    id: 39,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Off brand", "Possibly Pixilated", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon39/800/600",
    pageUrl: "https://www.spark.co.nz/shop/mobile"
  },
  {
    id: 40,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon40/800/600",
    pageUrl: "https://www.spark.co.nz/help/coverage"
  },
  {
    id: 41,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon41/800/600",
    pageUrl: "https://www.spark.co.nz/business/data"
  },
  {
    id: 42,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Missing Alt Tag", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon42/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/movies"
  },
  {
    id: 43,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon43/800/600",
    pageUrl: "https://www.spark.co.nz/shop/bundles"
  },
  {
    id: 44,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Possibly Pixilated", "Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon44/800/600",
    pageUrl: "https://www.spark.co.nz/help/wifi"
  },
  {
    id: 45,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: [],
    imageUrl: "https://picsum.photos/seed/reckon45/800/600",
    pageUrl: "https://www.spark.co.nz/business/hosting"
  },
  {
    id: 46,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Not Retina Ready", "Missing Alt Tag", "Off brand"],
    imageUrl: "https://picsum.photos/seed/reckon46/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/tv"
  },
  {
    id: 47,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon47/800/600",
    pageUrl: "https://www.spark.co.nz/shop/clearance"
  },
  {
    id: 48,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Possibly Pixilated"],
    imageUrl: "https://picsum.photos/seed/reckon48/800/600",
    pageUrl: "https://www.spark.co.nz/help/email"
  },
  {
    id: 49,
    type: "image",
    status: "new",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Missing Alt Tag", "Not Retina Ready"],
    imageUrl: "https://picsum.photos/seed/reckon49/800/600",
    pageUrl: "https://www.spark.co.nz/business/enterprise"
  },
  {
    id: 50,
    type: "image",
    status: "active",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    tag: ["Off brand", "Poor quaility Alt Tag"],
    imageUrl: "https://picsum.photos/seed/reckon50/800/600",
    pageUrl: "https://www.spark.co.nz/entertainment/kids"
  }
];