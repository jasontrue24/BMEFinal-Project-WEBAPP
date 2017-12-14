# BMEFinal-Project-WEBAPP
WebApp for Melanoma Detection

The Final RFC is at: https://docs.google.com/document/d/1eoxXDwa1_I3t4VVTowWZwwhW2bRZwS_VejfBKbL90DE/edit#heading=h.ht3dizgas7v2
The Final write up is at: https://docs.google.com/document/d/1cMbTUNP9RyRo2y6reql4GO85TpMgJRyiLgpHV6Eiu_U/edit

To perform classification through http://vcm-1838.vm.duke.edu/, please upload a possibly melanocytic image at the upload prompt.
Classification will run and be output at the result region below.

There are two versions of frontend. They are under real_frintend_Gina branch and frontend_Blake branch. The easier, minimal version of the frontend successfully deploys the communication between frontend and backend.To test it, pull the code from frontend_Blake branch and run the docker-compose on vm, and at the same time, pull the code from master and run the docker-compose on vm. It should return a string in the format of "The chance of ~", indicating the percentage of the skin lesion being malignant/non-malignant in respect to developing melanoma. A video on the master branch (IMG_2594.mov) demonstrates this.

More sophisticated, final version of the frontend work is in real_frontend_Gina branch, and it was developed using React.js and React-Bootstrap. Currently there seems to be an unidentifiable issue that prevents the frontend from communicating with the backend. This frontend work is in real_frontend_Gina branch. It has three tabs at the top of the page that the user can individually click and will be scrolled to the corresponding section of the page. A screen recording of it has been uploaded on the master branch (Gina_Frontend_Finished.mov) that can be downloaded to be viewed.
