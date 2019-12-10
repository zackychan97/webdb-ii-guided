// migration desribes the changes to apply to the database

// the up function describes what will be done

exports.up = function(knex) {
    //always return the call to knex.schema

    return knex.schema.createTable('veggies', tbl => {
        tbl.increments();

        // .unique() is a constraint, aka a rule we define to 
        //    protect against invalid data
        tbl.string('name', 255)
            .notNullable()
            .unique()
            .index() // makes searching for vegetables using this column faster
        tbl.boolean('like_it').defaultTo(false)


    })
  
};


// the down function describes how to revert the changes (like undo for the schema)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies')
};
