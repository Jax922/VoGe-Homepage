
## Prerequisites

The VoGe project is built on top of the following technologies:

- [Node.js](https://nodejs.org/en/) (>= 20.0)
- [Python](https://www.python.org/) (>= 3.10)
- [Git](https://git-scm.com/)

Users need to install the above software before using the VoGe project.

## VoGe-Portal

Please clone the [VoGe-Portal]() repository and follow the instructions to install the packages and start the server.

```bash
git clone https://github.com/Jax922/VoGe-Portal.git

cd VoGe-Portal

npm install

```
We use the `firebase` to store the data. You need to deal with the CORS issue as follows:

Before starting the server, you need to install `gsutil` for uploading the data to the Google Cloud Storage. 

> How to install `gsutil`? Please refer to the [official document](https://cloud.google.com/storage/docs/gsutil_install).

There are two instructions to deal with the CORS issue:
- https://stackoverflow.com/questions/37760695/firebase-storage-and-access-control-allow-origin/37765371
- https://firebase.google.com/docs/storage/web/download-files

After dealing with the CORS issue, you can start the server by running the following command:

```bash
npm start
```

## VoGe-Display

Please clone the [VoGe-Display]() repository and follow the instructions to install the packages and start the server.

```bash
git clone https://github.com/Jax922/VoGe-Display.git

cd VoGe-Display

yarn install

yarn watch
```

## VoGe-NLU
We use the `Rasa NLU` to process the natural language in the VoGe project.`Rasa NLU` is an open-source natural language processing tool for intent classification and entity extraction in chatbots. Please refer to the [official document](https://rasa.com/docs/rasa/nlu/).

You can install the `Rasa NLU` by running the following command or refer to the [official document](https://rasa.com/docs/rasa/nlu/).

```bash
conda create -n rasa python=3.10
conda activate rasa
conda install -c conda-forge rasa
```

Next, you need to clone the [VoGe-NLU]() repository and follow the instructions to install the packages and start the server.

```bash
git clone https://github.com/Jax922/VoGe_NLU.git

cd VoGe_NLU

# you need to download the model from the Google Drive into the `models` folder
# https://drive.google.com/file/d/1ab-BIZv7spJtCMdY7YjS3rfujMaC_qWl/view?usp=drive_link
rasa run --enable-api --model ./models/nlu-transformer-2L.tar.gz --cors "*”

```

You can also train your own model by running the following command:

```bash
rasa nlu train
```


