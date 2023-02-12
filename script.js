$(document).ready(function () {
  $.ajax({
    url: "https://v1.nocodeapi.com/josemartin357/instagram/dvrmRtWSHVFlOPeX?limit=3",
    method: "get",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log(data.data);
      for (x in data.data) {
        console.log(data.data[x].caption);
        $(".posts-container").append(
          '<div class="cards-wrap"><a class="cards" href="' +
            data.data[x].permalink +
            '"><img src="' +
            data.data[x].media_url +
            '"/></a></div>'
        );
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
});
