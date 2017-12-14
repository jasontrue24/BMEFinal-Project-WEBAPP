# BMEFinal-Project-WEBAPP
WebApp for Melanoma Detection

To perform classification through /classify, place a possible melanoma image
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

The frontend was developed using React.js and React-Bootstrap, but currently there seems to be an unidentifiable issue that prevents the frontend communicating with the backend. The rough, minimal version of the frontend successfully deploys the communication, so we decided to show both of the versions. The complete frontend work is in real_frontend_Gina branch. It has three tabs at the top of the page that the user can individually click and will be scrolled to the corresponding section of the page. A screen recording of it has been uploaded on the master branch that can be downloaded to be viewed.
