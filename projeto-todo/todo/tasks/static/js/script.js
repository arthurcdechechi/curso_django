$(document).ready(function() {
    
    var deleteBtn = $(".delete-btn");
    var searchBtn = $("#search-btn");
    var searchForm = $("#search-form");

    $(deleteBtn).on("click", function(e) {

        e.preventDefault();

        var delLink = $(this).attr("href");
        var result = confirm("Tem certeza que quer deletar essa tarefa?");

        if(result) {
            window.location.href = delLink;
        }

    })

    $(searchBtn).click(function() {
        searchForm.submit();
    })

});