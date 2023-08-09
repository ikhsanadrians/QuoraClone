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


let PostData : PostProps[] = [
    {
        author:"Faris Maulana Al-Bai",
        authorCredentials:"Unity Game Developer Di Agate Indonesia  ·  7 Agustus",
        postDate: "7 Agustus",
        authorPPUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1691343076/imageedit_1_9296104578_cj4e4u.png",
        question: "Apa strategi terbaik untuk Menjadi Game Developer",
        thumbnailUrl: "https://binus.ac.id/wp-content/uploads/2020/10/44-0-Tertarik-Jadi-Game-Developer-Profesional-Jurusan-Kuliah-Ini-Cocok-Untukmu.jpg",
        upvoteValue: "1.2rb",
        commentValue: 125,
        shareValue: 56,
        answer: "Menjadi seorang pengembang game adalah tujuan yang menarik, tetapi juga memerlukan komitmen, keterampilan, dan usaha yang serius. Berikut adalah beberapa strategi yang dapat membantu Anda dalam perjalanan untuk menjadi seorang pengembang game",
    },
    {
        author: "Ardiyan Syahbani",
        authorCredentials: "Sound Engineer Syncronize Fest Sejak 2018  ·  5 Agustus",
        postDate: "7 Agustus",
        authorPPUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1691344285/WhatsApp_Image_2022-03-27_at_09.17.06_uj3ue8.jpg",
        question: "Pribadi terkenal mana yang diidolakan dan dikenal dalam sejarah yang sebenarnya adalah seorang yang mengerikan?",
        answer: "Hadirin sekalian, saya persembahkan kepada Anda John Lennon:",
        thumbnailUrl: "https://qph.cf2.quoracdn.net/main-qimg-2804660e569b8607bb36c78746f279bd-lq",
        upvoteValue: "1.2rb",
        commentValue: 125,
        shareValue: 56
    },
   
]


export default PostData
