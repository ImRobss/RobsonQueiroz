import type { ContactChannel } from "./types";

export const contactMessage =
  "Estou aberto para oportunidades onde possa contribuir, aprender e evoluir como desenvolvedor.";

export const contacts: ContactChannel[] = [
  {
    kind: "phone",
    label: "Telefone",
    value: "+55 (51) 98137-6169",
    href: "https://wa.me/5551981376169",
  },
  {
    kind: "email",
    label: "Email",
    value: "robson.queirozwe@gmail.com",
    href: "mailto:robson.queirozwe@gmail.com",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "/in/robsonq",
    href: "https://linkedin.com/in/robsonq",
  },
  {
    kind: "github",
    label: "GitHub",
    value: "@ImRobss",
    href: "https://github.com/ImRobss",
  },
];
