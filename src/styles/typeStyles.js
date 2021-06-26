export default function getTypeStyle(type) {
    let color = '';
    switch (type) {
        case 'grass':
            color = '#9bcc50';
            break;
        case 'poison':
            color = '#b97fc9';
            break;
        case 'fire':
            color = '#fd7d24';
            break;
        case 'flying':
            color = '#3dc7ef';
            break;
        case 'water':
            color = '#4592c4';
            break;
        case 'bug':
            color = '#729f3f';
            break;
        case 'normal':
            color = '#a4acaf';
            break;
        case 'electric':
            color = '#eed535';
            break;
        case 'ground':
            color = '#ab9842';
            break;
        case 'fairy':
            color = '#fdb9e9';
            break;
        case 'fighting':
            color = '#d56723';
            break;
        case 'psychic':
            color = '#f366b9';
            break;
        case 'rock':
            color = '#a38c21';
            break;
        case 'steel':
            color = '#9eb7b8';
            break;
        case 'ghost':
            color = '#7b62a3';
            break;
        case 'ice':
            color = '#51c4e7';
            break;
        case 'dragon':
            color = '#f16e57';
            break;
        default:
            color = '#000';
            break;
    }
    return color;
};