// MARK: Story Animation
const storyTimeline = gsap.timeline({

})

storyTimeline
    .set("section.house",{
            opacity: 0,
        })
    .set("header",{
        opacity: 0,
    })
    .to("header",{
        opacity: 1,
        
    })
    .to("header",{
        opacity: 0,
        delay: 2
    })
    .to("section.house",{
        opacity: 1,
        
    })

// MARK: - Eyes Animation
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

// MARK: - Hat Animation
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


// MARK: - Arms Animation
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


// MARK: - TV Animation
const tvTimeline = gsap.timeline({
    repeat: -1,
})
let o = 0.75;
const tvLight = document.querySelector('#tv-light');
tvTimeline
    .set(tvLight, {
        opacity: o,
    })
    .to(tvLight, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    })
    .to(tvLight, {
        opacity: o,
    })
    .to(tvLight, {
        opacity: 1,
        duration: 0.4,
        delay: 0.5,
    })
    .to(tvLight, {
        opacity: o,
    })

// MARK: - Label Animation
const label = document.querySelector('div.label');
const links = document.querySelectorAll('svg a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        label.classList.add('is-visible');
        label.innerHTML = link.getAttribute('data-label');

        gsap.to(links, {
            opacity: 0.25,
        })
        gsap.to(link, {
            opacity: 1,
        })
    })
    link.addEventListener('mouseleave', () => {
        label.classList.remove('is-visible');
        label.innerHTML = "Label";

        gsap.to(links, {
            opacity: 1,
        })
       
    })
})

document.addEventListener('mousemove', (e) => {
    label.style.top = e.clientY + 'px';
    label.style.left = e.clientX + 'px';
})