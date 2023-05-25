var api_key = "fa9955026f6047e6af203cee4189be8e"; 
if (document.title == "Business") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=" + api_key;    
}
else if (document.title == "Entertainment") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=" + api_key;
}
else if (document.title == "General") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=" + api_key;
}
else if (document.title == "Health") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=" + api_key;
}
else if (document.title == "Science") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=" + api_key;
}
else if (document.title == "Sports") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=" + api_key;
}
else if (document.title == "Technology") {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=" + api_key;
}
else {
    var api_url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + api_key;
}


async function getapi(url) {

    var count = "news";
    var count2 = "link";
    // Storing response
    const response = await fetch(url);
                    
    // Storing data in form of JSON
    var data = await response.json();
    for (let index = 1; index < 11; index++) {
        document.getElementById(count + index).innerHTML = data['articles'][index].title;
        document.getElementById(count2 + index).href = data['articles'][index].url;
    }
    if (document.title == "Home") {
        var count3 = "sliderNews";
        for (let index = 0; index < 4; index++) {
            document.getElementById(count3 + index).innerHTML = data['articles'][index].title;
            
        }
    }
}

document.body.onload= function() {getapi(api_url)};