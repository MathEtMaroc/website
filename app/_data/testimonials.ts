export type Testimonial = {
  name: string;
  school?: string;
  image?: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Yasmine Benali',
    school: 'Mohammed V High School, Casablanca',
    text: 'Thanks to Maths & Maroc, I discovered a passion for mathematics that I never suspected. The activities helped me develop my logic and creativity. I highly recommend this association to all young people who want to explore the fascinating world of mathematics.',
  },
  {
    name: 'Karim Tazi',
    school: 'National School of Computer Science',
    text: 'Participating in the Maths & Maroc summer camp was a transformative experience. The mentorship was exceptional and I was able to meet other passionate students like myself. This experience gave me the confidence to pursue my studies in computer science.',
  },
  {
    name: 'Fatima Zahra El Alaoui',
    school: 'Al Jabr College, Rabat',
    text: "The competitions organized by Maths & Maroc taught me to persevere in the face of challenges. I've made great progress in problem-solving and mathematical reasoning. The instructors are always available to help and encourage us.",
  },
  {
    name: 'Mehdi Ouazzani',
    school: 'Descartes High School, Rabat',
    text: 'Maths & Maroc completely changed my perception of mathematics. What was once a difficult subject has become a daily pleasure. The workshops are interactive and stimulating, and the atmosphere is always supportive and encouraging.',
  },
  {
    name: 'Salma Bennani',
    school: 'Faculty of Sciences, Marrakech',
    text: 'As a first-year undergraduate student, I can say that my participation in Maths & Maroc activities during my high school years gave me a considerable advantage. I acquired a rigor and methodology that serve me today in my higher education.',
  },
  {
    name: 'Omar Benjelloun',
    school: 'Ibn Sina High School, Tangier',
    text: 'The problem-solving techniques I learned through Maths & Maroc competitions have been invaluable. The collaborative environment fostered critical thinking skills that extend beyond mathematics into all areas of my academic life.',
  },
  {
    name: 'Leila Mansouri',
    school: 'Hassan II University, Casablanca',
    text: 'Being part of the Maths & Maroc community opened doors to international opportunities I never thought possible. The rigorous training and supportive network helped me secure a scholarship for my graduate studies abroad.',
  },
  {
    name: 'Youssef El Amrani',
    school: 'Ibn Khaldoun High School, Fez',
    text: 'What sets Maths & Maroc apart is how they make complex mathematical concepts accessible and engaging. Their innovative teaching approaches transformed my relationship with mathematics and inspired me to pursue engineering.',
  },
  {
    name: 'Nadia Chaoui',
    school: 'Al Khawarizmi School, Agadir',
    text: 'The mentorship I received through Maths & Maroc was life-changing. Beyond mathematical knowledge, I gained confidence, perseverance, and problem-solving skills that have been crucial for my success in competitive examinations.',
  },
];
