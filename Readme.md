 npx sequelize-cli db:seed:all
 sequelize-auto -o "./models" -d indice_dev_2 -h 127.0.0.1 -u cliu56 -x root -e postgres
 npx sequelize-cli db:migrate --migrations-path=./migrations_v2  
 npx sequelize-cli db:seed:undo:all