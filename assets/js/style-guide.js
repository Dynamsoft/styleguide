let aTags
let scrollTops = []

window.onload = function () {
  aTags = Array.from($("#anchorNav").find("a"))
  aTags.forEach((item) => {
    let temp = $(item.getAttribute("href"))[0].offsetTop
    scrollTops.push(temp)
  })

  $("#anchorNav a").click(function () {
    $root.animate({
      scrollTop: $($.attr(this, "href")).offset().top,
    }, 500)

    return false
  })
}

$(window).scroll(function () {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

  if (Number(scrollTop) >= 200) {
    $("#sideBar").css("position", "fixed")
    $("#sideBar").css("top", "0px")
  } else {
    $("#sideBar").css("position", "absolute")
    $("#sideBar").css("top", "0")
  }

  for (let i = 0; i < scrollTops.length; i++) {
    if (scrollTop >= scrollTops[i] &&
      (scrollTop <= scrollTops[i + 1] || !scrollTops[i + 1])) {
      addClassOn(i)
      break
    }
  }
})

function addClassOn(index) {
  $("#anchorNav a").removeClass("on")
  aTags[index].classList.add("on")
  return
}

var $root = $("html, body")
