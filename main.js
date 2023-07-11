
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = parseInt($("#min-p-input").val()) || 0
    let maxPrice = parseInt($("#max-p-input").val()) || 0
    let minRooms = parseInt($("#min-r-input").val()) || 0
    let maxRooms = parseInt($("#max-r-input").val()) || 0
    let immediate = $("#immed-y").is(':checked')
    let parking = $("#park-y").is(':checked')

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, parking, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    const source = $('#result-template').html();
    const template = Handlebars.compile(source);
    
        let newHTML = template({apartments});
        $("#results").append(newHTML);


}

renderApts(apartments) //renders apartments when page loads