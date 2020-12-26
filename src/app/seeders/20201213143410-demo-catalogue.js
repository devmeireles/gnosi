module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'catalogues',
      [
        {
          title: "Go: The Complete Developer's Guide (Golang)",
          description:
            'Build massively concurrent programs with Go Routines and Channels Learn the advanced features of Go Understand the differences between commonly used data structures Prove your knowledge with dozens of included quiz questions Apply Interfaces to dramatically simplify complex programs Use types to future-proof your code and reduce the difficulty of refactors',
          price: 20.0,
          owner_id: 2,
          media_id: 1,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'catalogues',
      [
        {
          title: 'The Serverless Framework with Node.js & AWS',
          description:
            'By the end of the course you will know how to set up, and debug, serverless projects. You will also be able to build REST APIs, web scrapers, and S3 listeners.',
          price: 50.0,
          owner_id: 2,
          media_id: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'catalogues',
      [
        {
          // eslint-disable-next-line no-script-url
          title: 'JavaScript: The Advanced Concepts',
          description:
            'Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers',
          price: 35.0,
          owner_id: 2,
          media_id: 3,
          created_at: Date.now(),
          updated_at: Date.now(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
