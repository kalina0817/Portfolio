import './App.css';

function App() {
  return (
    <div className="App">
      <main className="hero" aria-label="Kalkidan Debassu portfolio introduction">
        <h1>Software Engineer | AI &amp; Machine Learning | Computer Vision</h1>
        <p className="tagline">
          Graduate Computer Science student with a strong foundation in
          software engineering, artificial intelligence, machine learning, and
          data-driven application development. Experienced in designing and
          implementing practical software and AI solutions using Python, Java,
          PyTorch, Scikit-learn, and REST APIs. Academic and project experience
          includes machine learning, computer vision, intelligent decision
          systems, software testing, and data analysis. Currently pursuing an
          M.S. in Computer Science while developing technically rigorous
          projects that bridge academic research with real-world applications.
          Passionate about building reliable, intelligent, and scalable
          software systems and applying emerging technologies to solve complex
          problems.
        </p>
        <div className="chips" aria-label="Focus areas">
          <span>Software Engineering</span>
          <span>AI &amp; Machine Learning</span>
          <span>Computer Vision</span>
          <span>Data-Driven Systems</span>
        </div>

        <div className="identity-row" aria-label="Professional profile links">
          <span>Washington, DC</span>
          <a href="mailto:kalinamulugeta0817@gmail.com">kalinamulugeta0817@gmail.com</a>
          <a href="https://github.com/kalina0817" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kalkidan-debassu-901671252/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <section className="about-me" aria-label="About Me">
          <h2>About Me</h2>
          <div className="about-grid">
            <div>
              <p>
                I am a graduate student in Computer Science with a background
                in software engineering and a strong interest in building
                intelligent, reliable, and practical technology. My work sits
                at the intersection of software development, artificial
                intelligence, machine learning, computer vision, and
                data-driven systems.
              </p>
              <p>
                Throughout my academic and professional experience, I have
                developed software applications, machine learning models,
                AI-driven solutions, and software testing systems that address
                practical problems. I enjoy taking an idea from research and
                experimentation through implementation, evaluation, and
                refinement, with a focus on creating solutions that are both
                technically sound and useful in real-world environments.
              </p>
              <p>
                I am currently pursuing my M.S. in Computer Science, where I
                continue to strengthen my expertise through advanced
                coursework, research, and hands-on projects. My interests
                include AI/ML, computer vision, intelligent systems, data
                engineering, and software engineering.
              </p>
              <p>
                Beyond individual projects, I value continuous learning,
                thoughtful problem-solving, and the ability to turn complex
                technical challenges into clear, scalable solutions. I am
                particularly interested in opportunities where I can contribute
                to meaningful software and AI products while continuing to grow
                as an engineer and technology professional.
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
            <strong>Machine Learning | Predictive Modeling | Data Analysis | PCA | Clustering</strong>
          </p>
          <p>
            This project applies supervised and unsupervised machine learning
            techniques to two fundamentally different datasets: a real-world
            American housing dataset and the Iris benchmark dataset. The goal
            was to build an end-to-end machine learning workflow from data
            preparation and exploratory analysis to model development,
            evaluation, and interpretation while comparing how different
            algorithms perform across real-world and structured data.
          </p>
          <p>
            The project demonstrates practical experience with regression,
            classification, dimensionality reduction, clustering, statistical
            evaluation, and data visualization using Python and Scikit-learn.
          </p>
          <p><strong>The Problem</strong></p>
          <p>
            Machine learning models are only as effective as the data and
            methodology behind them. Real-world datasets often contain missing
            values, inconsistent data types, outliers, geographic variation,
            and complex relationships between variables.
          </p>
          <ul className="project-list">
            <li><strong>Housing:</strong> Can property and socioeconomic characteristics be used to predict and classify housing prices and identify meaningful market segments?</li>
            <li><strong>Iris:</strong> How effectively can machine learning distinguish flower species using measurable physical characteristics?</li>
          </ul>
          <p>
            Using both datasets provided an opportunity to evaluate machine
            learning techniques under very different levels of complexity.
          </p>
          <p><strong>Approach</strong></p>
          <p>
            Data Preparation -&gt; Exploratory Analysis -&gt; Feature Analysis -&gt;
            Model Development -&gt; Evaluation -&gt; Dimensionality Reduction -&gt;
            Clustering -&gt; Interpretation.
          </p>
          <p>
            For the housing dataset, I cleaned missing and invalid values,
            converted numerical fields into usable formats, and removed extreme
            observations using the IQR method. The analysis intentionally
            retained the original, non-normalized values to preserve real-world
            interpretability.
          </p>
          <p>
            For the Iris dataset, the clean benchmark data required
            substantially less preprocessing, allowing the focus to shift
            toward model performance and feature relationships.
          </p>
          <p><strong>Machine Learning Models</strong></p>
          <p><strong>Housing Price Prediction</strong></p>
          <p>
            I developed an <strong>Ordinary Least Squares Linear
            Regression</strong> model using seven numerical features, including
            beds, baths, living space, zip-code density, median household
            income, latitude, and longitude. The model achieved a reported
            <strong>R2 of 0.548</strong> with a reported
            <strong>MSE of 0.0143</strong>.
          </p>
          <ul className="project-list">
            <li>Living space was the strongest positive predictor of price.</li>
            <li>Income, bathrooms, and bedrooms also contributed positively.</li>
            <li>Geographic variables revealed additional regional pricing patterns.</li>
            <li>Residual analysis showed stronger performance in mid-range prices than extreme values.</li>
          </ul>
          <p><strong>Housing Price Classification</strong></p>
          <p>
            I transformed housing prices into four quartile-based categories
            and applied <strong>K-Nearest Neighbors (KNN)</strong> with
            <strong>k = 5</strong>. The classifier achieved
            <strong>67.06% accuracy</strong>. Performance was strongest in
            extreme price categories, with more confusion in neighboring
            middle-price groups.
          </p>
          <p><strong>Housing Market Segmentation</strong></p>
          <p>
            To explore patterns without predefined labels, I applied
            <strong>K-Means clustering with four clusters</strong>.
          </p>
          <ul className="project-list">
            <li>Luxury/high-value properties</li>
            <li>Mid-range markets</li>
            <li>Budget/affordable markets</li>
            <li>Urban compact markets</li>
          </ul>
          <p>
            Clustering achieved a <strong>silhouette score of 0.388</strong>,
            indicating moderate separation between groups.
          </p>
          <p><strong>Dimensionality Reduction</strong></p>
          <p>
            I used <strong>Principal Component Analysis (PCA)</strong> to
            reduce the seven-dimensional housing feature space to three
            principal components while retaining approximately
            <strong>70% of total variance</strong>. This made structure and
            relationships easier to visualize and interpret.
          </p>
          <p><strong>Iris Classification and Analysis</strong></p>
          <p>
            The Iris dataset contains 150 well-structured samples across three
            species. Using <strong>KNN (k = 5)</strong>, the model achieved
            <strong>100% test accuracy</strong> (30/30 correct). Five-fold
            cross-validation produced average accuracy around
            <strong>96-97%</strong>, showing strong and consistent
            performance.
          </p>
          <p>
            PCA showed that approximately <strong>99.5% variance</strong>
            could be represented with three principal components. Setosa was
            clearly separated, while Versicolor and Virginica had slight
            overlap. K-Means clustering with <strong>k = 3</strong> achieved a
            <strong>silhouette score of 0.509</strong>, aligning well with
            species labels.
          </p>
          <p><strong>Results</strong></p>
          <ul className="project-list">
            <li>Housing Price Prediction (Linear Regression): <strong>R2 = 0.548</strong></li>
            <li>Housing Price Classification (KNN, k=5): <strong>67.06% accuracy</strong></li>
            <li>Housing Clustering (K-Means, k=4): <strong>Silhouette = 0.388</strong></li>
            <li>Housing PCA (3 components): <strong>~70% variance</strong></li>
            <li>Iris Classification (KNN, k=5): <strong>100% test accuracy</strong></li>
            <li>Iris PCA (3 components): <strong>~99.5% variance</strong></li>
            <li>Iris Clustering (K-Means, k=3): <strong>Silhouette = 0.509</strong></li>
          </ul>
          <p><strong>Key Findings</strong></p>
          <p>
            The project highlighted the difference between clean benchmark
            datasets and real-world data. Iris produced very strong results
            because classes are well separated and the dataset is highly
            structured. Housing data introduced more variability and complex
            relationships, yielding more moderate predictive performance.
          </p>
          <ul className="project-list">
            <li>Real-world machine learning requires significant data preparation.</li>
            <li>Simple models can provide valuable and interpretable baselines.</li>
            <li>KNN performs especially well when classes are naturally separated.</li>
            <li>PCA reveals structure while reducing dimensionality.</li>
            <li>K-Means can uncover useful segments without predefined labels.</li>
            <li>Combining quantitative metrics with visualization improves interpretation.</li>
          </ul>
          <p><strong>Limitations and Future Improvements</strong></p>
          <p>
            The housing analysis could be improved through additional feature
            engineering and more advanced models, including property age, lot
            size, school ratings, temporal factors, spatial features, and
            interaction terms such as beds x baths. Future modeling can
            evaluate Random Forest, XGBoost, LightGBM, neural networks,
            ensemble approaches, and systematic hyperparameter optimization.
          </p>
          <p>
            For Iris, further model comparisons can include SVM, Logistic
            Regression, Decision Trees, Random Forest, and neural networks to
            examine behavior on highly separable data.
          </p>
          <p>
            <strong>Technologies:</strong> Python &middot; Pandas &middot; NumPy
            &middot; Scikit-learn &middot; Matplotlib &middot; Seaborn
          </p>
          <p><strong>Outcome</strong></p>
          <p>
            This project strengthened my ability to develop machine learning
            solutions beyond simply training a model. I worked through the
            complete analytical process: preparing imperfect data, selecting
            algorithms, evaluating performance, interpreting results,
            identifying limitations, and translating quantitative findings into
            meaningful insights.
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
