SET location=%CD%
cd C:\xampp\
start /MIN apache_start.bat
cd mysql\bin
mysql -u root personal_website < %location%\personal.sql
exit 0 