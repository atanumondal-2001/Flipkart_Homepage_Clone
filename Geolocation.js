let locButton = document.getElementById("loc_btn");
let locOutput = document.getElementById("locationOut");

locButton.addEventListener("click", () => {
    //inbuild js function to get location latitude and longitude

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLoc, checkError);
    } else {
        locOutput.innerText = "Browser Not Supported";
    }
});

//Error Checking....
const checkError = () => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locOutput.innerText = "Allow access to Location";
            break;
        case error.POSITION_UNAVAILABLE:
            locOutput.innerText = "Location Unavailable";
            break;
        case error.TIMEOUT:
            locOutput.innerText = "Time-Out!!"
    }
};

const showLoc = async(position) => {
    let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
    );

    let data = await response.json();
    console.log(data);
    console.log(data.address.state_district);
    console.log(data.address.state);
    console.log(data.address.country_code);

    locOutput.innerHTML = `<span class=OutPut><b id=city_name>${data.address.state_district}</b>, ${data.address.state}, ${data.address.country_code}</span>`;

}