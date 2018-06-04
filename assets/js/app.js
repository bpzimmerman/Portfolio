$(document).ready(() => {

  const navClass = () => {
    let scrl = $(window).scrollTop();
    let wid = $(window).width();
    if (scrl >= 56 || wid <= 576) {
      toggleNavClass("add");
    } else {
      toggleNavClass("remove");
    };
  };

  const toggleNavClass = (state) => {
    switch (state) {
      case "add":
        $(".scroll").addClass("bg-primary");
        break;
      case "remove":
        if ($(window).scrollTop() < 56 && $(window).width() > 576) {
          $(".scroll").removeClass("bg-primary");
        };
        break;
    };
  };

  $(window).scroll(() => {    
    navClass();
  });

  $(window).resize(() => {
    navClass();
  });

  navClass();

  GitHubActivity.feed({
    username: "bpzimmerman",
    selector: "#feed",
    limit: 5
  });

});