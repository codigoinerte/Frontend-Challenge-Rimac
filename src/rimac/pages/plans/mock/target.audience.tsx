import { Person, PersonPlus } from "@/rimac/icons";
import type { targetAudience } from "../types/types";

export const cards:targetAudience[] = [
    {
      id: 'para-mi',
      title: 'Para mi',
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
      icon: <Person />,
      isSelected: false
    },
    {
      id: 'para-alguien',
      title: 'Para alguien más',
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
      icon: <PersonPlus />,
      isSelected: false
    }
];