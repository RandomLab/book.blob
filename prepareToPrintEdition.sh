#!/bin/bash
sourceFile="$1"

echo "\documentclass{article}
\usepackage{pdfpages}
\usepackage[paperwidth=152mm,paperheight=228mm]{geometry}
\usepackage[cam,a4,center,pdftex]{crop}

\begin{document}

\includepdf[pages=-]{$sourceFile}

\end{document}"> ready_to_print.tex

pdflatex ready_to_print.tex
