import IPost from "@/interfaces/IPost";

export const best_posts: IPost[] = [
  {
    id: 1,
		name: 'automatyzacja_zycia',
    title: "Automatyzacja zycia",
    badge: "Zautomatyzuj sobie zycie w kilku prostych krokach",
    created_at: "10 Lipiec",
    description: `Dlaczego automatyzacja życia w dzisiejszych czasach to must have ?`,
  },
  {
    id: 2,
		name: 'bezpieczenstwo_maili',
    title: "Bezpieczeństwo maili",
    badge: "Jak zadbać o bezpieczeństwo skrzynki pocztowej?",
    created_at: "18 Czerwiec",
    description: `W jaki sposób chronić swoje wiadomości mailowe 
              oraz swoje prywatne dane przed nieproszonymi goścmi?`,
  },
  {
    id: 3,
		name: 'pierwsza_pomoc',
    title: "Pierwsza pomoc",
    badge: "Udzielanie pierwszej pomocy osobie potrzebującej",
    created_at: "25 Kwiecień",
    description: `W jaki spobób udzielić pierwszej pomocy osobie po wypadku samochodowym? 
                W jaki sposób uratować życia Diabetykowi?`,
  }
];
