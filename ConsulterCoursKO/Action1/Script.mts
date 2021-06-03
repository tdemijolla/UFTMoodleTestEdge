Browser("Ecole de la Qualité Logicielle").Page("Ecole de la Qualité Logicielle").Link("Connexion").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("Ecole de la Qualité Logicielle_2").WebEdit("username").Set "stagiairedta"
wait 1
Browser("Ecole de la Qualité Logicielle").Page("Ecole de la Qualité Logicielle_2").WebEdit("password").SetSecure "60b4fe8d9995ee042360479cfb0c97bd2bf717c634a638b2a9a7b698bc1c162a16c9"
wait 1
Browser("Ecole de la Qualité Logicielle").Page("Ecole de la Qualité Logicielle_2").WebButton("Connexion").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("Tableau de bord").Image("Eguru").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("Ecole de la Qualité Logicielle_3").Link("Processus de sélection").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("EQL: Tous les cours").Link("Préparation CV/Entretien").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("EQL: Tous les cours").Link("PO : Préparation CV/Entretien").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("DTAPCE: Guide de préparation").WebButton("Menu utilisateur").Click
wait 1
Browser("Ecole de la Qualité Logicielle").Page("DTAPCE: Guide de préparation").WebMenu("Stagiaire DTA").Select "Déconnexion"

