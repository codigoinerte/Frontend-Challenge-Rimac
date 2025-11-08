const stringToMatch = [
    "Médico general a domicilio",
    "Videoconsulta",
    "Indemnización",
    "Consultas en clínica",
    "Medicinas y exámenes",
    "más de 200 clínicas del país.",
    "Un Chequeo preventivo general",
    "Vacunas",
    "Incluye todos los beneficios del plan en casa."
];

export const ReplaceTextToBold = (description: string) => {
    const textMatch = stringToMatch.find((item) => description.includes(item) ? item : "");
    if(!textMatch) return description;

    const splitText = description.replaceAll(textMatch, "");

    return <><b>{textMatch}</b> {splitText}</>;
    
}