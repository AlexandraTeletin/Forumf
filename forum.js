var defaultThreads = [
    {
        id: 1,
        title: "Chat1: Oferă feedback legat de experiența ta pe portalul Digital Deal",
        author: "Student",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Alexandra",
                date: Date.now(),
                content: "Bună, Andrei! Ești student la politehnică? Ai vrea să facem un echipa la hackathon-ul despre care am văzut pe Digital Deal?"
            },
            {
                author: "Sorina",
                date: Date.now(),
                content: "Hei, Damian! Cum a fost la internship la SoftGlobal?"
            }
        ]
    },
    {
        id: 2,
        title: "Chat1: Oferă feedback legat de experiența ta pe portalul Digital Deal",
        author: "Student",
        date: Date.now(),
        content: "Chat content 2",
        comments: [
            {
                author: "Student",
                date: Date.now(),
                content: "Bună tuturor!"
            },
            {
                author: "Cristina",
                date: Date.now(),
                content: "Hei, Damian! Cum a fost la internship la SoftGlobal?"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}