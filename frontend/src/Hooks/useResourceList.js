const getresourceList = (resource) => {
    switch (resource) {
        case 'Animals':
            return 'animalsData';

        case 'Fish':
            return 'fishData';

        case 'Crops':
            return 'cropsData';

        case 'Minerals':
            return 'mineralsData';

        case 'Artifacts':
            return 'artifactsData';

        case 'Forage':
            return 'forageData';

        default:
    }
};

export default getresourceList;
