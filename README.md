# markd

## app with showdown

Install showdown:
npm install showdown

You can use either nodejs files or the cli version

curl -s https://raw.githubusercontent.com/indykite/jarvis-sdk-web/master/README.md -O

showdown makehtml -i README.md -o sdk-web.html

rm README.md

or:

showdown makehtml --input foo.md: Reads from the file foo.md (and outputs to stdout)
