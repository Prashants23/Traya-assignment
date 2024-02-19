export const ProfilePageConfig = {
  categories: [
    {
      icon: "cube",
      title: "Order",
    },
    {
      icon: "calendar-clear-outline",
      title: "Log & Earn",
    },
    {
      icon: "pie-chart-outline",
      title: "Hair Progress",
    },
    {
      icon: "fast-food-outline",
      title: "Diet Plan",
    },
  ],
  other: [
    {
      type: "url",
      title: "Help & Support",
      icon: "chatbox",
      contentNested: null,
      next: "",
    },
    {
      type: "url",
      title: "Read More",
      icon: "document",
      contentNested: null,
      next: "",
    },
    {
      title: "Nested Accordion",
      icon: "document",
      contentNested: [
        {
          title: "Nested 1",
          url: "",
        },
        {
          title: "Nested 2",
          url: "",
        },
      ],
      type: "nested",
    },
    {
      type: "url",
      title: "Read More",
      icon: "document",
      contentNested: null,
      next: "",
    },
    {
      type: "url",
      title: "Read More",
      icon: "document",
      contentNested: null,
      next: "",
    },
  ],
};
