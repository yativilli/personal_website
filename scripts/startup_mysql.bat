cd C:\xampp\
start /MIN .\mysql_start.bat
cd mysql\bin
SET location=%CD%
mysql -u root personal_website < %location%\personal.sql
exit 0 