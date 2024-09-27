const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS', frais: 500 },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS', frais: 300 },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS', frais: 400 },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS', frais: 600 }
];
const pureAppendInscription = (inscription, inscriptions) => {
    return [...inscriptions, inscription];
};

const Inscription = { id: 14, nom: 'ALI', filiere: 'DEVOWFS' };
const Inscriptions = pureAppendInscription(Inscription, inscriptions);

console.log(Inscriptions);


const totalFrais = inscriptions.reduce((total, inscription) => {
    return total + inscription.frais;
}, 0);

console.log(totalFrais);