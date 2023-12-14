interface Testimonial {
  id: number;
  name: string;
  testimonial: string;
  course: string;
  rating: number;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    course: "ABC Inc.",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    course: "XYZ Corp.",
    rating: 5,
  },
  {
    id: 3,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    course: "ABC Inc.",
    rating: 4,
  },
  {
    id: 4,
    name: "Jane Smith",
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    course: "XYZ Corp.",
    rating: 5,
  },
];
