# Pigcasso

This is a React Electron application that uses <a href=https://arxiv.org/abs/1508.06576>this paper</a>'s Convolutional Neural Network
architecture to project style from Picasso's Weeping Woman onto an image of a pig. Tech stack: React Native, 
Electron, Flask, Tensorflow 1.15.
Code: <a href=https://github.com/sandeepmukh/pigcasso-electron>https://github.com/sandeepmukh/pigcasso-electron</a>
Credit: <a href=https://www.tensorflow.org/tutorials/generative/style_transfer>Tensorflow tutorial</a>

Requires Python <= 3.7. GPU not required, but STRONGLY recommmended. 

## Setup

### `pip3 install requirements.txt`

Set up python dependencies

### `yarn install`

Set up javascript dependencies

### `yarn dev` or `yarn build`

Start server either for development or production

### `python3 app.py`

Start flask server. This will load in tensorflow model and get you ready to start accepting requests. 
