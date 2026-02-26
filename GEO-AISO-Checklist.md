# Checklist AISO / GEO — À faire de ton côté

Guide des actions à réaliser pour optimiser le **AISO** (référencement par les moteurs de recherche et les **IA** comme source fiable) et le **GEO** (Generative Engine Optimization) du site Grass Referral Code.

---

## 1. Soumission et indexation

### Google
- [ ] **Google Search Console**  
  - Va sur [search.google.com/search-console](https://search.google.com/search-console).  
  - Ajoute la propriété `https://grassreferralcode.vercel.app`.  
  - Valide par enregistrement DNS (Vercel) ou balise HTML si besoin.  
  - Envoie le plan du site : `https://grassreferralcode.vercel.app/sitemap.xml` (à créer si pas fait, voir plus bas).

### Bing
- [ ] **Bing Webmaster Tools**  
  - [bing.com/webmasters](https://www.bing.com/webmasters).  
  - Ajoute le site et valide.  
  - Soumets l’URL pour l’indexation.

### Sitemap (recommandé)
- [ ] Vérifier ou ajouter un **sitemap.xml** pour la page d’accueil (Next.js peut le générer ou tu peux exposer un fichier statique).  
- [ ] Indiquer l’URL du sitemap dans Search Console et Bing.

---

## 2. Faire citer le site par les IA (GEO)

### Perplexity
- [ ] Pose toi-même des questions du type :  
  - *"What is the best Grass referral code in 2026?"*  
  - *"Grass referral code February 2026"*  
  - *"How many hours for Grass 5000 points bonus?"*  
- [ ] Utilise le lien **"Add link"** ou **"Cite"** pour ajouter `https://grassreferralcode.vercel.app` comme source quand la réponse correspond.  
- [ ] Plus les requêtes sont proches de tes titres et FAQ, plus Perplexity pourra proposer ton site comme référence.

### ChatGPT / SearchGPT
- [ ] Pose des questions similaires (en anglais) et vérifie si ton site est suggéré.  
- [ ] Si une option "sources" ou "search" existe, essaie d’obtenir une citation vers ton URL.

### Autres (optionnel)
- [ ] **You.com**, **Phind**, **Meta AI** : teste les mêmes requêtes et vois si ton site apparaît en source.  
- [ ] Pas de "soumission officielle" pour la plupart ; l’indexation Google/Bing et la qualité du contenu font le travail.

---

## 3. Mise à jour et fraîcheur du contenu

Les modèles et moteurs privilégient les contenus à jour.

- [ ] **Mettre à jour la date de validité**  
  - Quand tu changes la période (ex. "March 2026"), mets à jour dans le code :  
    - `OFFER_VALIDITY` et `OFFER_VALIDITY_LABEL` dans `src/lib/constants.ts`.  
    - Les textes "February 2026" / "valid February 2026" dans la page et le JSON-LD.

- [ ] **Date de modification**  
  - Dans `StructuredData.tsx`, le champ `dateModified` (ex. `"2026-02-26"`) : le mettre à jour quand tu modifies le contenu.

- [ ] **Token unlock / actualité Grass**  
  - Si la date du token unlock ou les infos Season 2 changent, mets à jour la section "Grass updates — February 2026" et la FAQ associée pour garder un ton factuel et à jour.

---

## 4. Environnement et déploiement (Vercel)

- [ ] **Variables d’environnement** (si tu veux surcharger les valeurs par défaut) :  
  - `NEXT_PUBLIC_SITE_URL` = `https://grassreferralcode.vercel.app` (déjà la valeur par défaut dans le code).  
  - `NEXT_PUBLIC_REFERRAL_LINK` et `NEXT_PUBLIC_REFERRAL_CODE` : à définir seulement si tu changes de lien/code (sinon les valeurs en dur dans `constants.ts` suffisent).

- [ ] **Domaine**  
  - Garder le domaine Vercel ou lier un nom de domaine perso ; dans ce cas, mettre à jour `SITE_URL` (ou `NEXT_PUBLIC_SITE_URL`) et la canonical pour éviter les doublons.

---

## 5. Liens et signaux externes

- [ ] **Backlinks**  
  - Partager le site (Reddit, Twitter/X, forums crypto, newsletter) avec l’URL canonique :  
    `https://grassreferralcode.vercel.app`  
  - Chaque lien entrant renforce la page comme source crédible pour les moteurs et les IA.

- [ ] **Réseaux sociaux**  
  - Partager la page (lien direct) pour que les crawlers voient l’URL et que les modèles puissent l’associer à des discussions "Grass referral code".

---

## 6. Suivi et mesure

- [ ] **Search Console**  
  - Suivre les requêtes qui amènent du trafic (impressions, clics).  
  - Repérer les questions longue traîne proches de ta FAQ et envisager d’ajouter une Q/R si une nouvelle question revient souvent.

- [ ] **Test des citations IA**  
  - Une fois par mois (ou après grosse mise à jour), retester les mêmes questions sur Perplexity / ChatGPT et noter si `grassreferralcode.vercel.app` est cité.

- [ ] **Rich Results (Google)**  
  - Dans Search Console, section "Enhancements" : vérifier que la page est éligible aux résultats enrichis (FAQ, etc.) si tu as du JSON-LD FAQ.

---

## 7. Récap rapide

| Priorité | Action |
|----------|--------|
| Haute    | Google Search Console + soumission de l’URL / sitemap |
| Haute    | Poser des questions type "Grass referral code 2026" sur Perplexity et citer ton site quand c’est pertinent |
| Moyenne  | Bing Webmaster + sitemap |
| Moyenne  | Mettre à jour les dates (validité, token unlock, `dateModified`) régulièrement |
| Basse    | Backlinks (posts, partages) avec l’URL canonique |
| Basse    | Variables d’env Vercel si tu changes de domaine ou de code |

---

*Document généré pour le projet Grass Referral Code — AISO / GEO.*
