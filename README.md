# AI-GRADER

## OVERVIEW

Grading students' answer sheets using Microsoft Azure's Computer Vision (OCR), and Natural Language Processing services (KeyPhrase Extraction and Sentiment Analysis)

### PROJECT DESCRIPTION

A grading system that uses Artificial Intelligence to identify scanned student answer booklets, categorize the identified text, and give a grade based on a provided scoring guide.

### USE CASES

#### FOR THE LECTURERS/GRADERS

- Upload scanned answer booklets and marking guide and AI grades based on provided scoring

#### FOR THE STUDENTS

- View result of graded tests

### TECHNOLOGIES

- JavaScript
- React
- MUI
- Styled-components
- Project Management: <https://trello.com/b/kYooIU88/ai-grader>

### HOW IT WORKS

- Users input scanned/photographed documents (answer booklets) into the system.
- Azure's OCR Read API identifies text

![read api explanation](https://user-images.githubusercontent.com/30049719/126845493-309913a8-48d7-4626-83c1-c6820d639768.PNG)

- Key phrase etraction is used to extract key phrases.
- The system matches key phrases from answer booklets to key phrases from marking guides and scores based on that comparison.

### QUESTIONS

- How do we add custom key phrases so we can extract key phrases that may not be picked up automatically by the azure service.
- Would the marking guide be provided as a set of key points/phrases to be used by the system's "comparison mechanism" or would it be put into the system for the OCR to identify key phrases contained therein?
- How would grading be done? Is it that when matching key phrases are identified, they would just be a given a "correct" or "wrong' score?
- _There would need to be a way to determine level of correctness so that students that only got part of a question correct can be given some marks out of the total achievable marks(e.g. 3/5) instead of a generic "correct" or "wrong" score._

### ADDITIONAL FEATURES

- The system may later be developed to monitor performance in certain courses and display results in insightul format for various analytical uses.
- The system may later be able to search for answers to questions on the internet and hence provide more accurate grading.

### POSSIBLE LIMITATIONS

System can currently only grade simple written text. Cannot grade diagrams or math
Some Identified possible hinderances to the project include:

- Ability of OCR to identify illeligible handwriting
- Accuracy of system in correctly matching answer sheet key phrases to correct (marking guide) key phrases

### RELEVANT LINKS

- <https://docs.microsoft.com/en-gb/learn/modules/read-text-computer-vision/>
- <https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-keyword-extraction>
- <https://docs.microsoft.com/en-us/azure/search/cognitive-search-skill-keyphrases>
- <https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/vision-api-how-to-topics/call-read-api>
- <https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/quickstarts/client-libraries-rest-api?tabs=version-3-1&pivots=programming-language-javascript#key-phrase-extraction>
- <https://www.npmjs.com/package/@azure/ai-text-analytics>
- <https://github.com/Azure-Samples/cognitive-services-quickstart-code/blob/master/javascript/ComputerVision/ComputerVisionQuickstart.js>
