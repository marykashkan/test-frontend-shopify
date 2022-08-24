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
})();
