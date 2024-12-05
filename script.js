// contact.js
console.log("kkkkkkkkkkkkkkkkkkkkkkk");
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.getElementById('demande').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    console.log("Nom:", nom, "Email:", email, "telephone", telephone);
    try {
        // Ajouter un document à la collection "contacts"
        const docRef = await addDoc(collection(window.db, "Demande"), {
            nom : nom,
            email: email,
            telephone: telephone,
            timestamp: new Date() // Ajoute un horodatage
        });
        console.log("Document écrit avec ID: ", docRef.id);
        
        alert("Votre message a été envoyé avec succès !");
    } catch (e) {
        console.error("Erreur lors de l'ajout du document: ", e);
        alert("Une erreur s'est produite lors de l'envoi de votre message : " + e.message);
    }

    // Réinitialiser le formulaire
    document.getElementById('demande').reset();
});