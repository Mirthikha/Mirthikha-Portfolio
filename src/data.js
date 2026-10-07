// All content comes from the resume. Edit this file to update the site.
export const profile = {
  name: 'Mirthikha N S',
  headline: 'AI & Data Science student building machine learning and computer vision systems',
  intro:
    "I'm a third-year B.Tech student in Coimbatore. I build ML projects end to end, from CNN-based detection to multi-agent LLM pipelines, and I care about whether they hold up outside the notebook.",
  email: 'mirthi1303@gmail.com',
  phone: '+91-8778600868',
  location: 'Coimbatore, Tamil Nadu',
  github: 'https://github.com/Mirthikha',
  linkedin: 'https://linkedin.com/in/mirthikha-n-s',
}

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export const about = [
  "I'm studying AI & Data Science at V.S.B College of Engineering Technical Campus and have spent the last year building in deep learning, computer vision and predictive modeling. I also write Python, Java and C, and I'm comfortable with SQL database concepts.",
  'The projects I enjoy most are the ones where the model has to cope with messy conditions: a drowsiness detector that dropped from 99.95% to 58.52% on live video, a ranking system that had to run offline in five minutes, an LLM pipeline that had to stay crash-free when the model returned bad output.',
  'Alongside coursework I have completed four remote ML/AI internships, presented a paper at a national conference, and taken part in several hackathons.',
]

export const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'C', 'SQL', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'AI / ML', items: ['CNNs', 'Linear Regression', 'Logistic Regression', 'SVM', 'K-Means Clustering', 'Feature Engineering', 'Data Preprocessing', 'Model Evaluation (RMSE, R²)', 'Confusion Matrix'] },
  { title: 'Frameworks & libraries', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'Sentence Transformers', 'FastAPI', 'Django', 'Flask', 'React'] },
  { title: 'Data & visualization', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'] },
  { title: 'APIs & databases', items: ['Google Gemini API', 'Firebase', 'SQL'] },
  { title: 'Tools', items: ['Streamlit', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook', 'PyCharm', 'Technical documentation'] },
]

// Array order is display order: strongest first. `tier` controls visual weight.
export const projects = [
  {
    tier: 'featured',
    title: 'CivicMind: multi-agent civic intelligence platform',
    summary: 'Turns raw city complaints into routed, prioritised and explainable actions for officials.',
    built: 'A multi-agent pipeline on FastAPI and Google Gemini that routes each complaint to the right official, estimates a resolution budget, writes an explainable justification and assigns an SLA target.',
    deep: [
      'A self-correction layer audits raw LLM output and auto-heals schema errors before anything is written to Firebase, so the UI never crashes on a bad response.',
      'A classification flow detects life-threatening emergency reports and triggers high-priority alerts on dispatch boards.',
      'An executive dashboard clusters complaints that share a root cause, for example water pipe leaks causing road damage.',
    ],
    result: 'Shortlisted in the Top 100 finalists across APAC in the Google Cloud Gen AI Hackathon (Cohort 2).',
    stack: ['Python', 'FastAPI', 'Gemini API', 'Firebase', 'Multi-agent'],
    links: [{ label: 'Live site', href: 'https://civicmind-ai-platform.onrender.com' }],
  },
  {
    tier: 'major',
    title: 'Intelligent Candidate Ranking System',
    summary: 'Ranks candidates against a job description while filtering out spam, fake and copied resumes.',
    built: 'A resume scoring engine that converts profiles and job descriptions into semantic embeddings and ranks applicants by cosine similarity.',
    deep: [
      'Runs 100% offline within a strict 5-minute window, using multi-process CPU chunking and local model caching on high-volume batches.',
      'MinHash and Locality-Sensitive Hashing remove mass-copied resumes and template clones in milliseconds.',
      'Flags honeypots and invalid profiles from red flags such as unverified institutions, suspicious metadata and impossible skill claims.',
    ],
    stack: ['Python', 'Sentence Transformers', 'Embeddings', 'Cosine similarity', 'MinHash / LSH', 'React'],
    links: [{ label: 'Live demo', href: 'https://intelligent-candidate-discovery-ranking-system-3jlsjnab3zbntuu.streamlit.app' }],
  },
  {
    tier: 'major',
    title: 'Driver Drowsiness Detection System',
    summary: 'A CNN drowsiness detector, and a case study in why validation accuracy is not deployment accuracy.',
    built: 'A TensorFlow and OpenCV detection model trained on static images, then tested on live video.',
    deep: [
      'Reached 99.95% validation accuracy on static images, then measured 58.52% on live video and diagnosed it as a distribution shift.',
      'Added temporal post-processing that smooths frame-level predictions to cut false-positive alerts.',
    ],
    stack: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mirthikha/Driver-drowsiness-detection' }],
  },
  {
    tier: 'major',
    title: 'Train Journey Duration Predictor',
    summary: 'Predicts train journey durations from journey parameters in an interactive Streamlit app.',
    built: 'An end-to-end pipeline: three Linear Regression models trained on different feature sets, the most accurate finalized and served in Streamlit.',
    deep: ['Reached an R² of 0.698, explaining about 70% of the variance in the transit scheduling data.'],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mirthikha/train-journey-duration-prediction' }],
  },
  {
    tier: 'minor',
    title: 'Image Captioning AI',
    summary: 'Extracts visual features with a pre-trained ResNet and generates captions with an LSTM decoder.',
    stack: ['Python', 'CNN', 'ResNet', 'LSTM'],
  },
  {
    tier: 'minor',
    title: 'University Admission Assistant Chatbot',
    summary: 'A rule-based Django chatbot with an HTML, CSS and JavaScript chat interface that answers common admission questions in real time.',
    stack: ['Python', 'Django', 'JavaScript'],
  },
  {
    tier: 'minor',
    title: 'Unbeatable Tic-Tac-Toe',
    summary: 'Minimax with backtracking in Python, with a Flask frontend.',
    stack: ['Python', 'Flask', 'Minimax'],
  },
]

export const experience = [
  {
    role: 'Artificial Intelligence Intern', org: 'Codsoft', period: 'June 2026', mode: 'Remote',
    points: [
      'Built a rule-based university admission chatbot with Python and Django and a JavaScript chat interface.',
      'Built an image captioning system using a pre-trained ResNet and an LSTM decoder.',
      'Implemented an unbeatable Tic-Tac-Toe AI with the Minimax algorithm and a Flask frontend.',
    ],
  },
  {
    role: 'Machine Learning Intern', org: 'Sysslan IT Solutions', period: 'Dec 2025 to Jan 2026', mode: 'Remote',
    points: [
      'Built the Train Journey Duration Predictor, an end-to-end Linear Regression pipeline with a Streamlit app.',
      'Compared three models with different features and finalized the most accurate one (R² 0.698).',
    ],
  },
  {
    role: 'Machine Learning Intern', org: 'Profenaa Technologies', period: 'June to July 2025', mode: 'Remote',
    points: [
      'Wrote a salary prediction script using scikit-learn linear and logistic regression models.',
      'Used matplotlib scatter plots, trend lines and box plots to study feature distributions, which improved the regression fit.',
    ],
  },
  {
    role: 'Machine Learning Intern', org: 'Prodigy InfoTech', period: 'June 2025', mode: 'Remote',
    points: [
      'Built a hand gesture recognition system (TensorFlow, SVM image classifier) and a house price prediction model with linear regression.',
      'Received an official Letter of Recommendation for rapid learning and meeting deadlines.',
    ],
  },
]

export const education = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  school: 'V.S.B College of Engineering Technical Campus, Coimbatore',
  period: '2024 to 2028',
  cgpa: 'CGPA 9.04 / 10.0',
}

export const achievements = [
  { title: 'Google Cloud Gen AI Hackathon (Cohort 2)', text: 'Top 100 finalist across APAC for CivicMind.' },
  { title: 'National conference paper', text: 'Presented "Multi-Modal Journey Optimization" at a national-level conference at V.S.B College of Engineering Technical Campus.' },
  { title: 'Hackathons', text: 'KPR Inter-College Hackathon, Google Cloud Gen AI Hackathon, India Runs Hackathon.' },
  { title: 'Infosys Springboard', text: 'NLP, Deep Learning, Generative AI, Computer Vision 101, Robotic Process Automation, Python Data Structures & Algorithms.' },
  { title: 'Academic', text: 'Centum in Computer Science in the Class XI board examinations.' },
]
