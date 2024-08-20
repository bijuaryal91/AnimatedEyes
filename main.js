document.querySelector('body').addEventListener("mousemove",eyeBall);

function eyeBall(event)
{
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x,event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) +90;

        eye.style.transform = "rotate("+rot+"deg)";
    });
}   


document.querySelector('.face').addEventListener('mouseenter', function() {
    const mouth = document.querySelector('.mouth');
    mouth.classList.add('mouth-2');

    const sound = new Audio('./babitaji.mp3');
    sound.play();
});

document.querySelector('.face').addEventListener('mouseleave', function() {
    const mouth = document.querySelector('.mouth');
    mouth.classList.remove('mouth-2');
});
