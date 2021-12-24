$(document).ready(function () {
  $("#hide").click(function () {
    $("#example").hide()
  })

  $("#show").click(function () {
    $("#example").show()
  })

  $("#fade").click(function () {
    $("#example").fadeOut("slow").fadeIn("slow")
  })

  $("#slide").click(function () {
    $("#example").slideUp().slideDown(3000)
  })

  $("#animate-me").click(function () {
    $("#example").animate({
      left: "250px",
    })
  })

  $("#animate-revert").click(function () {
    $("#example").animate({
      left: "0px",
    })
  })

  $("#get-val").click(function () {
    alert($("#example").attr("id"))
  })

  $("#get-dim").click(function () {
    alert($("#example").width())
  })
})
