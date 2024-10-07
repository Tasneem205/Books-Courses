const chessBoard = function(n, m) {
    let char1 = " ", char2 = "#";
    let strToPrint = "";
    for (let i = 0; i < n; i++) {
        strToPrint = "";
        if (i%2 == 0) {
            char1 = " ";
            char2 = "#";
        } else {
            char1 = "#";
            char2 = " ";
        }
        for (let j = 0; j < m; j++) {
            if (j%2 == 0)
                strToPrint += char1;
            else
                strToPrint += char2;
        }
        console.log(strToPrint);
    }
}

chessBoard(8, 8);