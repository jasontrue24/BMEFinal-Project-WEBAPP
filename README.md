# BMEFinal-Project-WEBAPP
WebApp for Melanoma Detection

To perform classification through http://vcm-1006.vm.duke.edu:8000/classify, place a possible melanoma image
called "TESTME.png" into the images folder.
Then use the GET request at /classify, which returns json output in the following
format below (example):
{
    "labels": [
        "non malignant",
        "malignant"
    ],
    "melanocytic": "false",
    "predictions": [
        0.6709560751914978,
        0.329043984413147
    ]
}

There are two versions of frontend. There are under real_frintend_Gina branch and frontend_Blake branch. The easier, minimal version of the frontend can successfully deploys the communication between frontend and backend.To test it, pull the code from frontend_Blake branch and run the docker-compose on vm and at the same time, pull the code from master and run the docker-compose on vm. It should return a string which displays how many chances to get nonmelanoctytic on the web app. A video on the master (IMG_2594.mov) can demonstrate how it is working.

The second, more user-friendly frontend work is in real_frontend_Gina branch, and it was developed using React.js and React-Bootstrap, but currently there seems to be an unidentifiable issue that prevents the frontend communicating with the backend. This frontend work is in real_frontend_Gina branch. It has three tabs at the top of the page that the user can individually click and will be scrolled to the corresponding section of the page. A screen recording of it has been uploaded on the master branch that can be downloaded to be viewed.
