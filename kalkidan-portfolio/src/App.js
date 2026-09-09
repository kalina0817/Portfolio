import './App.css';

function App() {
  return (
    <div className="App">
      <main className="hero" aria-label="Kalkidan Debassu portfolio introduction">
        <h1>Software Engineer | AI &amp; Machine Learning | Computer Vision</h1>
        <p className="tagline">
          I&apos;m a Computer Science graduate student and Software Engineer
          interested in building practical software and intelligent systems. My
          work combines software engineering with artificial intelligence,
          machine learning, computer vision, and data-driven technologies. I&apos;m
          currently pursuing an M.S. in Computer Science at the University of
          the District of Columbia, with a 4.00/4.00 GPA.
        </p>
        <div className="chips" aria-label="Focus areas">
          <span>Software Engineering</span>
          <span>AI &amp; Machine Learning</span>
          <span>Computer Vision</span>
          <span>Data-Driven Systems</span>
        </div>

        <div className="identity-row" aria-label="Professional profile links">
          <span>Washington, DC</span>
          <a href="mailto:kalkidandebassu@gmail.com">kalkidandebassu@gmail.com</a>
          <a href="https://github.com/kalina0817" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kalkidan-debassu-901671252/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <section className="about-me" aria-label="About Me">
          <h2>About Me</h2>
          <div className="about-grid">
            <div>
              <p>
                My interest in technology started with software engineering and
                has grown into a broader curiosity about how intelligent
                systems can be designed to solve practical problems. I enjoy
                learning how things work, experimenting with new technologies,
                and turning what I learn into projects that I can actually
                build and evaluate.
              </p>
              <p>
                Throughout my academic and professional journey, I&apos;ve worked
                on a variety of projects from software applications and
                database-driven systems to machine learning, computer vision, AI
                decision-support, and intelligent software testing. Each project
                has given me a different perspective on designing systems,
                solving problems, and improving my technical skills.
              </p>
              <p>
                As a graduate student in Computer Science, I&apos;m continuing to
                deepen my understanding of AI, machine learning, data science,
                and software engineering. I&apos;m especially interested in the
                space where these areas come together: building software that is
                technically sound, useful, and capable of addressing real-world
                challenges.
              </p>
              <p>
                I see this portfolio as a reflection of that journey what
                I&apos;ve learned, what I&apos;ve built, and the direction I&apos;m
                continuing to grow toward.
              </p>
            </div>
          </div>
        </section>

        <section className="project-highlight" aria-label="CCT-YOLO Project">
          <h2>CCT-YOLO: Transformer-Enhanced Object Detection</h2>
          <p className="project-meta">
            Deep Learning &middot; Computer Vision &middot; Transformers
            &middot; YOLO
          </p>
          <p>
            CCT-YOLO is a custom object detection system that combines the YOLO
            detection framework with a Compact Convolutional Transformer (CCT)
            backbone. The project explores whether a lightweight
            transformer-based architecture can reduce model complexity while
            maintaining practical object detection performance.
          </p>
          <p><strong>What I Built</strong></p>
          <ul className="project-list">
            <li>Designed and implemented a CCT-based backbone to replace the conventional Darknet-53 architecture used in YOLO.</li>
            <li>Integrated convolutional tokenization and transformer-based self-attention for feature extraction.</li>
            <li>Developed the training and evaluation pipeline using PyTorch.</li>
            <li>Implemented dataset processing, YOLO loss calculation, model training, evaluation, and detection visualization.</li>
            <li>Trained and evaluated the model on the Pascal VOC 2012 dataset across 20 object classes.</li>
            <li>Analyzed model size, parameter count, inference performance, and detection accuracy.</li>
          </ul>
          <p>
            <strong>Results:</strong> The final model contained <strong>1.37
            million parameters</strong> and had a <strong>5.22 MB model
            size</strong>, representing a <strong>97.8% reduction in
            parameters</strong> compared with the baseline architecture. The
            model achieved <strong>21.88% mAP@0.5</strong> on the Pascal VOC
            2012 evaluation.
          </p>
          <p>
            <strong>Technologies:</strong> Python &middot; PyTorch &middot;
            Torchvision &middot; NumPy &middot; Pillow &middot; YOLO &middot;
            Transformers &middot; Deep Learning &middot; Computer Vision
          </p>
          <p>
            <strong>Project Focus:</strong> Transformer-Based Vision &middot;
            Object Detection &middot; Model Efficiency &middot; Deep Learning
            &middot; Computer Vision
          </p>
          <a
            className="project-link"
            href="https://github.com/kalina0817/CCT-YOLO-Real-Time-Object-Detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </section>

        <section className="project-highlight" aria-label="Housing and Iris Project">
          <h2>Housing &amp; Iris Machine Learning Analysis</h2>
          <p className="project-meta">
            Machine Learning | Data Science | Predictive Modeling
          </p>
          <p>
            A practical machine learning project exploring predictive and
            unsupervised learning through housing price analysis and Iris
            dataset classification. The project follows an end-to-end workflow,
            from data preprocessing and feature scaling to model development,
            dimensionality reduction, clustering, and performance evaluation.
          </p>
          <p><strong>Key Highlights</strong></p>
          <ul className="project-list">
            <li>Developed a <strong>Linear Regression model</strong> for housing price prediction.</li>
            <li>Performed data cleaning, missing-value handling, and <strong>IQR-based outlier removal</strong>.</li>
            <li>Applied <strong>MinMaxScaler and StandardScaler</strong> for feature preprocessing.</li>
            <li>Implemented <strong>K-Nearest Neighbors (KNN)</strong> for Iris classification.</li>
            <li>Applied <strong>Principal Component Analysis (PCA)</strong> for dimensionality reduction and feature-space analysis.</li>
            <li>Implemented <strong>K-Means clustering</strong> to identify patterns and natural groupings within the data.</li>
            <li>Evaluated models using <strong>R2, MSE, accuracy, confusion matrix, and silhouette score</strong>.</li>
            <li>Created visualizations to analyze data patterns and communicate model performance.</li>
          </ul>
          <p>
            <strong>Technologies:</strong> Python &middot; Pandas &middot; NumPy
            &middot; Scikit-learn &middot; Matplotlib &middot; Seaborn
          </p>
          <p>
            <strong>Project Focus:</strong> Predictive Modeling &middot;
            Classification &middot; Clustering &middot; Dimensionality Reduction
            &middot; Data Preprocessing &middot; Machine Learning
          </p>
          <a
            className="project-link"
            href="https://github.com/kalina0817/housing-iris-ml-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </section>

        <section className="project-highlight" aria-label="AI Decision Extraction Project">
          <h2>AI Decision Extraction System</h2>
          <p className="project-meta">
            Artificial Intelligence | Machine Learning | Data Science | Decision Support
          </p>
          <p>
            An AI-driven decision-support project that transforms machine
            learning and reinforcement learning outputs into interpretable,
            actionable decisions. The system applies multiple algorithms across
            housing, healthcare, image classification, and reinforcement
            learning tasks, demonstrating how model predictions can be
            translated into rankings, risk assessments, classifications, and
            policy decisions.
          </p>
          <p><strong>Key Highlights</strong></p>
          <ul className="project-list">
            <li>Applied <strong>K-Means clustering</strong> to identify meaningful groups and generate ranked decision outputs.</li>
            <li>Implemented <strong>Lambda-connectedness</strong> for analyzing relationships and structured decision patterns.</li>
            <li>Applied <strong>Support Vector Machines (SVM)</strong> for classification and risk-oriented analysis.</li>
            <li>Used <strong>Neural Networks</strong> for image classification and confidence-based decision extraction.</li>
            <li>Implemented <strong>Q-learning</strong> to derive optimal policies within a reinforcement learning environment.</li>
            <li>Transformed raw model outputs into <strong>rankings, top-k selections, risk categories, and policy decisions</strong>.</li>
            <li>Worked with <strong>California Housing, Breast Cancer Wisconsin, MNIST, and FrozenLake</strong> datasets.</li>
            <li>Focused on <strong>model interpretability and actionable decision extraction</strong> rather than treating predictions as the final output.</li>
          </ul>
          <p>
            <strong>Technologies:</strong> Python &middot; Scikit-learn &middot;
            NumPy &middot; Pandas &middot; Jupyter Notebook &middot; Machine
            Learning &middot; Neural Networks &middot; Reinforcement Learning
          </p>
          <p>
            <strong>Project Focus:</strong> AI Decision Support &middot; Machine
            Learning &middot; Model Interpretability &middot; Predictive
            Analytics &middot; Classification &middot; Clustering &middot;
            Reinforcement Learning
          </p>
          <a
            className="project-link"
            href="https://github.com/kalina0817/AI-Decision-Extraction-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </section>

        <section className="project-highlight" aria-label="ALMP Project">
          <h2>Adaptive Learning-Based Mutation Prioritization (ALMP)</h2>
          <p className="project-meta">
            Machine Learning | Software Testing | Test Optimization | Python
          </p>
          <p>
            An adaptive machine learning framework designed to improve the
            efficiency of mutation testing by intelligently prioritizing
            high-value mutants. Instead of processing mutants uniformly, ALMP
            uses learned patterns to identify and rank mutants with higher
            predicted impact, enabling more effective testing under limited
            processing and computational budgets.
          </p>
          <p><strong>Key Highlights</strong></p>
          <ul className="project-list">
            <li>Developed an ML-based framework for <strong>intelligent mutation prioritization</strong>.</li>
            <li>Ranked mutants according to their predicted testing value rather than processing them randomly.</li>
            <li>Achieved a <strong>75% mutation score compared with 25% for the baseline strategy</strong> in the benchmark scenario.</li>
            <li>Analyzed mutant characteristics and <strong>feature importance</strong> to improve interpretability of prioritization decisions.</li>
            <li>Evaluated <strong>mutation effectiveness, token usage, and cost efficiency</strong> against a baseline workflow.</li>
            <li>Integrated software metrics and machine learning to optimize automated testing workflows.</li>
            <li>Designed the framework to reduce unnecessary processing while prioritizing mutants most likely to improve test effectiveness.</li>
          </ul>
          <p>
            <strong>Technologies:</strong> Python &middot; Scikit-learn &middot;
            Pandas &middot; Matplotlib &middot; Lizard &middot; Tiktoken &middot;
            Jupyter Notebook &middot; Machine Learning
          </p>
          <p>
            <strong>Project Focus:</strong> Intelligent Software Testing
            &middot; Mutation Testing &middot; Machine Learning &middot; Test
            Optimization &middot; Cost-Efficient AI
          </p>
          <a
            className="project-link"
            href="https://github.com/kalina0817/Adaptive-Learning-Based-Mutation-Prioritization--ALMP"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </section>

        <section className="project-highlight" aria-label="Digital ID Card System Project">
          <h2>Digital ID Card System: QR-Based Student Identification and Verification Platform</h2>
          <p className="project-meta">
            Software Engineering | Desktop Application | QR Technology | Digital Identity
          </p>
          <p>
            A digital student identification system designed to replace
            traditional physical student ID cards with a <strong>QR-enabled
            digital identification and verification platform</strong>. The
            system provides students with a convenient digital ID while
            enabling authorized campus personnel to quickly verify student
            identity and access relevant campus services.
          </p>
          <p><strong>Key Highlights</strong></p>
          <ul className="project-list">
            <li>Developed a digital student ID system for <strong>secure and efficient identity verification</strong>.</li>
            <li>Generated <strong>QR-based student identification</strong> to support fast verification.</li>
            <li>Designed student profiles containing identification and academic information.</li>
            <li>Replaced traditional physical ID cards with a centralized digital identification workflow.</li>
            <li>Integrated student ID verification with campus service access, including <strong>meal and cafeteria eligibility</strong>.</li>
            <li>Designed the system to simplify identity management and reduce reliance on manually checking physical credentials.</li>
            <li>Applied software engineering principles to develop a practical solution for a university campus environment.</li>
          </ul>
          <p>
            <strong>Technologies:</strong> Java &middot; Desktop Application
            Development &middot; QR Code Technology &middot; Object-Oriented
            Programming &middot; Software Engineering
          </p>
          <p>
            <strong>Project Focus:</strong> Digital Identity &middot; Student
            Verification &middot; Campus Technology &middot; QR-Based Systems
            &middot; Software Engineering
          </p>
          <a className="project-link" href="#experience">See Related Experience</a>
        </section>

        <section className="project-highlight" aria-label="GLO-SEC Project">
          <h2>GLO-SEC - QR-Based Laptop Security System</h2>
          <p className="project-meta">
            Cybersecurity | Software Engineering | QR Technology | Security Automation
          </p>
          <p>
            A QR-based laptop security system designed to strengthen device
            identification, ownership verification, and recovery processes.
            GLO-SEC combines digital identification with security-focused
            workflows to help users register devices, associate them with
            ownership information, and support verification in the event of
            loss or unauthorized possession.
          </p>
          <p><strong>Key Highlights</strong></p>
          <ul className="project-list">
            <li>Designed a <strong>QR-based device identification and verification system</strong> for laptop security.</li>
            <li>Developed a digital mechanism for associating laptops with registered ownership information.</li>
            <li>Used QR technology to enable fast device identification and verification.</li>
            <li>Designed security workflows to support <strong>lost-device identification and recovery</strong>.</li>
            <li>Applied software engineering principles to develop a practical cybersecurity solution.</li>
            <li>Focused on improving device traceability while reducing reliance on traditional physical identification methods.</li>
          </ul>
          <p>
            <strong>Technologies:</strong> Java &middot; QR Code Technology
            &middot; Object-Oriented Programming &middot; Software Engineering
            &middot; Cybersecurity
          </p>
          <p>
            <strong>Project Focus:</strong> Cybersecurity &middot; Digital
            Identification &middot; Device Security &middot; QR-Based
            Verification &middot; Security Automation
          </p>
          <a className="project-link" href="#experience">See Related Experience</a>
        </section>

        <section className="project-highlight" aria-label="Technical Skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <article className="skill-card">
              <h3>Machine Learning and AI</h3>
              <p>Machine Learning, Deep Learning, Computer Vision, Python, SQL</p>
            </article>
            <article className="skill-card">
              <h3>Data and Modeling</h3>
              <p>
                Predictive Modeling, Feature Engineering, Data Preprocessing,
                Data Analysis
              </p>
            </article>
            <article className="skill-card">
              <h3>Evaluation and Analytics</h3>
              <p>
                Model Evaluation, A/B Testing, Time Series Analysis
              </p>
            </article>
            <article className="skill-card">
              <h3>Data Engineering and Backend</h3>
              <p>
                Data Pipelines, ETL Processes, Database Management Systems,
                REST APIs, Docker
              </p>
            </article>
            <article className="skill-card">
              <h3>MLOps and Delivery</h3>
              <p>
                Data Governance, Cloud Data Warehousing, CI/CD Pipelines,
                Model Deployment, Feature Store Management
              </p>
            </article>
          </div>
        </section>

        <section className="project-highlight" id="experience" aria-label="Professional Experience">
          <h2>Professional Experience</h2>
          <div className="experience-grid">
            <article className="experience-card">
              <h3>AI, Data Science, and Machine Learning Researcher</h3>
              <p className="experience-meta">
                University of the District of Columbia | Washington, DC | 01/2025 - Current
              </p>
              <ul className="project-list">
                <li>Developed machine learning models for predictive analytics and classification tasks using diverse datasets.</li>
                <li>Designed and iterated machine learning approaches to improve predictive accuracy in academic research settings.</li>
                <li>Executed data preprocessing and feature engineering pipelines, ensuring high-quality inputs for effective model training and evaluation.</li>
                <li>Researched and assessed various machine learning algorithms to develop effective solutions for complex technical issues.</li>
                <li>Leveraged Python and TensorFlow for analysis of large datasets, supporting informed decision-making for faculty initiatives.</li>
              </ul>
            </article>

            <article className="experience-card">
              <h3>Concierge</h3>
              <p className="experience-meta">
                A-Class Concierge | 06/2024 - Current
              </p>
              <ul className="project-list">
                <li>Streamlined daily operations by coordinating visitor requests and maintaining clear communication with stakeholders in a fast-paced environment.</li>
                <li>Coordinated reservations and transportation logistics to ensure efficient, high-quality client service.</li>
                <li>Maintained operational records and resolved service requests while managing multiple priorities with professionalism and accuracy.</li>
              </ul>
            </article>

            <article className="experience-card">
              <h3>Software Developer</h3>
              <p className="experience-meta">
                Kimiya Telecom | 09/2022 - 06/2023
              </p>
              <ul className="project-list">
                <li>Built and maintained scalable software features using JavaScript frameworks and RESTful APIs.</li>
                <li>Collaborated with cross-functional teams to translate requirements into maintainable software solutions.</li>
                <li>Diagnosed and resolved software defects to improve system efficiency, reliability, and application stability.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="project-highlight" id="education" aria-label="Education">
          <h2>Education</h2>
          <div className="experience-grid">
            <article className="experience-card">
              <h3>M.S. Computer Science</h3>
              <p className="experience-meta">
                University of the District of Columbia | Washington, DC
              </p>
              <p><strong>Expected 12/2026</strong></p>
              <p><strong>GPA:</strong> 4.00 / 4.00</p>
              <ul className="project-list">
                <li>National Society of Leadership and Success (NSLS) Member.</li>
                <li>Research Project: CCT-YOLO: Compact Convolutional Transformer for Real-Time Object Detection.</li>
                <li>Research Project: Machine Learning Pipeline for Predictive Analytics.</li>
                <li>Research Project: Housing Price Prediction Model.</li>
              </ul>
            </article>

            <article className="experience-card">
              <h3>B.S. Software Engineering</h3>
              <p className="experience-meta">
                Bahir Dar University Institute of Technology | Bahir Dar, Ethiopia
              </p>
              <p><strong>08/2022</strong></p>
              <p><strong>GPA:</strong> 3.32 / 4.00</p>
              <ul className="project-list">
                <li>Research Project: Digital ID Card System (Internship Project).</li>
                <li>Capstone Project: GLO-SEC: Laptop Security and Anti-Theft System, Project Manager.</li>
              </ul>
            </article>

            <article className="experience-card">
              <h3>Certification</h3>
              <p className="experience-meta">
                Microsoft SQL Server DBA &amp; Power BI Professional Program
              </p>
              <p>Baro Technologies | October - December 2023</p>
            </article>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
