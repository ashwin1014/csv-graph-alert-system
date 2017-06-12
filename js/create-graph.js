/*------------------------------------------------------*/
//var choice = prompt("1.All Products\n2.SW\n3.Bugs\n");


function parseData(createGraph) {
    //  Papa.parse(url,{
    Papa.parse("../data.csv", {
        download: true,
        complete: function(results) {
            console.log(results.data);
            createGraph(results.data);
        }
    });

}


function createGraph(data) {
    // var product  = [];
    // var product1 = [];
    // var product2 = [];
    // var product3 = [];
    // var product4 = [];

    var priLst = [];
    var prdNmLst = [];

    var chrtColumns = [];
    var chrtClmn = [];
    var cellValue = 0;
    if (data != undefined && data.length) {

        /*Exclude  first cell value and get product name*/
        for (var i = 1; i < data.length; i++) {
            if (data[i][0] != undefined) {
                prdNmLst.push(data[i][0]);
            }
        }
        /*Exclude first cell value and fetch bug priority list*/
        for (var i = 1; i < data[0].length; i++) {
            if (data[0][i]) {
                priLst.push({ prdNm: data[0][i], prdIndx: i });
            }
        }

        for (var pIndx = 0; pIndx < priLst.length; pIndx++) {
            var prdItem = priLst[pIndx];
            chrtClmn = [];
            for (var i = 0; i < data.length; i++) {

                cellValue = data[i][prdItem.prdIndx];
                if (cellValue != undefined) {
                    chrtClmn.push(cellValue == "" ? 0 : cellValue);
                }
            }
            chrtColumns.push(chrtClmn);

        }

    }


    // for (var i = 0; i < data.length; i++) {
    //     if (data[i][1])
    //         product1.push(data[i][1]);
    // }


    // for (var i = 0; i < data.length; i++) {
    //     if (data[i][2])
    //         product2.push(data[i][2]);
    // }

    // for (var i = 0; i < data.length; i++) {
    //     if (data[i][3])
    //         product3.push(data[i][3]);
    // }
    // for (var i = 0; i < data.length; i++) {
    //     if (data[i][4])
    //         product4.push(data[i][4]);
    // }

    // var columns = [];

    // columns.push(product1);
    // columns.push(product2);
    // columns.push(product3);
    // columns.push(product4);



    var chart = c3.generate({

        bindto: '#chart',
        data: {
            columns: chrtColumns

        },
        axis: {

            x: {
                type: 'category',
                categories: prdNmLst
            }
        },
        zoom: {
            enabled: true
        },
        legend: {
            position: 'right'
        },

        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        }


    });
}

parseData(createGraph);


d3.text("data.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("#range")
        .append("table")

    .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")

    .selectAll("td")
        .data(function(d) { return d; }).enter()
        .append("td")
        .text(function(d) { return d; });
});