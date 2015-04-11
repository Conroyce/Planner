# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
todos = Todo.create([{ task: 'Clean Room', date: '04/12/2015', user: 1}, {task: 'Make Dinner', date: '04/10/2015', user: 2}]);