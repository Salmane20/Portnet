# PORTNET - Système de Détection de Fraude

## 🚀 Aperçu

PORTNET est une application web moderne conçue pour la détection de fraude dans les documents d'importation et les formulaires réglementaires. Elle utilise l'intelligence artificielle et le machine learning pour analyser et détecter les anomalies dans les documents commerciaux.

## 🛠 Stack Technique

### Frontend
- **Framework Principal**: React 18 avec TypeScript
- **Routage**: React Router v6
- **Styling**: 
  - Tailwind CSS
  - Shadcn/ui pour les composants
  - Framer Motion pour les animations
- **State Management**: React Query
- **Charts & Visualisations**: Recharts

### Backend & API
- **API IA**: Google Gemini Pro
- **Authentification**: JWT (préparé pour l'implémentation)
- **API Documentation**: OpenAPI/Swagger (prévu)

### DevOps & Déploiement
- **Build Tool**: Vite
- **Hébergement**: Vercel
- **CI/CD**: Vercel CI/CD Pipeline
- **Environnement**: Node.js

## 🔧 Installation

1. Clonez le repository
```bash
git clone https://github.com/votre-username/portnet.git
cd portnet
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env.local
```
Ajoutez votre clé API Gemini dans le fichier .env.local :
```
VITE_GEMINI_API_KEY=votre_clé_api
```

4. Lancez l'application en mode développement
```bash
npm run dev
```

## 🤖 Implémentation du Modèle ML pour la Détection de Fraude

### Architecture Recommandée

1. **Prétraitement des Documents**
   - OCR (Optical Character Recognition) pour extraire le texte des documents scannés
   - NLP (Natural Language Processing) pour normaliser et structurer les données
   - Extraction d'entités nommées pour identifier les informations clés

2. **Feature Engineering**
   - Extraction des caractéristiques numériques et catégorielles
   - Création de features temporelles pour détecter les anomalies de séquence
   - Analyse des relations entre entités commerciales

3. **Modèle de Détection**
   - **Approche Hybride**:
     - Modèle supervisé pour les patterns connus de fraude
     - Détection d'anomalies non supervisée pour les nouveaux types de fraude
     - Système de règles métier pour les vérifications réglementaires

4. **Composants du Modèle**:
   ```python
   # Exemple d'architecture recommandée
   class FraudDetectionSystem:
       def __init__(self):
           self.document_processor = DocumentProcessor()
           self.feature_extractor = FeatureExtractor()
           self.supervised_model = SupervisedDetector()
           self.anomaly_detector = AnomalyDetector()
           self.rules_engine = BusinessRulesEngine()

       def process_document(self, document):
           # Extraction et prétraitement
           text = self.document_processor.extract_text(document)
           features = self.feature_extractor.extract_features(text)

           # Analyse multi-niveaux
           supervised_score = self.supervised_model.predict(features)
           anomaly_score = self.anomaly_detector.detect(features)
           rules_violations = self.rules_engine.check(features)

           return self.combine_scores(supervised_score, anomaly_score, rules_violations)
   ```

### Modèles Recommandés

1. **Détection Supervisée**:
   - XGBoost ou LightGBM pour leur performance sur les données structurées
   - BERT ou RoBERTa fine-tuné pour l'analyse textuelle
   - Réseaux de neurones pour la détection de motifs complexes

2. **Détection d'Anomalies**:
   - Isolation Forest pour les anomalies ponctuelles
   - LSTM Autoencoders pour les anomalies séquentielles
   - One-Class SVM pour la détection de nouveautés

3. **Règles Métier**:
   - Système expert basé sur les règles du domaine
   - Vérifications de cohérence des données
   - Validation des contraintes réglementaires

### Pipeline d'Entraînement

```python
# Exemple de pipeline d'entraînement
def train_fraud_detection_model(data):
    # Prétraitement
    preprocessed_data = preprocess_documents(data)
    features = extract_features(preprocessed_data)

    # Division des données
    train_data, test_data = train_test_split(features, test_size=0.2)

    # Entraînement des modèles
    supervised_model.train(train_data)
    anomaly_detector.fit(train_data)
    rules_engine.update_rules(domain_rules)

    # Validation
    evaluate_model(test_data)
```

### Métriques d'Évaluation

- Precision et Recall pour la détection de fraude
- AUC-ROC pour la performance globale
- F1-Score pour l'équilibre entre précision et rappel
- Temps de traitement par document
- Taux de faux positifs et faux négatifs

## 📈 Maintenance et Amélioration Continue

1. **Collecte de Données**:
   - Mise en place d'un système de feedback
   - Annotation continue des nouveaux cas
   - Enrichissement de la base d'apprentissage

2. **Monitoring**:
   - Suivi des performances en production
   - Détection de drift des données
   - Alertes sur les anomalies système

3. **Mise à Jour du Modèle**:
   - Retraining périodique
   - Ajustement des hyperparamètres
   - Intégration des nouveaux patterns de fraude

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez `CONTRIBUTING.md` pour les directives de contribution.

## 📞 Support

Pour toute question ou assistance :
- Email: contact@portnet.ma
- Site web: www.portnet.ma
- Support technique: support@portnet.ma
