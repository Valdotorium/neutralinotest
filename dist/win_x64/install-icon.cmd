@echo off
set TOOL="c:\Program Files (x86)\Resource Hacker\ResourceHacker.exe"
if exist %TOOL% (
    %TOOL% -open Neutralinotest.exe -save Neutralinotest.exe -action addskip -res newIcon.ico -mask ICONGROUP,MAINICON,
    del newIcon.ico 
    del install-icon.cmd
)
else (
    echo "Please install 'Resource Hacker' first."
    echo "Press any key ..."
    pause
    start "" "https://www.angusj.com/resourcehacker/"
)
