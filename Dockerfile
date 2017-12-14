from gcr.io/tensorflow/tensorflow:latest
RUN pip install Flask numpy requests
ENV FLASK_APP=main.py
