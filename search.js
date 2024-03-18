function search () {
    let keyWord = document.getElementById("searching");
    let words = ["car", "bus", "sun", "moon"];
    if (words.includes(keyWord)) {
        document.write(words);
    }
    else {
        document.write("not found")
    }
}