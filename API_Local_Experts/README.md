# README

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->



Command to fully restart DB:

rails db:rollback STEP=10 && rails db:migrate && rails db:reset

TO SHARE, use: rails s -p 4001