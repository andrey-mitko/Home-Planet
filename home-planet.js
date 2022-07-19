const eyesTimeline = gsap.timeline({
    repeat: -1,
})

const eyeballs = document.querySelectorAll('path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5')

eyesTimeline
    .set(eyeballs, {
        y: 0,
    })
    .to(eyeballs, {
        y: 7,
        duration: 0.25,
        delay: 2,
        stagger: 0.25
    })
    .to(eyeballs, {
        y: 0,
        duration: 0.25,
        delay: 4
    })