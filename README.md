# PharmaMind

PharmaMind is an AI-powered Intelligent Healthcare Workflow Orchestrator designed to assist pharmacists and healthcare professionals in managing prescriptions and diagnostic processes efficiently. The system integrates OCR for prescription processing, medical named entity recognition, and medical image analysis to provide a comprehensive AI-driven solution.

## Features

* **User Authentication:** Secure login and registration.
* **Prescription OCR & Named Entity Recognition (NER):** Extracts and structures information from handwritten prescriptions.
* **Medical Image Analysis:** AI-driven classification for disease detection.
* **Interactive Dashboard:** User-friendly interface for managing prescriptions and medical analyses.
* **Secure Data Storage:** Stores extracted data and analysis results in MongoDB.
* **FastAPI Integration:** Exposes AI functionalities via REST APIs.
* **Automated Reports:** Generates structured reports from AI analyses.

## Tech Stack

### Frontend:
* React + TypeScript
* TailwindCSS
* Vite

### Backend:
* FastAPI (Python)
* MongoDB (Self-hosted / Atlas Free Tier)
* Tesseract OCR (for text extraction)
* SpaCy/BERT (for medical NER)
* CNN-based Model (for medical image classification)

## Setup Instructions

1. **Clone the repository:**

```sh
git clone https://github.com/tanishadixit0206/PharmaMind.git
cd PharmaMind
```

2. **Backend Setup:**
   * Create and activate a virtual environment:

```sh
cd backend
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

   * Install Python dependencies:

```sh
pip install -r requirements.txt
```

   * Start the FastAPI server:

```sh
uvicorn main:app --reload
```

3. **Frontend Setup:**
   * Install Node.js dependencies:

```sh
cd frontend
npm install
```

   * Start the frontend server:

```sh
npm run dev
```

## Future Enhancements

* **AI Orchestrator (Central Brain):** Implement a comprehensive workflow management system that coordinates between different diagnostic modules, prioritizes cases based on urgency, maintains context across multiple patient interactions, and proactively suggests next steps in the diagnostic process.

* **End-to-End Diagnostic Pipeline:** Expand the system to manage the complete flow of information between different diagnostic tools while ensuring nothing falls through the cracks in the diagnostic process.

* **Proactive Case Management:** Develop capabilities to track and manage follow-ups, automatically flag critical conditions, and suggest when additional tests might be needed based on initial findings.

* **Healthcare Systems Integration:** Build robust connectors for FHIR-based EHR systems to enable seamless information exchange with existing hospital infrastructure.

* **Advanced Symptom Analysis:** Create a knowledge graph-based system that can process patient symptoms (via structured forms or voice inputs) and correlate them with possible diagnoses and treatment options.

* **Contextual Decision Support:** Enhance the system to maintain an ongoing dialogue with healthcare providers, offering context-aware suggestions based on patient history and current status.

* **Resource Optimization:** Implement algorithms to help allocate healthcare resources efficiently, particularly valuable in resource-constrained settings.

* **Explainable AI:** Incorporate LIME/SHAP techniques to provide rationale for AI decisions, building trust with healthcare professionals.

* **Active Learning Framework:** Design feedback loops that allow the system to continuously improve from real-world usage and expert corrections.

* **Multi-modal Input Processing:** Expand beyond visual inputs to include voice commands, natural language queries, and integration with medical devices.

* **Deployment & Scaling:** Develop a microservices architecture using Docker and Kubernetes for scalable, secure deployment across different healthcare environments.

## Contributions

We welcome contributions and feedback to improve PharmaMind. Feel free to submit issues, feature requests, and pull requests on our GitHub repository.

## Contact

For queries and contributions, reach out via:
* **Email:** dixittanisha02@gmail.com
* **GitHub:** TanishaDixit0206

## License

This project is licensed under the MIT License.
