# BMEFinal-Project-WEBAPP
WebApp for melanoma detection

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