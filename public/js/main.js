function webload(link) {
    switch (link) {
        case "linkedin":
            window.open("https://www.linkedin.com/in/ryan-malonzo/", "_blank");
            break;
        case "github":
            window.open("https://github.com/yusa-ai", "_blank");
            break;
        case "curriculum":
            window.open("Ryan_Malonzo_CV.pdf", "_blank");
            break;
        default:
            console.log("Switch value error");
    }
}