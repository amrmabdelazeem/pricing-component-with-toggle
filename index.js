
$(".annualy-price").hide();

const toggleButton = $(".duration-button");
toggleButton.on("click", ()=>{
    toggleButton.toggleClass("node-start");
    if(toggleButton.hasClass("node-start")){
        $(".monthly-price").hide();
        $(".annualy-price").show();
    }else{
        $(".monthly-price").show();
        $(".annualy-price").hide();
    }
});