function CalculateTip(amount, rating) {
    switch (rating) {
        case 'Very high quality service':
            return amount * 0.25;
            break;
        case 'High quality service':
            return amount * 0.20;
            break;
        case 'Mediocre quality service':
            return amount * 0.15;
            break;
        case 'Low quality service':
            return 0;
            break;
        default:
            return 'raitng illegible';
    }

}

console.log(CalculateTip(47, 'High quality service'));