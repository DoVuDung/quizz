const express = require('express');
const router = express.Router();

const docxReaderController = require('../../controllers/tools/docx-reader');

router.post('', docxReaderController.docxReader);

module.exports = router;