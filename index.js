/* Store the elements with class "tilt" in elements */
let elements = Array.from(document.getElementsByClassName("fakeIMG"));

/* For each 'item' in the "elements" array... */
elements.forEach((item) => {
  /* Assign each 'item' in the "elements" array to a variable called "el" */
  let el = item;

  /*
   * Add a listener for mousemove event
   * Which will trigger function 'handleMove'
   * On mousemove
   */
  el.addEventListener("mousemove", handleMove);

  /* Get the height and width of the element */
  const height = el.clientHeight;
  const width = el.clientWidth;

  /* Define function a */
  function handleMove(e) {
    /*
     * Get position of mouse cursor
     * With respect to the element
     * On mouseover
     */
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    /*
     * Calculate rotation valuee along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const yRotation = 20 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -20 * ((yVal - height / 2) / height);

    /* Generate string for CSS transform property */
    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    /* Apply the calculated transformation */
    el.style.transform = string;
  }

  /* Add listener for mouseout event, remove the rotation */
  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

});

window.addEventListener("scroll", function () {
  // get all images with picRowImg class
  // scroll margin-top of each image
  // if margin-top is less than 0, set margin-top to 0

  let images = document.getElementsByClassName("picRowImg");
  let picRow = document.getElementsByClassName("picRow");
  let windowHeight = window.innerHeight;
  //save a var for the distance from top of window to top of images[0]
  let elementFromTop = picRow[0].getBoundingClientRect().top;

  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    // add margin-top according to scroll position
    let divider = i * 20;
    let calculate = elementFromTop + divider - (windowHeight / 2);
    if (calculate < divider) {
      image.style.marginTop = divider + "px";
    } else {
      image.style.marginTop = calculate + "px";
    }
  }
});