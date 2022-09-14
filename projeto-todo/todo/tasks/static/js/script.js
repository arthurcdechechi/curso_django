$(document).ready(function() {
    
    var baseUrl = window.location.origin;
    var deleteBtn = $(".delete-btn");
    var searchBtn = $("#search-btn");
    var searchForm = $("#search-form");
    var filter_var = $("#filter");

    $(deleteBtn).on("click", function(e) {

        e.preventDefault();

        var delLink = $(this).attr("href");
        var result = confirm("Tem certeza que quer deletar essa tarefa?");

        if(result) {
            window.location.href = delLink;
        }

    });

    $(searchBtn).click(function() {
        searchForm.submit();
    });
    
    $(filter_var).change(function() {
        var filter = $(this).val();
        console.log(filter);
        window.location.href = baseUrl + "?filter=" + filter;
    });
    
});