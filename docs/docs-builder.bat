start cmd /k jekyll b
rd /s /q _site
rd /s /q docs
pause
move /-y _site docs