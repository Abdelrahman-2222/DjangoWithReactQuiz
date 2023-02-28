"""
Represents an answer to a question.

Attributes:
    question (Question): The question that this answer is associated with.
    text (str): The text of the answer.
    is_correct (bool): Indicates whether this answer is correct or not.
"""

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Quiz Model: The Quiz model will contain the following fields:
# Title: The title of the quiz.
# Description: A brief description of the quiz.
# Time Limit: The time limit for taking the quiz (in minutes).
# Difficulty: The difficulty level of the quiz (e.g. easy, medium, hard).

# Question Model: The Question model will contain the following fields:
# Quiz: A foreign key to the quiz that the question belongs to.
# Text: The text of the question.
# Type: The type of question (e.g. multiple-choice, true/false, fill-in-the-blank).
# Order: The order of the question within the quiz.

# Answer Model: The Answer model will contain the following fields:
# Question: A foreign key to the question that the answer belongs to.
# Text: The text of the answer.
# Is Correct: A Boolean field indicating whether the answer is correct or not.

QUIZ_DIFFICULTY = [
    ('E', 'Easy'),
    ('M', 'Medium'),
    ('H', 'Hard'),
]

QUESTION_TYPES = [
    ('MCQ', 'Multiple Choice'),
    ('TF', 'True/False'),
    ('FITB', 'Fill in the Blank'),
]


class Question(models.Model):
    quiz = models.ForeignKey('Quiz', on_delete=models.CASCADE)
    text = models.TextField()
    type = models.CharField(max_length=255, choices=QUESTION_TYPES)
    order = models.IntegerField()

    # def __str__(self):
    #     return self.text
    
    def __str__(self):
        return str(self.text)


class Quiz(models.Model):
    owner = models.ForeignKey(User, related_name='quizzes', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    time_limit = models.IntegerField()
    difficulty = models.CharField(max_length=255, choices=QUIZ_DIFFICULTY)
    questions = models.ManyToManyField(Question, related_name='quizzes')

    def __str__(self):
        return self.title


class Answer(models.Model):
    """
    Represents an answer to a question.

    Attributes:
        question (Question): The question that this answer is associated with.
        text (str): The text of the answer.
        is_correct (bool): Indicates whether this answer is correct or not.
    """
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField()
    is_correct = models.BooleanField()

    def __str__(self):
        return str(self.text)



