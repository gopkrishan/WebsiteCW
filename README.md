# Coursework Assignment - Hotel Website
#### School of Computing Science, University of East Anglia
---
The task is to design a website for an independent hotel. It should include images of the hotel, room rates,
a description of the facilities, directions to get there, contact details, local activities and attractions. You
do not need to implement any booking facilities in this assignment. You should include facilities (an
electronic visitor book) to allow comments to be left.
Your design should envisage an important use the site is to be linked to and from a hotel booking agency.
The site should work well on mobile devices.

  - 1. Core functionality:
(a) A gallery capable of displaying thumbnails and larger images;
(b) Descriptions of the hotel and of facilities of the local area;
(c) Pages to read and display comments.
  - 2. Additional functionality:
When you have completed the core functionality listed above, you can add facilities dynamically create
and modify content using JavaScript. For instance, if you have stored the image captions as the alt text in
the <img> tag, this can be retrieved and displayed with JavaScript. Much more is possible and your task
in this section is to make good use of HTML5 capabilities, combined with JavaScript to give a good user
experience. 
  - 3. Documentation:
(a) Good quality comments in your code;
(b) A review, including suitable screen shots, etc. of similar sites which have feature which you have
found helpful or influential (negative or positive) in your design;
(c) A description of the tests done on different browsers and mobile devices (max. 2 sides);
(d) A description of the main design decisions and limitations of your site, primarily aimed at future
developers or maintainers of the site
  - 4. All the HTML code must be validated to HTML5, with all the style elements in external CSS stylesheets
(any in-line style tags or formatting attributes will be penalised); the JavaScript needed for the third part
of the assignment should all be in external scripts.

# Coursework Assignment - Assembly Language Programming
#### School of Computing Science, University of East Anglia
---
The purpose of this assignment is to help learn about computer architecture, assembly language programming, and testing strategies. It also will give you the opportunity to learn more about the GNU/Unix programming tools, especially vi, bash, make, gcc, and gas for C and assembly language programs.

  - Exercise 1a: Test mywc.c: Write a makefile to build mywc.c and then write a bash script named results.sh that acceptsa flag -r followed by the name of a command to run and a flag -f followed by a list offile names to print. e.g. results.sh -r "./mywc < proverb.txt" -f "results.sh mywc.c makefile"
  - Exercise 1b: Translate to Assembly Language: Translate mywc.c into assembly language, thus creating a file named mywc.s. If necessary, it is acceptable to use global (i.e. bss section or data section) variables in mywc.s. Translate the C code statement-by-statement and document the code by including the original source code statements as comments.
  - Exercise 2a: Add BigInt Objects Using C Code: Write a makefile to build the program with no optimization and then use the bash script.
  - Exercise 2b: Add BigInt Objects Using C Code with Compiler Optimization: Write a makefile to build the program using optimization. Specifically, specify the -D NDEBUG option so the preprocessor disables the assert macro, and the -O3 option so the compiler generates optimized code. 
  - Exercise 2c: Add BigInt Objects Using Assembly Language Code: Use the AARM32 A32 ARM instruction set. Manually translate the C code in the bigintadd.c file into assembly language, thus creating the file bigintadd.s. You need not translate the code in other files into assembly language.
  - Exercise 2d: Add BigInt Objects Using Optimized Assembly Language Code: Use the AARM32 A32 or AARM32 T32 ARM instruction set. Manually optimize assembly language code in bigintaddopt.s, thus creating the file bigintaddopt.s.

# Notes
---
I decided to try and use Git (and GitHub) during my courseworks in order to get more accustomed to the revision/versioning system. During my next projects and courseworks, I will try to make better assumptions and comments during my commits.



