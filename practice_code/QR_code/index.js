import qrcode from "qrcode";

let data = {
    "url": "https://google.com"
}

let stJson = JSON.stringify(data);

// qrcode.toString(stJson, {type: "terminal"}, (error, code) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log(code);
// });

qrcode.toDataURL(stJson, (error, code) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(code);
});

// qrcode.toFile('qrcode.png', stJson, (error) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
// });