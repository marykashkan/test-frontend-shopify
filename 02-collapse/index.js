(function () {
  const collapsibleButton = document.querySelector(".collapsible__button");
  const collapsibleHidden = document.querySelector(
    ".collapsible__action--hidden"
  );
  const collapsibleContent = document.querySelector(".collapsible__content");
  const collapsibleVisible = document.querySelector(
    ".collapsible__action--visible"
  );
  let isHide = true;

  window.addEventListener("load", () => {
    collapsibleVisible.style.display = "none";
    collapsibleContent.style.display = "none";
    isHide = true;
  });

  function makeCollapse() {
    if (isHide === true) {
      collapsibleVisible.style.display = "block";
      collapsibleContent.style.display = "block";
      collapsibleHidden.style.display = "none";
      isHide = false;
    } else {
      collapsibleVisible.style.display = "none";
      collapsibleContent.style.display = "none";
      collapsibleHidden.style.display = "block";
      isHide = true;
    }
  }

  collapsibleButton.addEventListener("click", makeCollapse);

  var buttonColorAnimation = [
    {
      color: "#000000",
      width: "340px",
      letterSpacing: "3px",
      height: "50px",
      fontSize: "18px",
      fontWeight: "bold",
      boxShadow: "0 0 40px rgba(0,0,0)",
    },
    {
      color: "#000000",
      width: "340px",
      letterSpacing: "3px",
      height: "50px",
      fontSize: "24px",
      fontWeight: "bold",
      boxShadow: "0 0 40px rgba(0,0,0)",
    },
    {
      color: "#000000",
      width: "340px",
      letterSpacing: "3px",
      height: "50px",
      fontSize: "18px",
      fontWeight: "bold",
      boxShadow: "0 0 40px rgba(0,0,0)",
    },
  ];

  var buttonTiming = {
    duration: 4000,
    iterations: Infinity,
  };

  collapsibleButton.animate(buttonColorAnimation, buttonTiming);

  var collapsContainerAnimation = [
    { marginTop: "400px", marginLeft: "700px" },
    { marginTop: "400px", marginLeft: "700px" },
  ];

  var collapsContainerTiming = {
    duration: 3000,
    iterations: Infinity,
  };

  document
    .querySelector(".collapsible")
    .animate(collapsContainerAnimation, collapsContainerTiming);

  var collapsContentAnimation = [
    {
      color: "#8100DB",
      fontSize: "30px",
      marginLeft: "-400px",
      marginTop: "100px",
    },
    {
      color: "#ffffff",
      fontSize: "45px",
      marginLeft: "-400px",
      marginTop: "100px",
    },
    {
      color: "#00DB68",
      fontSize: "30px",
      marginLeft: "-400px",
      marginTop: "100px",
    },
  ];

  var collapsContentTiming = {
    duration: 12000,
    iterations: Infinity,
  };

  collapsibleContent.animate(collapsContentAnimation, collapsContentTiming);
})();
