const eyesTimeline = gsap.timeline({
    repeat: -1,
})
const eyeballs = document.querySelectorAll('path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6')
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


const hatTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 4,
})
const hat = document.querySelector('g#hat');
hatTimeline
    .set(hat, {
        y: 0,
    })
    .to(hat, {
        y: -50,
        rotation: -10,
        duration: 0.25,
        delay: 1,
    })
    .to(hat, {
        y: 0,
        rotation: 0,
        duration: 0.5,
        delay: 0.1,
    })


const leftArmTimeline = gsap.timeline({
    repeat: -1,
})
const rightArmTimeline = gsap.timeline({
    repeat: -1,
})
const leftArm = document.querySelector('#left-arm');
const rightArm = document.querySelector('#right-arm');

leftArmTimeline
    .set(leftArm, {
        rotation: 0,
    })
    .to(leftArm, {
        rotation: 20,
        duration: 0.25,
        delay: 2
    })
    .to(leftArm, {
        rotation: 0,
        delay: 2,
        duration: 0.25,
    })
rightArmTimeline
    .set(rightArm, {
        rotation: 0,
    })
    .to(rightArm, {
        rotation: -20,
        duration: 0.25,
        delay: 3
    })
    .to(rightArm, {
        rotation: 0,
        delay: 2,
        duration: 0.25,
    })

