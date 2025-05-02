// Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const commentsFilePath = path.join(__dirname, 'comments.json');         

