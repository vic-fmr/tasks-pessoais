let token = "";

fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&client_id=6334ac937ada402ca32a297681d34fa8&client_secret=adf99fbf8f8e42af96bd33b0553270f1",
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        token = data.access_token;
        console.log("token adiquirido com sucesso");
        console.log(data.access_token);
        getRadiohead();
    })
    .catch((error) => console.log(error));

function getRadiohead() {
    fetch("https://api.spotify.com/v1/albums", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((reponse) => reponse.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
