# PORTNET - Système de Détection de Fraude

Une application moderne pour la détection de fraude dans les documents d'importation, développée pour PORTNET S.A.

## Stack Technique

### Frontend
- **React 18** avec **TypeScript** pour un développement robuste et typé
- **Vite** comme bundler pour des performances optimales
- **TailwindCSS** avec une configuration personnalisée pour le styling
- **Shadcn/ui** pour des composants UI réutilisables
- **Framer Motion** pour des animations fluides
- **React Router** pour la navigation
- **React Query** pour la gestion d'état et le caching
- **Lucide Icons** pour les icônes

### Intégration IA
- **Google Gemini Pro** pour l'assistant IA
- **TensorFlow.js** pour l'exécution des modèles ML côté client
- **Transformers.js** pour le traitement du langage naturel

### Sécurité
- Validation des entrées côté client et serveur
- Protection CSRF
- Gestion sécurisée des tokens
- Chiffrement des données sensibles

## Architecture du Système de Détection de Fraude

### 1. Préparation des Données

#### Sources de Données
- Documents d'importation numérisés
- Formulaires réglementaires
- Historique des transactions
- Base de données des fraudes connues

#### Prétraitement
- OCR pour l'extraction de texte des documents scannés
- Normalisation des données
- Extraction d'entités (NER)
- Vectorisation des caractéristiques

### 2. Modèle de Détection de Fraude

#### Architecture Recommandée
```
Input Layer
    │
    ├── Document Features
    │   ├── Texte extrait (BERT/RoBERTa)
    │   ├── Métadonnées du document
    │   └── Caractéristiques structurelles
    │
    ├── Transaction Features
    │   ├── Montants
    │   ├── Dates
    │   └── Parties impliquées
    │
    ├── Contextual Features
    │   ├── Historique des transactions
    │   ├── Profil de risque
    │   └── Patterns temporels
    │
Dense Layers (avec Dropout)
    │
Attention Mechanism
    │
Output Layer (Probabilité de fraude)
```

#### Techniques d'Apprentissage
1. **Apprentissage Supervisé**
   - Classification binaire (frauduleux/légitime)
   - Métriques : Précision, Rappel, F1-Score, AUC-ROC

2. **Apprentissage Semi-supervisé**
   - Utilisation de données non étiquetées
   - Auto-encodeurs pour la détection d'anomalies

3. **Apprentissage par Transfert**
   - Utilisation de modèles pré-entraînés
   - Fine-tuning sur des données spécifiques

### 3. Implémentation

#### Pipeline de Traitement
1. **Extraction des Données**
   ```python
   def extract_document_features(document):
       # OCR et extraction de texte
       text = perform_ocr(document)
       
       # Extraction d'entités
       entities = extract_entities(text)
       
       # Vectorisation
       features = vectorize_features(text, entities)
       
       return features
   ```

2. **Prétraitement**
   ```python
   def preprocess_data(features):
       # Normalisation
       normalized = normalize_features(features)
       
       # Encodage des variables catégorielles
       encoded = encode_categorical(normalized)
       
       # Sélection des caractéristiques
       selected = select_features(encoded)
       
       return selected
   ```

3. **Détection de Fraude**
   ```python
   def detect_fraud(document):
       # Extraction et prétraitement
       features = extract_document_features(document)
       processed = preprocess_data(features)
       
       # Prédiction
       fraud_probability = model.predict(processed)
       
       # Analyse des résultats
       explanation = explain_prediction(fraud_probability)
       
       return {
           'probability': fraud_probability,
           'explanation': explanation,
           'risk_factors': identify_risk_factors(processed)
       }
   ```

### 4. Amélioration Continue

#### Monitoring et Maintenance
- Surveillance des performances du modèle
- Détection de drift dans les données
- Mise à jour régulière avec de nouvelles données
- Ajustement des seuils de détection

#### Feedback Loop
- Intégration des retours des experts
- Validation des faux positifs/négatifs
- Ajustement des caractéristiques
- Réentraînement périodique

## Installation

```bash
# Cloner le repository
git clone https://github.com/your-username/portnet.git

# Installer les dépendances
cd portnet
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés API

# Lancer l'application en développement
npm run dev
```

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
