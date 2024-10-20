document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.toggle input');
    const bowl = 'These are my first ever bowls that I am proud of making after spending the summer practicing on the wheel at my local pottery studio. I went with my mom and mine are the green ones on the right.'
    const plain_bowl = 'These are the first bowls I\'ve made that I\'m really proud of. I spent the summer practicing on the pottery wheel at my local studio. I went with my mom, and mine are the green ones on the right.'
    const miffy = 'These are dolls my boyfriend sent me a screenshot of because they reminded him of me, especially because I love miffy.'
    const plain_miffy = 'My boyfriend sent me a picture of these dolls because they reminded him of me. It is because I like Miffy.'
    const picnic = 'This is a special moment to me because my friends from school visited me in San Diego, and we spent our days going around the city (this was a picnic)'
    const plain_picnic = 'This is a special moment for me because my school friends came to visit me in San Diego. We spent our days exploring the city. This photo was from a picnic we had.'

    if (toggle) {
        toggle.addEventListener('click', () => {
            const onOff = toggle.parentNode.querySelector('.onoff');
            const newScript1 = toggle.parentNode.querySelector('.script1')
            const newScript2 = toggle.parentNode.querySelector('.script2')
            const newScript3 = toggle.parentNode.querySelector('.script3')
            onOff.textContent = toggle.checked ? 'Plain Language Description' : 'Regular Description';
            newScript1.textContent = toggle.checked ? plain_bowl : bowl;
            newScript2.textContent = toggle.checked ? plain_miffy : miffy;
            newScript3.textContent = toggle.checked ? plain_picnic : picnic;
        });
    } else {
        console.error('Element not found');
    }
});
