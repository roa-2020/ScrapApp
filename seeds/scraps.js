
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scraps').del()
    .then(function () {
      // Inserts seed entries
      return knex('scraps').insert([
        {
          id: 1, 
          scrap_name: 'Hot Chips',
          category: 'Food',
          description: 'Very Hot Chips, but they are half eaten',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: '',
          user_id: 1,
          collected: true,
        },
        {
          id: 2, 
          scrap_name: 'Banana',
          category: 'Food',
          description: 'Green Banana (the best)',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: '',
          user_id: 1,
          collected: false,
        },
        {
          id: 3, 
          scrap_name: 'Couch',
          category: 'Furniture',
          description: '50 year old couch - mint condition',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/2611/2611026.svg',
          address: '',
          user_id: 2,
          collected: false,
        },
        {
          id: 4, 
          scrap_name: 'Basketball Hoop',
          category: 'Sports',
          description: 'Basketball Hoop - only used once',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/2742/2742640.svg',
          address: '',
          user_id: 2,
          collected: true,
        },
      ]);
    });
};
