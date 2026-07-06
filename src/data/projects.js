const projects = [
  {
    id: 1,
    title: "Distributed LLaMA Inference System",
    duration: "Feb 2026 – Apr 2026",
    organization: "RKMVERI",

    description:
      "A distributed inference framework that enables multiple CPU-based systems to collaboratively execute Large Language Model inference over a Local Area Network using a Master–Worker architecture. The system reduces memory usage, improves inference speed, and provides scalable local AI deployment without requiring GPUs.",

    technologies: [
      "Python",
      "PyTorch",
      "LLaMA",
      "Distributed Computing",
      "Networking",
      "CPU Parallelism",
    ],

    github:
      "https://github.com/Arkadip-Kansabanik/Distributed-LLaMA-Inference-System",

    demo: "",

    image: "/projects/llama.png",

    category: "Distributed Computing",

    status: "Completed",

    imageLabel: "LLM"
  },

  {
    id: 2,

    title: "AI-Powered Enterprise Log Intelligence System",

    duration: "Feb 2026 – Apr 2026",

    organization: "RKMVERI",

    description:
      "An enterprise log intelligence platform powered by Semantic Search, Retrieval-Augmented Generation (RAG), Large Language Models, and Artificial Intelligence. The system performs anomaly detection, semantic log retrieval, root cause analysis, and intelligent incident reasoning.",

    technologies: [
      "Python",
      "LLM",
      "RAG",
      "LangChain",
      "FAISS",
      "Semantic Search",
      "NLP",
    ],

    github:
      "https://github.com/Arkadip-Kansabanik/AI-Powered-Enterprise-Log-Intelligence-System",

    demo: "",

    image: "/projects/log-ai.png",

    category: "Generative AI",

    status: "Completed",

    imageLabel: "RAG"
  },

  {
    id: 3,

    title: "Plant Disease Prediction using CNN",

    duration: "Feb 2026 – Apr 2026",

    organization: "RKMVERI",

    description:
      "A Deep Learning based image classification system that detects healthy and diseased plant leaves using Convolutional Neural Networks. The model classifies multiple plant diseases with high accuracy from leaf images.",

    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "Deep Learning",
      "OpenCV",
    ],

    github:
      "https://github.com/Arkadip-Kansabanik/Plant-Disease-Prediction-using-CNN-Image-Classifier",

    demo: "",

    image: "/projects/plant.png",

    category: "Deep Learning",

    imageLabel: "CNN"
  },

  {
    id: 4,

    title: "Spam Email Detection",

    duration: "Oct 2025 – Dec 2025",

    organization: "RKMVERI",

    description:
      "A Machine Learning and Natural Language Processing based spam classifier that uses TF-IDF feature extraction and multiple supervised learning algorithms to accurately classify Spam and Ham messages.",

    technologies: [
      "Python",
      "Machine Learning",
      "TF-IDF",
      "NLP",
      "Scikit-Learn",
    ],

    github:
      "https://github.com/Arkadip-Kansabanik/Spam-Email-Detection-using-Machine-Learning-Algorithms",

    demo: "",

    image: "/projects/spam.png",

    category: "Machine Learning",

    imageLabel: "NLP"
  },

  {
    id: 5,

    title:
      "Data Encryption through Encoding of High and Moderate Plaintext Information Blocks",

    duration: "Feb 2025 – May 2025",

    organization: "RKMRC",

    description:
      "An intelligent image encryption framework integrating Machine Learning with cryptography. The system classifies image blocks using K-Means, SVM, Random Forest, and KNN before applying chaos-based encryption to improve security and computational efficiency.",

    technologies: [
      "Python",
      "Machine Learning",
      "Cryptography",
      "K-Means",
      "Random Forest",
      "SVM",
      "KNN",
    ],

    github:
      "https://github.com/Arkadip-Kansabanik/Data-encryption-through-the-encoding-of-high-and-moderate-plaintext-information-blocks",

    demo: "",

    image: "/projects/encryption.png",

    category: "Machine Learning & Cryptography",

    imageLabel: "Security"
  },
];

export default projects;