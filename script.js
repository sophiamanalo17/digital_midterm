document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.toggle input');
    const toggle2 = document.querySelector('.toggle2');
    const bowl = 'These are my first ever bowls that I am proud of making after spending the summer practicing on the wheel at my local pottery studio. I went with my mom and mine are the green ones on the right.'
    const plain_bowl = 'These are the first bowls I\'ve made that I\'m really proud of. I spent the summer practicing on the pottery wheel at my local studio. I went with my mom, and mine are the green ones on the right.'
    const miffy = 'These are dolls my boyfriend sent me a screenshot of because they reminded him of me, especially because I love miffy.'
    const plain_miffy = 'My boyfriend sent me a picture of these dolls because they reminded him of me. It is because I like Miffy.'
    const picnic = 'This is a special moment to me because my friends from school visited me in San Diego, and we spent our days going around the city (this was a picnic)'
    const plain_picnic = 'This is a special moment for me because my school friends came to visit me in San Diego. We spent our days exploring the city. This photo was from a picnic we had.'
    const bowl_alt_reg = 'Four green ceramic bowls that are laid out in a square shape, with each bowl at one corner.'
    const bowl_alt_plain = 'Four green ceramic bowls are on a table. They are set on the table in the shape of a square. There is a bowl on each corner of the picture.'
    const miffy_alt_reg = 'Bunny wedding dolls named miff in a plastic container. The bride has flowers in her hand and hair. The groom has a gray tuxedo on.'
    const miffy_alt_plain = 'Bunny dolls wearing a tuxedo and wedding dress are in an unopened package. Theirs names are Miffy. The bride has flowers in her hair. The groom is weaing a grey tuxedo.'
    const picnic_alt_reg = 'Two figures, one male and one female sitting on top of a hill that overlooks a coastline and mountains. There is a person in a lawn chair sitting in front of them.'
    const picnic_alt_plain = 'There are two people in frame. There is a male on the bottom left of the frame and a woman on the bottom right. They are sitting on top of a hill. This hill overlooks the water and mountains. A person in alawn chair sits in front of them.'


    if (toggle) {
        toggle.addEventListener('click', () => {
            const onOff = toggle.parentNode.querySelector('.onoff');
            const newScript1 = toggle2.parentNode.querySelector('.script1')
            const newScript2 = toggle2.parentNode.querySelector('.script2')
            const newScript3 = toggle2.parentNode.querySelector('.script3')
            const bowl_alt = toggle2.parentNode.querySelector('.bowls')
            const miffy_alt = toggle2.parentNode.querySelector('.miffy')
            const picnic_alt = toggle2.parentNode.querySelector('.picnic')
            onOff.textContent = toggle.checked ? 'Plain Language Description' : 'Regular Description';
            newScript1.textContent = toggle.checked ? plain_bowl : bowl;
            newScript2.textContent = toggle.checked ? plain_miffy : miffy;
            newScript3.textContent = toggle.checked ? plain_picnic : picnic;
            bowl_alt.alt = toggle.checked ? bowl_alt_plain : bowl_alt_reg;
            miffy_alt.alt = toggle.checked ? miffy_alt_plain : miffy_alt_reg;
            picnic_alt.alt = toggle.checked ? picnic_alt_plain : picnic_alt_reg;
        });
    } else {
        console.error('Element not found');
    }
});
