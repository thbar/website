# ETL

## TODOs

- Add index to users.uid for Erik's usersnames script

This is how to do v2 - v3 ETL

0. Change config/database.yml
1. Load data into mysql

```bash
mysql -u root -e "drop database website_etl2"
mysql -u root -e "create database website_etl2"
mysql -u root website_etl2 < ../dump-for-v3-etl.sql
```

2. Run ETL

```bash
rails r 'require_relative Rails.root.join("lib/v2_etl/migrate"); V2ETL::Migrate.call'
```

3. Fix up Nim
4. Rename reasonml (https://github.com/exercism/reasonml/pull/135)
5. Import GitHub Usernames
6. `bundle exec rake sync_pull_requests_reputation`
7. `bundle exec rake sync_authors_and_contributors`
8. Iteration.find_each {|i|GenerateIterationSnippetJob.perform_later(i)}
