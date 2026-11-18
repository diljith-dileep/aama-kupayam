export type Product = {
  id: number;
  name: string;
  fabric: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge: string;
  sizes: string[];
  selectedSize: string;
  description: string;
  category: string;
  care: string[];
  details: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Mayura Bottle Green Anarkali",
    fabric: "Chanderi Silk",
    price: "₹6,999",
    originalPrice: "₹8,499",
    discount: "18% OFF",
    rating: 4.9,
    reviews: 128,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsibdJOEljg8lK9i49_A-FFyr3IiyTJmP0KROoXYUSNDSZy70-zJwvHRNgR5lezKj-5kOliZHK10B_K9irAq0PDjsLCDOKKeSejpz6gL0SJNjj8ARffXWttALgAPMlRADLQ8F3Xjuka58ntTUJsQuNXBs2nVYIxWCvIWE6dfji8b8BOL2Dayh-H3YWIPs9UyF10tOTYZF7zF1p-vMnms3-eAy1Syz_IGEZ1akOa5DY",
    ],
    badge: "Bestseller",
    sizes: ["XS", "S", "M", "L", "XL"],
    selectedSize: "S",
    description:
      "Intricate zari threadwork with scalloped organza dupatta and fitted churidar trousers. A bottle green silhouette that carries the depth of heritage weaves into modern festive wear.",
    category: "Kurti Collections",
    care: ["Dry clean only", "Store in muslin cloth", "Avoid direct sunlight"],
    details: ["Pure Chanderi silk base", "Hand-embroidered zari neckline", "Scalloped organza dupatta included", "Fitted churidar trousers"],
  },
  {
    id: 2,
    name: "Devika Kasavu Pleated Kurta",
    fabric: "Chendamangalam Cotton",
    price: "₹4,499",
    originalPrice: "₹5,999",
    discount: "25% OFF",
    rating: 5.0,
    reviews: 94,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
    ],
    badge: "New Drop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    selectedSize: "M",
    description:
      "Pure Kerala handspun cotton adorned with glistening golden zari borders and imperial pleated flair. A temple-ready silhouette for everyday elegance.",
    category: "Traditional Wear",
    care: ["Hand wash recommended", "Dry in shade", "Medium iron"],
    details: ["Chendamangalam handloom cotton", "Golden kasavu zari border", "Pleated flared silhouette", "Mandarin neck finish"],
  },
  {
    id: 3,
    name: "Avani Floral Ivory Lehenga",
    fabric: "Raw Silk & Zari",
    price: "₹14,999",
    originalPrice: "₹18,000",
    discount: "16% OFF",
    rating: 4.9,
    reviews: 82,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsibdJOEljg8lK9i49_A-FFyr3IiyTJmP0KROoXYUSNDSZy70-zJwvHRNgR5lezKj-5kOliZHK10B_K9irAq0PDjsLCDOKKeSejpz6gL0SJNjj8ARffXWttALgAPMlRADLQ8F3Xjuka58ntTUJsQuNXBs2nVYIxWCvIWE6dfji8b8BOL2Dayh-H3YWIPs9UyF10tOTYZF7zF1p-vMnms3-eAy1Syz_IGEZ1akOa5DY",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsibdJOEljg8lK9i49_A-FFyr3IiyTJmP0KROoXYUSNDSZy70-zJwvHRNgR5lezKj-5kOliZHK10B_K9irAq0PDjsLCDOKKeSejpz6gL0SJNjj8ARffXWttALgAPMlRADLQ8F3Xjuka58ntTUJsQuNXBs2nVYIxWCvIWE6dfji8b8BOL2Dayh-H3YWIPs9UyF10tOTYZF7zF1p-vMnms3-eAy1Syz_IGEZ1akOa5DY",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
    ],
    badge: "Heritage",
    sizes: ["XS", "S", "M", "L", "Custom"],
    selectedSize: "M",
    description:
      "Floor-length flare kurta enriched with hand-embroidered Kashmiri tilla and zari motifs. Bridal and sangeet-ready ivory grandeur.",
    category: "Party Wear",
    care: ["Dry clean only", "Store flat", "Avoid perfume on zari"],
    details: ["Raw silk and zari base", "Kashmiri tilla embroidery", "Floor-length flare cut", "Matching blouse included"],
  },
  {
    id: 4,
    name: "Tara Forest Evening Gown",
    fabric: "Organza & Chiffon",
    price: "₹8,999",
    originalPrice: "₹11,500",
    discount: "21% OFF",
    rating: 4.8,
    reviews: 64,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
    ],
    badge: "Trending",
    sizes: ["XS", "S", "M", "L", "XL"],
    selectedSize: "L",
    description:
      "Flowing georgette and organza draped gown accented with subtle tonal sequin bodice. Soirée and reception perfection.",
    category: "Party Wear",
    care: ["Dry clean only", "Steam to remove folds", "Store hanging"],
    details: ["Organza and chiffon drape", "Tonal sequin bodice", "Floor-sweeping gown", "In-built slip lining"],
  },
  {
    id: 5,
    name: "Devika Emerald Embroidered Anarkali Set",
    fabric: "Chanderi Silk",
    price: "₹4,899",
    originalPrice: "₹6,200",
    discount: "21% Off",
    rating: 4.9,
    reviews: 128,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
    ],
    badge: "Bestseller",
    sizes: ["XS", "S", "M", "L", "XL"],
    selectedSize: "M",
    description:
      "Intricate zari threadwork with scalloped organza dupatta and fitted churidar trousers.",
    category: "Kurti Collections",
    care: ["Dry clean only", "Store in muslin cloth"],
    details: ["Pure Chanderi silk base", "Hand-embroidered zari", "Scalloped organza dupatta", "Fitted churidar"],
  },
  {
    id: 6,
    name: "Malabar Kasavu Heritage Fusion Flared Gown",
    fabric: "Kasavu Cotton",
    price: "₹3,999",
    originalPrice: "₹4,999",
    discount: "20% Off",
    rating: 5.0,
    reviews: 94,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
    ],
    badge: "Handloom Exclusive",
    sizes: ["S", "M", "L", "XL"],
    selectedSize: "M",
    description:
      "Pure Kerala handspun cotton adorned with glistening golden zari borders and imperial pleated flair.",
    category: "Traditional Wear",
    care: ["Hand wash recommended", "Dry in shade"],
    details: ["Kasavu handloom cotton", "Golden zari border", "Pleated flared silhouette"],
  },
  {
    id: 7,
    name: "Aiswarya Bottle Green Sequin Georgette Gown",
    fabric: "Georgette & Beads",
    price: "₹6,499",
    originalPrice: "₹7,999",
    discount: "18% Off",
    rating: 4.8,
    reviews: 82,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
    ],
    badge: "Party Wear",
    sizes: ["XS", "S", "M", "L", "XXL"],
    selectedSize: "L",
    description:
      "Dramatically flared gala silhouette with tone-on-tone sequin handwork and halter yoke.",
    category: "Party Wear",
    care: ["Dry clean only", "Store hanging"],
    details: ["Georgette and beadwork", "Tone-on-tone sequin handwork", "Halter yoke", "Flared gala silhouette"],
  },
  {
    id: 8,
    name: "Aranya Sage & Gold Zari Peplum Kurti",
    fabric: "Chanderi Silk",
    price: "₹2,999",
    originalPrice: "₹3,699",
    discount: "19% Off",
    rating: 4.7,
    reviews: 64,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4LGsM5GFe6W9PBgv_EG0jq9GxMihHw4c3WVRU_vihF9CQX2eGuq5ausSjv4sQ_Vr0c7S06YtLhem6H-hZORkQWAvS7vmOXbv6jMNwkiVEosFtse20iB39YQdhvxwSwSFsZRRGXFAkQHXpizcbZ-tlej6iiK8pylWd_abKwQLjg2vmfA-M6H1_EaTTGT4HWMm_C5GN8rr-H6NqkrnUakU0b5nMI0vhQdwwxTDii0fK",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4LGsM5GFe6W9PBgv_EG0jq9GxMihHw4c3WVRU_vihF9CQX2eGuq5ausSjv4sQ_Vr0c7S06YtLhem6H-hZORkQWAvS7vmOXbv6jMNwkiVEosFtse20iB39YQdhvxwSwSFsZRRGXFAkQHXpizcbZ-tlej6iiK8pylWd_abKwQLjg2vmfA-M6H1_EaTTGT4HWMm_C5GN8rr-H6NqkrnUakU0b5nMI0vhQdwwxTDii0fK",
    ],
    badge: "Ready To Ship",
    sizes: ["XS", "S", "M", "XL"],
    selectedSize: "M",
    description:
      "Contemporary peplum cut pairing soft sage silk with woven heritage zari motifs and gold buttons.",
    category: "Kurti Collections",
    care: ["Dry clean only", "Cool iron"],
    details: ["Sage Chanderi silk", "Woven heritage zari motifs", "Contemporary peplum cut", "Gold buttons"],
  },
  {
    id: 9,
    name: "Padma Ivory Floral Motif Festive Kurti",
    fabric: "Kasavu Handloom",
    price: "₹3,499",
    originalPrice: "₹4,200",
    discount: "16% Off",
    rating: 4.9,
    reviews: 112,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIIxpCAA3l3RW52KbQnNdL8jURpj8Mhtnw9aGm_ydzI37vq8qKdvvQ0pZ9L8J94J3NzmF6Iq_506vFASi-BbKXrN-dpNHcd0W1zxpL38yRuomgEO7OX1FZ4yyPV2h_pqwVreGMUlkXVy3tW8NNpCFi3mhR7nI-acZrvBljJD_BgoejmU3BLCAh5oxAHBiXdaWr34nNIr-DaLnjFldkET04ftsUzbkldU5YF0OP8TgF",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIIxpCAA3l3RW52KbQnNdL8jURpj8Mhtnw9aGm_ydzI37vq8qKdvvQ0pZ9L8J94J3NzmF6Iq_506vFASi-BbKXrN-dpNHcd0W1zxpL38yRuomgEO7OX1FZ4yyPV2h_pqwVreGMUlkXVy3tW8NNpCFi3mhR7nI-acZrvBljJD_BgoejmU3BLCAh5oxAHBiXdaWr34nNIr-DaLnjFldkET04ftsUzbkldU5YF0OP8TgF",
    ],
    badge: "Trending",
    sizes: ["S", "M", "L", "XXL"],
    selectedSize: "M",
    description:
      "Delicate gold bootas hand-stamped on unbleached natural ivory cotton with mandarin collar.",
    category: "Traditional Wear",
    care: ["Hand wash", "Dry in shade"],
    details: ["Unbleached ivory kasavu cotton", "Gold bootas hand-stamped", "Mandarin collar", "Natural cotton fabric"],
  },
  {
    id: 10,
    name: "Nilambur Forest Green Pleated Maxi Dress",
    fabric: "Organic Linen Blend",
    price: "₹4,299",
    originalPrice: "₹5,499",
    discount: "22% Off",
    rating: 5.0,
    reviews: 47,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnFZp-HCjBta7SFLW4jRzviOovGnRzG4zjohfMMEoETFlGh6Q-xxu2r82aaXEMqTdOqgS9-eaVr6dtSNwxZwjCn7pR87aNdyR4eNkdy0VrhxzqjApdp937LcsnuHdKyKsWvp1jE-es48rokFs7T2ok5cV_RvR5gCHffIsj4NVsTjBw0TtzPltWqidGG9Ff8yIFmgICWC5WaD8CDks4ORo-gMTY6ytDXxjYJiSrXKq4",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnFZp-HCjBta7SFLW4jRzviOovGnRzG4zjohfMMEoETFlGh6Q-xxu2r82aaXEMqTdOqgS9-eaVr6dtSNwxZwjCn7pR87aNdyR4eNkdy0VrhxzqjApdp937LcsnuHdKyKsWvp1jE-es48rokFs7T2ok5cV_RvR5gCHffIsj4NVsTjBw0TtzPltWqidGG9Ff8yIFmgICWC5WaD8CDks4ORo-gMTY6ytDXxjYJiSrXKq4",
    ],
    badge: "Limited Batch",
    sizes: ["XS", "S", "M", "L", "XL"],
    selectedSize: "M",
    description:
      "Flattering empire waist silhouette with accordion micro-pleating and delicate handcrafted piping.",
    category: "Party Wear",
    care: ["Hand wash", "Cool iron"],
    details: ["Organic linen blend", "Empire waist silhouette", "Accordion micro-pleating", "Handcrafted piping"],
  },
];

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id: number, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit);
}
