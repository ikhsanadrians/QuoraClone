type PostProps = {
    author? : string,
    authorPPUrl? : string,
    authorCredentials? : string,
    question? : string,
    answer? : string,
    thumbnailUrl?: string, 
    postDate? : string,
    upvoteValue?: string,
    commentValue?: number,
    shareValue?: number
}


let thePosts : PostProps[] = [
    {
        author: "John Doe",
        authorPPUrl: "https://example.com/john-doe.jpg",
        authorCredentials: "Software Engineer",
        question: "What is the best programming language for beginners?",
        answer: "Many beginners find Python to be a great language to start with...",
        thumbnailUrl: "https://example.com/beginner-programming.jpg",
        postDate: "2023-08-09",
        upvoteValue: "125",
        commentValue: 32,
        shareValue: 15
    },
    {
        author: "Jane Smith",
        authorPPUrl: "https://example.com/jane-smith.jpg",
        authorCredentials: "Data Scientist",
        question: "How do you preprocess text data for NLP?",
        answer: "Text data preprocessing for NLP involves several steps...",
        thumbnailUrl: "https://example.com/nlp-preprocessing.jpg",
        postDate: "2023-08-08",
        upvoteValue: "98",
        commentValue: 22,
        shareValue: 10
    },
    {
        author: "Alex Johnson",
        authorPPUrl: "https://example.com/alex-johnson.jpg",
        authorCredentials: "UX Designer",
        question: "What are some best practices for mobile app UI design?",
        answer: "Mobile app UI design should prioritize...",
        thumbnailUrl: "https://example.com/mobile-app-ui.jpg",
        postDate: "2023-08-07",
        upvoteValue: "75",
        commentValue: 18,
        shareValue: 8
    }
]

