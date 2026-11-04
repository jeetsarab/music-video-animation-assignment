const animateButton = document.getElementById("animateButton");
const animationStage = document.getElementById("animationStage");
const musicNote = document.getElementById("musicNote");

if (animateButton && animationStage && musicNote) {
    let animationTimer;

    animateButton.addEventListener("click", function () {
        clearInterval(animationTimer);

        let position = 10;
        let movingDown = true;
        musicNote.style.left = position + "px";
        musicNote.style.top = "32px";

        animationTimer = setInterval(function () {
            position += 4;
            musicNote.style.left = position + "px";

            if (movingDown) {
                musicNote.style.top = "48px";
            } else {
                musicNote.style.top = "20px";
            }

            movingDown = !movingDown;

            const finishLine = animationStage.clientWidth - musicNote.offsetWidth - 10;

            if (position >= finishLine) {
                clearInterval(animationTimer);
            }
        }, 40);
    });
}
